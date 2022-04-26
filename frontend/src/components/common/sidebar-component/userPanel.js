import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import man from '../../../assets/images/dashboard/user.png'
import {TAYHANA, Director} from '../../../constant'

const UserPanel = () => {
    const { loggedUser } = useSelector((store) => store.UserLogin);
    const url = '';
    const getRolDescription = (option) => {
        switch (option) {
          case 'external':
            return 'Usuario Externo';
          case 'patient':
            return 'Paciente';
          case 'admin':
            return 'Administrador';
          case 'receptionist':
            return 'Recepcionista';
          case 'doctor':
            return 'Doctor';
          default:
            break;
        }
      };
    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" src={url ? url : man} alt="#" />
                    <div className="profile-edit">
                        <Link to={`${process.env.PUBLIC_URL}/settings/user/${loggedUser?.user.id}?mode=browse`}>
                            <Edit />
                        </Link>
                    </div>
                </div>
                <h6 className="mt-3 f-14">{loggedUser?.user.firstName}</h6>
                <p>{getRolDescription(loggedUser?.user.roles[0])}.</p>
            </div>
        </Fragment>
    );
};

export default UserPanel;