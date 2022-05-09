import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';

import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import notFoundImg from '../../assets/images/search-not-found.png';
import * as prescriptionService from '../../services/prescription.service';
import Loader from '../common/loader';
import NewPrescriptionModalComponent from '../common/newPrescriptionModal';
import PrescriptionPrintPreview from '../common/prescriptionPrintPreview';
import ComponentToPrintWrapper from '../common/componentToPrintWrapper';
import SelectPatientModalComponent from '../common/selectPatientModalComponent';
import { patientGetByIdWatcher } from '../../redux/patients/actions';

const PrescriptionList = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [prescriptions, setprescriptions] = useState('');
  const [currentprescription, setCurrentprescription] = useState({});
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrentprescription({});
    }
  };

  const [selectPatientModal, setSelectPatientModal] = useState(false);
  const selectPatientModalToggle = (patient) => {
    if (patient?.id) {
      dispatch(patientGetByIdWatcher(patient.id));
      modalToggle();
    }
    setSelectPatientModal(!selectPatientModal);
  };

  useEffect(() => {
    setIsLoading(true);
    prescriptionService.getAll(loggedUser).then((data) => {
      setprescriptions(data);
      setIsLoading(false);
    });
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredprescriptions =
    prescriptions && prescriptions.length > 0
      ? prescriptions.filter((item) => {
          return (
            JSON.stringify(item)
              .toLowerCase()
              .indexOf(filterText.toLowerCase()) !== -1
          );
        })
      : [];
  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <DataTableFilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const customStyles = {
    headRow: {
      style: {
        border: 'none !important',
      },
    },
    headCells: {
      style: {
        color: '#202124  !important',
        fontSize: '14px  !important',
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(230, 244, 244)  !important',
        borderBottomColor: '#FFFFFF  !important',
        borderRadius: '25px  !important',
        outline: '1px solid #FFFFFF  !important',
      },
    },
    pagination: {
      style: {
        border: 'none  !important',
      },
    },
  };

  const handleSavePrescription = (prescription) => {
    if (prescription) {
      prescriptionService.save(prescription, loggedUser).then((data) => {
        setStatusUpdate(!statusUpdate);
        modalToggle(true);
      });
    }
  };

  const handleRowClick = (row, event) => {
    setCurrentprescription(row);
    modalToggle();
  };

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-prescription text-muted" />,
      width: '56px', // custom width for icon button
      style: {
        // borderBottom: '1px solid #FFFFFF',
        marginBottom: '-1px',
      },
    },
    {
      name: 'Paciente',
      selector: (row) => row.healthRecord.patient.fullName,
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
      selector: (row) => row.indications,
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
      name: '',
      sortable: false,
      center: true,
      cell: (row, index, column, id) => (
        <Fragment>
          <span>
            {' '}
            <i
              className="fa fa-copy mr-4 text-muted"
              title="Copiar prescripción"
            ></i>
          </span>
          <span>
            <ComponentToPrintWrapper>
              <PrescriptionPrintPreview
                patient={row.healthRecord.patient}
                prescriptionDrugsList={row.drugs}
                prescriptionInfo={row}
              />
            </ComponentToPrintWrapper>
          </span>
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title="Prescripciones" />
      {!isLoading ? (
        <Container fluid={true}>
          <Row>
            <Col md="12" lg="12" xl="12">
              <div className="card">
                <div className="card-header project-list">
                  <Row>
                    <Col md="6">
                      <h5>{'Listado de Prescripciones frecuentes'}</h5>
                      <p>
                        Prescripciones que se realizan con frecuencia para
                        determinados pacientes.
                      </p>
                    </Col>
                    <Col md="6">
                      <div className="text-right">
                        <button
                          className="btn btn-primary ml-1"
                          onClick={selectPatientModalToggle}
                        >
                          <PlusCircle />
                          {'Nueva'}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="card-body datatable-react">
                  <div className="table-responsive support-table">
                    <DataTable
                      columns={columnsConfig}
                      data={filteredprescriptions}
                      pagination
                      highlightOnHover
                      pointerOnHover
                      noHeader
                      subHeader
                      subHeaderAlign={'left'}
                      subHeaderComponent={subHeaderComponent}
                      paginationPerPage={20}
                      paginationComponentOptions={paginationComponentOptions}
                      customStyles={customStyles}
                      onRowClicked={handleRowClick}
                      noDataComponent={
                        <Col md="12" className="text-center m-50">
                          <img className="img-fluid" src={notFoundImg} alt="" />
                          <br />
                          <span className="txt-info">
                            No se encontraron recetas frecuentes...
                          </span>
                        </Col>
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <SelectPatientModalComponent
            modal={selectPatientModal}
            modalToggle={selectPatientModalToggle}
          />
          {modal && (
            <NewPrescriptionModalComponent
              prescriptionModal={modal}
              prescription={currentprescription}
              prescriptionModalToggle={modalToggle}
              handleSavePrescription={handleSavePrescription}
            />
          )}
        </Container>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PrescriptionList;
