import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Todo from '../applications/todo-app/todo';
import PatientHealthRecordHistory from '../patients/patientHealthRecordHistory';
import { SET_RIGHT_SIDEBAR_ENTITY } from '../../redux/right-sidebar/reducer';

const RightSidebar = () => {
  const { entity } = useSelector((store) => store.RightSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (entity) {
      document.querySelector('.right-sidebar').classList.add('show');
    } else {
      document.querySelector('.right-sidebar').classList.remove('show');
    }
  }, [entity]);

  const closeSideBar = () => {
    dispatch({ type: SET_RIGHT_SIDEBAR_ENTITY, payload: '' });
  };
  return (
    <div>
      <div className="right-sidebar " id="right_side_bar">
        {/* <div className="container p-0">
                        <div className="modal-header p-l-20 p-r-20">
                            <div className="col-sm-8 p-0">
                                <h6 className="modal-title font-weight-bold">{'Notas'}</h6>
                            </div>
                            <div className="col-sm-4 text-right p-0"><i className="mr-2" data-feather="settings"></i></div>
                        </div>
                    </div> */}
        <div className="custom-scrollbar p-0 chat-box ">
          {/* <div className="col-md-12 text-right p-0"><i className="fa fa-times mr-2"></i></div> */}
          <span
            className="pull-right mt-2"
            style={{ cursor: 'pointer' }}
            onClick={() => closeSideBar()}
          >
            <i className="fa fa-times mr-2 text-muted"></i>
          </span>
          {entity === 'todo' ? (
            <Todo />
          ) : entity === 'healthRecordHistory' ? (
            <PatientHealthRecordHistory />
          ) : (
            ''
          )}
        </div>
        {/* <div className="container p-0">
                        <div className="modal-header p-l-20 p-r-20">
                            <div className="col-sm-8 p-0">
                                <h6 className="modal-title font-weight-bold">{FRIENDLIST}</h6>
                            </div>
                            <div className="col-sm-4 text-right p-0"><i className="mr-2" data-feather="settings"></i></div>
                        </div>
                    </div>
                    <div className="friend-list-search mt-0">
                        <input type="text" placeholder="search friend" /><i className="fa fa-search"></i>
                    </div>
                    <div className="chat-box custom-scrollbar">
                        <div className="people-list friend-list">
                            <ul className="list">
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={one} alt="" />
                                        <div className="status-circle online"></div>
                                        <div className="about">
                                            <div className="name">{VincentPorter}</div>
                                            <div className="status"> {Online}</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={two} alt="" />
                                        <div className="status-circle away"></div>
                                        <div className="about">
                                            <div className="name">{AinChavez}</div>
                                            <div className="status"> {"28 minutes ago"}</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={eight} alt="" />
                                        <div className="status-circle online"></div>
                                        <div className="about">
                                            <div className="name">{KoriThomas}</div>
                                            <div className="status"> {Online}</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={four} alt="" />
                                        <div className="status-circle online"></div>
                                        <div className="about">
                                            <div className="name">{EricaHughes}</div>
                                            <div className="status"> {Online}</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={five} alt="" />
                                        <div className="status-circle offline"></div>
                                        <div className="about">
                                            <div className="name">{GingerJohnston}</div>
                                            <div className="status"> {"2 minutes ago"}</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={six} alt="" />
                                        <div className="status-circle away"></div>
                                        <div className="about">
                                            <div className="name">{PrasanthAnand}</div>
                                            <div className="status"> {"2 hour ago"}</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="clearfix">
                                    <Link to={`${process.env.PUBLIC_URL}/chat-app/chat`}>
                                        <img className="rounded-circle user-image" src={seven} alt="" />
                                        <div className="status-circle online"></div>
                                        <div className="about">
                                            <div className="name">{HileriJecno}</div>
                                            <div className="status"> {Online}</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
      </div>
    </div>
  );
};

export default RightSidebar;
