import React, { Fragment, useState, useEffect, useMemo } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

import notFoundImg from '../../assets/images/search-not-found.png';
import logo from '../../assets/images/logo-secundario.png';

const InteractiveRooms = () => {
  const DefaultBoardData = {
    columns: [
      {
        id: 1,
        roomNumber: 15,
        title: 'Habitación 15',
        cards: [
          {
            id: 2,
            roomId: 1,
            roomNumber: 15,
            bedNUmber: 1,
            patient: { fullName: 'Wanda Nara', age: 33, state: 'grave', isClinicPatient: true },
            admissionDate: new Date(),
            estimatedDischargeDate: '28/7/22',
            diagnosis: 'Psicótico',
            headDoctor: { fullName: 'Lorenzetti', speciality: 'Salud Mental' },
            observations: 'Prolongada',
          },
          {
            id: 3,
            roomId: 1,
            roomNumber: 15,
            bedNUmber: 2,
            patient: { fullName: 'El Boy', age: 65, state: 'fallecido' },
            admissionDate: new Date(),
            estimatedDischargeDate: '28/7/22',
            diagnosis: 'Psicótico',
            headDoctor: { fullName: 'Lorenzetti', speciality: 'Salud Mental' },
            observations: 'Pasa a mejor vida.',
          },
        ],
      },
      {
        id: 4,
        roomNumber: 22,
        title: 'Habitación 22',
        cards: [
          {
            id: 5,
            roomId: 2,
            roomNumber: 22,
            bedNUmber: 1,
            patient: { fullName: 'Isabell II', age: 96, state: 'fallecida' },
            admissionDate: new Date(),
            estimatedDischargeDate: '28/7/22',
            diagnosis: 'Edad avanzada',
            headDoctor: { fullName: 'Tayahana Ortolá', speciality: 'Clínica' },
            observations: 'Vamo Mirtha!!!',
          },
          {
            id: 6,
            roomId: 4,
            roomNumber: 22,
            bedNUmber: 1,
            patient: { fullName: 'Sugus Verón', age: 26, state: 'estable', isClinicPatient: true },
            admissionDate: new Date(),
            estimatedDischargeDate: '28/7/22',
            diagnosis: 'Patología renal',
            headDoctor: { fullName: 'Toutein', speciality: 'Nefrología' },
            observations: '',
          },
        ],
      },
      {
        id: 7,
        roomNumber: 24,
        title: 'Habitación 24',
        cards: [],
      },
    ],
  };

  const [controlledBoard, setBoard] = useState(DefaultBoardData);
  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const addNewCard = (id) => {
    const filteredBoard = controlledBoard.columns.filter((x) => x.id === id);
    if (filteredBoard.length > 0) {
      filteredBoard[0].cards.push({
        id: Date.now(),
        title: 'Test Sidebar',
        date: '24/7/20',
        priority: 'Argent',
        img: '',
        company: 'Pixelstrap, New york',
        rate: '+5',
        customer_img1: '',
        customer_img2: '',
        customer_img3: '',
      });
    }
    setBoard({ ...controlledBoard });
  };

  return (
    <div className="container-fluid jkanban-container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  <h5>{'Salas HPSJ'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {
                      'Manejo de Sala de HPSJ: gestión de habitaciones y camas; estado de los pacientes; diagnósticos; médico de cabecera; observaciones. Posibilidad de cruzar datos entre pacientes de la Sala y pacientes de Co-Med.'
                    }
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <button
                      className="btn btn-primary"
                      // onClick={() => setIsEditing(!isEditing)}
                    >
                      <i className="icofont icofont-bed-patient mr-2"></i>
                      Agregar Habitación
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              {controlledBoard && controlledBoard.columns.length > 0 ? (
                <div id="demo1">
                  <div className="kanban-container">
                    <div className="kanban-board">
                      <main className="kanban-drag">
                        <Board
                          allowRemoveLane
                          allowRenameColumn
                          allowRemoveCard
                          onCardDragEnd={handleCardMove}
                          allowAddCard={{ on: 'top' }}
                          renderColumnHeader={({ title, id }) => (
                            <div key={id} className="mb-4">
                              <h6>
                                {title}
                                <a
                                  href="#javascript"
                                  className="f-right f-20 txt-danger"
                                  title="Borrar Sala"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                                <a
                                  href="#javascript"
                                  className="f-right f-20 txt-secondary mr-2"
                                  title="Agregar Cama"
                                  onClick={() => addNewCard(id)}
                                >
                                  <i className="icofont icofont-bed-patient"></i>
                                </a>
                              </h6>
                            </div>
                          )}
                          renderCard={(bedInfo) => (
                            <div
                              className="kanban-item"
                              key={bedInfo.roomId + '-' + bedInfo.id}
                            >
                              <a className="kanban-box" href="#javascript">
                                <span
                                  className={`badge ${
                                    bedInfo.patient?.state === 'estable'
                                      ? 'badge-primary'
                                      : 'badge-danger'
                                  } f-right`}
                                >
                                  {bedInfo.patient?.state}
                                </span>
                                <h5 className="text-muted">
                                  <i className="icofont icofont-bed-patient"></i>{' '}
                                  Cama {bedInfo.bedNUmber}
                                </h5>
                                <p>
                                  <b>Ingreso:</b>{' '}
                                  {bedInfo.admissionDate?.toLocaleString('es', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                                  })}{' '}
                                  hs
                                </p>
                                <hr />
                                <div className="text-muted">
                                  <p title="Paciente" className="mb-2">
                                    <i className="icofont icofont-ui-user"></i>{' '}
                                    <b>Paciente: </b>
                                    {`${bedInfo.patient?.fullName} (${bedInfo.patient?.age})`}
                                    {bedInfo.patient?.isClinicPatient && <img
                                      className="ml-2"
                                      style={{ width: 30, height: 25 }}
                                      src={logo}
                                      alt=""
                                      title="Es paciente Co-Med"
                                    />}
                                  </p>
                                  <p title="Diagnóstico" className="mb-2">
                                    <i className="icofont icofont-prescription"></i>{' '}
                                    <b>Diagnóstico: </b>
                                    {bedInfo.diagnosis}
                                  </p>
                                  <p title="Médico Cabecera" className="mb-2">
                                    <i className="icofont icofont-doctor"></i>{' '}
                                    <b>Médico Cabecera: </b>
                                    {bedInfo.headDoctor?.fullName}
                                  </p>
                                  <p title="Especialidad" className="mb-2">
                                    <i className="icofont icofont-stethoscope-alt"></i>{' '}
                                    <b>Especialidad: </b>
                                    {bedInfo.headDoctor?.speciality}
                                  </p>
                                  <h6 className="mt-2">Observaciones:</h6>
                                  <p>{bedInfo.observations}</p>
                                </div>
                                <hr />
                                <div className="d-flex mt-3">
                                  <ul className="list">
                                    <li>
                                      <i className="icofont icofont-bed-patient"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-comments-o"></i>2
                                    </li>
                                    <li>
                                      <i className="fa fa-paperclip"></i>2
                                    </li>
                                    <li>
                                      <i className="fa fa-eye"></i>
                                    </li>
                                  </ul>
                                </div>
                              </a>
                            </div>
                          )}
                        >
                          {controlledBoard}
                        </Board>
                      </main>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-md-12 text-center m-50">
                  <img className="img-fluid" src={notFoundImg} alt="" />
                  <br />
                  <span className="txt-info">
                    No hay información de salas cargadas...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InteractiveRooms;
