import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Collapse, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import DataTableFilterComponent from '../common/data-table/dataTableFilterComponent';

import * as patientService from '../../services/patient.service';

const PatientHealthRecordHistory = (props) => {
  const { patient } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const [filterText, setFilterText] = useState('');
  const [currenItem, setCurrentItem] = useState(null);
  const [hrHistoryList, setHrHistoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrentItem(null);
    }
  };

  const translate = {
    pathologicalBackground: 'Antecedentes Patológicos',
    heartDisease: 'Cardiopatías',
    heartDiseaseText: 'Texto Cardiopatías',
    injuries: 'Traumatismos',
    injuriesText: 'Texto Traumatismos',
    diabetes: 'Diabetes',
    diabetesText: 'Texto Diabetes',
    arterialHypertension: 'Hipertensión arterial',
    arterialHypertensionText: 'Texto Hipertensión arterial',
    endocrineMetabolic: 'Endócrino-metabólico',
    endocrineMetabolicText: 'Texto Endócrino-metabólico',
    respiratory: 'Respiratorios',
    respiratoryText: 'Texto Respiratorios',
    glaucoma: 'Glaucoma',
    glaucomaText: 'Texto Glaucoma',
    digestive: 'Digestivos',
    digestiveText: 'Texto Digestivos',
    oncological: 'Oncológicos',
    oncologicalText: 'Texto Oncológicos',
    neurological: 'Neurológicos',
    neurologicalText: 'Texto Neurológicos',
    infectological: 'Infectológicos',
    infectologicalText: 'Texto Infectológicos',
    nephrourological: 'Nefrourológicos',
    nephrourologicalText: 'Texto Nefrourológicos',
    gynecoObstetrics: 'Gineco y obstétricos',
    gynecoObstetricsText: 'Texto Gineco y obstétricos',
    std: 'ETS',
    stdText: 'Texto ETS',
    hematological: 'Hematológicos',
    hematologicalText: 'Texto Hematológicos',
    transfusions: 'Transfusiones',
    transfusionsText: 'Texto Transfusiones',
    hospitalizations: 'Hospitalizaciones previas',
    hospitalizationsText: 'Texto Hospitalizaciones previas',
    surgeries: 'Cirugías previas',
    surgeriesText: 'Texto Cirugías previas',
    others: 'Otros',
    noPathologicalBackground: 'Antecedentes No Patológicos',
    smoking: 'Tabaquismo',
    smokingText: 'Texto Tabaquismo',
    alcoholism: 'Alcoholismo',
    alcoholismText: 'Texto Alcoholismo',
    drugs: 'Drogas',
    drugsText: 'Texto Drogas',
    vaccines: 'Vacuna o inmunización reciente',
    vaccinesText: 'Texto Vacuna o inmunización reciente',
    physicalActivities: 'Actividad física',
    physicalActivitiesText: 'Texto Actividad física',
    hereditaryBackground: 'Antecedentes Heredo-familiares',
    thyroid: 'Enfermedades de tiroides',
    thyroidText: 'Texto Enfermedades de tiroides',
    psychiatricBackgroud: 'Antecedentes Psiquiátricos',
    nutritionalBackgroud: 'Antecedentes Nutricionales',
    allergiesInfo: 'Alergias',
    allergies: 'Alergias',
    extraComments: 'Alergias Comentarios',
    drugsInfo: 'Fármacos',
    files: 'Archivos',
    vitalsAndMetrics: 'Examen físico',
    date: 'Fecha',
    systolicBloodPressure: 'Tensión arterial sistólica',
    diastolicBloodPressure: 'Tensión arterial diastólica',
    breathingRate: 'Frecuencia respiratoria',
    heartRate: 'Frecuencia cardíaca',
    temperature: 'Temperatura',
    bodyFat: 'Grasa corporal',
    bodyWeight: 'Masa corporal (IMC)',
    weight: 'Peso',
    height: 'Estatura',
    abdominalCircumference: 'Circunferencia Abdominal',
    feetExam: 'Examen de Pies',
    backEyeExam: 'Examen de Fondo de Ojo',
    notes: 'Notas',
    studyExams: 'Estudios Complementarios',
    laboratoryExams: 'Laboratorios',
  };

  useEffect(() => {
    if (patient.id) {
      getHistoryList();
    }
  }, [patient]);

  useEffect(() => {
    if (patient.id && (filterText?.length > 2 || filterText === '')) {
      getHistoryList();
    }
  }, [filterText]);

  useEffect(() => {
    if (patient.id) {
      getHistoryList();
    }
  }, [currentPage]);

  const getHistoryList = () => {
    patientService
        .getHealthRecordHistory(
          { patientId: patient.id, page: currentPage, limit: limit, filter: filterText },
          loggedUser
        )
        .then((data) => {
          const { currentPage, hrHistoryList, totalPages } = data;
          setHrHistoryList(hrHistoryList);
          setCurrentPage(currentPage);
          setTotalPages(totalPages);
        });
  }

  const handleRowClick = (row, event) => {
    setCurrentItem(row);
    modalToggle();
  };

  const handleCollapse = (item) => {
    item.open = !item.open;
  };

  const handleClear = () => {
    if (filterText) {
      setFilterText('');
    }
  };

  const handlePagination = (e, index) => {
    e.preventDefault();
    setCurrentPage(parseInt(index) + 1);
  }

  return (
    <Fragment>
      <div>
        <div className="modal-header p-l-20 p-r-20 ">
          <div className="row">
            <div className="col-md-12">
              <h6 className="mb-0">
                {`Historia Clínica N° ${patient?.healthRecord?.healthRecordNumber}`}
              </h6>
            </div>
            <div className="col-md-12 text-muted">
              <p className="mb-0">Historial de modificaciones.</p>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className="row pt-0 text-center">
            <div className="col-md-12 mt-4">
              <h6 className="mb-0">
                <i className="fa fa-star text-warning mr-1"></i>{' '}
                {new Date(patient?.createdAt).toLocaleString('es', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}{' '}
                hs
              </h6>
              <p className="ml-4 mb-0 text-muted">
                Paciente dado de alta en Co-Med
              </p>
              {/* <p className="ml-4 mb-0 text-muted">
                Realizada por: <em>taypity</em>
              </p> */}
            </div>
          </div>
          <hr />
          <div className="row pt-0">
            <div className="col-md-6 mb-2" title="Filtrar por usuario...">
              <DataTableFilterComponent
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
              />
            </div>
            <div className="col-md-12">
              <p className="ml-2 mb-0 text-muted">
                {hrHistoryList.length > 0
                  ? 'Modificaciones sobre la Historia Clínica'
                  : 'No se registraron modificaciones aún'}
              </p>
            </div>
          </div>
          {hrHistoryList.length > 0 &&
            hrHistoryList.map((hrHistory, index) => (
              <div className="row pt-0" key={hrHistory.id}>
                <div className="col-md-12 mt-4">
                  <span className="ml-4 mr-4 pull-right">
                    <a
                      href="#javascript"
                      className="text-info"
                      onClick={() => handleRowClick(hrHistory)}
                    >
                      <i className="fa fa-info-circle"></i> Ver detalles
                    </a>
                  </span>
                  <h6 className="mb-0">
                    <i className="fa fa-clock-o text-muted mr-1"></i>{' '}
                    {new Date(hrHistory.createdAt).toLocaleString('es', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}{' '}
                    hs
                  </h6>
                  <p className="ml-4 mb-0 text-muted">
                    Realizada por: <em>{hrHistory.username}</em>
                  </p>
                </div>
              </div>
            ))}
        </div>
        { totalPages > 0 && (
          <div className="text-center mt-4">
            <Pagination
                  aria-label="Agenda Pagination"
                  className="pagination justify-content-center pagination-primary"
                >
                  <PaginationItem disabled={currentPage - 1 <= 0}>
                    <PaginationLink
                      first
                      href="#javascript"
                      onClick={(e) => handlePagination(e, 0)}
                    />
                  </PaginationItem>
                  <PaginationItem disabled={currentPage - 1 <= 0}>
                    <PaginationLink
                      previous
                      href="#javascript"
                      onClick={(e) =>
                        handlePagination(e, currentPage - 2)
                      }
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((page, i) => (
                    <PaginationItem active={i === currentPage - 1} key={i}>
                      <PaginationLink
                        onClick={(e) => handlePagination(e, i)}
                        href="#"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage - 1 >= totalPages - 1}>
                    <PaginationLink
                      next
                      href="#javascript"
                      onClick={(e) =>
                        handlePagination(e, currentPage )
                      }
                    />
                  </PaginationItem>
                  <PaginationItem disabled={currentPage - 1 >= totalPages - 1}>
                    <PaginationLink
                      last
                      href="#javascript"
                      onClick={(e) =>
                        handlePagination(e, totalPages - 1)
                      }
                    />
                  </PaginationItem>
                </Pagination>
          </div>
        )}
      </div>
      <Modal isOpen={modal} toggle={() => modalToggle(true)} size="xl">
        <ModalHeader toggle={() => modalToggle(true)}>
          <i className="fa fa-h-square text-muted mr-1"></i>
          {`${patient?.fullName} - Historia Clínica n° ${
            patient?.healthRecord?.healthRecordNumber
          } | Modificaciones realizadas el día ${new Date(
            currenItem?.createdAt
          ).toLocaleString('es', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })} hs. por `}
          <em>"{currenItem?.username}"</em>
        </ModalHeader>
        <ModalBody>
          <div className="card">
            <div className="card-body row pt-2">
              <p className="col-md-12 mb-4 text-muted">
                Detalle de diferencias encontradas a partir de las
                modificaciones que se realizaron sobre la Historia Clínica.
              </p>
              <h6 className="col-md-6">Valor anterior</h6>
              <h6 className="col-md-6">Valor actualizado</h6>
              <ul className="col-md-6">
                {currenItem?.diff &&
                  Object.keys(currenItem.diff.old).map((oKey, index) => (
                    <li key={`${oKey}-old`}>
                      <a
                        href="#javascript"
                        className="text-secondary"
                        onClick={() =>
                          handleCollapse(currenItem.diff.old[oKey])
                        }
                      >
                        <i
                          className={`fa fa-caret-${
                            currenItem.diff.old[oKey].open ? 'down' : 'right'
                          } txt-secondary m-r-10`}
                        ></i>
                        {translate[oKey]}
                      </a>
                      <Collapse isOpen={currenItem.diff.old[oKey].open}>
                        <ul className="ml-3">
                          {!currenItem.diff.old[oKey].value &&
                          currenItem.diff.old[oKey].value !== '' ? (
                            Object.keys(currenItem.diff.old[oKey]).map(
                              (oKeySub, index) =>
                                oKeySub !== 'open' && (
                                  <li
                                    className="list-group-item list-group-item-danger p-1"
                                    key={`${oKeySub}-old`}
                                  >
                                    {translate[oKeySub] +
                                      ': ' +
                                      (currenItem.diff.old[oKey][oKeySub] ===
                                      true
                                        ? 'Si'
                                        : currenItem.diff.old[oKey][oKeySub] ===
                                          false
                                        ? 'No'
                                        : currenItem.diff.old[oKey][oKeySub])}
                                  </li>
                                )
                            )
                          ) : (
                            <li className="list-group-item list-group-item-danger p-1">
                              {oKey === 'notes' ? (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: currenItem.diff.old[oKey].value,
                                  }}
                                />
                              ) : (
                                currenItem.diff.old[oKey].value
                              )}
                            </li>
                          )}
                        </ul>
                      </Collapse>
                    </li>
                  ))}
              </ul>
              <ul className="col-md-6">
                {currenItem?.diff &&
                  Object.keys(currenItem.diff.new).map((oKey, index) => (
                    <li key={`${oKey}-new`}>
                      <a
                        href="#javascript"
                        className="text-secondary"
                        onClick={() =>
                          (currenItem.diff.new[oKey].open =
                            !currenItem.diff.new[oKey].open)
                        }
                      >
                        <i
                          className={`fa fa-caret-${
                            currenItem.diff.new[oKey].open ? 'down' : 'right'
                          } txt-secondary m-r-10`}
                        ></i>
                        {translate[oKey]}
                      </a>
                      <Collapse isOpen={currenItem.diff.new[oKey].open}>
                        <ul className="ml-3">
                          {!currenItem.diff.new[oKey].value ? (
                            Object.keys(currenItem.diff.new[oKey]).map(
                              (oKeySub, index) =>
                                oKeySub !== 'open' && (
                                  <li
                                    className="list-group-item list-group-item-success p-1"
                                    key={`${oKeySub}-new`}
                                  >
                                    {translate[oKeySub] +
                                      ': ' +
                                      (currenItem.diff.new[oKey][oKeySub] ===
                                      true
                                        ? 'Si'
                                        : currenItem.diff.new[oKey][oKeySub] ===
                                          false
                                        ? 'No'
                                        : currenItem.diff.new[oKey][oKeySub])}
                                  </li>
                                )
                            )
                          ) : (
                            <li className="list-group-item list-group-item-success p-1">
                              {oKey === 'notes' ? (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: currenItem.diff.new[oKey].value,
                                  }}
                                />
                              ) : (
                                currenItem.diff.new[oKey].value
                              )}
                            </li>
                          )}
                        </ul>
                      </Collapse>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default PatientHealthRecordHistory;
