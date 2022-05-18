import React, { Fragment, useState, useEffect } from 'react';
import { User, Lock, Settings, LogOut } from 'react-feather';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { userLogoutWatcher } from '../../../redux/user/actions';
import man from '../../../assets/images/dashboard/user.png';

const UserMenu = ({ history }) => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const [profile, setProfile] = useState('');

  useEffect(() => {
    if (loggedUser && loggedUser.user) {
        toast.success(`Bienvenid@ ${loggedUser.user.firstName}!`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
    }
    setProfile(loggedUser?.user.avatar?.downloadURL || man);
  }, []);

  
  const logout = () => {
    dispatch(userLogoutWatcher());
  };

  return (
    <Fragment>
      {loggedUser ? (
        <li className="onhover-dropdown">
          <div className="media align-items-center">
            <img
              className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
              src={profile}
              alt="header-user"
            />
            {/* <div className="dotted-animation">
              <span className="animate-circle"></span>
              <span className="main-circle"></span>
            </div> */}
          </div>
          <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
            <li>
              <Link to={`${process.env.PUBLIC_URL}/settings/user/${loggedUser.user.id}?mode=browse`}>
                <User />
                {'Mi Perfil'}
              </Link>
            </li>
            {/* <li><Link to={`${process.env.PUBLIC_URL}/email-app/emailDefault`}><Mail />{Inbox}</Link></li> */}
            {/* <li>
              <a href="#javascript">
                <Lock />
                {'LockScreen'}
              </a>
            </li> */}
            <li>
              <a href="#javascript">
                <Settings />
                {'Opciones'}
              </a>
            </li>
            <li>
              <a onClick={logout} href="#javascript">
                <LogOut /> {'Cerrar Sesión'}
              </a>
            </li>
          </ul>
        </li>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default withRouter(UserMenu);
