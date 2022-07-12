import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { PlusCircle } from 'react-feather';
import SweetAlert from 'sweetalert2';
import { useForm } from 'react-hook-form';
import Slider from 'react-slick';
import es from 'date-fns/locale/es';

import Breadcrumb from '../common/breadcrumb';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';
import notFoundImg from '../../assets/images/search-not-found.png';
import * as entityService from '../../services/entity.service';
import * as nursingService from '../../services/nursingService.service';
import Loader from '../common/loader';
import NewNursingServiceModal from './newNursingServiceModal';

const NursingService = (props) => {
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [nursingServices, setNursingServices] = useState('');
  const [currentService, setCurrentService] = useState({});
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity, reloadData) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrentService({});
    }
    if (reloadData) {
      setStatusUpdate(!statusUpdate);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    nursingService
      .getAll('nursingService', loggedUser, currentMonth + 1, currentYear)
      .then((data) => {
        setNursingServices(data);
        setIsLoading(false);
      });
  }, [statusUpdate, currentMonth, currentYear]);

  const monthSliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    initialSlide: currentMonth,
    afterChange: (current) => afterChangeMonth(current),
  };

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredServices =
    nursingServices && nursingServices.length > 0
      ? nursingServices.filter((item) => {
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

  const handleDeleteClick = (nursingService) => {
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
          .deleteEntity('nursingService', nursingService.id, loggedUser)
          .then((data) => {
            setStatusUpdate(!statusUpdate);
          });
      }
    });
  };

  const handleRowClick = (row, event) => {
    setCurrentService(row);
    modalToggle();
  };

  const columnsConfig = [
    {
      cell: () => <i className="icofont icofont-nursing-home text-muted" />,
      width: '56px', // custom width for icon button
      style: {
        // borderBottom: '1px solid #FFFFFF',
        marginBottom: '-1px',
      },
    },
    {
      name: 'Fecha',
      selector: (row) => new Date(row.date).toLocaleDateString('es'),
      sortable: true,
      left: true,
    },
    {
      name: 'Enfermera/o',
      selector: (row) => row.nurse.fullName,
      sortable: true,
      left: true,
    },
    {
      name: 'Servicio',
      selector: (row) => row.service.description,
      sortable: true,
      left: true,
    },
    {
      name: 'Costo Servicio',
      selector: (row) => `$${row.service.cost}`,
      sortable: true,
      left: true,
    },
    {
      name: 'Honorario Enfermera/o',
      selector: (row) => `$${row.nurseFee}`,
      sortable: true,
      left: true,
    },
    {
      name: 'Obra Social',
      selector: (row) => `${row.healthInsuranceCompany?.description || '-'} `,
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
              title="Borrar Servicio"
            ></i>
          </span>
        </div>
      ),
    },
  ];

  const afterChangeMonth = (currentMonthIndex) => {
    setCurrentMonth(currentMonthIndex);
  };

  return (
    <Fragment>
      <Breadcrumb title="Servicios de Enfermería" parent="Enfermería" />
      {!isLoading ? (
        <Container fluid={true}>
          <Row>
            <Col md="12" lg="12" xl="12">
              <div className="card">
                <div className="card-header project-list">
                  <Row>
                    <Col md="6">
                      <h5>{'Listado de Servicios de Enfermería'}</h5>
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
                <div className="text-center row mt-4">
                  <div className="col-md-4 offset-md-4">
                    <Slider {...monthSliderSettings}>
                      {months.map((x, index) => (
                        <div key={index}>{x}</div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="card-body datatable-react">
                  <div className="text-center mb-2">
                    <a
                      href="#javascript"
                      className="text-info"
                      onClick={() => setCurrentYear(currentYear - 1)}
                    >
                      <i className="fa fa-chevron-left"></i>
                    </a>
                    <a href="#javascript" className="text-info">
                      <span className="ml-4 mr-4 f-18 f-w-600 ">
                        {currentYear}
                      </span>
                    </a>
                    <a
                      href="#javascript"
                      className="text-info"
                      onClick={() => setCurrentYear(currentYear + 1)}
                    >
                      <i className="fa fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className="table-responsive support-table">
                    <DataTable
                      columns={columnsConfig}
                      data={filteredServices}
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
                            No se encontraron servicios...
                          </span>
                        </Col>
                      }
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                          <div className="col-md-7">
                          <h5><b>{`Total Costos de Servicios (${months[currentMonth]}. ${currentYear}):`}</b> </h5>
                          </div>
                          <div className="col-md-5">
                            <h5 className="text-muted">{filteredServices.length > 0 && `$${filteredServices.map(x => x.service.cost).reduce((accumulator, curr) => accumulator + curr)}`}</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                          <h5><b>{`Total Honorarios Enfermeras/os (${months[currentMonth]}. ${currentYear}):`}</b> </h5>
                          </div>
                          <div className="col-md-5">
                          <h5 className="text-muted">{filteredServices.length > 0 && `$${filteredServices.map(x => x.nurseFee).reduce((accumulator, curr) => accumulator + curr)}`}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <NewNursingServiceModal
            modal={modal}
            modalToggle={modalToggle}
            currentService={currentService}
            setCurrentService={setCurrentService}
          />
        </Container>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default NursingService;
