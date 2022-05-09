import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import ReactToPrint from 'react-to-print';

import NewPrescriptionModalComponent from '../common/newPrescriptionModal';
import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as patientService from '../../services/patient.service';
import notFoundImg from '../../assets/images/search-not-found.png';
import PrescriptionPrintPreview from '../common/prescriptionPrintPreview';
import ComponentToPrintWrapper from '../common/componentToPrintWrapper';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientPrescriptions = (props) => {
  const { patient, status: patientStatus } = useSelector(
    (store) => store.Patient
  );
  const { status: visitStatus } = useSelector((store) => store.Visit);
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const componentRef = useRef();

  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const [prescriptions, setPrescriptions] = useState([]);

  const [prescriptionModal, setprescriptionModal] = useState(false);
  const prescriptionModalToggle = () => {
    setprescriptionModal(!prescriptionModal);
  };

  useEffect(() => {
    if (patient && patient.id === id) {
      patientService
        .getPrescriptions({ patientId: patient.id }, loggedUser)
        .then((data) => setPrescriptions(data));
    }
  }, [id, patient, visitStatus]);

  const addPrescription = () => {
    prescriptionModalToggle();
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
      width: '100px',
      selector: (row) => new Date(row.createdAt).toLocaleDateString('es'),
      sortable: true,
      left: true,
    },
    {
      name: 'Diagnóstico',
      selector: (row) => row.diagnosis,
      sortable: true,
      left: true,
    },
    {
      name: 'Fármacos',
      sortable: false,
      left: true,
      cell: (row, index, column, id) => (
        <span>{row.drugs?.map((x) => ` * ${x.drug.description}`)}</span>
      ),
    },
    {
      name: 'Indicaciones Generales',
      cell: (row) => row.indications,
      sortable: true,
      left: true,
    },
    {
      name: 'Indicado por',
      selector: (row) => row.doctor?.fullName,
      sortable: true,
      left: true,
    },
    {
      name: 'Prescripción Frecuente',
      sortable: true,
      center: true,
      cell: (row, index, column, id) =>
        row.frequent ? (
          <i className="fa fa-check text-muted f-w-700"></i>
        ) : (
          ''
        ),
    },
    {
      name: '',
      sortable: false,
      center: true,
      cell: (row, index, column, id) => (
        <span>
            <ComponentToPrintWrapper>
              <PrescriptionPrintPreview
                patient={patient}
                prescriptionDrugsList={row.drugs}
                prescriptionInfo={row}                
              />  
            </ComponentToPrintWrapper>  
        </span>
      ),
    },
  ];

  return (
    <Fragment>
      {patientStatus === LOADED ||
      visitStatus === LOADED ||
      patientStatus === SUCCEEDED ||
      visitStatus === SUCCEEDED ||
      patientStatus === FAILED ||
      visitStatus === FAILED ||
      (mode === 'new' && patientStatus !== LOADING) ? (
        <Fragment>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  <h5>{'Prescripciones'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {'Prescripciones del paciente.'}
                  </span>
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
                  data={prescriptions}
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
                        No se encontraron prescripciones...
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

export default PatientPrescriptions;
