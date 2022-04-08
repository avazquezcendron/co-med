import React, { useState, useEffect } from 'react';
import { Collapse } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

const PatientCard = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);

  const [isProfile, setisProfile] = useState(true);
  const calculateAge = (dateString) => {
    var birthday = new Date(dateString);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  return (
    <div className="card">
        <div className="card-header">
          <div className="row m-b-2 ">
            <div className="col-md-10">
              {/* <h4 className="card-title mb-0">
                {'Información Básica'}
              </h4> */}
                  <div className="row">
                    <div className="col-auto">
                      <img
                        className="img-70 rounded-circle"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/assets/images/${patient.image}`}
                      />
                    </div>
                    <div className="col">
                      <h3 className="mb-1">{patient.name}</h3>
                      {patient.status === 'active' ? (
                        <span className="badge badge-success pull-right">Activo</span>
                      ) : patient.status === 'pending' ? (
                        <span className="badge badge-warning pull-right">
                          Pendiente
                        </span>
                      ) : (
                        <span className="badge badge-light pull-right">Inactivo</span>
                      )}
                      <h6 className="mb-0 text-muted">Número de H.C. <span className="badge badge-secondary bottom ">{patient.healthRecordId}</span></h6>                      
                      <p className="f-s-italic text-muted">{`Su última visita fue el ${patient.lastVisit}`}</p>                      
                    </div>
                    {/* <div className="col-auto">
                      {patient.status === 'active' ? (
                        <span className="badge badge-success pull-right">Activo</span>
                      ) : patient.status === 'pending' ? (
                        <span className="badge badge-warning pull-right">
                          Pendiente
                        </span>
                      ) : (
                        <span className="badge badge-light pull-right">Inactivo</span>
                      )}
                    </div> */}
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
        {/* <div className="card-body"> */}
          <div className="card">
            <div className="card-header">
              <div className="row m-b-2 ">
                <div className="col-md-12">
                  {/* <div className="row">
                    <div className="col-auto">
                      <img
                        className="img-70 rounded-circle"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/assets/images/${patient.image}`}
                      />
                    </div>
                    <div className="col">
                      <h3 className="mb-1">{patient.name}</h3>
                      <h6 className="mb-0 text-muted">Número de H.C. <span className="badge badge-secondary bottom ">{patient.healthRecordId}</span></h6>
                      <p className="f-s-italic text-muted">{`Su última visita fue el ${patient.lastVisit}`}</p>
                    </div>
                    <div className="col-auto">
                      {patient.status === 'active' ? (
                        <span className="badge badge-success pull-right">Activo</span>
                      ) : patient.status === 'pending' ? (
                        <span className="badge badge-warning pull-right">
                          Pendiente
                        </span>
                      ) : (
                        <span className="badge badge-light pull-right">Inactivo</span>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row filter-cards-view">
                <div className="col-md-6">
                  <div className="col-md-12">
                    <span className="f-w-600">Tipo de Documento</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>DNI</p>
                  </div>
                  <div className="col-md-12">
                    <span className="f-w-600">Fecha Nacimiento</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>{patient.birthDate}</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Nro. de Documento</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>{patient.nationalId}</p>
                  </div>
                  <div className="col-md-12">
                    <span className="f-w-600">Edad</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>{calculateAge(patient.birthDate)}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                    <span className="f-w-600">Ncionalidad</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>Argentino</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Email</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>{patient.email}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                    <span className="f-w-600">Sexo Biológico</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>Masculino</p>
                  </div>
                  <div className="col-md-12">
                    <span className="f-w-600">Teléfono</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>02966 15 238912</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Género Percibido</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>Varón</p>
                  </div>
                  <div className="col-md-12">
                    <span className="f-w-600">Dirección</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>Avda. Piedrabuena nro. 494</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                    <span className="f-w-600">Obra Social</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>{patient.healthInsurance}</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Plan</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>510</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                                <span className="f-w-600">Nro. de Carnet {patient.healthInsurance}</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>8000012313123332123</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Fecha Ingreso</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>01/03/2022</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                    <span className="f-w-600">Persona de Contacto</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>-</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Vínculo</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>-</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                    <span className="f-w-600">Teléfono de Contacto</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>-</p>
                  </div>
                </div>
                <div className="col-md-6 b-l-light border-3">
                  <div className="col-md-12">
                    <span className="f-w-600">Dirección de Contacto</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>-</p>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="col-md-12">
                    <span className="f-w-600">Biografía</span>
                  </div>
                  <div className="col-md-12 m-b-10">
                    <p>Breves comentarios del Paciente en forma de texto libre...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </Collapse>
    </div>
  );
};

export default PatientCard;
