import React, { Fragment, useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { translate } from 'react-switch-lang';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import CustomMaterialMenu from '../../components/common/data-table/customMaterialMenu';
import { getAppointmentsWatcher } from '../../redux/appointments/actions';
import AppointmentModalComponent from '../common/appointments/appointmentModalComponent';

const PatientsAgenda = (props) => {
  const appointments = useSelector((store) => store.Appointments.appointments);
  const dispatch = useDispatch();

  const [appointmentData, setAppointmentData] = useState({ new: true });
  const [appointmentModal, setAppointmentModal] = useState(false);
  const appointmentModalToggle = () => {
    setAppointmentModal(!appointmentModal);
  };

  useEffect(() => {
    dispatch(getAppointmentsWatcher());
  }, [dispatch]);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredUsers = appointments.filter((item) => {
    // const dataToFilter = { position: item.position, salary: item.salary, office: item.office, email: item.email };
    // return  JSON.stringify(dataToFilter)
    //     .toLowerCase()
    //     .indexOf(filterText.toLowerCase()) !== -1;
    return (
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
    );
  });

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
      setAppointmentData({ ...row, start: new Date(row.start), end: new Date(row.end) ,new: false});
      appointmentModalToggle();
    }
  };

  const handleDeletePatientClick = (patient) => {
    SweetAlert.fire({
      title: 'Está seguro?',
      text: `El patiente ${patient.name} será dado de baja.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        // dispatch(removeTask(taskId));
        SweetAlert.fire(
          'Acción completada!',
          `El patiente ${patient.name} ha sido dado de baja.`,
          'success'
        );
      } else {
        SweetAlert.fire(
          '',
          `La acción de eliminar al paciente ${patient.name} ha sido descartada.`,
          'info'
        );
      }
    });
  };
  const conditionalRowStyles = [
    {
      when: (row) => row.status === 'canceled',
      style: {
        backgroundColor: '#ffc3cd',
        color: 'white',
      },
    },
    {
      when: (row) => row.status === 'completed',
      style: {
        backgroundColor: '#d6d6d6',
        color: 'white',
      },
    }
  ];

  const olumnsConfig = [
    // {
    // 	cell: () => <i className="fa fa-th text-success" />,
    // 	width: '56px', // custom width for icon button
    // 	style: {
    // 		borderBottom: '1px solid #FFFFFF',
    // 		marginBottom: '-1px',
    // 	},
    // },
    // {
    //   name: 'Hora',
    //   selector: 'hora',
    //   sortable: true,
    //   // right: true,
    //   width: '80px',
    //   cell: (row, index, column, id) => (
    //     <div style={{
    //       paddingRight: 10,
    //       paddingBottom: 5,
    //       paddingTop9: 5,
    //       borderRadius: 2,
    //       borderRight: 'solid #4466f2',
    //     }}>
    //       <h6 className="m-b-0">9:00</h6>
    //     </div>
    //     // <img
    //     //   src={`${process.env.PUBLIC_URL}/assets/images/${row.image}`}
    //     //   className="img-50 img-fluid"
    //     //   alt=""
    //     // />
    //   ),
    // },
    // {
    //   name: 'Nombre y Apellido',
    //   selector: 'name',
    //   sortable: true,
    //   left: true,
    // },
    // {
    //   name: 'Documento',
    //   selector: 'nationalId',
    //   sortable: true,
    //   left: true,
    // },
    // {
    //   name: 'Fecha',
    //   selector: 'birthDate',
    //   sortable: true,
    //   center: true,
    // },
    // {
    //   name: 'Obra Social',
    //   selector: 'healthInsurance',
    //   sortable: true,
    //   center: true,
    // },
    // {
    //   name: 'Nro. Historia Clínica',
    //   selector: 'healthRecordId',
    //   sortable: true,
    //   left: true,
    // },
    {
      name: 'Turno',
      selector: 'appointmentDetail',
      sortable: true,
      center: true,
      width: '550px',
      cell: (row, index, column, id) => (
        <div
          className="card-body recent-notification "
          onClick={() => handleRowClick(row)}
        >
          <div className="media">
            <h6>{new Date(row.start).toLocaleTimeString('es', {
                hour: '2-digit',
                minute: 'numeric',
                hour12: false,
              })}</h6>
            <div className="media-body">
              <span className="f-18 p-r-10">{row.patient.fullName}</span>
              <span className="f-16 p-l-10 text-muted" style={{ borderLeft: '2px solid #999' }}>
                <i className={`fa fa-${row.patient.biologicalSex === 'm' ? 'male' : 'female'}`}></i>{` ${row.patient.age} años`}</span>
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
                <i className="icofont icofont-doctor-alt"></i> {row.doctor.fullName} | {row.doctor.specialities.join(', ')}
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
            <i className="fa fa-medkit mr-1">  </i>
            {' ' + row.patient.healthInsurances?.length > 0 ? row.patient.healthInsurances[0].healthInsuranceCompany.description : ''}
          </span>
          <span
            className="p-l-10 text-muted"
            style={{ borderLeft: '2px solid #999' }}
          >
            {'Nro. de Credencial '}
            <strong>{row.patient.healthInsurances?.length > 0 ? row.patient.healthInsurances[0].cardNumber : ''}</strong>
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
        <span className="text-muted">{new Date(row.start).toLocaleDateString('es')}</span>
      ),
    },
    {
      name: 'Estado',
      selector: 'status',
      sortable: true,
      center: true,
      // width: '120px',
      cell: (row, index, column, id) =>
        row.status === 'active' ? (
          <span className="badge badge-secondary">Activo</span>
        ) : row.status === 'pending' ? (
          <span className="badge badge-warning">Pendiente</span>
        ) :  row.status === 'canceled' ? (
          <span className="badge badge-danger">Cancelado</span>
        ) :  row.status === 'completed' ? (
          <span className="badge badge-success">Completado</span>
        ) : '',
    },
    {
      sortable: false,
      allowOverflow: true,
      ignoreRowClick: true,
      right: true,
      width: '100px',
      cell: (row, index, column, id) => (
        <div>
          <span
            onClick={() => handleDeletePatientClick(row)}
            title="Cancelar Turno"
          >
            <i
              className="fa fa-times"
              style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}
            ></i>
          </span>
          {/* <span
            onClick={() => handleEditPatientClick(row)}
            title="Editar Turno"
          >
            <i
              className="fa fa-pencil"
              style={{
                width: 35,
                fontSize: 16,
                padding: 11,
                color: 'rgb(40, 167, 69)',
              }}
            ></i>
          </span> */}
          <CustomMaterialMenu
            size="small"
            row={row}
            menuItems={[
              {
                actionName: 'Ver Historia Clínica',
                actionIcon: 'fa fa-medkit',
              },
              { actionName: 'Próx. Turnos', actionIcon: 'fa fa-calendar' },
            ]}
          />
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div className="tab-content" id="tab-3">
        <div className="row">
        <AppointmentModalComponent
            appointmentModal={appointmentModal}
            appointmentModalToggle={appointmentModalToggle}
            appointmentData={appointmentData}
            setAppointmentModal={setAppointmentModal}
          />
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h5>{'Próximos Turnos'}</h5>
                  </div>
                  <div className="col-md-2">
                    <div className="select2-drpdwn-project select-options">
                      <select
                        className="form-control form-control-primary btn-square"
                        name="select"
                      >
                        <option value="opt1">{props.t('Today')}</option>
                        <option value="opt2">{props.t('Yesterday')}</option>
                        <option value="opt3">{props.t('Tomorrow')}</option>
                        <option value="opt4">{props.t('ThisMonth')}</option>
                        <option value="opt5">{props.t('ThisWeek')}</option>
                        <option value="opt5">{'Todos'}</option>
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
                    noDataComponent="No se econtraron turnos..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default translate(PatientsAgenda);
