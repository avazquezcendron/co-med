import React, { Fragment, useState, useEffect } from 'react';
import { Collapse } from 'reactstrap';
import { translate } from 'react-switch-lang';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../common/breadcrumb';
import axios from 'axios';
import {
  Bio,
  Password,
  Website,
  Save,
} from '../../../constant';
import PatientCard from './patientCard';
import PatientHealthRecord from './patientHealthRecord';
import PatientVisitHistory from './patientVisitHistory';

const PatientProfile = (props) => {

  const { id } = useParams();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/patients.json`).then((res) => {
      const data = res.data;
      const filteredData = data.find((x) => x.id === parseInt(id));
      setPatient(filteredData);
    });
  }, [id]);



  return (
    <Fragment>
      <Breadcrumb
        parent={{ title: props.t('Patients'), url: 'users/patients' }}
        title={patient.name}
      />
      <div className="container-fluid">
        <div className="edit-profile  ">
          <div className="row">
            <div className="col-lg-4  style-1 default-according faq-accordion">
                  <PatientCard patient={patient} />
            </div>
            <div className="col-lg-8 style-1 default-according faq-accordion">
                  <PatientHealthRecord patient={patient}/>
            </div>
            <div className="col-md-12  style-1 default-according faq-accordion">
                  <PatientVisitHistory patient={patient} />                  
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default translate(PatientProfile);
