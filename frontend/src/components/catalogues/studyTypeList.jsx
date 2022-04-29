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
import Loader from '../common/loader';

const StudyTypeList = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, errors } = useForm();

  const [studyTypes, setStudyTypes] = useState('');
  const [currentStudyType, setCurrentStudyType] = useState({});
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrentStudyType({});
    }
  };

  useEffect(() => {
    setIsLoading(true);
    entityService.getAll('studyType', loggedUser).then((data) => {
      setStudyTypes(data);
      setIsLoading(false);
    });
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredStudyTypes =
    studyTypes && studyTypes.length > 0
      ? studyTypes.filter((item) => {
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
        text:
          (currentStudyType.id
            ? 'Se actualizará el estudio con descripción '
            : 'Se dará de alta el estudio con descripción ') +
          '"' +
          data.description +
          '".',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          if (currentStudyType.id) {
            entityService
              .update(
                'studyType',
                { ...currentStudyType, ...data },
                loggedUser
              )
              .then((data) => {
                setStatusUpdate(!statusUpdate);
                modalToggle(true);
              });
          } else {
            entityService
              .save('studyType', data, loggedUser)
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

  const handleDeleteClick = (studyType) => {
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
          .deleteEntity('studyType', studyType.id, loggedUser)
          .then((data) => {
            setStatusUpdate(!statusUpdate);
          });
      }
    });
  };

  const handleRowClick = (row, event) => {
    setCurrentStudyType(row);
    modalToggle();
  };

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-heartbeat text-muted" />,
      width: '56px', // custom width for icon button
      style: {
        // borderBottom: '1px solid #FFFFFF',
        marginBottom: '-1px',
      },
    },
    {
      name: 'Código',
      selector: 'code',
      sortable: true,
      left: true,
    },
    {
      name: 'Descripción',
      selector: 'description',
      sortable: true,
      left: true,
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
              title="Borrar Estudio"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title="Estudios Compl." parent="Catálogos" />
      {!isLoading ? (
        <Container fluid={true}>
          <Row>
            <Col md="12" lg="12" xl="12">
              <div className="card">
                <div className="card-header project-list">
                  <Row>
                    <Col md="6">
                      <h5>{'Listado de Estudios Complementarios'}</h5>
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
                      data={filteredStudyTypes}
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
                            No se encontraron estudios...
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
              {currentStudyType.id
                ? currentStudyType.description
                : 'Nuevo Estudio Compl.'}
            </ModalHeader>
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
                        htmlFor="code"
                      >
                        {'Código'}
                      </label>
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          name="code"
                          id="code"
                          defaultValue={currentStudyType.code}
                          type="text"
                          ref={register({ required: true })}
                        />
                        <span style={{ color: 'red' }}>
                          {errors.code && 'Ingrese un valor.'}
                        </span>
                      </div>
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
                          defaultValue={currentStudyType.description}
                          type="text"
                          ref={register({ required: true })}
                        />
                        <span style={{ color: 'red' }}>
                          {errors.description && 'Ingrese un valor.'}
                        </span>
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

export default StudyTypeList;
