import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useLocation, useParams } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { toast } from 'react-toastify';
import ReactToPrint from 'react-to-print';
import { getDownloadURL } from 'firebase/storage';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import { patientUpdateHRWatcher } from '../../redux/patients/actions';
import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';
import notFoundImg from '../../assets/images/search-not-found.png';
import { firebase_app } from '../../data/config';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientFiles = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const componentRef = useRef();

  const [modalPreviewFile, setModalPreviewFile] = useState(false);
  const modalPreviewFileToggle = () => {
    setModalPreviewFile(!modalPreviewFile);
  };

  const [files, setFiles] = useState([]);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (patient && patient.id === id) {
      setFiles(patient.healthRecord.files);
    }
  }, [id, patient]);

  // specify upload params and url for your files
  const getUploadParams = async (fileWithMeta) => {
    // return { url: 'https://httpbin.org/post' };
    const fileName = new Date().getTime() + '-' + fileWithMeta.meta.name;
    const fileRef = await firebase_app
      .storage()
      .ref(`pacientes/${patient.fullName}/archivos/${fileName}`);
    const result = await fileRef.put(fileWithMeta.file).then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((url) => {
        return url;
      });
    });
    fileWithMeta.meta.downloadURL = result;
    fileWithMeta.meta.uniqueName = fileName;
    return { url: '' };
  };
  // called every time a file's `status` changes

  const handleChangeStatus = async (fileWithMeta, status, allFiles) => {
    if (status === 'error_upload_params') {
      toast.success(
        `Archivo "${fileWithMeta.meta.name}" cargado exitosamente!`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
      const updatedFiles = [
        ...files,
        {
          file: fileWithMeta.file,
          ...fileWithMeta.meta,
          fileType: fileWithMeta.meta.type,
          name: fileWithMeta.meta.uniqueName,
        },
      ];
      setFiles(updatedFiles);
      dispatch(
        patientUpdateHRWatcher({
          patient: patient,
          healthRecordData: { ...patient.healthRecord, files: updatedFiles },
        })
      );
      fileWithMeta.remove(fileWithMeta, allFiles);
    } else if (status === 'aborted') {
      toast.error(`Falló la carga del archivo "${fileWithMeta.meta.name}".`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const handleRemoveFile = (file, index) => {
    const updatedFiles = files.filter((x) => x._id !== file._id);
    setFiles(updatedFiles);

    var desertRef = firebase_app
    .storage()
    .ref(`pacientes/${patient.fullName}/archivos/${file.name}`);

    desertRef
      .delete()
      .then(() => {
        dispatch(
          patientUpdateHRWatcher({
            patient: patient,
            healthRecordData: { ...patient.healthRecord, files: updatedFiles },
          })
        );
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    
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
                <div className="col-md-12">
                  <h5>{'Archivos del Paciente'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {
                      'Archivos, gráficos de evolución, tablas alimentarias, registros de valores de glucemia, conteos de hidratos de carbono, registros de presión domiciliarios, etc.'
                    }
                  </span>
                </div>
                {/* <div className="col-md-2">
                  <div className="text-right">
                    <button
                      onClick={addPrescription}
                      className="btn btn-primary"
                    >
                      {'Agregar'}
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="card-body">
              {files.length > 0 ? (
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
                                  // src={window.URL.createObjectURL(data.downloadURL)}
                                  src={data.downloadURL}
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
                                {new Date(data.uploadedDate).toLocaleString(
                                  'es'
                                )}
                              </small>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="col-md-12 text-center m-50">
                  <img className="img-fluid" src={notFoundImg} alt="" />
                  <br />
                  <span className="txt-info">
                    No se encontraron archivos...
                  </span>
                </div>
              )}
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
                    // mode === 'browse' ||
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
          </div>
          {modalPreviewFile && (
            <Modal
              isOpen={modalPreviewFile}
              toggle={modalPreviewFileToggle}
              size="xl"
              centered
            >
              <ModalHeader toggle={modalPreviewFileToggle}>
                Archivo "{filePreview.name}" | Paciente{' '}
                {patient.fullName}
              </ModalHeader>
              <ModalBody>
                <iframe
                  title="filePreviewFrame"
                  style={{
                    width: '100%',
                    height: '900px',
                  }}
                  // src={window.URL.createObjectURL(filePreview.file)}
                  src={filePreview.downloadURL}
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
                // src={window.URL.createObjectURL(filePreview.file)}
                src={filePreview.downloadURL}
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

export default PatientFiles;
