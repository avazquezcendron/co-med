import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CKEditors from 'react-ckeditor-component';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import { patientUpdateHRWatcher } from '../../redux/patients/actions';
import Loader from '../common/loader';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientNotes = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();
  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const [content, setContent] = useState(patient.healthRecord?.notes);
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  useEffect(() => {
    if (patient && patient.id === id) {
      setContent(patient.healthRecord?.notes);
    }
  }, [id, patient]);

  const handleSubmitForm = (data) => {
    const healthRecordData = {
      ...patient.healthRecord,
      notes: content,
    };
    dispatch(
      patientUpdateHRWatcher({
        patient: patient,
        healthRecordData: healthRecordData,
      })
    );
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setContent(patient.healthRecord?.notes);
  };
  return (
    <Fragment>
      {status === LOADED ||
      status === SUCCEEDED ||
      status === FAILED ||
      (mode === 'new' && status !== LOADING) ? (
        <Fragment>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-12">
                  <h5>{'Notas del Paciente'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {'Notas y comentarios acerca del paciente.'}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <CKEditors
                activeclassName=""
                content={content}
                events={{
                  change: onChange,
                }}
              />
            </div>
            <div className="card-footer">
              <span className="pull-right mb-4">
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => handleCancelClick(e)}
                >
                  {'Cancelar'}
                </button>
                <button
                  className="btn btn-primary ml-1"
                  onClick={handleSubmitForm}
                >
                  {'Guardar'}
                </button>
              </span>
            </div>
          </div>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientNotes;
