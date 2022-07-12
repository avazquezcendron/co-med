import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { translate } from 'react-switch-lang';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';
import { PlusCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import notFoundImg from '../../assets/images/search-not-found.png';
import Breadcrumb from '../common/breadcrumb';

import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';

const NurseList = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [nurses, setNurses] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    entityService.getAll('nurse', loggedUser).then((data) => {
      setNurses(data);
      setIsLoading(false);
    });
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredNurses =
    nurses && nurses.length > 0
      ? nurses.filter((item) => {
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

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-nurse-alt text-muted" />,
      width: '56px', // custom width for icon button
      style: {
        // borderBottom: '1px solid #FFFFFF',
        marginBottom: '-1px',
      },
    },
    {
      name: 'Nombre y Apellido',
      selector: 'fullName',
      sortable: true,
      left: true,
    },
    {
      name: 'Nro. Documento',
      selector: 'nationalId',
      sortable: true,
      left: true,
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
          <span onClick={() => handleChangeStatusClick(row)}>
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
              title={`${row.status === 'active' ? 'Desactivar' : 'Activar'}`}
            ></i>
          </span>
          <span onClick={() => handleEditClick(row)}>
            <i
              className="fa fa-pencil"
              style={{
                width: 35,
                fontSize: 16,
                padding: 11,
                color: 'rgb(40, 167, 69)',
              }}
              title="Editar"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  const handleRowClick = (row, event) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/nursing/nurse/${row.id}?mode=browse`
    );
  };

  const handleEditClick = (row, event) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/nursing/nurse/${row.id}?mode=edit`
    );
  };

  const handleChangeStatusClick = (nurse) => {
    SweetAlert.fire({
      title: 'Atención!',
      text: `Se cambiará el estado de "${nurse.fullName}" a "${
        nurse.status === 'active' ? 'Inactivo' : 'Activo'
      }".`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        entityService
          .changeStatus('nurse', nurse.id, nurse.status, loggedUser)
          .then(() => {
            setStatusUpdate(!statusUpdate);
          });
      }
    });
  };

  return (
    <Fragment>
      <Breadcrumb title="Enfermeras (listado)" parent="Enfermería" />
      {!isLoading ? (
        <Fragment>
          <Container fluid={true}>
            <Row>
              <Col md="12" lg="12" xl="12">
                <div className="card">
                  <div className="card-header project-list">
                    <Row>
                      <Col md="6">
                        <h5>Listado de Enfermeras/os</h5>
                      </Col>
                      <Col md="6">
                        <div className="text-right">
                          <Link
                            className="btn btn-primary"
                            to={`${process.env.PUBLIC_URL}/nursing/nurse/0`}
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
                        data={filteredNurses}
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
                              No se encontraron enfermeras/os...
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
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default translate(NurseList);
