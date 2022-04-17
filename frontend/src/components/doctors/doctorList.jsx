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
                <Col md="6" lg="6" xl="4" className="box-col-6" key={i}>
                  <Card className="custom-card features-faq product-box">
                    <CardHeader className="">
                      <Media
                        body
                        className="img-fluid"
                        src={doctor.avatarUrl || defaultBg}
                        alt=""
                      />
                    </CardHeader>
                    <div className="card-profile">
                      <Media
                        body
                        className="rounded-circle"
                        src={doctor.avatarUrl || defaultuser}
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
                        {doctor.specialities?.map(
                          (x, index) =>
                            x +
                            (index === doctor.specialities.length - 1
                              ? ''
                              : ' | ')
                        )}
                      </h6>
                      <h6 className="mb-0">
                        {doctor.licenses.map(
                          (x, index) =>
                            (x.licenseType.includes('mp') ? 'M.P. ' : 'M.N.') +
                            x.licenseId
                        )}
                      </h6>
                      <h6>{doctor.age} años</h6>
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
                              title="Ver detalles"
                              className="text-muted"
                            >
                              <i className="icon-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#javascritp"
                              title="Editar"
                              className="text-muted"
                            >
                              <i className="icon-pencil-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#javascritp"
                              className="txt-danger"
                              title="Desactivar"
                            >
                              <i className="icon-trash"></i>
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
