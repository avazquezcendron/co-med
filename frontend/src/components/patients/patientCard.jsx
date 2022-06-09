import React, { useState, useEffect, Fragment } from 'react';
import { Collapse } from 'reactstrap';
import { useSelector } from 'react-redux';

import defaultuser from '../../assets/images/user/user.png';
import Loader from '../common/loader';
import { SUCCEEDED, LOADED, FAILED } from '../../redux/statusTypes';

const PatientCard = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { status: visitStatus } = useSelector((store) => store.Visit);
  const { visits } = useSelector((store) => store.Visits);

  const [isProfile, setisProfile] = useState(!props.collapsed);

  useEffect(() => {
    if(typeof props.collapsed === 'undefined'){
      setisProfile(visitStatus !== LOADED);
    }
  }, [visitStatus]);

  return (
    <Fragment>
      {status === LOADED || status === SUCCEEDED || status === FAILED ? (
        <div className="card">
          <div className="card-header">
            <div className="row m-b-2 ">
              <div className="col-md-11">
                <div className="row">
                  <div className="col-auto  text-center">
                    <img
                      className="img-70 rounded-circle"
                      alt=""
                      src={patient.avatar?.downloadURL || defaultuser}
                    />
                    <br />
                    <span className="badge badge-light text-info mt-2">
                      {patient.age} años
                    </span>
                    <br />
                  </div>
                  <div className="col bg-light b-r-10 text-muted">
                    <h5 className="mb-1 mt-2">{patient.fullName}</h5>
                    <hr className="mt-1 mb-1" />
                    {/* {patient.status === 'active' ? (
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
                    )} */}
                    <div className="row p-1">
                      <div className="col-md-3 mb-2">
                        <div className="row">
                          <small className="col-md-12 pr-0 text-muted f-w-700">
                            Obra Social
                          </small>
                          <span className="col-md-12 f-w-500 f-12">
                            {patient.healthInsurances?.length > 0
                              ? patient.healthInsurances[0]
                                  .healthInsuranceCompany.description
                              : '-'}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 mb-2">
                        <div className="row">
                          <small className="col-md-12 text-muted f-w-700">
                            Plan
                          </small>
                          <span className="col-md-12 f-w-500 f-12">
                            {patient.healthInsurances?.length > 0
                              ? patient.healthInsurances[0].plan.code
                              : '-'}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-5 mb-2">
                        <div className="row">
                          <small className="col-md-12 text-muted f-w-700">
                            Nro. de Credencial
                          </small>
                          <span className="col-md-12 f-w-500 f-12">
                            {patient.healthInsurances?.length > 0
                              ? patient.healthInsurances[0].cardNumber
                              : '-'}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <small className="col-md-12 pr-0 text-muted f-w-700">
                            Tipo de Doc.
                          </small>
                          <span className="col-md-12 f-w-500 f-12">
                            {patient.nationalIdType}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <small className="col-md-12 text-muted f-w-700">
                            Nro. de Doc.
                          </small>
                          <span className="col-md-12 f-w-500 f-12">
                            {patient.nationalId}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <small className="col-md-12 text-muted f-w-700">
                            Nro. de H.C.
                          </small>
                          <span className="col-md-12 f-w-500 f-12">
                            {patient.healthRecord?.healthRecordNumber}
                          </span>
                        </div>
                      </div>
                    </div>

                    {patient.healthRecord?.visits?.length > 0 && (
                      <p className="f-s-italic text-muted">{`Su última consulta fue el ${new Date(
                        patient.healthRecord?.visits[0].createdAt
                      ).toLocaleDateString('es')}`}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-1">
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
                <div className="row filter-cards-view text-muted">
                  <div className="col-md-6">
                    <div className="col-md-12">
                      <i className="icofont icofont-id mr-1"></i>
                      <span className="f-w-600">Tipo de Documento</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.nationalIdType || '-'}</p>
                    </div>
                    <div className="col-md-12">
                      <i className="icofont icofont-calendar mr-1"></i>
                      <span className="f-w-600">Fecha Nacimiento</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.dateOfBirth
                          ? new Date(patient.dateOfBirth).toLocaleDateString(
                              'es-AR'
                            )
                          : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <i className="icofont icofont-id mr-1"></i>
                      <span className="f-w-600">Nro. de Documento</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.nationalId || '-'}</p>
                    </div>
                    <div className="col-md-12">
                      <i className="icofont icofont-calendar mr-1"></i>
                      <span className="f-w-600">Edad</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.age || '-'}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <i className="icofont icofont-world mr-1"></i>
                      <span className="f-w-600">Ncionalidad</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.nationality || '-'}</p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <i className="icofont icofont-envelope mr-1"></i>
                      <span className="f-w-600">Email</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.email || '-'}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <i className="icofont icofont-users-alt-4 mr-1"></i>
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
                      <i className="icofont icofont-mobile-phone mr-1"></i>
                      <span className="f-w-600">Teléfono</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.phoneNumber || '-'}</p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <i className="icofont icofont-users-social mr-1"></i>
                      <span className="f-w-600">Género Percibido</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>{patient.gender || '-'}</p>
                    </div>
                    <div className="col-md-12">
                      <i className="icofont icofont-social-google-map mr-1"></i>
                      <span className="f-w-600">Dirección</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.address?.street
                          ? patient.address?.street +
                            ', ' +
                            patient.address?.city
                          : '-'}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <i className="icofont icofont-first-aid-alt mr-1"></i>
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
                      <i className="icofont icofont-medical mr-1"></i>
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
                      <i className="icofont icofont-id-card mr-1"></i>
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
                      <i className="icofont icofont-calendar mr-1"></i>
                      <span className="f-w-600">Fecha Ingreso</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.healthInsurances?.length > 0
                          ? (patient.healthInsurances[0].admissionDate ? new Date(patient.healthInsurances[0].admissionDate).toLocaleDateString() : '-')
                          : '-'}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <i className="icofont icofont-user-alt-4 mr-1"></i>
                      <span className="f-w-600">Persona de Contacto</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.contactPerson &&
                        patient.contactPerson.firstName
                          ? patient.contactPerson.firstName +
                            ' ' +
                            patient.contactPerson.lastName
                          : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <i className="icofont icofont-social-meetme mr-1"></i>
                      <span className="f-w-600">Vínculo</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.contactPerson?.bond
                          ? patient.contactPerson?.bond
                          : '-'}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="col-md-12">
                      <i className="icofont icofont-mobile-phone mr-1"></i>
                      <span className="f-w-600">Teléfono de Contacto</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.contactPerson?.phoneNumber
                          ? patient.contactPerson?.phoneNumber
                          : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 b-l-light border-3">
                    <div className="col-md-12">
                      <i className="icofont icofont-social-google-map mr-1"></i>
                      <span className="f-w-600">Dirección de Contacto</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      <p>
                        {patient.contactPerson?.addres
                          ? patient.contactPerson?.address
                          : '-'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <i className="icofont icofont-tag mr-1"></i>
                      <span className="f-w-600">Tags</span>
                    </div>
                    <div className="col-md-12 m-b-10">
                      {patient.tags?.length > 0
                        ? patient.tags.map((x) => (
                            <span key={x.id} className="badge badge-info">
                              {x.name}
                            </span>
                          ))
                        : '-'}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <i className="icofont icofont-ui-text-chat mr-1"></i>
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
