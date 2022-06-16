import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AlignLeft,
  Maximize,
  Bell,
  FileText,
  MoreHorizontal,
} from 'react-feather';
import { getDatabase, ref, onValue } from 'firebase/database';

import logo from '../../../assets/images/logo-secundario.png';
// import Language from './language';
import UserMenu from './userMenu';
import Notification from './notification';
import SearchHeader from './searchHeader';
// import {EN} from '../../../constant'
import { SET_RIGHT_SIDEBAR_ENTITY } from '../../../redux/right-sidebar/reducer';
import { firebase_app } from '../../../data/config';

const Header = () => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);
  const [headerbar, setHeaderbar] = useState(true);
  const [incompletedNotesCount, setIncompletedNotesCount] = useState(0);

  useEffect(() => {
    if (loggedUser.user?.id) {
      const database = getDatabase(firebase_app);
      const notasRef = ref(database, `notas/${loggedUser.user.username}`);
      onValue(notasRef, (snapshot) => {
        let incompletedNotesCount = 0;
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          if (!childData.completed) {
            incompletedNotesCount++;
          }
        });
        setIncompletedNotesCount(incompletedNotesCount);
      });
    }
  }, []);

  const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar);
      document.querySelector('.page-main-header').classList.remove('open');
      document.querySelector('.page-sidebar').classList.remove('open');
    } else {
      setSidebar(!sidebar);
      document.querySelector('.page-main-header').classList.add('open');
      document.querySelector('.page-sidebar').classList.add('open');
    }
  };

  function showRightSidebar() {
    dispatch({ type: SET_RIGHT_SIDEBAR_ENTITY, payload: 'todo' });
  }

  //full screen function
  function goFull() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  return (
    <Fragment>
      <div className="page-main-header">
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none">
            <div className="logo-wrapper">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <img className="img-fluid" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobile-sidebar d-block">
            <div className="media-body text-right switch-sm">
              <label className="switch">
                <a href="#javascript" onClick={() => openCloseSidebar()}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <div className="nav-right col p-0">
            <ul className={`nav-menus ${headerbar ? '' : 'open'}`}>
              <li>
                <SearchHeader />
              </li>
              <li>
                <a
                  onClick={goFull}
                  className="text-dark"
                  href="#!"
                  title="Ver en pantalla completa"
                >
                  <Maximize />
                </a>
              </li>
              {/* <li className="onhover-dropdown">
                <a className="txt-dark" href="#javascript">
                  <h6>{EN}</h6></a>
                <Language />
              </li> */}
              <li className="onhover-dropdown">
                <a href="#javascript" onClick={showRightSidebar} title="Notas">
                  <FileText />                  
                </a>
                {incompletedNotesCount > 0 && (
                  <span
                      className="p-0 badge-pill badge-danger text-center"
                      style={{
                        position: 'absolute',
                        right: 10,
                        bottom: 20,
                        width: 12,
                        height: 12,
                        fontSize: 'x-small',
                      }}
                    >
                      {incompletedNotesCount}
                    </span>
                  )}
                  {incompletedNotesCount > 0 && <span className="dot bg-danger"></span>}
              </li>                
              <li className="onhover-dropdown">
                <Bell />
                <Notification />
              </li>
              {/* <li>
                <a href="#javascript" onClick={showRightSidebar}>
                  <MessageCircle />
                  <span className="dot"></span>
                </a>
              </li> */}
              <UserMenu />
            </ul>
            <div
              className="d-lg-none mobile-toggle pull-right"
              onClick={() => setHeaderbar(!headerbar)}
            >
              <MoreHorizontal />
            </div>
          </div>
          <script id="result-template" type="text/x-handlebars-template">
            <div className="ProfileCard u-cf">
              <div className="ProfileCard-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay m-0"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
              </div>
              <div className="ProfileCard-details">
                <div className="ProfileCard-realName"></div>
              </div>
            </div>
          </script>
          <script id="empty-template" type="text/x-handlebars-template">
            <div className="EmptyMessage">
              {
                'Your search turned up 0 results. This most likely means the backend is down, yikes!'
              }
            </div>
          </script>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
