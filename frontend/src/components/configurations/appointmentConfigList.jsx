import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import notFoundImg from '../../assets/images/search-not-found.png';
import * as entityService from '../../services/entity.service';
import * as doctorService from '../../services/doctor.service';
import Loader from '../common/loader';

const AppointmentConfigList = (props) => {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, errors } = useForm();

  const [doctor, setDoctor] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [appointmentConfigs, setAppointmentConfigs] = useState('');
  const [currentAppointmentConfig, setCurrentAppointmentConfig] = useState({});
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrentAppointmentConfig({});
      setDoctor({});
    }
  };

  useEffect(() => {
    setIsLoading(true);
    doctorService.getAll(loggedUser, 'active').then((data) => {
      setDoctors(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    entityService.getAll('appointmentConfig', loggedUser).then((data) => {
      setAppointmentConfigs(data);
      setIsLoading(false);
    });
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredAppointmentConfigs =
    appointmentConfigs && appointmentConfigs.length > 0
      ? appointmentConfigs.filter((item) => {
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

  const handleSubmitForm = (data) => {
    if (data !== '') {
      SweetAlert.fire({
        title: 'Atención',
        text: currentAppointmentConfig.id
          ? 'Se actualizará la configuración de turnos.'
          : 'Se dará de alta la configuración de turnos.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          const configData = {
            ...currentAppointmentConfig,
            ...data,
            doctor: doctor.id || null,
          };
          configData.sessions[0].sessionType = 'Mañana';
          configData.sessions[0].daysOfWeek = data.sessions[0].daysOfWeek.map(
            (x, index) => (x ? 1 : 0)
          );
          configData.sessions[1].sessionType = 'Tarde';
          configData.sessions[1].daysOfWeek = data.sessions[1].daysOfWeek.map(
            (x, index) => (x ? 1 : 0)
          );
          if (currentAppointmentConfig.id) {
            entityService
              .update('appointmentConfig', configData, loggedUser)
              .then((data) => {
                setStatusUpdate(!statusUpdate);
                modalToggle(true);
              });
          } else {
            entityService
              .save('appointmentConfig', configData, loggedUser)
              .then((data) => {
                setStatusUpdate(!statusUpdate);
                modalToggle(true);
              });
          }
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleDeleteClick = (appointmentConfig) => {
    SweetAlert.fire({
      title: 'Atención!',
      text: `Se borrará el registro. Desea continuar?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        entityService
          .deleteEntity('appointmentConfig', appointmentConfig.id, loggedUser)
          .then((data) => {
            setStatusUpdate(!statusUpdate);
          });
      }
    });
  };

  const handleRowClick = (row, event) => {
    setCurrentAppointmentConfig(row);
    setDoctor({ id: row.doctor });
    modalToggle();
  };

  const handleDoctorChange = (selected) => {
    let doctor = selected.length > 0 ? selected[0] : {};
    setDoctor(doctor);
  };

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-calendar text-muted" />,
      width: '56px', // custom width for icon button
      style: {
        // borderBottom: '1px solid #FFFFFF',
        marginBottom: '-1px',
      },
    },
    {
      name: 'Descripción',
      selector: 'description',
      sortable: true,
      left: true,
      cell: (row, index, column, id) => <span title={row.description}>{row.description}</span>,
    },
    {
      name: 'Duración en horas',
      selector: 'slotHours',
      sortable: true,
      left: true,
    },
    {
      name: 'Duración en minutos',
      selector: 'slotMinutes',
      sortable: true,
      left: true,
    },
    {
      name: 'Tiempo entre turnos',
      selector: 'slotPreparation',
      sortable: true,
      left: true,
    },
    {
      name: 'Doctor/a',
      selector: 'doctorName',
      sortable: true,
      left: true
    },
    {
      name: 'Sessión 1 (Mañana)',
      selector: '',
      sortable: true,
      left: true,
      cell: (row, index, column, id) =>
        `${row.sessions[0].startTime} -  ${
          row.sessions[0].endTime
        } (${row.sessions[0].daysOfWeek
          .map((x, index) => (x === 1 ? days[index] : ''))
          .filter((x) => x)})`,
    },
    {
      name: 'Sessión 2 (Tarde)',
      selector: '',
      sortable: true,
      left: true,
      cell: (row, index, column, id) =>
        `${row.sessions[1].startTime} -  ${
          row.sessions[1].endTime
        } (${row.sessions[1].daysOfWeek
          .map((x, index) => (x === 1 ? days[index] : ''))
          .filter((x) => x)})`,
    },
    {
      sortable: false,
      allowOverflow: true,
      ignoreRowClick: true,
      center: true,
      cell: (row, index, column, id) => (
        <div>
          <span onClick={() => handleDeleteClick(row)}>
            <i
              className="fa fa-trash"
              style={{
                width: 35,
                fontSize: 16,
                padding: 11,
                color: 'red',
              }}
              title="Borrar Configuración"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title="Configuración de Turnos" parent="Configuración" />
      {!isLoading ? (
        <Container fluid={true}>
          <Row>
            <Col md="12" lg="12" xl="12">
              <div className="card">
                <div className="card-header project-list">
                  <Row>
                    <Col md="6">
                      <h5>{'Listado de configuraciones de turnos'}</h5>
                      <p className="text-muted">
                        {' '}
                        Configuración de los turnos y disponibilidad horaria. Se
                        puede configurar por doctor/a o de manera genral para
                        todo el sistema.{' '}
                      </p>
                    </Col>
                    <Col md="6">
                      <div className="text-right">
                        <button
                          className="btn btn-primary ml-1"
                          onClick={modalToggle}
                        >
                          <PlusCircle />
                          {'Nuevo'}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="card-body datatable-react">
                  <div className="table-responsive support-table">
                    <DataTable
                      columns={columnsConfig}
                      data={filteredAppointmentConfigs}
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
                            No se encontraron configuraciones de turnos...
                          </span>
                        </Col>
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={() => modalToggle(true)} size="lg">
            <ModalHeader toggle={() => modalToggle(true)}>
              {currentAppointmentConfig.id
                ? `Editando Configuración de Turnos "${currentAppointmentConfig.description}"`
                : 'Nueva Configuración de Turnos'}
            </ModalHeader>
            <ModalBody>
              <div className="card">
                <form
                  className="theme-form mega-form"
                  onSubmit={handleSubmit(handleSubmitForm)}
                >
                  <div className="card-body">
                    <h5>{'Configuración del Turno'}</h5>
                    <div className="form-group row">
                      <label
                        className="col-md-12 col-form-label"
                        htmlFor="description"
                      >
                        {'Descripción'}
                      </label>
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          name="description"
                          id="description"
                          defaultValue={currentAppointmentConfig.description}
                          type="text"
                          ref={register({ required: true })}
                        />
                        <span style={{ color: 'red' }}>
                          {errors.description && 'Ingrese un valor.'}
                        </span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-3">
                        <div className="row">
                          <label
                            className="col-md-12 col-form-label"
                            htmlFor="slotHours"
                          >
                            {'Duración en horas'}
                          </label>
                          <div className="col-md-12">
                            <input
                              className="form-control"
                              name="slotHours"
                              id="slotHours"
                              defaultValue={currentAppointmentConfig.slotHours}
                              type="number"
                              ref={register({ required: true })}
                            />
                            <span style={{ color: 'red' }}>
                              {errors.slotHours && 'Ingrese un valor.'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <label
                            className="col-md-12 col-form-label"
                            htmlFor="slotMinutes"
                          >
                            {'Duración en minutos'}
                          </label>
                          <div className="col-md-12">
                            <input
                              className="form-control"
                              name="slotMinutes"
                              id="slotMinutes"
                              defaultValue={
                                currentAppointmentConfig.slotMinutes
                              }
                              type="number"
                              ref={register({ required: true })}
                            />
                            <span style={{ color: 'red' }}>
                              {errors.slotMinutes && 'Ingrese un valor.'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <label
                            className="col-md-12 col-form-label"
                            htmlFor="slotPreparation"
                          >
                            {'Tiempo entre turnos'}
                          </label>
                          <div className="col-md-12">
                            <input
                              className="form-control"
                              name="slotPreparation"
                              id="slotPreparation"
                              defaultValue={
                                currentAppointmentConfig.slotPreparation
                              }
                              type="number"
                              ref={register({ required: true })}
                            />
                            <span style={{ color: 'red' }}>
                              {errors.slotPreparation && 'Ingrese un valor.'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-md-12 col-form-label"
                        htmlFor="doctor"
                      >
                        {'Doctor/a'}
                      </label>
                      <div className="col-md-6">
                        <Typeahead
                          id="doctor"
                          name="doctor"
                          options={doctors}
                          labelKey={(option) => option.fullName}
                          filterBy={['fullName', 'nationalId', 'specialities']}
                          minLength={3}
                          clearButton
                          onChange={(selected) => handleDoctorChange(selected)}
                          selected={
                            doctors.length > 0
                              ? doctors.filter((x) => x.id === doctor.id)
                              : null
                          }
                          innerRef={register('doctor', { required: false })}
                          renderMenuItemChildren={(option, props) => (
                            <Fragment>
                              <Highlighter search={props.text}>
                                {option.fullName}
                              </Highlighter>
                              <div className="mt-1">
                                <small className="text-muted">
                                  {option.specialities.join(', ')}
                                </small>
                              </div>
                            </Fragment>
                          )}
                        />
                      </div>
                    </div>
                    <hr className="mt-4 mb-4" />
                    <h5>{'Sesiones'}</h5>
                    <div className="row mt-4">
                      <div className="col-md-6  b-r-primary">
                        <h6>{'Sesión 1 (mañana)'}</h6>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0startTime"
                              >
                                {'Inicio'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="form-control"
                                  name="sessions.0.startTime"
                                  id="sessions0startTime"
                                  defaultValue={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .startTime
                                      : ''
                                  }
                                  type="time"
                                  ref={register({ required: true })}
                                />
                                <span style={{ color: 'red' }}>
                                  {errors.sessions0startTime &&
                                    'Ingrese un valor.'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0endTime"
                              >
                                {'Fin'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="form-control"
                                  name="sessions.0.endTime"
                                  id="sessions0endTime"
                                  defaultValue={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .endTime
                                      : ''
                                  }
                                  type="time"
                                  ref={register({ required: true })}
                                />
                                <span style={{ color: 'red' }}>
                                  {errors.sessions0endTime &&
                                    'Ingrese un valor.'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <label className="col-md-12 col-form-label mt-4">
                            {'Aplica a: '}
                          </label>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekMon"
                              >
                                {'Lun'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[1] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.1"
                                  id="sessions0daysOfWeekMon"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekMar"
                              >
                                {'Mar'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[2] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.2"
                                  id="sessions0daysOfWeekMar"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekMie"
                              >
                                {'Mié'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[3] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.3"
                                  id="sessions0daysOfWeekMie"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekJue"
                              >
                                {'Jue'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[4] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.4"
                                  id="sessions0daysOfWeekJue"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekVie"
                              >
                                {'Vie'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[5] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.5"
                                  id="sessions0daysOfWeekVie"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekSab"
                              >
                                {'Sáb'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[6] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.6"
                                  id="sessions0daysOfWeekSab"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions0daysOfWeekDom"
                              >
                                {'Dom'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[0]
                                          .daysOfWeek[0] === 1
                                      : false
                                  }
                                  name="sessions.0.daysOfWeek.0"
                                  id="sessions0daysOfWeekDom"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6>{'Sesión 2 (tarde)'}</h6>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1startTime"
                              >
                                {'Inicio'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="form-control"
                                  name="sessions.1.startTime"
                                  id="sessions1startTime"
                                  defaultValue={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .startTime
                                      : ''
                                  }
                                  type="time"
                                  ref={register({ required: true })}
                                />
                                <span style={{ color: 'red' }}>
                                  {errors.sessions1startTime &&
                                    'Ingrese un valor.'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1endTime"
                              >
                                {'Fin'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="form-control"
                                  name="sessions.1.endTime"
                                  id="sessions1endTime"
                                  defaultValue={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .endTime
                                      : ''
                                  }
                                  type="time"
                                  ref={register({ required: true })}
                                />
                                <span style={{ color: 'red' }}>
                                  {errors.sessions1endTime &&
                                    'Ingrese un valor.'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <label className="col-md-12 col-form-label mt-4">
                            {'Aplica a: '}
                          </label>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekMon"
                              >
                                {'Lun'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[1] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.1"
                                  id="sessions1daysOfWeekMon"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekMar"
                              >
                                {'Mar'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[2] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.2"
                                  id="sessions1daysOfWeekMar"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekMie"
                              >
                                {'Mié'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[3] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.3"
                                  id="sessions1daysOfWeekMie"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekJue"
                              >
                                {'Jue'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[4] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.4"
                                  id="sessions1daysOfWeekJue"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekVie"
                              >
                                {'Vie'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[5] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.5"
                                  id="sessions1daysOfWeekVie"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekSab"
                              >
                                {'Sáb'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[6] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.6"
                                  id="sessions1daysOfWeekSab"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="row">
                              <label
                                className="col-md-12 col-form-label"
                                htmlFor="sessions1daysOfWeekDom"
                              >
                                {'Dom'}
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="checkbox_animated"
                                  defaultChecked={
                                    currentAppointmentConfig.sessions
                                      ? currentAppointmentConfig.sessions[1]
                                          .daysOfWeek[0] === 1
                                      : false
                                  }
                                  name="sessions.1.daysOfWeek.0"
                                  id="sessions1daysOfWeekDom"
                                  type="checkbox"
                                  ref={register({ required: false })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => modalToggle(true)}
                    >
                      {'Cancelar'}
                    </button>
                    <button className="btn btn-primary ml-1">
                      {'Guardar'}
                    </button>
                  </div>
                </form>
              </div>
            </ModalBody>
          </Modal>
        </Container>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default AppointmentConfigList;
