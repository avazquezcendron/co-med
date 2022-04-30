import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import SweetAlert from 'sweetalert2';
import { toast } from 'react-toastify';
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import moment from 'moment';

import { BasicCalendars } from '../../constant';
import {
  getAppointmentsWatcher,
  saveAppointmentWatcher,
  setDataAppointmentForm,
} from '../../redux/appointments/actions';
import * as appointmentService from '../../services/appointment.service';
import AppointmentModalComponent from '../common/appointments/appointmentModalComponent';
import Loader from '../common/loader';
import { LOADED, SUCCEEDED, FAILED } from '../../redux/statusTypes';

const Calender = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const query = useQuery();
  const filter = query.get('filter');
  const { appointments, status } = useSelector((store) => store.Appointments);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [appointmentsConfig, setAppointmentsConfig] = useState([]);
  const [appointmentConfig, setAppointmentConfig] = useState({});
  const [slotDuration, setslotDuration] = useState('');
  const [businessHours, setbusinessHours] = useState([]);
  const [filterSidebar, setFilterSidebar] = useState(true);
  const [sidebaron, setSidebaron] = useState(true);

  const [appointmentModal, setAppointmentModal] = useState(false);
  const appointmentModalToggle = () => {
    setAppointmentModal(!appointmentModal);
  };

  useEffect(() => {
    appointmentService.getAppointmentSlotsConfig(loggedUser).then((data) => {
      setAppointmentsConfig(data);
      const appointmentsConfigGeneral = data.filter((x) => !x.doctor);
      setAppointmentConfig(
        appointmentsConfigGeneral.length > 0 ? appointmentsConfigGeneral[0] : {}
      );
    });
  }, []);

  useEffect(() => {
    dispatch(getAppointmentsWatcher());
  }, [dispatch]);

  useEffect(() => {
    if (appointmentConfig.id) {
      dispatch(getAppointmentsWatcher(appointmentConfig.doctor?.id));
      const { slotHours, slotMinutes } = appointmentConfig;
      setslotDuration(slotHours.toString().padStart(2, '0') + ':' + slotMinutes.toString().padStart(2, '0') + ':00');
      setbusinessHours(appointmentService.getBussinesHoursBySlot(appointmentConfig));
    }
  }, [appointmentConfig]);

  const handleNewAppointment = (calenderData) => {
    if (selectAllow(calenderData)) {
      dispatch(
        setDataAppointmentForm({
          start: calenderData?.start,
          end: calenderData ?.end,
          doctor: appointmentConfig.doctor,
          new: true,
        })
      );
      appointmentModalToggle();
    }
  };

  const selectAllow = (selectInfo) => {
    if (moment(selectInfo.start).isBefore(moment())) {
      return false;
    }
    return true;
  };

  const handleAppointmentClick = (eventClick) => {
    if (eventClick.event.id) {
      dispatch(
        setDataAppointmentForm({
          ...eventClick.event.extendedProps,
          start: eventClick.event.start,
          end: eventClick.event.end,
          id: eventClick.event.id,
          title: eventClick.event.title,
        })
      );
      appointmentModalToggle();
    }
  };

  const handleEventOverlap = (stillEvent, movingEvent) => {
    if (!stillEvent.extendedProps.doctor || !stillEvent.extendedProps.patient)
      return true;
    return (
      movingEvent.extendedProps.doctor.id !==
        stillEvent.extendedProps.doctor.id &&
      movingEvent.extendedProps.patient.id !==
        stillEvent.extendedProps.patient.id
    );
  };

  const handleEventDrop = (info) => {
    if (
      selectAllow(info.event) &&
      (info.event.extendedProps.isActive || info.event.extendedProps.isExpired)
    ) {
      SweetAlert.fire({
        title: 'Atención',
        text: `Está a punto de reprogramar el turno para el día ${info.event.start.toLocaleDateString(
          'es-AR',
          {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        )} a las ${info.event.start.toLocaleTimeString('es', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        })}hs`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          dispatch(
            saveAppointmentWatcher({
              ...info.event.extendedProps,
              start: info.event.start,
              end: info.event.end,
              id: info.event.id,
              title: info.event.title,
            })
          );
        } else {
          info.revert();
        }
      });
    } else {
      info.revert();
    }
  };

  const handleCalendarEventMount = (info) => {
    let bgColor = info.el.style.backgroundColor;
    let txtColor = info.el.style.color;
    let txtDecoration = info.el.style.textDecoration;
    let title = info.event.title;

    const isListView = ['listDay', 'listWeek', 'listMonth'].includes(
      info.view.type
    );
    const dayGridMonthView = info.view.type === 'dayGridMonth';

    if (info.event.extendedProps.isExpired) {
      bgColor = isListView || dayGridMonthView ? bgColor : 'gray';
      txtColor = isListView || dayGridMonthView ? 'gray' : 'white';
      title = 'TURNO EXPIRADO. ' + title;
    } else if (info.event.extendedProps.isCancelled) {
      bgColor = isListView || dayGridMonthView ? bgColor : 'red';
      txtColor = isListView || dayGridMonthView ? 'red' : 'white';
      title = 'TURNO CANCELADO. ' + title;
      txtDecoration = 'line-through';
    } else if (info.event.extendedProps.isDone) {
      bgColor = isListView || dayGridMonthView ? bgColor : 'lightgreen';
      txtColor = isListView || dayGridMonthView ? 'lightgreen' : 'white';
      title = 'TURNO FINALIZADO. ' + title;
    } else {
      title = title ? 'TURNO ACTIVO. ' + title : '';
    }

    if (isListView) {
      info.el.style.cursor = 'pointer';
      var dotEl = info.el.getElementsByClassName('fc-list-event-dot')[0];
      if (dotEl) {
        dotEl.style.borderColor = txtColor;
      }
    } else if (dayGridMonthView) {
      var dotElDayGrid = info.el.getElementsByClassName(
        'fc-daygrid-event-dot'
      )[0];
      if (dotElDayGrid) {
        dotElDayGrid.style.borderColor = txtColor;
      }
    }

    // Row styles
    info.el.style.fontWeight = 'bold';
    info.el.style.backgroundColor = bgColor;
    info.el.style.color = txtColor;
    info.el.style.textDecoration = txtDecoration;
    info.el.title = title;
  };

  const handleAppointmentsConfigChange = (selected) => {
    let appointmentConfig = selected.length > 0 ? selected[0] : {};
    setAppointmentConfig(appointmentConfig);
    if (appointmentConfig.id) onClickFilter();
  };

  const onClickFilter = () => {
    setFilterSidebar(!filterSidebar);
    if (sidebaron) {
      setSidebaron(false);
      document.querySelector('.product-wrapper').classList.add('sidebaron');
    } else {
      setSidebaron(true);
      document.querySelector('.product-wrapper').classList.remove('sidebaron');
    }
  };

  return (
    <Fragment>
      {status === LOADED || status === FAILED || status === SUCCEEDED ? (
        <div className="container-fluid product-wrapper">
          <div className="row product-grid">
            <AppointmentModalComponent
              appointmentModal={appointmentModal}
              appointmentModalToggle={appointmentModalToggle}
              // appointmentData={appointmentData}
              setAppointmentModal={setAppointmentModal}
            />
            <div className="col-md-3">
              <div className={`product-sidebar ${filterSidebar ? '' : 'open'}`}>
                <div className="filter-section">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="mb-0 f-w-600">
                        {'Seleccionar configuración de turnos'}
                        <span className="pull-right">
                          <i
                            className="fa fa-chevron-down toggle-data"
                            onClick={onClickFilter}
                          ></i>
                        </span>
                      </h6>
                    </div>
                    <div className="left-filter">
                      <div className="card-body filter-cards-view animate-chk">
                        <div className="form-group row product-filter">
                          <div className="col-md-12">
                            <p>
                              Seleccione la configuración de turnos que se
                              utilizará para la visualización del calendario.
                              Puede utilizar una configuración general de Co-Med
                              o seleccionar una configuración específica por
                              doctor/a.
                            </p>
                            <Typeahead
                              id="appointmentsConfig"
                              name="appointmentsConfig"
                              options={appointmentsConfig}
                              labelKey={(option) => option.description}
                              filterBy={['description']}
                              clearButton
                              onChange={(selected) =>
                                handleAppointmentsConfigChange(selected)
                              }
                              selected={
                                appointmentsConfig.length > 0
                                  ? appointmentsConfig.filter(
                                      (x) => x.id === appointmentConfig.id
                                    )
                                  : null
                              }
                              renderMenuItemChildren={(option, props) => (
                                <Fragment>
                                  <Highlighter search={props.text}>
                                    {option.description}
                                  </Highlighter>
                                  <div className="mt-1">
                                    {option.sessions.map((x, index) => (
                                      <Fragment key={index}>
                                        <small className="text-muted">
                                          {`${x.sessionType}: ${
                                            x.startTime
                                          } - ${x.endTime} | ${x.daysOfWeek
                                            .map((y, index) =>
                                              y === 1 ? days[index] : ''
                                            )
                                            .filter((x) => x)}`}
                                        </small>
                                        <br />
                                      </Fragment>
                                    ))}
                                    {!option.doctor && (
                                      <span className="badge badge-primary">
                                        Configuración general Co-Med
                                      </span>
                                    )}
                                  </div>
                                </Fragment>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-12 product-wrapper-grid`}>
              <div className="card">
                <div className="card-header">
                  <div className="pull-right">
                    <button
                      type="button"
                      className="btn btn-primary ml-4"
                      onClick={handleNewAppointment}
                    >
                      <i className="fa fa-plus mr-2"></i>
                      {'Nuevo Turno'}
                    </button>
                  </div>
                  <h5>{BasicCalendars}</h5>
                </div>
                <div className="card-body">
                  {appointmentConfig.description ? (
                    <p className="mb-5">
                      <mark>
                        <i className="fa fa-info-circle mr-1"></i>
                        Configuración de turnos seleccionada: "
                        <b>{appointmentConfig.description}</b>" ->{' '}
                        Turnos de {`${appointmentConfig.slotHours}:${appointmentConfig.slotMinutes}hs de duración. Franja horaria: `}
                        {appointmentConfig.sessions.map((x, index) => (
                          <Fragment key={index}>
                            <span className="text-muted">
                              <b>{x.sessionType}: </b>
                              {`${x.startTime} - ${x.endTime} (${x.daysOfWeek
                                .map((y, index) => (y === 1 ? days[index] : ''))
                                .filter((x) => x)}) `}
                            </span>
                          </Fragment>
                        ))}
                      </mark>
                    </p>
                  ) : (
                    <p>
                      <mark>
                        <i className="fa fa-warning mr-1"></i>
                        Debe seleccionar un configuración de turnos!
                      </mark>
                    </p>
                  )}
                  {businessHours.length > 0 ? (
                    <FullCalendar
                      initialView={
                        filter === 'todayAppointments'
                          ? 'listDay'
                          : 'timeGridWeek'
                      }
                      themeSystem="standar"
                      locale={esLocale}
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right:
                          'dayGridMonth,timeGridWeek,timeGridDay listDay listWeek listMonth',
                      }}
                      views={{
                        listDay: { buttonText: 'Agenda del día' },
                        listWeek: { buttonText: 'Agenda semanal' },
                        listMonth: { buttonText: 'Agenda mensual' },
                      }}
                      weekends={true}
                      businessHours={businessHours}
                      slotDuration={slotDuration}
                      // slotLabelInterval={'01:00'}//{slotDuration}
                      slotMinTime={'06:00:00'}
                      //   slotMaxTime={'22:00:00'}
                      nowIndicator={true}
                      weekNumbers={true}
                      navLinks={true} // can click day/week names to navigate views
                      rerenderDelay={10}
                      eventDurationEditable={true}
                      editable={true}
                      droppable={true}
                      dayMaxEvents={true}
                      dayMaxEventRows={2}
                      eventOverlap={handleEventOverlap}
                      eventDrop={handleEventDrop}
                      eventResize={handleEventDrop}
                      selectable={true}
                      selectAllow={selectAllow}
                      selectConstraint={'businessHours'}
                      selectMirror={true}
                      select={handleNewAppointment}
                      plugins={[
                        listPlugin,
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      events={[
                        ...appointments,
                        {
                          groupId: 'testGroupId',
                          startTime: businessHours[0]?.startTime,
                          endTime: businessHours[0]?.endTime,
                          display: 'background',
                        },
                        {
                          groupId: 'testGroupId2',
                          startTime: businessHours[1]?.startTime,
                          endTime: businessHours[1]?.endTime,
                          display: 'background',
                        },
                      ]}
                      eventClick={handleAppointmentClick}
                      eventDidMount={handleCalendarEventMount}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default Calender;
