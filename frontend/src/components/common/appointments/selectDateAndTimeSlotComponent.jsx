import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import moment from 'moment'
import * as appointmentService from '../../../services/appointment.service';

const SelectDateAndTimeSlotComponent = (props) => {
  registerLocale('es', es);
  
  const [appointmentDate, setAppointmentDate] = useState(new Date(props.appointmentData.start));

  const appointmentsSessions = appointmentService.getAppointmentSessions();

  let eventGuid = 0;
  const { register, handleSubmit, errors } = useForm();

  const handleAppDateChange = date => {
    setAppointmentDate(date);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const AddNewAppointment = (data) => {
    if (data !== '') {
      appointmentService.addAppointment({
        id: createEventId(),
        title: data.title,
        start: props.newAppointmentData.start,
        end: props.newAppointmentData.end,
      });
      props.setnewAppointmentModal(false);
    } else {
      errors.showMessages();
    }
  };

  const createEventId = () => {
    return String(eventGuid++);
  };

  const handleSlotClick = (e, slot) => {
    e.preventDefault();
    if (!slot.available)
      return;
    
    document.querySelectorAll(".slotButton").forEach((item) => {
        item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
}

  return (
    <Form
      className="form-bookmark needs-validation"
      onSubmit={handleSubmit(AddNewAppointment)}
    >
      <div className="form-row m-50">
        <FormGroup className="col-md-12">
          <div className="row">
            <p className="text-muted col-md-12">
              * Turnos disponibles para el <mark><u>{appointmentDate.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</u></mark>
            </p>
            <div className="col-md-6">
              <Label>{'Día'}</Label>
              <DatePicker
                className="form-control digits"
                placeholderText="Seleccionar una fecha"
                selected={appointmentDate}
                minDate={new Date()}
                // filterDate={isWeekday}
                todayButton="Hoy"
                inline
                locale="es"
                dateFormat="dd/MM/yyyy"
                onChange={handleAppDateChange}                
                innerRef={register({ required: true })}
              />
            </div>
            <div className="col-md-6">
              <Label>{'Hora'}</Label>
              <div className="">
                {appointmentsSessions.map((session, index) => (
                  <div key={index}>
                    <p className="text-center mt-2">{session.sessionName}</p>
                    {session.slots.map((slot, index) => (
                      <button key={index} className={`btn btn-outline-primary btn-xs m-5 slotButton ${slot.available ? '' : 'disabled'}`} type="button" onClick={(e) => handleSlotClick(e, slot)}>{slot.available ? slot.timeSlotStart : <s>{slot.timeSlotStart}</s>}</button>
                    ))}                    
                  </div>                     
                ))}
              </div>             
            </div>
          </div>
        </FormGroup>
      </div>
    </Form>
  );
};

export default SelectDateAndTimeSlotComponent;
