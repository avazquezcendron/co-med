import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'react-big-calendar/lib/sass/styles.scss';
import { BasicCalendars } from '../../constant';
import * as appointmentService from '../../services/appointment.service';
import AppointmentModalComponent from '../common/appointments/appointmentModalComponent';

const Calender = () => {


  const slotsConfig = appointmentService.getAppointmentSlotsConfig();
  const { configSlotHours, configSlotMinutes, configSlotPreparation, timeArr } = slotsConfig;

  const slotDuration = configSlotHours.toString() + ':' + configSlotMinutes.toString();

  const [appointments, setAppointments] = useState([]);
  const [appointmentData, setAppointmentData] = useState({});
  const [appointmentModal, setAppointmentModal] = useState(false);
  const appointmentModalToggle = () => {
    setAppointmentModal(!appointmentModal);
  };

  useEffect(() => {
    setAppointments(appointmentService.getAllAppointments());
  }, []);

  const businessHours = [
    // specify an array instead
    {
      daysOfWeek: [1, 2, 3, 4, 5], 
      startTime: timeArr[0].startTime, //'08:30', 
      endTime: timeArr[0].endTime,
    },
    {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: timeArr[1].startTime, //'08:30', 
      endTime: timeArr[1].endTime,
    },
  ];
  

  const handleDateSelect = (selectInfo) => {
    setAppointmentData({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      new: true
    });
    appointmentModalToggle();
  };

  /**
   * adding dragable properties to external events through javascript
   */
  const componentDidMount = () => {
    let draggableEl = document.getElementById('external-events');
    new Draggable(draggableEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        let title = eventEl.getAttribute('title');
        let id = eventEl.getAttribute('data');
        return {
          title: title,
          id: id,
        };
      },
    });
  };

  /**
   * when we click on event we are displaying event details
   */
  const eventClick = (eventClick) => {
    Swal.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Remove Event',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Swal.fire('Deleted!', 'Your Event has been deleted.', 'success');
      }
    });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <AppointmentModalComponent appointmentModal={appointmentModal} appointmentModalToggle={appointmentModalToggle} appointmentData={appointmentData} setAppointmentModal={setAppointmentModal}/>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{BasicCalendars}</h5>
              </div>
              <div className="card-body">
                {/* <Calendar
                                    localizer={localizer}
                                    scrollToTime={new Date(1970, 1, 1, 6)}
                                    defaultDate={new Date(2019, 3, 12)}
                                    onSelectEvent={event => alert(event.title)}
                                    views={allViews}
                                    events={myEventsList}
                                    eventOverlap
                                    dragRevertDuration={500}
                                    dragScroll
                                    showMultiDayTimes
                                    step={60}
                                    startAccessor="start"
                                    endAccessor="end"
                                /> */}

                <FullCalendar
                  initialView="timeGridWeek"
                  themeSystem="standar"
                  locale={esLocale}
                  //   customButtons={{
                  //     myCustomButton: {
                  //       text: 'custom',
                  //       click: function () {
                  //         alert('clicked the custom button!');
                  //       },
                  //     },
                  //   }}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                  }}
                  weekends={false}
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
                  selectable={true}
                  selectMirror={true}
                  select={handleDateSelect}
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
                        startTime: timeArr[0].startTime,
                        endTime: timeArr[0].endTime,
                        display: 'background',
                      },
                      {
                        groupId: 'testGroupId2',
                        startTime: timeArr[1].startTime,
                        endTime: timeArr[1].endTime,
                        display: 'background',
                      },
                    ]
                    // 'https://fullcalendar.io/api/demo-feeds/events.json?overload-day'
                  }
                  //   ref={calendarComponentRef}
                  //   weekends={calendarWeekends}
                  //   eventDrop={drop}
                  //   eventReceive={eventReceive}
                  //   eventTimeFormat={{
                  //     // like '14:30:00'
                  //     hour: 'numeric',
                  //     minute: '2-digit',
                  //     meridiem: 'short',
                  //   }}
                  eventClick={eventClick}
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
