import React, { useEffect, useState, Fragment } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { Calendar } from 'react-feather';
import { useSelector } from 'react-redux';

import { firebase_app } from '../../../data/config';

const Notifications = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [notifications, setNotifications] = useState([]);
  const [notificationsCount, setNotificationsCount] = useState(null);
  const [newNotifications, setNewNotifications] = useState(false);

  useEffect(() => {
    if (loggedUser.user?.id) {
      const database = getDatabase(firebase_app);
      const appointmentsRef = ref(
        database,
        `notifications/appointments/${loggedUser.user.username}`
      );
      onValue(appointmentsRef, (snapshot) => {
        const notificationsUpdated = [];
        setNotificationsCount(snapshot.size);
        if (snapshot.size > 0) {
          setNewNotifications(true);
        } else {
          setNewNotifications(false);
        }
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (childData?.description) {
            notificationsUpdated.push(childData);
          }
        });
        setNotifications(notificationsUpdated);
      });
    }
  }, []);

  const clearNotifications = () => {
    const database = getDatabase(firebase_app);
    const appointmentsRef = ref(
      database,
      `notifications/appointments/${loggedUser.user.username}`
    );
    remove(appointmentsRef);
  };

  return (
    <Fragment>
      <div>
        {newNotifications && <span className="dot bg-danger"></span>}
        <ul className="notification-dropdown onhover-show-div p-0 text-muted">
          <li>
            {'Notificaciones'}{' '}
            {notificationsCount > 0 && (
              <span className="badge badge-pill badge-danger pull-right">
                {notificationsCount}
              </span>
            )}
          </li>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li key={index}>
                <div className="media">
                  <div className="media-body">
                    <h6 className="mt-0">
                      <span>
                        <Calendar />
                      </span>
                      Nuevo Turno
                    </h6>
                    <p className="mb-0">{notification.description}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div className="media">
                <div className="media-body">
                  <p className="mb-0">No tienes notificaciones</p>
                </div>
              </div>
            </li>
          )}
          <hr />
          {notificationsCount > 0 && (
            <li>
              <a href="#javascript" onClick={clearNotifications}>
                Limpiar notificaciones
              </a>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default Notifications;
