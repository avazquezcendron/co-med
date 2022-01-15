import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {ADD_NEW_ITEM,REMOVE_ITEM,MARK_ALL_ITEMS,SELECTED_ITEM,WATCH_TODO_LIST} from '../../../redux/actionTypes'
import {ToDo, AddNewTask,AddTask,Close} from '../../../constant'

const Todo = () => {

    const todoList = useSelector(content => content.TodoApp.allTodoItems.filter((item) => item.isStatus !== "deleted"));
    const dispatch = useDispatch();
    const border_danger = '';
    const [addTask, setAddTask] = useState('');
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('pending')
    const [markAll, setMarkAll] = useState(false);

    useEffect(() => {
        dispatch({ type: WATCH_TODO_LIST });
    },[dispatch]);

    const addNewTask = () => {
        if (task === '') {
            document.querySelector('.ng-valid').classList.remove('border-danger')
            document.querySelector('.ng-valid').classList.add('border-danger')
        } else {
            dispatch({ type: ADD_NEW_ITEM, payload: task })
            setAddTask('')
            setTask('')
            document.getElementById('newtask').value = '';
            document.querySelector('.ng-valid').classList.add('taskmag-hide')
            document.querySelector('.ng-valid').classList.remove('taskmag-show')
        }
    }

    const handleRemoveTodo = (todoId) => {
        dispatch({ type: REMOVE_ITEM, payload: todoId });
        toast.success("Deleted Task !");
    }

    const handleMarkedTodo = (itemId, itemStatus) => {
        if (itemStatus === 'completed') {
            setStatus('pending')
            dispatch({ type: SELECTED_ITEM, payload: { itemId, status } });
            toast.success("Task Completed !");
        }
        else if (itemStatus === 'pending') {
            setStatus('completed')
            dispatch({ type: SELECTED_ITEM, payload: { itemId, status } });
            toast.error(" Task In-completed !");
        }
    }

    const markAllStatus = () => {
        setMarkAll(!markAll);
        if(markAll === true){
            toast.error("All Task In-Completed !");
        }else{
            toast.success("All Task Completed !");
        }
        dispatch({ type: MARK_ALL_ITEMS, payload: markAll })
    }

    const openTaskWrapper = () => {
        setAddTask(' visible')
    }

    const closeTaskWrapper = () => {
        setAddTask('')
    }

    const onTaskChanged = (e) => {
        setTask({
            task: e.currentTarget.value
        });
    }

    return (
        <Fragment>
            <Breadcrumb title="To-do" parent="To-do" />
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
                                                        <span className="action-box completed" onClick={markAllStatus}>
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
                                                        todoList.map((todo, index) =>
                                                            <li className={"task " + todo.status} key={index} >
                                                                <div className="task-container">
                                                                    <h4 className="task-label">{todo.title}</h4>
                                                                    <span className="task-action-btn">
                                                                        <span className="action-box large delete-btn" title="Delete Task" onClick={() => handleRemoveTodo(todo.id)} >
                                                                            <i className="icon"><i className="icon-trash"></i></i></span>
                                                                        <span className="action-box large complete-btn" title="Mark Complete" onClick={() => handleMarkedTodo(todo.id, status)} >
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
                                            <h4 className="task-label">{"HEllo"}</h4>
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

export default Todo;