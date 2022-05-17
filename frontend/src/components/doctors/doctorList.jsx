import React, { Fragment, useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Media,
} from 'reactstrap';
import { translate } from 'react-switch-lang';
import SweetAlert from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { PlusCircle } from 'react-feather';
import { Link } from 'react-router-dom';

import defaultuser from '../../assets/images/user/user.png';
import defaultBg from '../../assets/images/other-images/auth-bg-2.png';
import notFoundImg from '../../assets/images/search-not-found.png';
import Breadcrumb from '../common/breadcrumb';
import {
  doctorGetAllWatcher,
  doctorInitialize,
  doctorsInitialize,
  doctorChangeStatustWatcher,
} from '../../redux/doctors/actions';
import { LOADED, SUCCEEDED } from '../../redux/statusTypes';
import Loader from '../common/loader';

const DoctorList = (props) => {
  const { doctors, status } = useSelector((store) => store.Doctors);
  const { status: doctorStoreStatus } = useSelector((store) => store.Doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doctorGetAllWatcher());
    return () => {
      dispatch(doctorsInitialize());
    };
  }, []);

  useEffect(() => {
    if (doctorStoreStatus === SUCCEEDED) dispatch(doctorGetAllWatcher());
  }, [doctorStoreStatus]);

  const handleDoctorChangeStatusClick = (doctor) => {
    SweetAlert.fire({
      title: 'Atención!',
      text: `Se cambiará el estado del doctor "${doctor.fullName}" a "${
        doctor.status === 'active' ? 'Inactivo' : 'Activo'
      }".`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff0000',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(doctorChangeStatustWatcher(doctor));
      }
    });
  };

  return (
    <Fragment>
      {status === LOADED ? (
        <Fragment>
          <Breadcrumb title={props.t('Doctors')} />
          <Container fluid={true}>
            <Row>
              <Col md="12" lg="12" xl="12">
                {/* <div className="card"> */}
                <div className="project-list">
                  <Row>
                    <Col md="6">
                      <h5>{props.t('DoctorList')}</h5>
                    </Col>
                    <Col md="6">
                      <div className="text-right">
                        <Link
                          className="btn btn-primary"
                          to={`${process.env.PUBLIC_URL}/doctor/0?mode=new`}
                          onClick={() => dispatch(doctorInitialize())}
                        >
                          {' '}
                          <PlusCircle />
                          {props.t('New')}
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* </div> */}
                {doctors.length <= 0 && (
                  <Col md="12" className="text-center m-50">
                    <img className="img-fluid" src={notFoundImg} alt="" />
                    <br />
                    <span className="txt-info">
                      No existen doctores cargados aún
                    </span>
                  </Col>
                )}
              </Col>
              {doctors.map((doctor, i) => (
                <Col md="3" lg="3" xl="3" className="box-col-3" key={i}>
                  {doctor.status === 'inactive' && (
                    <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger" title={'Estado "Inactivo"'}>
                      <i className="icon-na"></i>
                    </div>
                  )}
                  {doctor.status === 'active' && (
                    <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-success" title={'Estado "Activo"'}>
                      <i className="icon-check" ></i>
                    </div>
                  )}
                  <Card className="custom-card features-faq product-box ribbon-vertical-right-wrapper">
                    <CardHeader className="">
                      <Media
                        body
                        className="img-fluid"
                        src={defaultBg}
                        alt=""
                      />
                    </CardHeader>
                    <div className="card-profile">
                      <Media
                        body
                        className="rounded-circle"
                        src={doctor.avatar?.downloadURL || defaultuser}
                        alt=""
                      />
                    </div>
                    {/* <ul className="card-social">
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul> */}
                    <div className="text-center profile-details">
                      <h4>{doctor.fullName}</h4>
                      <h6 className="mb-0">
                        {doctor.specialities?.join(', ')}
                      </h6>
                      <h6 className="mb-0">
                        {doctor.licenses.map(
                          (x, index) =>
                            (index !== 0 ? ' | ' : '') +
                            (x.licenseType.includes('mp') ? 'M.P. ' : 'M.N.') +
                            x.licenseId
                        )}
                      </h6>
                      <h6 className="mb-0">{doctor.age} años</h6>
                      <h6>Consultorio: {doctor.room || '-'}</h6>
                    </div>
                    <div className="faq-image product-img">
                      <CardFooter className="row">
                        <Col sm="4 col-4">
                          <h6>{'Pacientes'}</h6>
                          <h3>
                            <span className="counter">
                              {doctor.patients?.length}
                            </span>
                          </h3>
                        </Col>
                        <Col sm="4 col-4">
                          <h6>{'Turnos'}</h6>
                          <h3 className="counter">
                            {doctor.appointments?.length}
                          </h3>
                        </Col>
                        <Col sm="4 col-4">
                          <h6>{'Consultas'}</h6>
                          <h3>
                            <span className="counter">
                              {doctor.visits?.length}
                            </span>
                          </h3>
                        </Col>
                        <Col md="12">
                          <span className="text-center">
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                            <i className="fa fa-star font-primary"></i>
                          </span>
                        </Col>
                      </CardFooter>
                      <div className="product-hover">
                        <ul>
                          <li>
                            <a
                              href="#javascritp"
                              className="text-muted"
                              title="Agendar turno"
                            >
                              <i className="icon-calendar"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#javascritp"
                              className="text-muted"
                              title="Consultar disponibilidad de turnos"
                            >
                              <i className="icofont icofont-wall-clock"></i>
                            </a>
                          </li>
                          <li>
                            <Link
                              className="text-muted"
                              title="Ver detalles"
                              to={`${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=browse`}
                            >
                              <i className="icon-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-muted"
                              title="Editar"
                              to={`${process.env.PUBLIC_URL}/doctor/${doctor.id}?mode=edit`}
                            >
                              <i className="icon-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#javascritp"
                              className={
                                doctor.status === 'active'
                                  ? 'txt-danger'
                                  : 'txt-success'
                              }
                              title={
                                doctor.status === 'active'
                                  ? 'Desactivar'
                                  : 'Activar'
                              }
                              onClick={() =>
                                handleDoctorChangeStatusClick(doctor)
                              }
                            >
                              <i
                                className={`icon-${
                                  doctor.status === 'active' ? 'trash' : 'plus'
                                }`}
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default translate(DoctorList);
