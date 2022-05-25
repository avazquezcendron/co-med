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

const HealthInsuranceList = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const { register, handleSubmit, errors } = useForm();

  const [healthInsurances, sethealthInsurances] = useState('');
  const [currenthealthInsurance, setCurrenthealthInsurance] = useState({});
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const [currentEditRow, setCurrentEditRow] = useState({});
  const [isEditRow, setIsEditRow] = useState(false);

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrenthealthInsurance({});
      setPlans([]);
      setIsEditRow(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    entityService.getAll('healthInsurance', loggedUser).then((data) => {
      sethealthInsurances(data);
      setIsLoading(false);
    });
  }, [statusUpdate]);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredhealthInsurances =
    healthInsurances && healthInsurances.length > 0
      ? healthInsurances.filter((item) => {
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
          (currenthealthInsurance.id
            ? 'Se actualizará la Obra Social con descripción '
            : 'Se dará de alta la Obra Social con descripción ') +
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
          const hiData = { ...currenthealthInsurance, ...data, plans: plans }
          if (currenthealthInsurance.id) {
            entityService
              .update(
                'healthInsurance',
                hiData,
                loggedUser
              )
              .then((data) => {
                setStatusUpdate(!statusUpdate);
                modalToggle(true);
              });
          } else {
            entityService
              .save('healthInsurance', hiData, loggedUser)
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

  const handleDeleteClick = (healthInsurance) => {
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
          .deleteEntity('healthInsurance', healthInsurance.id, loggedUser)
          .then((data) => {
            setStatusUpdate(!statusUpdate);
          });
      }
    });
  };

  const handleRowClick = (row, event) => {
    setCurrenthealthInsurance(row);
    const plansCopy = row.plans.map((plan) => {
      return { ...plan, isEdit: false };
    });
    setPlans(plansCopy);
    modalToggle();
  };

  const handlePlanDeleteRow = (e, code) => {
    e.preventDefault();
    setPlans(
      plans.filter(
        (plan) => plan.code !== code
      )
    );
  };

  const addNewPlan = (e) => {
    e.preventDefault();
    const newPlans = [...plans, { code: '', isEdit: true }];
    setPlans(newPlans);
    setCurrentEditRow({
      code: '',
      newCode: '',
      isEdit: true,
    });
    setIsEditRow(true);
  };

  const updatePlan = (index) => {
    if (
      !currentEditRow.newCode ||
      plans.filter((plan) => plan.code === currentEditRow.newCode).length > 0
    )
      return;
    setPlans(
      plans.map((plan) =>
        plan.code === currentEditRow.code && currentEditRow.newCode !== ''
          ? {
              code: currentEditRow.newCode,
              isEdit: !plan.isEdit,
            }
          : plan
      )
    );
    setCurrentEditRow({});
    setIsEditRow(false);
  };

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-first-aid-alt text-muted" />,
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
              title="Borrar Obra Social"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title="Obras Sociales" parent="Catálogos" />
      {!isLoading ? (
        <Container fluid={true}>
          <Row>
            <Col md="12" lg="12" xl="12">
              <div className="card">
                <div className="card-header project-list">
                  <Row>
                    <Col md="6">
                      <h5>{'Listado de Obras Sociales'}</h5>
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
                      data={filteredhealthInsurances}
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
                            No se encontraron obras sociales...
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
              {currenthealthInsurance.id
                ? currenthealthInsurance.description
                : 'Nueva Obra Social'}
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
                          defaultValue={currenthealthInsurance.code}
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
                          defaultValue={currenthealthInsurance.description}
                          type="text"
                          ref={register({ required: true })}
                        />
                        <span style={{ color: 'red' }}>
                          {errors.description && 'Ingrese un valor.'}
                        </span>
                      </div>
                    </div>
                    {!isEditRow && (
                      <a
                        href="#javascript"
                        className="pull-right m-b-10"
                        onClick={addNewPlan}
                      >
                        <i className="fa fa-plus"></i> Agregar Plan
                      </a>
                    )}
                    <h6>{'Planes'}</h6>
                    <div className="table-responsive">
                      <table className="table table-hover table-sm">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">{'Código'}</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {plans.length > 0
                            ? plans.map((plan, index) => (
                                <tr key={index}>
                                  <th scope="row" style={{ width: '120px' }}>
                                    <i className="icofont icofont-list text-info"></i>
                                  </th>
                                  <td>
                                    {plan.isEdit ? (
                                      <input
                                        required
                                        type="text"
                                        value={currentEditRow.newCode || ''}
                                        onChange={(e) =>
                                          setCurrentEditRow({
                                            ...currentEditRow,
                                            newCode: e.target.value,
                                          })
                                        }
                                      />
                                    ) : (
                                      plan.code
                                    )}
                                  </td>

                                  <td className="text-center">
                                    {(plans.filter(x => x.code !== plan.code && x.isEdit).length === 0) && (
                                      <Fragment>
                                        {!plan.isEdit ? (
                                          <Fragment>
                                            <a
                                              href="#javascript"
                                              onClick={(e) => {
                                                plan.isEdit = !plan.isEdit;
                                                setIsEditRow(true);
                                                setCurrentEditRow({
                                                  ...plan,
                                                  newCode: plan.code,
                                                });
                                              }}
                                            >
                                              <i
                                                className={
                                                  'fa fa-pencil text-success'
                                                }
                                                title={'Edtiar'}
                                              ></i>
                                            </a>
                                            <a
                                              href="#javascript"
                                              onClick={(e) =>
                                                handlePlanDeleteRow(e, plan.code)
                                              }
                                            >
                                              <i
                                                className="fa fa-trash text-danger ml-4"
                                                title="Borrar"
                                              ></i>
                                            </a>
                                          </Fragment>
                                        ) : (
                                          <Fragment>
                                            <a
                                              href="#javascript"
                                              onClick={(e) => updatePlan(index)}
                                            >
                                              <i
                                                className={
                                                  'fa fa-save text-primary'
                                                }
                                                title={'Guardar'}
                                              ></i>
                                            </a>
                                            <a
                                              href="#javascript"
                                              onClick={(e) => {
                                                plan.isEdit = !plan.isEdit;
                                                setIsEditRow(false);
                                                setPlans(
                                                  plans.filter(
                                                    (plan) => plan.code !== ''
                                                  )
                                                );
                                              }}
                                            >
                                              <i
                                                className={
                                                  'fa fa-times text-danger ml-4'
                                                }
                                                title={'Cancelar'}
                                              ></i>
                                            </a>
                                          </Fragment>
                                        )}
                                      </Fragment>
                                    )}
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
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
                    <button className="btn btn-primary ml-1" disabled={isEditRow}>
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

export default HealthInsuranceList;
