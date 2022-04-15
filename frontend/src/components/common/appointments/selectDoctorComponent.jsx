import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Fragment
} from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label } from 'reactstrap';
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { setDataAppointmentForm } from '../../../redux/appointments/actions';
import * as doctorService from '../../../services/doctor.service';

const SelectDoctorComponent = forwardRef(({ jumpToStep }, ref) => {
  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const dispatch = useDispatch();

  const [doctor, setDoctor] = useState(appointment.doctor || {});

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    doctorService.getAll().then((res) => setDoctors(res.data));
  }, []);

  useImperativeHandle(ref, () => ({
    isValidated() {
      if (!doctor.name) {
        if(!errors.doctor)
          setError("doctor", {});
        return false;        
      }
      return true;
    },
  }));

  const handleDoctorChange = (selected) => {
    let doctor = selected.length > 0 ? selected[0] : {};
    if (selected.length <= 0) {
      setError("doctor", {});
    } else {
      clearErrors('doctor');
    }
    setDoctor(doctor);
    dispatch(setDataAppointmentForm({ doctor: doctor }));
  };

  return (
    <Form className="form-bookmark needs-validation">
      <div className="form-row m-50">
        <p className="text-muted f-12 col-md-12">
          Ingrese el nombre o DNI para buscar al doctor.
        </p>
        <FormGroup className="col-md-4">
          <Label>{'Doctor'}</Label>
          <Typeahead
            id="doctor"
            name="doctor"
            options={doctors}
            labelKey="name"
            filterBy={['nationalId', 'healthRecordId']}
            minLength={3}
            clearButton
            onChange={(selected) => handleDoctorChange(selected)}
            selected={doctors.length > 0 ? doctors.filter((x) => x.name === doctor.name) : null}
            innerRef={register('doctor', { required: true })}
            renderMenuItemChildren={(option, props) => (
              <Fragment>
                <Highlighter search={props.text}>
                  {option.name}
                </Highlighter>
                <div className="mt-1">
                  <small className="text-muted">
                    {option.speciality}
                  </small>
                </div>
              </Fragment>
            )}
          />
          <span style={{ color: 'red' }}>
            {errors.doctor && 'Debe ingresar el doctor'}
          </span>
        </FormGroup>
      </div>
    </Form>
  );
});

export default SelectDoctorComponent;
