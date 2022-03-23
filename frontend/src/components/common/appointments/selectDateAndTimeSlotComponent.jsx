import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import moment from 'moment';

import { setDataAppointmentForm } from '../../../redux/appointments/actions';
import * as appointmentService from '../../../services/appointment.service';

const SelectDateAndTimeSlotComponent = forwardRef(({ jumpToStep }, ref) => {
  registerLocale('es', es);

  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();

  // const [startTime, setStartTime] = useState(appointment.startTime || null);
  // const [endTime, setEndTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState({});
  const [startDate, setStartDate] = useState(
    appointment.start ? appointment.start : null
  );

  const [appointmentsSessions, setAppointmentsSessions] = useState([]);
  useEffect(() => {
    const sessions = appointmentService.getAppointmentSessions();
    setAppointmentsSessions(sessions);
    if (appointment.startTime) {
      sessions.forEach((session) => {
        const activeSlot = session.slots.filter(
          (slot) =>
            slot.startTime.getHours() === appointment.startTime.getHours() &&
            slot.startTime.getMinutes() === appointment.startTime.getMinutes()
            // && slot.available
        );
        if (activeSlot && activeSlot.length > 0) setSelectedSlot(activeSlot[0]);
      });
    }
  }, []);

  const handleAppDateChange = (date) => {
    setStartDate(date);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleSlotClick = (e, slot) => {
    e.preventDefault();
    if (!slot.available) return;

    setSelectedSlot(slot);
    // setStartTime(slot.timeSlotStart);
    // setEndTime(slot.timeSlotEnd);
    document.querySelectorAll('.slotButton').forEach((item) => {
      item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  useImperativeHandle(ref, () => ({
    isValidated() {
      if (!startDate) {
        setError('startDate', {});
        return false;
      } else {
        clearErrors('startDate');
      }
      if (!selectedSlot) {
        setError('startTime', {});
        return false;
      } else {
        clearErrors('startTime');
      }

      if (!selectedSlot.available) {
        setError('slotNotAvailable', {});
        return false;
      } else {
        clearErrors('slotNotAvailable');
      }

      dispatch(
        setDataAppointmentForm({
          start: startDate,
          end: startDate,
          startTime: selectedSlot.startTime,
          endTime: selectedSlot.endTime,
        })
      );
      return true;
    },
  }));

  const isActiveSlot = (slot) => {
    // return slot.timeSlotStart.getHours() === startTime.getHours() &&
    //   slot.timeSlotStart.getMinutes() === startTime.getMinutes() && slot.available;
    return slot.id === selectedSlot.id;
  };

  return (
    <Form className="form-bookmark needs-validation">
      <div className="form-row m-50">
        <FormGroup className="col-md-12">
          <div className="row">
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
                </u>
              </mark>
            </p>
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
                innerRef={register({ required: true })}
              />
              <span style={{ color: 'red' }}>
                {errors.startDate && 'Debe seleccioner el día para el turno.'}
              </span>
            </div>
            <div className="col-md-6">
              <Label>{'Hora'}</Label>
              <div className="">
                {appointmentsSessions.map((session, index) => (
                  <div key={index}>
                    <p className="text-center mt-2">{session.sessionName}</p>
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
                          slot.startTime.toLocaleTimeString('es', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          })
                        ) : (
                          <s>
                            {slot.startTime.toLocaleTimeString('es', {
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
              <span style={{ color: 'red' }}>
                {errors.startTime && 'Debe seleccioner la hora para el turno.'}
                {errors.slotNotAvailable &&
                  'El turno seleccionado no se encuentra disponible.'}
              </span>
            </div>
          </div>
        </FormGroup>
      </div>
    </Form>
  );
});

export default SelectDateAndTimeSlotComponent;
