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
import { getDownloadURL } from 'firebase/storage';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';
import * as patientService from '../../services/patient.service';
import notFoundImg from '../../assets/images/search-not-found.png';
import { firebase_app } from '../../data/config';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientStudies = (props) => {
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
      setStudyExam(null);
    }
    setModal(!modal);
  };
  const [modalPreviewFile, setModalPreviewFile] = useState(false);
  const modalPreviewFileToggle = () => {
    setModalPreviewFile(!modalPreviewFile);
  };

  const [files, setFiles] = useState([]);
  const [filePreview, setFilePreview] = useState(null);
  const [studyExam, setStudyExam] = useState({});
  const [studyExams, setStudyExams] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false);

  const [studyTypes, setStudyTypes] = useState([]);
  useEffect(() => {
    entityService
      .getAll('studyType', loggedUser)
      .then((data) => setStudyTypes(data));
    return () => {};
  }, []);

  useEffect(() => {
    if (patient && patient.id === id) {
      patientService
        .getStudy({ patientId: patient.id }, loggedUser)
        .then((data) => setStudyExams(data));
    }
  }, [id, patient, statusUpdate]);

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const columnsConfigStudy = [
    {
      name: 'Fecha',
      selector: (row) => new Date(row.createdAt).toLocaleDateString('es'),
      sortable: true,
      left: true,
    },
    {
      name: 'Tipo de Estudio',
      selector: (row) => row.studyType.description,
      sortable: true,
      left: true,
    },
    {
      name: 'Archivos',
      selector: (row) => row.files?.length,
      sortable: false,
      center: true,
    },
  ];

  const handleSubmitForm = (data) => {
    if (files.length === 0) {
      setError('studies', {});
    } else {
      clearErrors('studies');
      SweetAlert.fire({
        title: 'Atención',
        text: `Se generará un nuevo estudio complementario para el paciente ${patient.fullName}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.value) {
          let addedFiles = [];
          for (const file of files) {
            const fileRef = await firebase_app
              .storage()
              .ref(`${patient.fullName}/estudios/${file.name}`);
            const result = await fileRef.put(file.file).then((snapshot) => {
              return getDownloadURL(snapshot.ref).then((url) => {
                return url;
              });
            });
            addedFiles.push({ ...file, downloadURL: result });
          }

          const studyExamData = {
            studyType: studyExam.studyType,
            files: addedFiles,
          };
          await patientService
            .saveStudy(patient, studyExamData, loggedUser)
            .then((data) => {
              setStatusUpdate(!statusUpdate);
              modalToggle();
            });
        }
      });
    }
  };

  const handleRowClick = (row, event) => {
    setStudyExam(row);
    setFiles(row.files);
    setModalEdit(false);
    modalToggle();
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
      setFiles([
        ...files,
        {
          file: fileWithMeta.file,
          ...fileWithMeta.meta,
          name: new Date().getTime() + '-' + fileWithMeta.meta.name,
          fileType: fileWithMeta.meta.type,
        },
      ]);
      clearErrors('studies');
      fileWithMeta.remove(fileWithMeta, allFiles);
    } else if (status === 'aborted') {
      toast.error(`Falló la carga del archivo "${fileWithMeta.meta.name}".`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
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
                  <h5>{'Estudios Complementarios'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {
                      'Estudios complementarios, imágenes y archivos varios del paciente.'
                    }
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
                  columns={columnsConfigStudy}
                  data={studyExams}
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
                        El paciente aún no tiene estudios cargados...
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
                  ? `Estudio Complementario realizado el día ${new Date(
                      studyExam?.createdAt
                    ).toLocaleDateString('es')} | Paciente 
                ${patient.fullName}`
                  : 'Nuevo Estudio Complementario'}
              </ModalHeader>
              <ModalBody>
                <div className="card">
                  <form
                    className="theme-form mega-form"
                    onSubmit={handleSubmit(handleSubmitForm)}
                  >
                    <div className="card-body">
                      <h6>{'Tipo de Estudio'}</h6>
                      <div className="form-group row">
                        <div className="col-md-4">
                          <div className="row">
                            <label
                              className="col-md-12 col-form-label"
                              htmlFor="drug"
                            >
                              {''}
                            </label>
                            <div className="col-md-12">
                              <select
                                className="form-control"
                                name="studyType"
                                id="studyType"
                                disabled={!modalEdit}
                                value={studyExam?.studyType?.id}
                                onChange={(e) =>
                                  setStudyExam({
                                    ...studyExam,
                                    studyType: studyTypes.filter(
                                      (x) => x.id === e.target.value
                                    )[0],
                                  })
                                }
                                ref={register({ required: true })}
                              >
                                <option></option>
                                {studyTypes &&
                                  studyTypes.map((study, i) => (
                                    <option key={study.id} value={study.id}>
                                      {study.description}
                                    </option>
                                  ))}
                              </select>
                              <span style={{ color: 'red' }}>
                                {errors.studyType && 'Ingrese un valor.'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span style={{ color: 'red' }}>
                        {errors.studies && 'Debe ingresar al menos un archivo.'}
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
                                  key={data.name}
                                >
                                  <div className="file-top">
                                    {' '}
                                    {data.fileType?.startsWith('image') ? (
                                      <img
                                        alt="Crop preview"
                                        src={
                                          data.downloadURL || data.previewUrl
                                        }
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
                                        className="fa fa-file-text-o txt-info"
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
                                      {!data._id && (
                                        <i
                                          title="Borrar"
                                          className="fa fa-trash text-danger f-14 ellips"
                                          onClick={() =>
                                            handleRemoveFile(data, i)
                                          }
                                        ></i>
                                      )}
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
                  src={
                    filePreview.downloadURL ||
                    window.URL.createObjectURL(filePreview.file)
                  }
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
                src={
                  filePreview.downloadURL ||
                  window.URL.createObjectURL(filePreview.file)
                }
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

export default PatientStudies;
