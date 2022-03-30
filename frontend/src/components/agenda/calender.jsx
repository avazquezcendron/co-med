import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import SweetAlert from 'sweetalert2';
import { toast } from 'react-toastify';

import { BasicCalendars } from '../../constant';
import { getAppointmentsWatcher } from '../../redux/appointments/actions';
import * as appointmentService from '../../services/appointment.service';
import AppointmentModalComponent from '../common/appointments/appointmentModalComponent';

const Calender = () => {
  const appointments = useSelector((store) => store.Appointments.appointments);
  const dispatch = useDispatch();

  const slotsConfig = appointmentService.getAppointmentSlotsConfig();
  const { configSlotHours, configSlotMinutes } = slotsConfig;
  const slotDuration =
    configSlotHours.toString() + ':' + configSlotMinutes.toString();
  const businessHours = appointmentService.getBussinesHours();

  // const [appointments, setAppointments] = useState([]);
  const [appointmentData, setAppointmentData] = useState({});
  const [appointmentModal, setAppointmentModal] = useState(false);
  const appointmentModalToggle = () => {
    setAppointmentModal(!appointmentModal);
  };

  useEffect(() => {
    dispatch(getAppointmentsWatcher());
  }, [dispatch]);

  const handleNewAppointment = (appointmentData) => {
    setAppointmentData({
      // startTime: appointmentData.start,
      start: appointmentData?.start,
      end: appointmentData?.end,
      new: true,
    });
    appointmentModalToggle();
  };

  /**
   * when we click on event we are displaying event details
   */
  const handleAppointmentClick = (eventClick) => {
    setAppointmentData({
      // startTime: eventClick.event.start,
      start: eventClick.event.start,
      end: eventClick.event.end,
      title: eventClick.event.title,
      ...eventClick.event.extendedProps,
      new: false,
    });
    appointmentModalToggle();
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
        // dispatch(
        //   saveAppointmentWatcher({
        //     ...appointmentData,
        //     title: appointmentData.patient.name + ' - ' + appointmentData.mode,
        //     resourceId: appointmentData.doctor.id,
        //     id: 2,
        //   })
        // );
        toast.success('Turno reprogramado con éxito.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        info.revert();
      }
    });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <AppointmentModalComponent
            appointmentModal={appointmentModal}
            appointmentModalToggle={appointmentModalToggle}
            appointmentData={appointmentData}
            setAppointmentModal={setAppointmentModal}
          />
          <div className="col-sm-12">
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
                <FullCalendar
                  initialView="timeGridWeek"
                  themeSystem="standar"
                  locale={esLocale}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay listDay listWeek listMonth',
                  }}
                  views={{
                    listDay: { buttonText: "Agenda del día"},
                    listWeek: { buttonText: "Agenda semanal"},
                    listMonth: { buttonText: "Agenda mensual"}
                  }}
                  weekends={true}
                  businessHours={businessHours}
                  slotDuration={slotDuration}
                  slotLabelInterval={slotDuration}
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
                  selectMirror={true}
                  select={handleNewAppointment}
                  plugins={[
                    listPlugin,
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                  ]}
                  events={
                    [
                      ...appointments,
                      {
                        groupId: 'testGroupId',
                        startTime: businessHours[0].startTime,
                        endTime: businessHours[0].endTime,
                        display: 'background',
                      },
                      {
                        groupId: 'testGroupId2',
                        startTime: businessHours[1].startTime,
                        endTime: businessHours[1].endTime,
                        display: 'background',
                      },
                    ]
                  }                  
                  eventClick={handleAppointmentClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calender;
