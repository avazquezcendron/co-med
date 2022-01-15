import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {firebase_app} from '../../../data/config';
import { deleteList, creatTodoList, updateTask, markAllTask } from '../../../services/todo-firebase.service';
import { toast } from 'react-toastify';
import {ToDo, AddNewTask,AddTask,Close} from '../../../constant'

const TodoFirebase = () => {

    const [todoList, setTodoList] = useState([]);
    const [addTask, setAddTask] = useState('');
    const border_danger = '';
    const [task, setTask] = useState('');
    const [markAll, setMarkAll] = useState(false);

    useEffect(() => {
        const unsubscribe = firebase_app.firestore().collection('todo').onSnapshot((snapshot) => {
            const newItem = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTodoList(newItem)
        })
        return () => unsubscribe();
    }, []);

    const addNewTask = () => {
        if (task === '') {
            document.querySelector('.ng-valid').classList.remove('border-danger')
            document.querySelector('.ng-valid').classList.add('border-danger')
        } else {
            creatTodoList(task);
            document.getElementById('newtask').value = '';
            document.querySelector('.ng-valid').classList.add('taskmag-hide')
            document.querySelector('.ng-valid').classList.remove('taskmag-show')
        }
    }

    const handleRemoveTodo = (todoId) => {
        toast.success("Task Deleted !");
        deleteList(todoId)
    }

    const handleMarkedTodo = (index, todo) => {
        if (todo.completed ===  false) {
            toast.success("Task Completed !");
        }
        if(todo.completed ===  true){
        toast.error("Task In-completed !");
        }
        todo.completed = !todo.completed;
        updateTask(todo);
    }

    const markAllStatus = (checked) => {
        if(checked === true){
            toast.success("All Task Completed !");
        }else{
            toast.error("All Task In-Completed !");
        }
        setMarkAll(checked);
        markAllTask(checked)
    }

    const openTaskWrapper = () => {
        setAddTask(' visible')
    }

    const closeTaskWrapper = () => {
        setAddTask('')
    }

    const onTaskChanged = (e) => {
        setTask(e.currentTarget.value);
    }

    return (
        <Fragment>
            <Breadcrumb title="To-do Firebase" parent="To-do Firebase" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ToDo}</h5>
                            </div>
                            <div className="card-body">
                                <div className="todo">
                                    <div className="todo-list-wrapper">
                                        <div className="todo-list-container">
                                            <div className="mark-all-tasks">
                                                <div className="mark-all-tasks-container">
                                                    <span className="mark-all-btn" id="mark-all-finished" role="button">
                                                        <span className="btn-label">{"Mark all as finished"}</span>
                                                        <span className="action-box completed" onClick={() => markAllStatus(!markAll)}>
                                                            {markAll &&
                                                                <i className="icon"><i className="icon-check"></i></i>}
                                                        </span>
                                                    </span>
                                                    <span className="mark-all-btn move-down" id="mark-all-incomplete" role="button">
                                                        <span className="btn-label">{"Mark all as Incomplete"}</span>
                                                        <span className="action-box">
                                                            <i className="icon"><i className="icon-check"></i></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="todo-list-body">
                                                <ul id="todo-list">
                                                    {todoList.length > 0 ?
                                                        todoList.map((todoData, index) =>
                                                            <li className={"task " + (todoData.completed ? 'completed' : '')} key={index} >
                                                                <div className="task-container">
                                                                    <h4 className="task-label">{todoData.task}</h4>
                                                                    <span className="task-action-btn">
                                                                        <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleRemoveTodo(todoData.id)} >
                                                                            <i className="icon"><i className="icon-trash"></i></i></span>
                                                                        <span className="action-box large complete-btn" title="Mark Complete" onClick={() => handleMarkedTodo(index, todoData)} >
                                                                            <i className="icon"><i className="icon-check"></i></i>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ) : ''}
                                                </ul>
                                            </div>
                                            <div className="todo-list-footer">
                                                <div className="add-task-btn-wrapper"><span className="add-task-btn">
                                                    <button className="btn btn-primary" onClick={openTaskWrapper} >
                                                        <i className="icon-plus"></i> {AddNewTask}</button></span></div>
                                                <div className={"new-task-wrapper" + addTask}>
                                                    <textarea
                                                        className={"ng-untouched ng-pristine ng-valid" + border_danger}
                                                        id="newtask"
                                                        placeholder="Enter new task here. . ."
                                                        defaultValue={task}
                                                        onChange={onTaskChanged}
                                                    >
                                                    </textarea>
                                                    <span className="btn btn-danger cancel-btn" id="close-task-panel" onClick={closeTaskWrapper}>{Close}</span>
                                                    <span className="btn btn-success ml-3 add-new-task-btn" id="add-task" onClick={addNewTask}>{AddTask}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-popup hide">
                                        <p><span className="task"></span><span className="notification-text"></span></p>
                                    </div>
                                </div>
                                {/* <!-- HTML Template for tasks--> */}
                                <script id="task-template" type="tect/template">
                                    <li className="task">
                                        <div className="task-container">
                                            <span className="task-action-btn">
                                                <span className="action-box large delete-btn" title="Delete Task">
                                                    <i className="icon"><i className="icon-trash"></i></i>
                                                </span>
                                                <span className="action-box large complete-btn" title="Mark Complete">
                                                    <i className="icon"><i className="icon-check"></i></i>
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TodoFirebase;