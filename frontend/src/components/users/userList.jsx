import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { translate } from 'react-switch-lang';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';

import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import defaultuser from '../../assets/images/user/user.png';
import notFoundImg from '../../assets/images/search-not-found.png';
import * as userService from '../../services/user.service';

const UserList = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const [users, setUsers] = useState('');
  const [statusUpdate, setStatusUpdate] = useState(false);

  useEffect(() => {
    userService.getAll(loggedUser).then((res) => setUsers(res.data));
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredUsers =
    users && users.length > 0
      ? users.filter((item) => {
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
    props.history.push(`${process.env.PUBLIC_URL}/user/${row.id}?mode=browse`);
  };

  const handleEditUserClick = (row, event) => {
    props.history.push(`${process.env.PUBLIC_URL}/user/${row.id}?mode=edit`);
  };

  const handleUserChangeStatusClick = (user) => {
    SweetAlert.fire({
      title: 'Atención!',
      text: `Se cambiará el estado del usuario "${user.username}" a "${
        user.status === 'active' ? 'Inactivo' : 'Activo'
      }".`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        userService
          .changeStatus(user.id, user.status, loggedUser)
          .then((user) => {
            setStatusUpdate(!statusUpdate);
          });
      }
    });
  };

  const labelKeyRenderRoles = (option, index) => {
    switch (option) {
      case 'external':
        return <span key={index} className="badge badge-light">Usuario Externo</span>;
      case 'patient':
        return <span key={index} className="badge badge-info">Paciente</span>;
      case 'admin':
        return <span key={index} className="badge badge-danger">Administrador</span>;
      case 'receptionist':
        return <span key={index} className="badge badge-secondary">Recepcionista</span>;
      case 'doctor':
        return <span key={index} className="badge badge-primary">Doctor</span>;
      default:
        break;
    }
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
      selector: 'avatar',
      sortable: false,
      center: true,
      width: '80px',
      cell: (row, index, column, id) => (
        <img
          src={
            row.avatarUrl
              ? `${process.env.PUBLIC_URL}/assets/images/${row.avatarUrl}`
              : defaultuser
          }
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
      cell: (row, index, column, id) => `${row.firstName} ${row.lastName}`,
    },
    {
      name: 'Usuario',
      selector: 'username',
      sortable: true,
      left: true,
    },
    {
      name: 'Roles',
      selector: 'roles',
      sortable: true,
      left: true,
      cell: (row, index, column, id) =>
        row.roles.map((rol, index) => labelKeyRenderRoles(rol, index)),
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
          <span className="badge badge-danger">Inactivo</span>
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
                  ? 'Desactivar Usuario'
                  : 'Activar Usuario'
              }`}
            ></i>
          </span>
          <span onClick={() => handleEditUserClick(row)}>
            <i
              className="fa fa-pencil"
              style={{
                width: 35,
                fontSize: 16,
                padding: 11,
                color: 'rgb(40, 167, 69)',
              }}
              title="Editar Usuario"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title={props.t('Users')} />
      <Container fluid={true}>
        <Row>
          <Col md="12" lg="12" xl="12">
            <div className="card">
              <div className="card-header project-list">
                <Row>
                  <Col md="6">
                    <h5>Listado de {props.t('Users')}</h5>
                  </Col>
                  <Col md="6">
                    <div className="text-right">
                      <Link
                        className="btn btn-primary"
                        to={`${process.env.PUBLIC_URL}/user/0`}
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
                    noDataComponent={
                      <Col md="12" className="text-center m-50">
                        <img
                          className="img-fluid"
                          src={notFoundImg}
                          alt=""
                        />
                        <br />
                        <span className="txt-info">
                          No se encontraron usuarios...
                        </span>
                      </Col>
                    }
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default translate(UserList);
