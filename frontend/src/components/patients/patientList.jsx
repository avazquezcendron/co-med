import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { translate } from 'react-switch-lang';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import CustomMaterialMenu from '../common/data-table/customMaterialMenu';
import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import { patientGetAllWatcher } from '../../redux/patients/actions';
import { SUCCEEDED } from '../../redux/statusTypes';
import Loader from '../common/loader';

const PatientList = (props) => {
  const { patients, status } = useSelector((store) => store.Patients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(patientGetAllWatcher());
  }, []);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
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
      text: `Se cambiará el estado del usuario "${patient.firstName} ${patient.lastName}" a "${
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
        
      }
    });
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
          src={`${process.env.PUBLIC_URL}/assets/images/${row.image}`}
          className="img-50 img-fluid"
          alt=""
        />
      ),
    },
    {
      name: 'Nombre y Apellido',
      selector: 'name',
      sortable: true,
      left: true,
      cell: (row, index, column, id) => `${row.firstName} ${row.lastName}`
    },
    {
      name: 'Documento',
      selector: 'nationalId',
      sortable: true,
      left: true,
    },
    {
      name: 'Fec. Nacimiento',
      selector: 'dateOfBirth',
      sortable: true,
      center: true,
    },
    {
      name: 'Obra Social',
      selector: 'healthInsurance',
      sortable: true,
      center: true,
      cell: (row, index, column, id) => row.healthInsurances && row.healthInsurances.length > 0 ? row.healthInsurances[0].healthInsuranceCompany.description : ' - '
    },
    {
      name: 'Nro. Historia Clínica',
      selector: 'healthRecordId',
      sortable: true,
      left: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      center: true,
      cell: (row, index, column, id) => (
        <a href={`mailto:${row.email}`}>{row.email}</a>
      ),
    },
    {
      name: 'Última Visita',
      selector: 'lastVisit',
      sortable: true,
      center: true,
    },
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
          <span onClick={() => handleUserChangeStatusClick(row)}>
            <i
              className={`fa fa-${
                row.status === 'active' ? 'minus-circle' : 'plus-circle'
              }`}
              style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}
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
            ></i>
          </span>
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
      {status === SUCCEEDED ? (
        <Fragment>
          <Breadcrumb title={props.t('Patients')} />
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
                        <div className="text-right">
                          <Link
                            className="btn btn-primary"
                            to={`${process.env.PUBLIC_URL}/patient/0`}
                          >
                            {' '}
                            <PlusCircle />
                            {props.t('New')}
                          </Link>
                        </div>
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
                        noDataComponent="No existen pacientes registrados aún."
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default translate(PatientList);
