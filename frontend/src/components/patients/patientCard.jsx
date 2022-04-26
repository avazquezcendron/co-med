import React, { useState, Fragment } from 'react';
import { Collapse } from 'reactstrap';
import { useSelector } from 'react-redux';

import defaultuser from '../../assets/images/user/user.png';
import Loader from '../common/loader';
import { SUCCEEDED, LOADED, FAILED } from '../../redux/statusTypes';

const PatientCard = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);

  const [isProfile, setisProfile] = useState(true);
  return (
    <Fragment>
      {status === LOADED || status === SUCCEEDED || status === FAILED ? (
        <div className="card">
          <div className="card-header">
            <div className="row m-b-2 ">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-auto">
                    <img
                      className="img-70 rounded-circle"
                      alt=""
                      src={patient.avatarUrl || defaultuser}
                    />
                  </div>
                  <div className="col">
                    <h5 className="mb-1">{patient.fullName}</h5>
                    {patient.status === 'active' ? (
                      <span className="badge badge-success pull-right">
                        Activo
                      </span>
                    ) : patient.status === 'pending' ? (
                      <span className="badge badge-warning pull-right">
                        Pendiente
                      </span>
                    ) : (
                      <span className="badge badge-light pull-right">
                        Inactivo
                      </span>
                    )}
                    <h6 className="mb-0 text-muted">
                      Número de H.C.{' '}
                      <span className="badge badge-secondary bottom ">
                        {patient.healthRecord?.healthRecordNumber}
                      </span>
                    </h6>
                    {patient.lastVisit && (
                      <p className="f-s-italic text-muted">{`Su última visita fue el ${patient.lastVisit}`}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-link pl-0 pull-right"
                  onClick={() => setisProfile(!isProfile)}
                  data-toggle="collapse"
                  data-target="#collapseicon1"
                  aria-expanded={isProfile}
                  aria-controls="collapseicon1"
                >
                  {''}
                </button>
              </div>
            </div>
          </div>
          <Collapse isOpen={isProfile}>
            <div className="card">
              <div className="card-body">
                <div className="row filter-cards-view">
                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Tipo de Documento</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.nationalIdType || '-'}</p>
                    </div>
                    <div className="col-md-12">
                      <span className="f-w-600">Fecha Nacimiento</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString(
                          'es-AR'
                        ) : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Nro. de Documento</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.nationalId || '-'}</p>
                    </div>
                    <div className="col-md-12">
                      <span className="f-w-600">Edad</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.age  || '-'}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Ncionalidad</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.nationality || '-'}</p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Email</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.email || '-'}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Sexo Biológico</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.biologicalSex === 'm'
                          ? 'Masculino'
                          : 'Femenino'}
                      </p>
                    </div>
                    <div className="col-md-12">
                      <span className="f-w-600">Teléfono</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.phoneNumber || '-'}</p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Género Percibido</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.gender}</p>
                    </div>
                    <div className="col-md-12">
                      <span className="f-w-600">Dirección</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.address?.street ? patient.address?.street + ', ' + patient.address?.city : '-'}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Obra Social</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.healthInsurances?.length > 0
                          ? patient.healthInsurances[0].healthInsuranceCompany
                              .description
                          : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Plan</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.healthInsurances?.length > 0
                          ? patient.healthInsurances[0].plan.code
                          : '-'}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Nro. de Credencial</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.healthInsurances?.length > 0
                          ? patient.healthInsurances[0].cardNumber
                          : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Fecha Ingreso</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.healthInsurances?.length > 0
                          ? patient.healthInsurances[0].admissionDate
                          : '-'}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Persona de Contacto</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.contactPerson && patient.contactPerson.firstName ? patient.contactPerson.firstName +
                          ' ' +
                          patient.contactPerson.lastName : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Vínculo</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.contactPerson?.bond ? patient.contactPerson?.bond : '-'}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <span className="f-w-600">Teléfono de Contacto</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.contactPerson?.phoneNumber ? patient.contactPerson?.phoneNumber : '-'}</p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <span className="f-w-600">Dirección de Contacto</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.contactPerson?.addres ? patient.contactPerson?.address : '-'}</p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="col-md-12">
                      <span className="f-w-600">Biografía</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.bio || '-'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Collapse>
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientCard;
