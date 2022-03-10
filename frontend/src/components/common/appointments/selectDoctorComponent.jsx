import React, { useState, useEffect }  from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import * as patientService from '../../../services/patient.service';

const SelectDoctorComponent = ({ appointmentData}) => {
  const { register, errors } = useForm();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(patientService.getAllPatients());
  }, []);

  return (
    <Form className="form-bookmark needs-validation ">
      <div className="form-row m-50">
        <p className="text-muted f-12 col-md-12">
          Ingrese el nombre o DNI para buscar al doctor.
        </p>
        <FormGroup className="col-md-4">
          <Label>{'Doctor'}</Label>
          <Typeahead
            id="doctor"
            name="doctor"
            options={patients}
            labelKey="name"
            filterBy={['nationalId', 'healthRecordId']}            
            minLength={3}
            value={appointmentData.doctorName}
            innerRef={register({ required: true })}
          />
          <span style={{ color: 'red' }}>
            {errors.doctor && 'Debe ingresar el doctor'}
          </span>
        </FormGroup>
      </div>
    </Form>
  );
};

export default SelectDoctorComponent;
