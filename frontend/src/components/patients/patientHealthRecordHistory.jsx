import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientHealthRecordHistory = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();
  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const [currenItem, setCurrentItem] = useState({});

  const [modal, setModal] = useState(false);
  const modalToggle = (clearEntity) => {
    setModal(!modal);
    if (clearEntity) {
      setCurrentItem({});
    }
  };

  const handleRowClick = (row, event) => {
    // setCurrentItem(row);
    modalToggle();
  };

  return (
    <Fragment>
      <div>
        <div className="modal-header p-l-20 p-r-20 ">
          <div className="row">
            <div className="col-md-12">
              <h6 className="mb-0">
                {`Historia Clínica N° ${patient?.healthRecord.healthRecordNumber}`}
              </h6>
            </div>
            <div className="col-md-12 text-muted">
              <p className="mb-0">Historial de modificaciones.</p>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className="row pt-0">
            <div className="col-md-12 mt-4">
              <span className="ml-4 mr-4 pull-right">
                <a
                  href="#javascript"
                  className="text-info"
                  onClick={() => handleRowClick()}
                >
                  <i className="fa fa-info-circle"></i> Ver detalles
                </a>
              </span>
              <h6 className="mb-0">
                <i className="fa fa-clock-o text-muted mr-1"></i>{' '}
                {new Date().toLocaleString('es', {
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
                Realizada por: <em>taypity</em>
              </p>
            </div>
          </div>{' '}
          <div className="row pt-0">
            <div className="col-md-12 mt-4">
              <span className="ml-4 mr-4 pull-right">
                <a
                  href="#javascript"
                  className="text-info"
                  onClick={() => handleRowClick()}
                >
                  <i className="fa fa-info-circle"></i> Ver detalles
                </a>
              </span>
              <h6 className="mb-0">
                <i className="fa fa-clock-o text-muted mr-1"></i>{' '}
                {'11 de Mayo de 2022, 11:04 hs'}
              </h6>
              <p className="ml-4 mb-0 text-muted">
                Realizada por: <em>jllaneza</em>
              </p>
            </div>
          </div>{' '}
          <div className="row pt-0">
            <div className="col-md-12 mt-4">
              <span className="ml-4 mr-4 pull-right">
                <a
                  href="#javascript"
                  className="text-info"
                  onClick={() => handleRowClick()}
                >
                  <i className="fa fa-info-circle"></i> Ver detalles
                </a>
              </span>
              <h6 className="mb-0">
                <i className="fa fa-clock-o text-muted mr-1"></i>{' '}
                {'1 de Abril de 2022, 10:04 hs'}
              </h6>
              <p className="ml-4 mb-0 text-muted">
                Realizada por: <em>taypity</em>
              </p>
            </div>
          </div>
          <div className="row pt-0">
            <div className="col-md-12 mt-4">
              <span className="ml-4 mr-4 pull-right">
                <a
                  href="#javascript"
                  className="text-info"
                  onClick={() => handleRowClick()}
                >
                  <i className="fa fa-info-circle"></i> Ver detalles
                </a>
              </span>
              <h6 className="mb-0">
                <i className="fa fa-clock-o text-muted mr-1"></i>{' '}
                {'20 de Enero de 2022, 11:04 hs'}
              </h6>
              <p className="ml-4 mb-0 text-muted">
                Realizada por: <em>taypity</em>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#javascript" className="text-info">
            ...ver más
          </a>
        </div>
      </div>
      <Modal isOpen={modal} toggle={() => modalToggle(true)} size="lg">
        <ModalHeader toggle={() => modalToggle(true)}>
          <i className="fa fa-clock-o text-muted mr-1"></i>
          {'1 de Abril de 2022, 10:04 hs | Realizada por taypity'}
        </ModalHeader>
        <ModalBody>
          <div className="card"></div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default PatientHealthRecordHistory;
