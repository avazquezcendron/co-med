import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';
import { useForm } from 'react-hook-form';

import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import notFoundImg from '../../assets/images/search-not-found.png';
import * as entityService from '../../services/entity.service';

const DrugList = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, errors, setError, clearErrors } = useForm();

  const [drugs, setDrugs] = useState('');
  const [currentDrug, setCurrentDrug] = useState({});
  const [statusUpdate, setStatusUpdate] = useState(false);

  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    entityService.getAll('drug', loggedUser).then((data) => setDrugs(data));
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredDrugs =
    drugs && drugs.length > 0
      ? drugs.filter((item) => {
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
        text: (currentDrug.id ? 'Se actualizará el fármaco con descripción ' : 'Se dará de alta un nuevo fármaco con descripción ') + '"' + data.description + '".',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          if (currentDrug.id) {
            entityService.update('drug', { ...currentDrug, ...data,  requiresPrescription: data.requiresPrescription.length > 0 }, loggedUser).then((data) => {
              setStatusUpdate(!statusUpdate);
              modalToggle();
            });            
          } else {
            entityService.save('drug', { ...data,  requiresPrescription: data.requiresPrescription.length > 0 }, loggedUser).then((data) => {
              setStatusUpdate(!statusUpdate);
              modalToggle();
            });  
          }
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const handleRowClick = (row, event) => {
    setCurrentDrug(row);
    modalToggle();
  };

  const handleEditDrugClick = (row, event) => {};

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-pills" />,
      width: '56px', // custom width for icon button
      style: {
        borderBottom: '1px solid #FFFFFF',
        marginBottom: '-1px',
      },
    },
    {
      name: 'Descripcion',
      selector: 'description',
      sortable: true,
      left: true,
    },
    {
      name: 'Composición',
      selector: 'composition',
      sortable: true,
      left: true,
    },
    {
      name: 'Formato',
      selector: 'format',
      sortable: true,
      left: true,
    },
    {
      name: 'Requiere Prescripción',
      selector: 'requiresPrescription',
      sortable: true,
      center: true,
      cell: (row, index, column, id) =>
        row.requiresPrescription ? <i className="fa fa-check text-muted f-w-700"></i> : '',
    },
    {
      sortable: false,
      allowOverflow: true,
      ignoreRowClick: true,
      center: true,
      cell: (row, index, column, id) => (
        <div>
          <span onClick={() => handleEditDrugClick(row)}>
            <i
              className="fa fa-trash"
              style={{
                width: 35,
                fontSize: 16,
                padding: 11,
                color: 'red',
              }}
              title="Borrar Fármaco"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title="Fármacos" parent="Catálogos" />
      <Container fluid={true}>
        <Row>
          <Col md="12" lg="12" xl="12">
            <div className="card">
              <div className="card-header project-list">
                <Row>
                  <Col md="6">
                    <h5>Listado de Fármacos</h5>
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
                    data={filteredDrugs}
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
                          No se encontraron fármacos...
                        </span>
                      </Col>
                    }
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Modal isOpen={modal} toggle={modalToggle} size="lg">
          <ModalHeader toggle={modalToggle}>Nuevo Fármaco</ModalHeader>
          <ModalBody>
            <div className="card">
              <form
                className="theme-form mega-form"
                onSubmit={handleSubmit(handleSubmitForm)}
              >
                <div className="card-body">
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
                        defaultValue={currentDrug.description}
                        type="text"
                        ref={register({ required: true })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.description && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="composition"
                    >
                      {'Composición'}
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        defaultValue={currentDrug.composition}
                        name="composition"
                        id="composition"
                        type="text"
                        ref={register({ required: false })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.composition && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <label
                      className="col-md-12 col-form-label"
                      htmlFor="format"
                    >
                      {'Formato'}
                    </label>
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        defaultValue={currentDrug.format}
                        name="format"
                        id="format"
                        type="text"
                        ref={register({ required: false })}
                      />
                      <span style={{ color: 'red' }}>
                        {errors.format && 'Ingrese un valor.'}
                      </span>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="">
                        <input
                          className="checkbox_animated"
                          defaultChecked={currentDrug.requiresPrescription}
                          name="requiresPrescription"
                          id="requiresPrescription"
                          type="checkbox"
                          ref={register({ required: false })}
                        />
                        <label className="mb-0" htmlFor="requiresPrescription">
                          {'Requiere Prescripción'}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => modalToggle()}
                  >
                    {'Cancelar'}
                  </button>
                  <button className="btn btn-primary ml-1">{'Guardar'}</button>
                </div>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default DrugList;
