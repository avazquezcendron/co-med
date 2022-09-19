import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

import notFoundImg from '../../assets/images/search-not-found.png';

const RoomsStats = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <h5>{'Configuración del sistema para el envío de E-mails'}</h5>
              <span
                className="text-muted f-12 m-t-5"
                style={{
                  letterSpacing: 1,
                }}
              >
                {
                  'Nombre de usuario de la cuenta que figurará como remitente, templates para el envío automático de e-mail en el alta de turno, etc.'
                }
              </span>
            </div>
            {/* <div className="col-md-6">
              {!isEditing && (
                <div className="text-right">
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <i className="fa fa-pencil mr-2" />
                    Editar
                  </button>
                </div>
              )}
            </div> */}
          </div>
        </div>
        <div className="card-body">
          <div className="col-md-12 text-center m-50">
            <img className="img-fluid" src={notFoundImg} alt="" />
            <br />
            <span className="txt-info">Próximamente...</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RoomsStats;
