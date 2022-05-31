import React, { Fragment, useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { translate } from 'react-switch-lang';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import notFoundImg from '../../assets/images/search-not-found.png';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import {
  getAppointmentsWatcher,
  setDataAppointmentForm,
  saveAppointmentWatcher,
} from '../../redux/appointments/actions';
import { patientInitializeVisitForm } from '../../redux/patients/actions';
import { LOADED, SUCCEEDED, FAILED } from '../../redux/statusTypes';
import AppointmentModalComponent from '../common/appointments/appointmentModalComponent';
import Loader from '../common/loader';

const PatientsAgenda = (props) => {
  const { appointments, status } = useSelector((store) => store.Appointments);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const [dateNow, setDateNow] = useState(new Date());
  const [currentMonthAppointments, setCurrentMonthAppointments] = useState([]);
  // const [currentWeekAppointments, setCurrentWeekAppointments] = useState([]);
  const [currentDayAppointments, setCurrentDayAppointments] = useState([]);
  // const [yesterdayAppointments, setYesterdayAppointments] = useState([]);
  const [tomorrowAppointments, setTomorrowAppointments] = useState([]);
  const [appointmentsFiltered, setAppointmentsFiltered] = useState([]);
  const [reloadAppointments, setReloadAppointments] = useState(false);

  const [appointmentModal, setAppointmentModal] = useState(false);
  const appointmentModalToggle = () => {
    setAppointmentModal(!appointmentModal);
  };

  useEffect(() => {
    dispatch(getAppointmentsWatcher(loggedUser.user.doctor?.id));
  }, [dispatch, reloadAppointments]);

  useEffect(() => {
    if (status === LOADED) {
      const _currentDayAppointments = appointments.filter(
        (x) =>
          new Date(x.start).toLocaleDateString() ===
            dateNow.toLocaleDateString() && !x.isExpired
      );
      setCurrentMonthAppointments(
        appointments.filter(
          (x) =>
            new Date(x.start).getMonth() === dateNow.getMonth() && !x.isExpired
        )
      );
      setCurrentDayAppointments(_currentDayAppointments);
      // setYesterdayAppointments(
      //   appointments.filter(
      //     (x) =>
      //       new Date(x.start).getFullYear() === dateNow.getFullYear() &&
      //       new Date(x.start).getMonth() === dateNow.getMonth() &&
      //       new Date(x.start).getDate() === dateNow.getDate() - 1 &&
      //       x.isActive
      //   )
      // );
      setTomorrowAppointments(
        appointments.filter(
          (x) =>
            new Date(x.start).getFullYear() === dateNow.getFullYear() &&
            new Date(x.start).getMonth() === dateNow.getMonth() &&
            new Date(x.start).getDate() === dateNow.getDate() + 1 &&
            !x.isExpired
        )
      );
      setAppointmentsFiltered(_currentDayAppointments);
    }
  }, [status]);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredUsers = appointmentsFiltered.filter((item) => {
    // const dataToFilter = { position: item.position, salary: item.salary, office: item.office, email: item.email };
    // return  JSON.stringify(dataToFilter)
    //     .toLowerCase()
    //     .indexOf(filterText.toLowerCase()) !== -1;
    return (
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
    );
  });

  const handleAppointmentFilterChange = (value) => {
    switch (value) {
      case 'today':
        setAppointmentsFiltered(currentDayAppointments);
        break;
      // case 'yesterday':
      //   setAppointmentsFiltered(yesterdayAppointments);
      //   break;
      case 'tommorrow':
        setAppointmentsFiltered(tomorrowAppointments);
        break;
      case 'month':
        setAppointmentsFiltered(currentMonthAppointments);
        break;
      // case 'all':
      //   setAppointmentsFiltered(appointments);
      //   break;

      default:
        setAppointmentsFiltered(currentDayAppointments);
    }
  };

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
    if (row.id) {
      dispatch(
        setDataAppointmentForm({
          ...row,
          start: new Date(row.start),
          end: new Date(row.end),
          new: false,
        })
      );
      appointmentModalToggle();
    }
  };

  const handleChangeStatusAppointment = (appointment) => {
    SweetAlert.fire({
      title: 'Atención',
      text: appointment.isActive
        ? 'El turno será cancelado. Desea continuar?'
        : 'El turno pasará a estar activo nuevamente. Desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(
          saveAppointmentWatcher({
            ...appointment,
            status: appointment.isCancelled ? 'active' : 'cancelled',
          })
        );
      }
    });
  };

  const startVisit = (appointment) => {
    SweetAlert.fire({
      title: 'Atención',
      text: 'El turno será marcado como finalizado y se comenzará la consulta con el paciente. Desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(saveAppointmentWatcher({ ...appointment, status: 'done' }));
        const visitData = {
          doctor: appointment.doctor,
          createdAt: new Date(),
          healthRecord: appointment.patient.healthRecord,
          studyOrders: [],
          laboratoryOrders: [],
          prescriptions: [],
        };
        dispatch(patientInitializeVisitForm(visitData));
        props.history.push(
          `${process.env.PUBLIC_URL}/patient/${appointment.patient.id}?mode=edit`
        );
      }
    });
  };

  const conditionalRowStyles = [
    {
      when: (row) => row.isCancelled,
      style: {
        backgroundColor: '#ffc3cd',
        // color: 'white',
      },
    },
    {
      when: (row) => row.isDone,
      style: {
        backgroundColor: '#cbf3cb',
        // color: 'white',
      },
    },
    {
      when: (row) => row.appointmentType === 'sobreturno',
      style: {
        backgroundColor: '#ffa5005e',
        // color: 'white',
      },
    },
  ];

  const olumnsConfig = [
    {
      name: 'Turno',
      selector: 'appointmentDetail',
      sortable: true,
      center: true,
      width: '550px',
      cell: (row, index, column, id) => (
        <div
          className={`card-body recent-notification  ${
            row.isCancelled ? 'b-l-danger border-3' : ''
          } ${row.isDone ? 'b-l-success border-3' : ''} `}
          onClick={() => handleRowClick(row)}
        >
          <div className="media">
            <h6>
              <i className="icofont icofont-clock-time"></i>{' '}
              {new Date(row.start).toLocaleTimeString('es', {
                // timeZone: 'UTC',
                hour: '2-digit',
                minute: 'numeric',
                hour12: false,
              })}
            </h6>
            <div className="media-body">
              <span className="f-18 p-r-10">{row.patient.fullName}</span>
              <span
                className="f-16 p-l-10 text-muted"
                style={{ borderLeft: '2px solid #999' }}
              >
                <i
                  className={`mr-1 fa fa-${
                    row.patient.biologicalSex === 'm' ? 'male' : 'female'
                  }`}
                ></i>
                {row.patient.age ? row.patient.age + ' años' : ''}
              </span>
              {/* <span
                className="p-l-10 p-r-10 text-muted"
                style={{ borderRight: '2px solid #999' }}
              >
                {row.patientHealthInsurance}
              </span>
              <span
                className="p-l-10 p-r-10 text-muted"
                style={{ borderRight: '2px solid #999' }}
              >
                {' '}
                {row.patientHealthInsuranceId}
              </span> */}
              {/* <span className="p-l-10 text-muted">{row.start}</span> */}
              <p className="f-12">
                <i className="icofont icofont-doctor-alt"></i>{' '}
                {row.doctor.fullName} | {row.doctor.specialities.join(', ')}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: '',
      selector: 'patientHealthInsurance',
      sortable: true,
      left: true,
      width: '400px',
      cell: (row, index, column, id) => (
        <div>
          <span className="p-r-10 text-muted">
            <i className="fa fa-medkit mr-1"> </i>
            {' ' + row.patient.healthInsurances?.length > 0
              ? row.patient.healthInsurances[0].healthInsuranceCompany
                  .description
              : ''}
          </span>
          <span
            className="p-l-10 text-muted"
            style={{ borderLeft: '2px solid #999' }}
          >
            {'Nro. de Credencial '}
            <strong>
              {row.patient.healthInsurances?.length > 0
                ? row.patient.healthInsurances[0].cardNumber
                : ''}
            </strong>
          </span>
        </div>
      ),
    },
    // {
    //   name: '',
    //   selector: 'patientHealthInsuranceId',
    //   sortable: true,
    //   left: true,
    //   cell: (row, index, column, id) => (
    //     <span className="text-muted f-16"> {row.patientHealthInsuranceId}</span>
    //   ),
    // },
    {
      name: '',
      selector: 'start',
      sortable: true,
      center: true,
      cell: (row, index, column, id) => (
        <span className="text-muted f-w-700">
          <i className="icofont icofont-ui-calendar"></i>{' '}
          {new Date(row.start).toLocaleDateString('es')}
        </span>
      ),
    },
    {
      name: 'Estado',
      selector: 'status',
      sortable: true,
      center: true,
      // width: '120px',
      cell: (row, index, column, id) => (
        <Fragment>
          {row.appointmentType === 'sobreturno' ? (
            <span className="badge badge-warning mr-1">SOBRETURNO</span>
          ) : (
            ''
          )}
          {row.status === 'active' ? (
            <span className="badge badge-secondary">ACTIVO</span>
          ) : row.status === 'expired' ? (
            <span className="badge badge-light">EXPIRADO</span>
          ) : row.status === 'cancelled' ? (
            <span className="badge badge-danger">CANCELADO</span>
          ) : row.status === 'done' ? (
            <span className="badge badge-success">FINALIZADO</span>
          ) : (
            ''
          )}
        </Fragment>
      ),
    },
    {
      sortable: false,
      allowOverflow: true,
      ignoreRowClick: true,
      right: true,
      width: '120px',
      cell: (row, index, column, id) => (
        <div>
          {!row.isDone && (
            <Fragment>
              <span
                onClick={() => handleChangeStatusAppointment(row)}
                title={row.isCancelled ? 'Activar Turno' : 'Cancelar Turno'}
              >
                <i
                  className={row.isCancelled ? 'fa fa-plus' : 'fa fa-times'}
                  style={{
                    width: 35,
                    fontSize: 16,
                    padding: 11,
                    color: row.isCancelled ? 'green' : '#e4566e',
                  }}
                ></i>
              </span>
              {loggedUser.user.isDoctor &&
                loggedUser.user.doctor.id === row.doctor.id &&
                row.isActive && (
                  <span
                    onClick={() => startVisit(row)}
                    title="Iniciar Consulta"
                  >
                    <i
                      className="fa fa-sign-in"
                      style={{
                        width: 35,
                        fontSize: 16,
                        padding: 11,
                        color: 'rgb(40, 167, 69)',
                      }}
                    ></i>
                  </span>
                )}
              {/* <CustomMaterialMenu
            size="small"
            row={row}
            menuItems={[
              {
                actionName: 'Ver Historia Clínica',
                actionIcon: 'fa fa-medkit',
              },
              { actionName: 'Próx. Turnos', actionIcon: 'fa fa-calendar' },
            ]}
          /> */}
            </Fragment>
          )}
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      {status === LOADED || status === FAILED || status === SUCCEEDED ? (
        <div className="tab-content" id="tab-3">
          <div className="row">
            <AppointmentModalComponent
              history={props.history}
              appointmentModal={appointmentModal}
              appointmentModalToggle={appointmentModalToggle}
            />
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-8">
                      <h5>{'Próximos Turnos'}</h5>
                    </div>
                    <div className="col-md-2">
                      <a
                        href="#javascript"
                        className="ml-4 pull-right pt-1"
                        onClick={() => setReloadAppointments(!reloadAppointments)}
                        title="Recargar turnos"
                      >
                        <h4><i className="icon-reload"></i></h4>
                      </a>
                    </div>
                    <div className="col-md-2">
                      <div className="select2-drpdwn-project select-options">
                        <select
                          className="form-control form-control-primary btn-square"
                          id="appointmentFilterChange"
                          defaultValue="today"
                          onChange={(e) =>
                            handleAppointmentFilterChange(e.target.value)
                          }
                        >
                          <option value="today">{props.t('Today')}</option>
                          {/* <option value="yesterday">
                          {props.t('Yesterday')}
                        </option> */}
                          <option value="tommorrow">
                            {props.t('Tomorrow')}
                          </option>
                          <option value="month">{props.t('ThisMonth')}</option>
                          {/* <option value="week">{props.t('ThisWeek')}</option> */}
                          {/* <option value="all">{'Todos'}</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive support-table">
                    <DataTable
                      columns={olumnsConfig}
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
                      conditionalRowStyles={conditionalRowStyles}
                      onRowClicked={handleRowClick}
                      noTableHead
                      noDataComponent={
                        <div className="text-center m-40">
                          <img className="img-fluid" src={notFoundImg} alt="" />
                          <br />
                          <span className="txt-info">
                            No hay turnos pendientes para el filtro
                            seleccionado...
                          </span>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default translate(PatientsAgenda);
