import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { translate } from 'react-switch-lang';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import defaultuser from '../../assets/images/user/user.png';
import notFoundImg from '../../assets/images/search-not-found.png';
import CustomMaterialMenu from '../common/data-table/customMaterialMenu';
import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import {
  patientGetAllWatcher,
  patientGetByIdWatcher,
  patientInitialize,
  patientsInitialize,
  patientChangeStatustWatcher,
} from '../../redux/patients/actions';
import { LOADED, SUCCEEDED } from '../../redux/statusTypes';
import Loader from '../common/loader';
import PatientCard from './patientCard';
import PatientVitals from './patientVitals';

const PatientList = (props) => {
  const { patients, status } = useSelector((store) => store.Patients);
  const { patient, status: patientStoreStatus } = useSelector(
    (store) => store.Patient
  );
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [modalData, setModalData] = useState('');
  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(patientGetAllWatcher());
    return () => {
      dispatch(patientsInitialize());
    };
  }, []);

  useEffect(() => {
    if (patientStoreStatus === SUCCEEDED) dispatch(patientGetAllWatcher());
  }, [patientStoreStatus]);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredUsers = patients
    ? patients.filter((item) => {
        // const dataToFilter = { position: item.position, salary: item.salary, office: item.office, email: item.email };
        // return  JSON.stringify(dataToFilter)
        //     .toLowerCase()
        //     .indexOf(filterText.toLowerCase()) !== -1;
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

  const handleRowClick = (row, event) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/patient/${row.id}?mode=browse`
    );
  };

  const handleEditPatientClick = (row, event) => {
    props.history.push(`${process.env.PUBLIC_URL}/patient/${row.id}?mode=edit`);
  };

  const handleUserChangeStatusClick = (patient) => {
    SweetAlert.fire({
      title: 'Atención!',
      text: `Se cambiará el estado del usuario "${patient.fullName}" a "${
        patient.status === 'active' ? 'Inactivo' : 'Activo'
      }".`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(patientChangeStatustWatcher(patient));
      }
    });
  };

  const handleViewCardClick = async (patientRow) => {
    await dispatch(patientGetByIdWatcher(patientRow.id));
    setModalData('patientCard');
    modalToggle();
  };

  const handleViewVitalsClick = async (patientRow) => {
    await dispatch(patientGetByIdWatcher(patientRow.id));
    setModalData('patientVitals');
    modalToggle();
  };

  const handleViewNextAppointmentsClick = async (patientRow) => {
    await dispatch(patientGetByIdWatcher(patientRow.id));
    setModalData('patientNexAppointments');
    modalToggle();
  };

  const columnsConfig = [
    // {
    // 	cell: () => <i className="fa fa-th text-success" />,
    // 	width: '56px', // custom width for icon button
    // 	style: {
    // 		borderBottom: '1px solid #FFFFFF',
    // 		marginBottom: '-1px',
    // 	},
    // },
    {
      name: 'Foto',
      selector: 'image',
      sortable: false,
      center: true,
      width: '80px',
      cell: (row, index, column, id) => (
        <img
          src={row.avatar?.downloadURL || defaultuser}
          className="img-50 img-fluid"
          alt=""
        />
      ),
    },
    {
      name: 'Nombre y Apellido',
      selector: (row) => row.fullName,
      sortable: true,
      left: true,
      cell: (row, index, column, id) => row.fullName,
    },
    {
      name: 'Nro. Documento',
      selector: 'nationalId',
      sortable: true,
      left: true,
    },
    // {
    //   name: 'Nro. Historia Clínica',
    //   selector: 'healthRecord.healthRecordNumber',
    //   sortable: true,
    //   left: true,
    //   cell: (row, index, column, id) =>
    //     row.healthRecord ? row.healthRecord.healthRecordNumber : ' - ',
    // },
    {
      name: 'Obra Social',
      selector: 'healthInsurance',
      sortable: false,
      left: true,
      cell: (row, index, column, id) =>
        row.healthInsurances && row.healthInsurances.length > 0
          ? row.healthInsurances[0].healthInsuranceCompany.description
          : ' - ',
    },
    {
      name: 'Nro. de Credencial',
      selector: 'healthInsurances[0].cardNumber',
      sortable: true,
      left: true,
      cell: (row, index, column, id) =>
        row.healthInsurances && row.healthInsurances.length > 0
          ? row.healthInsurances[0].cardNumber
          : ' - ',
    },
    // {
    //   name: 'Email',
    //   selector: 'email',
    //   sortable: true,
    //   center: true,
    //   cell: (row, index, column, id) => (
    //     <a href={`mailto:${row.email}`}>{row.email}</a>
    //   ),
    // },
    // {
    //   name: 'Última Visita',
    //   selector: 'lastVisit',
    //   sortable: true,
    //   left: true,
    // },
    {
      name: 'Estado',
      selector: 'status',
      sortable: true,
      center: true,
      cell: (row, index, column, id) =>
        row.status === 'active' ? (
          <span className="badge badge-success">Activo</span>
        ) : row.status === 'pending' ? (
          <span className="badge badge-warning">Pendiente</span>
        ) : (
          <span className="badge badge-light">Inactivo</span>
        ),
    },
    {
      sortable: false,
      allowOverflow: true,
      ignoreRowClick: true,
      cell: (row, index, column, id) => (
        <div>
          {(loggedUser.user.isAdmin || loggedUser.user.isReceptionist) && (
            <Fragment>
              <span onClick={() => handleUserChangeStatusClick(row)}>
                <i
                  className={`fa fa-${
                    row.status === 'active' ? 'minus-circle' : 'plus-circle'
                  }`}
                  style={{
                    width: 35,
                    fontSize: 16,
                    padding: 11,
                    color: `${
                      row.status === 'active' ? '#e4566e' : 'rgb(40, 167, 69)'
                    }`,
                  }}
                  title={`${
                    row.status === 'active'
                      ? 'Desactivar Paciente'
                      : 'Activar Paciente'
                  }`}
                ></i>
              </span>
              <span onClick={() => handleEditPatientClick(row)}>
                <i
                  className="fa fa-pencil"
                  style={{
                    width: 35,
                    fontSize: 16,
                    padding: 11,
                    color: 'rgb(40, 167, 69)',
                  }}
                  title="Editar Paciente"
                ></i>
              </span>
            </Fragment>
          )}
          <CustomMaterialMenu
            size="small"
            row={row}
            menuItems={[
              // {
              //   actionName: 'Ver Historia Clínica',
              //   actionIcon: 'fa fa-medkit',
              // },
              {
                actionName: 'Ver Tarjeta',
                actionIcon: 'icofont icofont-id-card',
                actionClick: handleViewCardClick,
              },
              {
                actionName: 'Examen físico',
                actionIcon: 'icofont icofont-pulse',
                actionClick: handleViewVitalsClick,
              },
              {
                actionName: 'Próx. Turnos',
                actionIcon: 'fa fa-calendar',
                actionClick: handleViewNextAppointmentsClick,
              },
            ]}
          />
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title={props.t('Patients')} />
      {status === LOADED ? (
        <Container fluid={true}>
          <Row>
            <Col md="12" lg="12" xl="12">
              <div className="card">
                <div className="card-header project-list">
                  <Row>
                    <Col md="6">
                      <h5>{props.t('PatientList')}</h5>
                    </Col>
                    <Col md="6">
                      {(loggedUser.user.isAdmin ||
                        loggedUser.user.isReceptionist) && (
                        <div className="text-right">
                          <Link
                            className="btn btn-primary"
                            to={`${process.env.PUBLIC_URL}/patient/0?mode=new`}
                            onClick={() => dispatch(patientInitialize())}
                          >
                            {' '}
                            <PlusCircle />
                            {props.t('New')}
                          </Link>
                        </div>
                      )}
                    </Col>
                  </Row>
                </div>
                <div className="card-body datatable-react">
                  <div className="table-responsive support-table">
                    <DataTable
                      columns={columnsConfig}
                      data={filteredUsers}
                      // striped={true}
                      // center={true}
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
                            No se encontraron pacientes...
                          </span>
                        </Col>
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={modalToggle} size={modalData === 'patientVitals' ? 'md' : 'lg'} centered>
            {modalData === 'patientNexAppointments' && (
              <ModalHeader toggle={modalToggle}>
                <i className="fa fa-calendar"></i> Próximos turnos de{' '}
                {patient.fullName}
              </ModalHeader>
            )}
            <ModalBody className="p-1">
              {modalData === 'patientCard' ? (
                <div className="row mr-0 ml-0">
                  <div className="col-md-12 style-1 default-according faq-accordion mb-0 p-0">
                    <PatientCard collapsed={true} />
                  </div>
                </div>
              ) : modalData === 'patientVitals' ? (
                <div className="row mr-0 ml-0">
                  <div className="col-md-12 style-1 default-according faq-accordion mb-0 p-0">
                    <PatientVitals />
                  </div>
                </div>
              ) : (
                <div className="row mr-0 ml-0">
                  <div className="col-md-12">
                    <div className="m-4">
                      {patient.nextAppointments?.length === 0 ? (
                        <div className="text-center m-b-40">
                          <img className="img-fluid" src={notFoundImg} alt="" />
                          <br />
                          <span className="txt-info">
                            El paciente no tiene turnos pendientes...
                          </span>
                        </div>
                      ) : (
                        patient.nextAppointments?.map((appointment, index) => (
                          <Fragment key={appointment.id}>
                            <div key={index} className="row text-muted mb-3">
                              <h6 className="col-md-5 f-w-900">
                                <i className="icofont icofont-clock-time text-primary"></i>{' '}
                                {new Date(appointment.start).toLocaleString(
                                  'es',
                                  {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                                  }
                                )}{' '}
                                hs
                              </h6>
                              <div className="col-md-7">
                                <p className="f-14 mb-0">
                                  <i className="icofont icofont-doctor-alt"></i>{' '}
                                  {appointment.doctor.fullName} |{' '}
                                  {appointment.doctor.specialities.join(', ')}
                                </p>
                                <small>
                                  <i className="icofont icofont-bed-patient"></i>{' '}
                                  {appointment.mode} | Consultorio{' '}
                                  {appointment.doctor.room}
                                </small>
                              </div>
                            </div>
                          </Fragment>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </ModalBody>
          </Modal>
        </Container>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default translate(PatientList);
