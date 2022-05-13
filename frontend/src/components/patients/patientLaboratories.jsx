import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useLocation, useParams } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import DataTable from 'react-data-table-component';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { toast } from 'react-toastify';
import ReactToPrint from 'react-to-print';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';
import * as patientService from '../../services/patient.service';
import notFoundImg from '../../assets/images/search-not-found.png';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientLaboratories = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();
  const componentRef = useRef();
  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const [modalEdit, setModalEdit] = useState(true);
  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    if (modal) {
      setFiles([]);
      setFilePreview(null);
      setLaboratoryExamDate(null);
      setLaboratories([]);
    }
    setModal(!modal);
  };
  const [modalPreviewFile, setModalPreviewFile] = useState(false);
  const modalPreviewFileToggle = () => {
    setModalPreviewFile(!modalPreviewFile);
  };

  const [files, setFiles] = useState([]);
  const [filePreview, setFilePreview] = useState(null);
  const [laboratoryExamDate, setLaboratoryExamDate] = useState(null);
  const [laboratories, setLaboratories] = useState([]);
  const [laboratoryExams, setLaboratoryExams] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false);

  const [laboratoryTypes, setLaboratoryTypes] = useState([]);
  useEffect(() => {
    entityService
      .getAll('laboratoryType', loggedUser)
      .then((data) => setLaboratoryTypes(data));
    return () => {};
  }, []);

  useEffect(() => {
    if (patient && patient.id === id) {
      patientService
        .getLaboratoryExams({ patientId: patient.id }, loggedUser)
        .then((data) => setLaboratoryExams(data));
    }
  }, [id, patient, statusUpdate]);

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const columnsConfigPrescription = [
    {
      name: 'Fecha',
      width: '100px',
      selector: (row) => new Date(row.createdAt).toLocaleDateString('es'),
      sortable: true,
      left: true,
    },
    {
      name: 'Laboratorios',
      sortable: false,
      left: true,
      cell: (row, index, column, id) =>
        row.laboratories?.map((x) => {
          return (
            <span key={x._id}>
              <b>* {x.laboratoryType.description}:</b> {x.value}
            </span>
          );
        }),
    },

    {
      name: 'Archivos',
      sortable: false,
      right: true,
      cell: (row, index, column, id) => (
        <div className="file-content">
          <div className="file-manager">
            <ul className="files row">
              {row.filesUrls?.map((data, i) => {
                return (
                  <li className="file-box col-md-3 faq-image" key={data.id}>
                    <div className="file-top">
                      {' '}
                      {data.previewUrl ? (
                        <img
                          alt="Crop preview"
                          src={window.URL.createObjectURL(data.file)}
                          style={{
                            maxWidth: '50%',
                            maxHeight: '90%',
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            setFilePreview(data);
                            modalPreviewFileToggle();
                          }}
                        />
                      ) : (
                        <i
                          className="fa fa-file-picture-o txt-info"
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setFilePreview(data);
                            modalPreviewFileToggle();
                          }}
                        ></i>
                      )}
                      <a href="#javascript">
                        <ReactToPrint
                          trigger={() => (
                            <i
                              title="Imprimir"
                              className="fa fa-print text-primary f-14 ellips mr-3"
                            ></i>
                          )}
                          content={() => componentRef.current}
                          onBeforeGetContent={async () => {
                            await setFilePreview(data);
                          }}
                          onAfterPrint={() => {
                            setFilePreview(null);
                          }}
                        />
                        <i
                          title="Borrar"
                          className="fa fa-trash text-danger f-14 ellips"
                          onClick={() => handleRemoveFile(data, i)}
                        ></i>
                      </a>
                    </div>
                    <div className="file-bottom">
                      <h6>{data.name} </h6>
                      {/* <p className="mb-1">{data.size}</p> */}
                      <small>
                        <b>{'Subido el día'}: </b>
                        {new Date(data.uploadedDate).toLocaleString('es')}
                      </small>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const handleSubmitForm = (data) => {
    if (laboratories.length === 0 && files.length === 0) {
      setError('laboratories', {});
    } else {
      clearErrors('laboratories');
      SweetAlert.fire({
        title: 'Atención',
        text: `Se generará un nuevo examen de laboratorio para el paciente ${patient.fullName}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.value) {
          const laboratoryExamData = { laboratories: laboratories };
          await patientService
            .saveLaboratoryExam(patient, laboratoryExamData, loggedUser)
            .then((data) => {
              setStatusUpdate(!statusUpdate);
              modalToggle();
            });
        }
      });
    }
  };

  const handleRowClick = (row, event) => {
    setLaboratories(row.laboratories);
    setLaboratoryExamDate(row.createdAt);
    setModalEdit(false);
    modalToggle();
  };

  const handleLaboratyCheck = (lab, checked) => {
    if (checked) {
      setLaboratories([...laboratories, { laboratoryType: lab, value: 0 }]);
    } else {
      setLaboratories(
        laboratories.filter((x) => x.laboratoryType.id !== lab.id)
      );
    }
  };

  const handleLaboratoryValueChange = (lab, value) => {
    setLaboratories(
      laboratories.map((x) =>
        x.laboratoryType.id === lab.id ? { ...x, value: value } : x
      )
    );
  };

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' };
  };
  // called every time a file's `status` changes

  const handleChangeStatus = (fileWithMeta, status, allFiles) => {
    if (status === 'done') {
      toast.success(
        `Archivo "${fileWithMeta.meta.name}" cargado exitosamente!`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
      setFiles([...files, { file: fileWithMeta.file, ...fileWithMeta.meta }]);
      fileWithMeta.remove(fileWithMeta, allFiles);
    } else if (status === 'aborted') {
      toast.error(`Falló la carga del archivo "${fileWithMeta.meta.name}".`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmitFile = (filesWithMeta, allFiles) => {
    let addedFiles = [];
    allFiles.forEach((f) => {
      f.remove();
      addedFiles.push({ file: f.file, ...f.meta });
    });
    setFiles([...files, ...addedFiles]);
  };

  const handleRemoveFile = (file, index) => {
    setFiles(files.filter((x) => x.id !== file.id));
  };

  return (
    <Fragment>
      {status === LOADED ||
      status === SUCCEEDED ||
      status === FAILED ||
      (mode === 'new' && status !== LOADING) ? (
        <Fragment>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-6">
                  <h5>{'Laboratorios'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {'Exámenes de laboratorio del paciente.'}
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <button
                      onClick={() => {
                        setModalEdit(true);
                        modalToggle();
                      }}
                      className="btn btn-primary"
                    >
                      {'Agregar'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body datatable-react">
              <div className="table-responsive support-table">
                <DataTable
                  columns={columnsConfigPrescription}
                  data={laboratoryExams}
                  pagination
                  highlightOnHover
                  pointerOnHover
                  noHeader
                  subHeader
                  subHeaderAlign={'left'}
                  paginationPerPage={20}
                  paginationComponentOptions={paginationComponentOptions}
                  onRowClicked={handleRowClick}
                  noDataComponent={
                    <div className="col-md-12 text-center m-50">
                      <img className="img-fluid" src={notFoundImg} alt="" />
                      <br />
                      <span className="txt-info">
                        No se encontraron laboratorios...
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          {modal && (
            <Modal isOpen={modal} toggle={modalToggle} size="lg">
              <ModalHeader toggle={modalToggle}>
                {!modalEdit
                  ? `Examen de Laboratorio realizado el día ${new Date(laboratoryExamDate).toLocaleDateString('es')} | Paciente 
                ${patient.fullName}`
                  : 'Nuevo Examen de Laboratorio'}
              </ModalHeader>
              <ModalBody>
                <div className="card">
                  <form
                    className="theme-form mega-form"
                    onSubmit={handleSubmit(handleSubmitForm)}
                  >
                    <div className="card-body">
                      <h6>{'Laboratorios'}</h6>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <div className="row mt-2 mb-2">
                            <div className="col-md-6">
                              <div className="row  mt-2 mb-2">
                                <div className="col-md-6">Variable</div>
                                <div className="col-md-3 text-center">
                                  Valor
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row  mt-2 mb-2">
                                <div className="col-md-6">Variable</div>
                                <div className="col-md-3 text-center">
                                  Valor
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2 mb-2">
                            {laboratoryTypes.length > 0 &&
                              laboratoryTypes.map((lab, index) => (
                                <div key={lab.id} className="col-md-6">
                                  <div className="row  mt-2 mb-2">
                                    <div className="col-md-6">
                                      <input
                                        className="checkbox_animated"
                                        defaultChecked={laboratories
                                          .map((x) => x.laboratoryType.id)
                                          .includes(lab.id)}
                                        name={`laboratories`}
                                        onChange={(e) =>
                                          handleLaboratyCheck(
                                            lab,
                                            e.target.checked
                                          )
                                        }
                                        id={`lT${lab.id}`}
                                        type="checkbox"
                                        disabled={!modalEdit}
                                        ref={register({ required: false })}
                                      />
                                      <label
                                        className="mb-1 mr-2"
                                        htmlFor={`lT${lab.id}`}
                                      >
                                        {lab.description}
                                      </label>
                                    </div>
                                    <div className="col-md-3">
                                      <input
                                        className="form-control"
                                        name={`lT${lab.id}_value`}
                                        id={`lT${lab.id}_value`}
                                        defaultValue={
                                          laboratories
                                            .filter(
                                              (x) =>
                                                x.laboratoryType.id === lab.id
                                            )
                                            .map((x) => x.value) || 0
                                        }
                                        onChange={(e) =>
                                          handleLaboratoryValueChange(
                                            lab,
                                            e.target.value
                                          )
                                        }
                                        type="text"
                                        disabled={!modalEdit}
                                        ref={register({ required: false })}
                                      />
                                    </div>
                                    <div className="col-md-3"></div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <span style={{ color: 'red' }}>
                        {errors.laboratories &&
                          'Ingrese al menos un valor de laboratorio o un archivo.'}
                      </span>
                      <hr className="mt-4 mb-4" />
                      <h6>Archivos</h6>
                      <div className="file-content">
                        <div className="file-manager">
                          <ul className="files row">
                            {files.map((data, i) => {
                              return (
                                <li
                                  className="file-box col-md-3 faq-image"
                                  key={data.id}
                                >
                                  <div className="file-top">
                                    {' '}
                                    {data.previewUrl ? (
                                      <img
                                        alt="Crop preview"
                                        src={window.URL.createObjectURL(
                                          data.file
                                        )}
                                        style={{
                                          maxWidth: '50%',
                                          maxHeight: '90%',
                                          cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                          setFilePreview(data);
                                          modalPreviewFileToggle();
                                        }}
                                      />
                                    ) : (
                                      <i
                                        className="fa fa-file-picture-o txt-info"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                          setFilePreview(data);
                                          modalPreviewFileToggle();
                                        }}
                                      ></i>
                                    )}
                                    <a href="#javascript">
                                      <ReactToPrint
                                        trigger={() => (
                                          <i
                                            title="Imprimir"
                                            className="fa fa-print text-primary f-14 ellips mr-3"
                                          ></i>
                                        )}
                                        content={() => componentRef.current}
                                        onBeforeGetContent={async () => {
                                          await setFilePreview(data);
                                        }}
                                        onAfterPrint={() => {
                                          setFilePreview(null);
                                        }}
                                      />
                                      <i
                                        title="Borrar"
                                        className="fa fa-trash text-danger f-14 ellips"
                                        onClick={() =>
                                          handleRemoveFile(data, i)
                                        }
                                      ></i>
                                    </a>
                                  </div>
                                  <div className="file-bottom">
                                    <h6>{data.name} </h6>
                                    {/* <p className="mb-1">{data.size}</p> */}
                                    <small>
                                      <b>{'Subido el día'}: </b>
                                      {new Date(
                                        data.uploadedDate
                                      ).toLocaleString('es')}
                                    </small>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="dz-message needsclick mt-4">
                        <Dropzone
                          getUploadParams={getUploadParams}
                          onChangeStatus={handleChangeStatus}
                          // onSubmit={handleSubmitFile}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Agregar archivo"
                          disabled={(files) =>
                            !modalEdit ||
                            files.some((f) =>
                              [
                                'preparing',
                                'getting_upload_params',
                                'uploading',
                              ].includes(f.meta.status)
                            )
                          }
                        />
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
                      {modalEdit && (
                        <button className="btn btn-primary ml-2">
                          Guardar
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </ModalBody>
            </Modal>
          )}
          {modalPreviewFile && (
            <Modal
              isOpen={modalPreviewFile}
              toggle={modalPreviewFileToggle}
              size="xl"
              centered
            >
              <ModalHeader toggle={modalPreviewFileToggle}>
                Examen de Laboratorio "{filePreview.name}" | Paciente{' '}
                {patient.fullName}
              </ModalHeader>
              <ModalBody>
                <iframe
                  title="filePreviewFrame"
                  style={{
                    width: '100%',
                    height: '900px',
                  }}
                  src={window.URL.createObjectURL(filePreview.file)}
                  allowFullScreen
                ></iframe>
              </ModalBody>
            </Modal>
          )}
          {filePreview && (
            <div style={{ display: 'none' }}>
              <iframe
                title="filePrintFrame"
                id="filePrintFrame"
                style={{
                  width: '300%',
                  height: '3000px',
                }}
                src={window.URL.createObjectURL(filePreview.file)}
                ref={componentRef}
              ></iframe>
            </div>
          )}
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientLaboratories;
