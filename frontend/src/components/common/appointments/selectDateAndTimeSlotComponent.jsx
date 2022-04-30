import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import moment from 'moment';

import { setDataAppointmentForm } from '../../../redux/appointments/actions';
import * as doctorService from '../../../services/doctor.service';

const SelectDateAndTimeSlotComponent = forwardRef(({ jumpToStep }, ref) => {
  registerLocale('es', es);

  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [selectedSlot, setSelectedSlot] = useState({});
  const [startDate, setStartDate] = useState(
    appointment.start ? appointment.start : new Date()
  );

  const [appointmentsSessions, setAppointmentsSessions] = useState([]);
  useEffect(() => {
    doctorService.getDoctorSessions(appointment.doctor.id, startDate, loggedUser).then((sessions) => {
      setAppointmentsSessions(sessions);
      const startTime = moment(appointment.start);
      if (startTime) {
        sessions.forEach((session) => {
          const activeSlot = session.slots.filter(
            (slot) =>
            moment(slot.startTime).isSame(startTime)
            // && slot.available
          );
          if (activeSlot && activeSlot.length > 0)
            setSelectedSlot(activeSlot[0]);
        });
      }
    });
  }, [startDate]);

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
      return true;
    },
  }));

  const isActiveSlot = (slot) => {
    return slot.id === selectedSlot.id;
  };

  return (
    <Form className="form-bookmark needs-validation">
      <div className="form-row m-50">
        <FormGroup className="col-md-12">
          <div className="row">
            {startDate && (
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
                  con el doctor/a {appointment.doctor.fullName}
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
                          new Date(slot.startTime).toLocaleTimeString('es', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          })
                        ) : (
                          <s>
                            {new Date(slot.startTime).toLocaleTimeString('es', {
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
