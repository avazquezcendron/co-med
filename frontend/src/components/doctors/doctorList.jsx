import React, { Fragment, useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from 'reactstrap';
import { translate } from 'react-switch-lang';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { PlusCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import moment from 'moment';

import defaultuser from '../../assets/images/user/user.png';
import defaultBg from '../../assets/images/other-images/auth-bg-2.png';
import notFoundImg from '../../assets/images/search-not-found.png';
import Breadcrumb from '../common/breadcrumb';
import {
  doctorGetAllWatcher,
  doctorInitialize,
  doctorsInitialize,
  doctorChangeStatustWatcher,
} from '../../redux/doctors/actions';
import { LOADED, SUCCEEDED } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as doctorService from '../../services/doctor.service';
import { setDataAppointmentForm } from '../../redux/appointments/actions';
import AppointmentModalComponent from '../common/appointments/appointmentModalComponent';

const DoctorList = (props) => {
  registerLocale('es', es);
  const { doctors, status } = useSelector((store) => store.Doctors);
  const { status: doctorStoreStatus } = useSelector((store) => store.Doctor);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [doctor, setDoctor] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [appointmentsSessions, setAppointmentsSessions] = useState([]);

  const [appointmentModal, setAppointmentModal] = useState(false);
  const appointmentModalToggle = () => {
    setAppointmentModal(!appointmentModal);
  };

  const [modal, setModal] = useState(false);
  const modalToggle = (patient) => {
    if (modal) {
      setDoctor({});
      setStartDate(null);
      setSelectedSlot({});
      setAppointmentsSessions([]);
    }
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(doctorGetAllWatcher());
    return () => {
      dispatch(doctorsInitialize());
    };
  }, []);

  useEffect(() => {
    if (startDate && doctor.id) {
      doctorService
        .getDoctorSessions(doctor.id, startDate, loggedUser)
        .then((sessions) => {
          let drSessions = sessions;
          setAppointmentsSessions(drSessions);
          const startTime = moment(startDate);
          if (startTime) {
            drSessions.forEach((session) => {
              const activeSlot = session.slots.filter((slot) =>
                moment(slot.startTime).isSame(startTime)
              );
              if (activeSlot && activeSlot.length > 0)
                setSelectedSlot(activeSlot[0]);
            });
          }
        });
    }
  }, [startDate]);

  useEffect(() => {
    if (doctorStoreStatus === SUCCEEDED) dispatch(doctorGetAllWatcher());
  }, [doctorStoreStatus]);

  const handleDoctorChangeStatusClick = (doctor) => {
    SweetAlert.fire({
      title: 'Atención!',
      text: `Se cambiará el estado del doctor "${doctor.fullName}" a "${
        doctor.status === 'active' ? 'Inactivo' : 'Activo'
      }".`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(doctorChangeStatustWatcher(doctor));
      }
    });
  };

  const handleAppDateChange = (date) => {
    setStartDate(date);
  };

  const handleSlotClick = (e, slot) => {
    e.preventDefault();
    if (!slot.available) {
      setSelectedSlot({});
      return;
    }

    setSelectedSlot(slot);
    document.querySelectorAll('.slotButton').forEach((item) => {
      item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  const isActiveSlot = (slot) => {
    return slot.id === selectedSlot.id;
  };

  const handleCheckAvailabilityClick = (row) => {
    setDoctor(row);
    modalToggle();
  };

  const handleNewAppointment = () => {
    dispatch(
      setDataAppointmentForm({
        new: true,
        doctor: doctor,
        start: new Date(
          startDate.setHours(
            new Date(selectedSlot.startTime).getHours(),
            new Date(selectedSlot.startTime).getMinutes(),
            0
          )
        ),
        end: new Date(
          startDate.setHours(
            new Date(selectedSlot.endTime).getHours(),
            new Date(selectedSlot.endTime).getMinutes(),
            0
          )
        ),
      })
    );
    appointmentModalToggle();
    modalToggle();
  };

  return (
    <Fragment>
      {status === LOADED ? (
        <Fragment>
          <Breadcrumb title={props.t('Doctors')} />
          <Container fluid={true}>
            <Row>
              <Col md="12" lg="12" xl="12">
                {/* <div className="card"> */}
                <div className="project-list">
                  <Row>
                    <Col md="6">
                      <h5>{props.t('DoctorList')}</h5>
                    </Col>
                    <Col md="6">
                      <div className="text-right">
                        <Link
                          className="btn btn-primary"
                          to={`${process.env.PUBLIC_URL}/doctor/0?mode=new`}
                          onClick={() => dispatch(doctorInitialize())}
                        >
                          {' '}
                          <PlusCircle />
                          {props.t('New')}
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* </div> */}
                {doctors.length <= 0 && (
                  <Col md="12" className="text-center m-50">
                    <img className="img-fluid" src={notFoundImg} alt="" />
                    <br />
                    <span className="txt-info">
                      No existen doctores cargados aún
                    </span>
                  </Col>
                )}
              </Col>
              {doctors.map((doctor, i) => (
                <Col md="3" lg="3" xl="3" className="box-col-3" key={i}>
                  {doctor.status === 'inactive' && (
                    <div
                      className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger"
                      title={'Estado "Inactivo"'}
                    >
                      <i className="icon-na"></i>
                    </div>
                  )}
                  {doctor.status === 'active' && (
                    <div
                      className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-success"
                      title={'Estado "Activo"'}
                    >
                      <i className="icon-check"></i>
                    </div>
                  )}
                  <Card className="custom-card features-faq product-box ribbon-vertical-right-wrapper">
                    <CardHeader className="">
                      <Media
                        body
                        className="img-fluid"
                        src={defaultBg}
                        alt=""
                      />
                    </CardHeader>
                    <div className="card-profile">
                      <Media
                        body
                        className="rounded-circle"
                        src={doctor.avatar?.downloadURL || defaultuser}
                        alt=""
                      />
                    </div>
                    {/* <ul className="card-social">
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul> */}
                    <div className="text-center profile-details">
                      <h4>{doctor.fullName}</h4>
                      <h6 className="mb-0">
                        {doctor.specialities?.join(', ')}
                      </h6>
                      <h6 className="mb-0">
                        {doctor.licenses.map(
                          (x, index) =>
                            (index !== 0 ? ' | ' : '') +
                            (x.licenseType.includes('mp') ? 'M.P. ' : 'M.N.') +
                            x.licenseId
                        )}
                      </h6>
                      <h6 className="mb-0">{doctor.age} años</h6>
                      <h6>Consultorio: {doctor.room || '-'}</h6>
                    </div>
                    <div className="faq-image product-img">
                      <CardFooter className="row">
                        <Col sm="4 col-4">
                          <h6>{'Pacientes'}</h6>
                          <h3>
                            <span className="counter">
                              {doctor.patients?.length}
                            </span>
                          </h3>
                        </Col>
                        <Col sm="4 col-4">
                          <h6>{'Turnos'}</h6>
                          <h3 className="counter">
                            {doctor.appointments?.length}
                          </h3>
                        </Col>
                        <Col sm="4 col-4">
                          <h6>{'Consultas'}</h6>
                          <h3>
                            <span className="counter">
                              {doctor.visits?.length}
                            </span>
                          </h3>
                        </Col>
                        <Col md="12">
                          <span className="text-center">
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                          </span>
                        </Col>
                      </CardFooter>
                      <div className="product-hover">
                        <ul>
                          {/* <li>
                            <a
                              href="#javascritp"
                              className="text-muted"
                              title="Agendar turno"
                            >
                              <i className="icon-calendar"></i>
                            </a>
                          </li> */}
                          <li>
                            <a
                              href="#javascritp"
                              className="text-muted"
                              title="Consultar disponibilidad de turnos"
                              onClick={() =>
                                handleCheckAvailabilityClick(doctor)
                              }
                            >
                              <i className="icofont icofont-wall-clock"></i>
                            </a>
                          </li>
                          <li>
                            <Link
                              className="text-muted"
                              title="Ver detalles"
                              to={`${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=browse`}
                            >
                              <i className="icon-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-muted"
                              title="Editar"
                              to={`${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=edit`}
                            >
                              <i className="icon-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#javascritp"
                              className={
                                doctor.status === 'active'
                                  ? 'txt-danger'
                                  : 'txt-success'
                              }
                              title={
                                doctor.status === 'active'
                                  ? 'Desactivar'
                                  : 'Activar'
                              }
                              onClick={() =>
                                handleDoctorChangeStatusClick(doctor)
                              }
                            >
                              <i
                                className={`icon-${
                                  doctor.status === 'active' ? 'trash' : 'plus'
                                }`}
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Modal isOpen={modal} toggle={modalToggle} size="lg">
              <ModalHeader toggle={modalToggle}>
                Consulta Disponibilidad Horaria - {doctor.fullName}
              </ModalHeader>
              <ModalBody>
                <div className="card">
                  <div className="row">
                    {startDate ? (
                      <p className="text-muted col-md-12">
                        * Turnos disponibles para el{' '}
                        <mark>
                          <u>
                            {startDate.toLocaleDateString('es-AR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </u>{' '}
                          con el doctor/a {doctor.fullName}
                        </mark>
                      </p>
                    ) : (
                      <p className="text-muted col-md-12">
                        <mark>
                          * Indique una fecha en el calendario para consultar
                          los horarios disponibles.
                        </mark>
                      </p>
                    )}
                    <div className="col-md-6">
                      <Label>{'Día'}</Label>
                      <DatePicker
                        name="startDate"
                        className="form-control digits"
                        placeholderText="Seleccionar una fecha"
                        selected={startDate}
                        minDate={new Date()}
                        // filterDate={isWeekday}
                        todayButton="Hoy"
                        inline
                        locale="es"
                        dateFormat="dd/MM/yyyy"
                        onChange={handleAppDateChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <Label>{'Hora'}</Label>
                      {startDate && (
                        <div className="">
                          {appointmentsSessions.map((session, index) => (
                            <div key={index}>
                              <p className="text-center mt-2">
                                {session.sessionName}
                              </p>
                              {session.slots.map((slot, index) => (
                                <button
                                  key={index}
                                  className={`btn btn-outline-primary btn-xs m-5 slotButton ${
                                    slot.available ? '' : 'disabled'
                                  } ${isActiveSlot(slot) ? 'active' : ''}`}
                                  type="button"
                                  onClick={(e) => handleSlotClick(e, slot)}
                                >
                                  {slot.available ? (
                                    new Date(slot.startTime).toLocaleTimeString(
                                      'es',
                                      {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: false,
                                      }
                                    )
                                  ) : (
                                    <s>
                                      {new Date(
                                        slot.startTime
                                      ).toLocaleTimeString('es', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: false,
                                      })}
                                    </s>
                                  )}
                                </button>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 offset-md-6">
                      {selectedSlot.startTime && (
                        <button
                          href="#javascript"
                          className="btn btn-primary pull-right"
                          onClick={handleNewAppointment}
                          title={`Cargar nuevo turno con ${doctor.fullName} en este día
                            y horario.`}
                        >
                          <i className="fa fa-plus mr-1"></i> Nuevo turno
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ModalBody>
            </Modal>
            <AppointmentModalComponent
              history={props.history}
              appointmentModal={appointmentModal}
              appointmentModalToggle={appointmentModalToggle}
            />
          </Container>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default translate(DoctorList);
