import React, { Fragment, useState, useEffect } from 'react';
import { translate } from 'react-switch-lang';
import { toast } from 'react-toastify';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { useSelector } from 'react-redux';

// import { ADD_NEW_ITEM, REMOVE_ITEM, MARK_ALL_ITEMS, SELECTED_ITEM, WATCH_TODO_LIST } from '../../../redux/actionTypes'
import {
  deleteList,
  creatTodoList,
  updateTask,
} from '../../../services/todo-firebase.service';
import { getAll as getAllUsers } from '../../../services/user.service';
import { firebase_app } from '../../../data/config';

const Todo = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [todoList, setTodoList] = useState([]);
  const [addTask, setAddTask] = useState('');
  const border_danger = '';
  const [task, setTask] = useState('');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const pageSize = 6;
  const pagesCount = Math.ceil(todoList.length / pageSize);

  const [currentPage, setCurrentPage] = useState(0);

  const handleAgendaPaginationClick = (e, index) => {
    e.preventDefault();

    setCurrentPage(index);
  };

  useEffect(() => {
    // dispatch({ type: WATCH_TODO_LIST });
    const database = getDatabase(firebase_app);
    const notasRef = ref(database, `notas/${loggedUser.user.username}`);
    onValue(notasRef, (snapshot) => {
      const notesUpdated = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if (childData?.task) {
          notesUpdated.push({ ...childData, id: childKey });
        }
      });
      setTodoList(notesUpdated);
    });

    getAllUsers(loggedUser).then((res) => setUsers(res.data));

    // return () => off(notasRef);
  }, []);

  const addNewTask = () => {
    if (task === '') {
      document.querySelector('.ng-valid').classList.remove('border-danger');
      document.querySelector('.ng-valid').classList.add('border-danger');
    } else {
      creatTodoList(
        { task: task, id: Date.now(), assignedTo: user },
        loggedUser.user
      );
      document.getElementById('newtask').value = '';
      document.querySelector('.ng-valid').classList.add('taskmag-hide');
      document.querySelector('.ng-valid').classList.remove('taskmag-show');
      setAddTask('');
      setUser(null);
      setTask('');
      toast.success('Nota creada!');
    }
  };

  const handleRemoveTodo = (todoId) => {
    toast.success('Nota borrada!');
    deleteList(todoId, loggedUser.user.username);
  };

  const handleMarkedTodo = (index, todo) => {
    if (todo.completed === false) {
      toast.success('Nota Completada !');
    }
    if (todo.completed === true) {
      toast.warning('Nota pendiente!');
    }
    todo.completed = !todo.completed;
    updateTask(todo, loggedUser.user.username);
  };

  // const markAllStatus = (checked) => {
  //   if (checked === true) {
  //     toast.success('Todas las notas pendientes.');
  //   } else {
  //     toast.error('Todas las notas completadas.');
  //   }
  //   setMarkAll(checked);
  //   markAllTask(checked);
  // };

  const openTaskWrapper = () => {
    setAddTask(' visible');
  };

  const closeTaskWrapper = () => {
    setAddTask('');
    setUser(null);
    setTask('');
  };

  const onTaskChanged = (e) => {
    setTask(e.currentTarget.value);
  };

  const handleUserChange = (value) => {
    if (value) {
      setUser(users.filter((x) => x.id === value)[0]);
    } else {
      setUser(null);
    }
  };

  return (
    <Fragment>
      {/* <Breadcrumb title="To-do" parent="To-do" /> */}
      {/* <div className="container-fluid"> */}
      {/* <div className="row"> */}
      {/* <div className="col-xl-12"> */}
      <div className="card">
        <div className="card-header">
          <h5>
            <i className="icofont icofont-notepad"></i> {'Notas'}
          </h5>
        </div>
        <div className="card-body">
          <div className="todo">
            <div className="todo-list-wrapper">
              <div className="todo-list-container">
                <div className="mark-all-tasks">
                  {/* <div className="mark-all-tasks-container">
                    <span
                      className="mark-all-btn"
                      id="mark-all-finished"
                      role="button"
                    >
                      <span className="btn-label">
                        {props.t('CrossOutAll')}
                      </span>
                      <span
                        className="action-box completed"
                        onClick={markAllStatus}
                      >
                        {markAll && (
                          <i className="icon">
                            <i className="icon-check"></i>
                          </i>
                        )}
                      </span>
                    </span>
                    <span
                      className="mark-all-btn move-down"
                      id="mark-all-incomplete"
                      role="button"
                    >
                      <span className="btn-label">
                        {'Mark all as Incomplete'}
                      </span>
                      <span className="action-box">
                        <i className="icon">
                          <i className="icon-check"></i>
                        </i>
                      </span>
                    </span>
                  </div> */}
                </div>
                <div className="todo-list-body">
                  <ul id="todo-list">
                    {todoList.length > 0
                      ? todoList
                          .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                          )
                          .map((todoData, index) => (
                            <li
                              className={
                                'task ' +
                                (todoData.completed ? 'completed' : '')
                              }
                              key={index}
                            >
                              <div className="task-container">
                                <h4 className="task-label">{todoData.task}</h4>
                                {/* <small className="task-label text-muted">Creada por: Juli Llaneza</small> */}
                                <cite className="text-muted">{`Creada por: ${todoData.assignedBy} el ${todoData.createdDate}`} </cite>
                                <span className="task-action-btn">
                                  <span
                                    className="action-box large delete-btn"
                                    title="Delete Task"
                                    onClick={() =>
                                      handleRemoveTodo(todoData.id)
                                    }
                                  >
                                    <i className="icon">
                                      <i className="icon-trash"></i>
                                    </i>
                                  </span>
                                  <span
                                    className="action-box large complete-btn"
                                    title="Mark Complete"
                                    onClick={() =>
                                      handleMarkedTodo(todoData.id, todoData)
                                    }
                                  >
                                    <i className="icon">
                                      <i className="icon-check"></i>
                                    </i>
                                  </span>
                                </span>
                              </div>
                            </li>
                          ))
                      : ''}
                  </ul>
                </div>
                <div className="todo-list-footer">
                  <div className="add-task-btn-wrapper">
                    <span className="add-task-btn">
                      <button
                        className="btn btn-primary"
                        onClick={openTaskWrapper}
                      >
                        <i className="icon-plus"></i> {'Nueva nota'}
                      </button>
                    </span>
                  </div>
                  <div className={'new-task-wrapper' + addTask}>
                    <textarea
                      className={
                        'mb-0 ng-untouched ng-pristine ng-valid' + border_danger
                      }
                      id="newtask"
                      placeholder="Ingrese una nueva nota aquí. . ."
                      defaultValue={task}
                      onChange={onTaskChanged}
                    ></textarea>
                    <div className="mb-4">
                      <label
                        className="col-md-12 col-form-label text-muted pl-0"
                        htmlFor="inputUser"
                      >
                        {'Asignar a'}
                      </label>
                      <div className="col-md-6 p-1">
                        <select
                          className="form-control"
                          name="user"
                          id="inputUser"
                          value={user?.id || ''}
                          onChange={(e) => handleUserChange(e.target.value)}
                        >
                          <option value=""></option>
                          {users &&
                            users.map((user, index) => (
                              <option key={index} value={user.id}>
                                {`${user.firstName} ${user.lastName}`}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <span
                      className="btn btn-danger cancel-btn"
                      id="close-task-panel"
                      onClick={closeTaskWrapper}
                    >
                      {'Cancelar'}
                    </span>
                    <span
                      className="btn btn-success ml-3 add-new-task-btn"
                      id="add-task"
                      onClick={addNewTask}
                    >
                      {'Agregar'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- HTML Template for tasks--> */}
          {/* <script id="task-template" type="tect/template">
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
                                </script> */}
          <Pagination
            aria-label="ToDo Pagination"
            className="pagination justify-content-center pagination-primary mt-4"
          >
            <PaginationItem disabled={currentPage <= 0}>
              <PaginationLink
                first
                href="#javascript"
                onClick={(e) => handleAgendaPaginationClick(e, 0)}
              />
            </PaginationItem>
            <PaginationItem disabled={currentPage <= 0}>
              <PaginationLink
                previous
                href="#javascript"
                onClick={(e) => handleAgendaPaginationClick(e, currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink
                  onClick={(e) => handleAgendaPaginationClick(e, i)}
                  href="#"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
              <PaginationLink
                next
                href="#javascript"
                onClick={(e) => handleAgendaPaginationClick(e, currentPage + 1)}
              />
            </PaginationItem>
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
              <PaginationLink
                last
                href="#javascript"
                onClick={(e) => handleAgendaPaginationClick(e, pagesCount - 1)}
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      {/* </div> 
                </div>
            </div>*/}
    </Fragment>
  );
};

export default translate(Todo);
