import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Fragment,
} from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Label } from 'reactstrap';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import * as doctorService from '../../../services/doctor.service';
import { setDataAppointmentForm } from '../../../redux/appointments/actions';

const SelectDoctorComponent = forwardRef(({ jumpToStep }, ref) => {
  const { register, errors, setError, clearErrors } = useForm();

  const appointment = useSelector((store) => store.AppointmentForm);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [doctor, setDoctor] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const doctor = appointment.doctor || loggedUser.user?.doctor || {};
    setDoctors([doctor]);
    setDoctor(doctor);
    if (loggedUser.user?.isDoctor && !loggedUser.user?.isAdmin) {
      setIsDisabled(true);
      jumpToStep(1);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    isValidated() {
      if (!doctor.id) {
        if (!errors.doctor) setError('doctor', {});
        return false;
      }
      dispatch(setDataAppointmentForm({ doctor: doctor }));
      return true;
    },
  }));

  const handleDoctorChange = (selected) => {
    let doctor = selected.length > 0 ? selected[0] : {};
    if (selected.length <= 0) {
      setError('doctor', {});
    } else {
      clearErrors('doctor');
    }
    setDoctor(doctor);
  };

  const handleSearch = (filter) => {
    setIsLoading(true);
    doctorService.getDoctorsByFilter(filter, loggedUser).then((doctors) => {
      setDoctors(doctors);
      setIsLoading(false);
    });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <Form className="form-bookmark needs-validation">
      <div className="form-row m-50">
        <p className="text-muted f-12 col-md-12">
          Ingrese el nombre, especialidad o DNI para buscar al doctor.
        </p>
        <FormGroup className="col-md-4">
          <Label>{'Doctor'}</Label>
          <AsyncTypeahead
            id="doctor"
            name="doctor"
            isLoading={isLoading}
            options={doctors}
            labelKey={(option) => option.fullName}
            filterBy={filterBy}
            minLength={3}
            onSearch={handleSearch}
            clearButton
            onChange={(selected) => handleDoctorChange(selected)}
            selected={
              doctors.length > 0
                ? doctors.filter((x) => x.id === doctor.id)
                : null
            }
            disabled={isDisabled}
            innerRef={register('doctor', { required: true })}
            renderMenuItemChildren={(option, props) => (
              <Fragment>
                <Highlighter search={props.text}>{option.fullName}</Highlighter>
                <div className="mt-1">
                  <small className="text-muted">
                    {option.specialities.join(', ')}
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
