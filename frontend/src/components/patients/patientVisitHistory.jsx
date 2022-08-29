import React, { Fragment, useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useLocation, useParams } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Collapse } from 'reactstrap';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import es from 'date-fns/locale/es';
import { Star, Circle } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import notFoundImg from '../../assets/images/search-not-found.png';
import {
  patientGetVisitsWatcher,
  patientInitializeVisitForm,
  patientVisitsReset,
} from '../../redux/patients/actions';
import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import PatientVisitForm from './patientVisitForm';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientVisitHistory = (props) => {
  registerLocale('es', es);

  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const { patient, status: patientStatus } = useSelector(
    (store) => store.Patient
  );
  const { visits, status: visitsStatus } = useSelector((store) => store.Visits);
  const { visit, status: visitStatus } = useSelector((store) => store.Visit);
  const dispatch = useDispatch();

  const [currentVisit, setCurrentVisit] = useState({});

  const [isVisitHistory, setisVisitHistory] = useState(true);
  const [isVisitNewForm, setisVisitNewForm] = useState(true);

  const [modalVisit, setModalVisit] = useState(false);
  const modalVisitToggle = () => {
    setModalVisit(!modalVisit);
  };

  const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [startDateApplied, setstartDateApplied] = useState(null);
  const [endDateApplied, setendDateApplied] = useState(null);

  useEffect(() => {
    if (
      (id !== 0 && visitsStatus !== LOADED) ||
      (id !== 0 && visitStatus === SUCCEEDED) ||
      (id !== patient.id && patientStatus === LOADED)
    ) {
      dispatch(patientGetVisitsWatcher(id));
    }

    setisVisitHistory(visitStatus !== LOADED);
  }, [id, visitStatus]);

  useEffect(() => {
    return () => {
      dispatch(patientVisitsReset());
    };
  }, []);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setstartDate(start);
    setEndDate(end);
  };

  // eslint-disable-next-line
  const setEndDate = (date) => {
    setendDate(date);
  };

  const handleNewVisitClick = (e) => {
    e.preventDefault();
    let visitData = {};
    visitData.doctor = loggedUser.user.doctor;
    visitData.createdAt = new Date();
    visitData.healthRecord = patient.healthRecord;
    visitData.studyOrders = [];
    visitData.laboratoryOrders = [];
    visitData.prescriptions = [];
    dispatch(patientInitializeVisitForm(visitData));
  };

  const handleVisitClick = (e, visitData) => {
    e.preventDefault();
    setCurrentVisit(visitData);
    modalVisitToggle();
  };

  const handleApplyFilter = (e) => {
    e.preventDefault();
    let endDateAux = endDate || startDate;
    setstartDateApplied(startDate);
    setendDateApplied(endDateAux);
    dispatch(
      patientGetVisitsWatcher(id, startDate, moment(endDateAux).add(1, 'd'))
    );
  };

  const handleClearFilter = () => {
    setstartDateApplied(null);
    setendDateApplied(null);
    dispatch(patientGetVisitsWatcher(id, null, null));
  };

  return (
    <Fragment>
      {visitsStatus === LOADED ||
      visitStatus === LOADED ||
      visitsStatus === SUCCEEDED ||
      visitStatus === SUCCEEDED ||
      visitsStatus === FAILED ||
      visitStatus === FAILED ||
      (mode === 'new' && visitsStatus !== LOADING) ? (
        <Fragment>
          <div className="card">
            <div className="card-header">
              <div className="row mb-2 ">
                <div className="col-md-9">
                  <h4 className="card-title mb-0">Historial de Consultas</h4>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-link pl-0 pull-right"
                    onClick={() => setisVisitHistory(!isVisitHistory)}
                    data-toggle="collapse"
                    data-target="#collapseicon3"
                    aria-expanded={isVisitHistory}
                    aria-controls="collapseicon3"
                  >
                    {''}
                  </button>
                </div>
              </div>
            </div>
            <Collapse isOpen={isVisitHistory}>
              {/* {visitStatus !== LOADED || true ? ( */}
              <div className="row">
                <div className="col-md-3">
                  <div className=" xs-mt-search">
                    <div className=" faq-header">
                      <h5>{'Filtrar consultas por fecha'}</h5>
                      <span
                        className="text-muted f-12 m-t-5"
                        style={{
                          letterSpacing: 1,
                        }}
                      >
                        {
                          'Por defecto, sólo se mostrarán las consultas de los últimos 3 meses.'
                        }
                      </span>
                      <br />
                      <span
                        className="text-muted f-12 m-t-5"
                        style={{
                          letterSpacing: 1,
                        }}
                      >
                        {
                          'Seleccione un día determinado o un rango de fechas para filtrar las consultas.'
                        }
                      </span>
                    </div>
                    <div className=" faq-body">
                      <div
                        className="datepicker-here m-b-10"
                        data-language="es"
                      >
                        <DatePicker
                          className="form-control digits"
                          // selected={startDate}
                          onChange={handleChange}
                          locale="es"
                          inline
                          selectsRange
                          startDate={startDate}
                          endDate={endDate}
                        />
                      </div>
                      {/* <div className="faq-form">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Buscar por doctor/a.."
                        />
                        <Search className="search-icon" />
                      </div> */}
                      <button
                        className="btn btn-primary ml-5"
                        onClick={handleApplyFilter}
                      >
                        {'Aplicar filtro'}
                      </button>
                      <br />
                      {startDateApplied && endDateApplied && (
                        <p className="m-4">
                          <mark>
                            <i className="fa fa-info-circle mr-1"></i>
                            Filtro aplicado: "
                            <b>
                              {startDateApplied.toLocaleDateString('es') +
                                ' - ' +
                                endDateApplied.toLocaleDateString('es')}
                            </b>
                            "
                          </mark>
                          <a
                            href="#javascript"
                            className="ml-2"
                            title="Limpiar Filtro"
                            onClick={handleClearFilter}
                          >
                            <i className="fa fa-times ml-1"></i>
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {loggedUser.user.isDoctor && (
                      <div className="col-md-12">
                        {visitStatus !== LOADED && (
                          <button
                            className="btn btn-primary pull-right m-4"
                            onClick={(e) => handleNewVisitClick(e)}
                          >
                            {'Nueva Consulta'}
                          </button>
                        )}
                      </div>
                    )}
                    <div className="col-md-12">
                      <VerticalTimeline layout={'1-column'} className="m-b-30">
                        {visits.length > 0 ? (
                          visits.map((_visit, index) =>
                            !_visit.firstVisit ? (
                              <VerticalTimelineElement
                                key={_visit.id}
                                className="vertical-timeline-element--work"
                                animate={true}
                                // date="25/01/2021 14:00 PM"
                                icon={<Circle />}
                              >
                                <div className="blog-box blog-list row">
                                  <div className="col-md-8">
                                    <div className="blog-details">
                                      <div className="blog-date digits">
                                        <span>
                                          {new Date(_visit.createdAt).getDate()}
                                        </span>{' '}
                                        {new Date(
                                          _visit.createdAt
                                        ).toLocaleDateString('es-AR', {
                                          // timeZone: 'UTC',
                                          year: 'numeric',
                                          month: 'long',
                                        })}
                                        ,{' '}
                                        {new Date(
                                          _visit.createdAt
                                        ).toLocaleTimeString('es', {
                                          // timeZone: 'UTC',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          hour12: false,
                                        }) + 'hs'}
                                      </div>
                                      <h6>{_visit.reason} </h6>
                                      <div className="blog-bottom-content">
                                        <ul className="blog-social">
                                          <li className="p-r-0">
                                            {`Atendido por: ${_visit.doctor.fullName}`}
                                          </li>
                                          <li>
                                            {`${_visit.doctor.specialities.join(
                                              ', '
                                            )}`}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <button
                                      className="btn btn-primary "
                                      onClick={(e) =>
                                        handleVisitClick(e, _visit)
                                      }
                                    >
                                      <i className="fa fa-eye m-r-5"></i>
                                      {'Ver Consulta Completa'}
                                    </button>
                                  </div>
                                </div>
                              </VerticalTimelineElement>
                            ) : (
                              <VerticalTimelineElement
                                key={_visit.id}
                                iconStyle={{
                                  background: 'rgb(16, 204, 82)',
                                  color: '#fff',
                                }}
                                icon={
                                  <span
                                    title={`Primera Consulta con ${_visit.doctor.fullName}`}
                                  >
                                    <Star />
                                  </span>
                                }
                                animate={true}
                              >
                                <div className="blog-box blog-list row ribbon-vertical-right-wrapper ">
                                  <div className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-success">
                                    <i
                                      className="icon-signal"
                                      title={`Primera Consulta con ${_visit.doctor.fullName}`}
                                    ></i>
                                  </div>
                                  <div className="col-md-8 ">
                                    <div className="blog-details">
                                      <div className="blog-date digits">
                                        <span>
                                          {new Date(_visit.createdAt).getDate()}
                                        </span>{' '}
                                        {new Date(
                                          _visit.createdAt
                                        ).toLocaleDateString('es-AR', {
                                          // timeZone: 'UTC',
                                          year: 'numeric',
                                          month: 'long',
                                        })}
                                        ,{' '}
                                        {new Date(
                                          _visit.createdAt
                                        ).toLocaleTimeString('es', {
                                          // timeZone: 'UTC',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          hour12: false,
                                        }) + 'hs'}
                                      </div>
                                      <h6>{_visit.reason} </h6>
                                      <div className="blog-bottom-content">
                                        <ul className="blog-social">
                                          <li>
                                            {`Atendido por: ${_visit.doctor.fullName}`}
                                          </li>
                                          <li>
                                            {`${_visit.doctor.specialities.join(
                                              ', '
                                            )}`}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <button
                                      className="btn btn-primary "
                                      onClick={(e) =>
                                        handleVisitClick(e, _visit)
                                      }
                                    >
                                      <i className="fa fa-eye m-r-5"></i>
                                      {'Ver Consulta Completa'}
                                    </button>
                                  </div>
                                </div>
                              </VerticalTimelineElement>
                            )
                          )
                        ) : (
                          <div className="col-md-12 text-center m-50">
                            <img
                              className="img-fluid"
                              src={notFoundImg}
                              alt=""
                            />
                            <br />
                            <span className="txt-info">
                              El paciente aún no tiene consultas cargadas...
                            </span>
                          </div>
                        )}
                      </VerticalTimeline>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          {visitStatus === LOADED && !visit.id && (
            <div className="card">
              <div className="card-header">
                <div className="row mb-2 ">
                  <div className="col-md-9">
                    <h4 className="card-title mb-0">
                      {`${'Nueva consulta'} ${new Date(
                        visit.createdAt
                      ).toLocaleDateString('es-AR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}  
                      ${new Date(visit.createdAt).toLocaleTimeString('es', {
                        // timeZone: 'UTC',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })} hs`}
                    </h4>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-link pl-0 pull-right"
                      onClick={() => setisVisitNewForm(!isVisitNewForm)}
                      data-toggle="collapse"
                      data-target="#collapseicon3"
                      aria-expanded={isVisitNewForm}
                      aria-controls="collapseicon3"
                    >
                      {''}
                    </button>
                  </div>
                </div>
              </div>
              <Collapse isOpen={isVisitNewForm}>
                <div className="card-body row">
                  <PatientVisitForm />
                </div>
              </Collapse>
            </div>
          )}
          <Modal
            isOpen={modalVisit}
            toggle={modalVisitToggle}
            size="xl"
            centered
          >
            <ModalHeader toggle={modalVisitToggle}>
              {`Detalle de consulta realizada el día ${new Date(currentVisit.createdAt).toLocaleDateString('es-AR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}  
              ${new Date(currentVisit.createdAt).toLocaleTimeString('es', {
                // timeZone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
              })} hs`}
            </ModalHeader>
            <ModalBody>
                <PatientVisitForm visit={currentVisit} modalToggle={modalVisitToggle}/>
            </ModalBody>
          </Modal>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientVisitHistory;
