import React, { Fragment, useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { translate } from 'react-switch-lang';
import CustomMaterialMenu from '../../components/common/data-table/customMaterialMenu';
import SweetAlert from 'sweetalert2';
import axios from 'axios';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';

const PatientsAgenda = (props) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/appointments.json`)
      .then((res) => setPatients(res.data));
  }, []);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredUsers = patients.filter((item) => {
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
    props.history.push(
      `${process.env.PUBLIC_URL}/users/patients/${row.id}?mode=browse`
    );
  };

  const handleEditPatientClick = (row, event) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/users/patients/${row.id}?mode=edit`
    );
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
            <h6>{row.startTime}</h6>
            <div className="media-body">
              <span className="f-18 p-r-10">{`${row.patientName}`}</span>
              <span className="f-16 p-l-10 text-muted" style={{ borderLeft: '2px solid #999' }}>
                <i className={`fa fa-${row.patientSex === 'm' ? 'male' : 'female'}`}></i>{` ${row.patientAge} años`}</span>
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
                <i className="icofont icofont-doctor-alt"></i> {row.doctorName} | {row.doctorSpeciality}
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
            <i className="fa fa-medkit">  </i>
            {' ' + row.patientHealthInsurance}
          </span>
          <span
            className="p-l-10 text-muted"
            style={{ borderLeft: '2px solid #999' }}
          >
            {'Nro. de Credencial '}
            <strong>{row.patientHealthInsuranceId}</strong>
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
        <span className="text-muted">{row.start}</span>
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
