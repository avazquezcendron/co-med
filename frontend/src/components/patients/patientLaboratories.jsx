import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import DataTable from 'react-data-table-component';

import NewPrescriptionModalComponent from '../common/newPrescriptionModal';
import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';
import notFoundImg from '../../assets/images/search-not-found.png';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientLaboratories = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, errors } = useForm();

  const query = useQuery();
  const mode = query.get('mode');

  const [prescriptionModal, setprescriptionModal] = useState(false);
  const prescriptionModalToggle = () => {
    setprescriptionModal(!prescriptionModal);
  };

  const addPrescription = () => {
    // prescriptionModalToggle();
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const handleRowClickPrescriptions = (row, event) => {};

  const columnsConfigPrescription = [
    {
      name: 'Fecha',
      selector: (row) => row.date,
      sortable: true,
      left: true,
    },
    {
      name: 'Diagnóstico',
      selector: (row) => row.diagnosis,
      sortable: true,
      left: true,
    },
  ];

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
                <div className="col-md-6">
                  <h5>{'Laboratorios'}</h5>
                  <span className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}>{'Exámenes de laboratorio del paciente.'}</span>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <button
                      onClick={addPrescription}
                      className="btn btn-primary"
                    >
                      {'Agregar'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body datatable-react">
              <div className="table-responsive support-table">
                <DataTable
                  columns={columnsConfigPrescription}
                  data={patient.healthRecord?.laboratoryExams}
                  // striped={true}
                  // center={true}
                  pagination
                  highlightOnHover
                  pointerOnHover
                  noHeader
                  subHeader
                  subHeaderAlign={'left'}
                  paginationPerPage={20}
                  paginationComponentOptions={paginationComponentOptions}
                  onRowClicked={handleRowClickPrescriptions}
                  noDataComponent={
                    <div className="col-md-12 text-center m-50">
                      <img className="img-fluid" src={notFoundImg} alt="" />
                      <br />
                      <span className="txt-info">
                        No se encontraron laboratorios...
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          {prescriptionModal && (
            <NewPrescriptionModalComponent
              prescriptionModal={prescriptionModal}
              prescriptionModalToggle={prescriptionModalToggle}
            />
          )}
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientLaboratories;
