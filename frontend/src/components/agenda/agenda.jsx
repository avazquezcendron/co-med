import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { translate } from 'react-switch-lang';

import notFoundImg from '../../assets/images/search-not-found.png';
import { LOADED } from '../../redux/statusTypes';
import { getAppointmentsWatcher } from '../../redux/appointments/actions';

const Agenda = (props) => {
  const { appointments, status: appointmentsStatus } = useSelector(
    (store) => store.Appointments
  );
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [currentDayAppointments, setCurrentDayAppointments] = useState([]);
  const [currentMonthAppointments, setCurrentMonthAppointments] = useState([]);
  const [tomorrowAppointments, setTomorrowAppointments] = useState([]);
  const [appointmentsFiltered, setAppointmentsFiltered] = useState([]);

  const pageSize = 6;
  const [pagesCount, setpagesCount] = useState(0);

  useEffect(() => {
    dispatch(getAppointmentsWatcher(loggedUser.user.doctor?.id));
  }, []);

  useEffect(() => {
    const dateNow = new Date();
    if (appointmentsStatus === LOADED) {
      const _currentDayAppointments = appointments.filter(
        (x) =>
          new Date(x.start).toLocaleDateString() ===
            dateNow.toLocaleDateString() &&
          x.isActive &&
          !x.isLocked
      );

      setCurrentMonthAppointments(
        appointments.filter(
          (x) =>
            new Date(x.start).getMonth() === dateNow.getMonth() &&
            x.isActive &&
            !x.isLocked
        )
      );
      setCurrentDayAppointments(_currentDayAppointments);

      setTomorrowAppointments(
        appointments.filter(
          (x) =>
            new Date(x.start).getFullYear() === dateNow.getFullYear() &&
            new Date(x.start).getMonth() === dateNow.getMonth() &&
            new Date(x.start).getDate() === dateNow.getDate() + 1 &&
            x.isActive &&
            !x.isLocked
        )
      );

      setAppointmentsFiltered(_currentDayAppointments);
      setpagesCount(Math.ceil(_currentDayAppointments.length / pageSize));
    }
  }, [appointmentsStatus]);

  const handleAppointmentFilterChange = (value) => {
    switch (value) {
      case 'today':
        setAppointmentsFiltered(currentDayAppointments);
        setpagesCount(Math.ceil(currentDayAppointments.length / pageSize));
        break;
      // case 'yesterday':
      //   setAppointmentsFiltered(yesterdayAppointments);
      //   break;
      case 'tommorrow':
        setAppointmentsFiltered(tomorrowAppointments);
        setpagesCount(Math.ceil(tomorrowAppointments.length / pageSize));
        break;
      case 'month':
        setAppointmentsFiltered(currentMonthAppointments);
        setpagesCount(Math.ceil(currentMonthAppointments.length / pageSize));
        break;
      // case 'all':
      //   setAppointmentsFiltered(appointments);
      //   break;

      default:
        setAppointmentsFiltered(currentDayAppointments);
        setpagesCount(Math.ceil(currentDayAppointments.length / pageSize));
    }
  };

  const handleAgendaPaginationClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  return (
    <div className="card height-equal">
      <div className="card-header card-header-border">
        <div className="row">
          <div className="col-sm-8">
            <h5>
              <i className="icofont icofont-ui-calendar"></i>{' '}
              {props.t('Agenda')} de Turnos
            </h5>
          </div>
          <div className="col-sm-4">
            <div className="select2-drpdwn-project select-options">
              <select
                className="form-control form-control-primary btn-square"
                id="appointmentFilterChange"
                defaultValue="today"
                onChange={(e) => handleAppointmentFilterChange(e.target.value)}
              >
                <option value="today">{props.t('Today')}</option>
                {/* <option value="yesterday">
                          {props.t('Yesterday')}
                        </option> */}
                <option value="tommorrow">{props.t('Tomorrow')}</option>
                <option value="month">{props.t('ThisMonth')}</option>
                {/* <option value="week">{props.t('ThisWeek')}</option> */}
                {/* <option value="all">{'Todos'}</option> */}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body recent-notification">
        {appointmentsFiltered.length === 0 ? (
          <div className="text-center m-b-40">
            <img className="img-fluid" src={notFoundImg} alt="" />
            <br />
            <span className="txt-info">
              No hay turnos pendientes para el filtro seleccionado...
            </span>
          </div>
        ) : (
          ''
        )}
        {appointmentsFiltered
          .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
          .map((appointment, index) => (
            <Fragment key={appointment.id}>
              {index === 0 ||
              (index > 0 &&
                new Date(appointmentsFiltered[index].start).getDate() !==
                  new Date(appointmentsFiltered[index - 1].start).getDate()) ? (
                <div className="row">
                  <div className="col-xl-5 col-md-4 col-sm-4">
                    <hr />
                  </div>
                  <div
                    className="col-xl-2 col-md-4 col-sm-4 text-muted text-center f-w-700"
                    style={{ alignSelf: 'center' }}
                  >
                    <i className="icofont icofont-ui-calendar"></i>{' '}
                    {new Date(appointment.start).toLocaleDateString('es', {
                      day: 'numeric',
                      month: 'numeric',
                    })}
                  </div>
                  <div className="col-xl-5 col-md-4 col-sm-4">
                    <hr />
                  </div>
                </div>
              ) : (
                ''
              )}
              <div
                key={index}
                className={`media ${
                  appointment.appointmentType === 'sobreturno'
                    ? 'b-r-warning border-4'
                    : appointment.isCancelled
                    ? 'b-r-danger border-4'
                    : ''
                } ${appointment.isDone ? 'b-r-success border-4' : ''} `}
                title={`${
                  appointment.appointmentType === 'sobreturno'
                    ? 'SOBRETURNO'
                    : 'TURNO'
                } ${appointment.isCancelled ? 'CANCELADO' : ''}${
                  appointment.isDone ? 'FINALIZADO' : ''
                }${appointment.isActive ? 'ACTIVO' : ''}`}
              >
                <h6>
                  <i className="icofont icofont-clock-time"></i>{' '}
                  {new Date(appointment.start).toLocaleTimeString('es', {
                    // timeZone: 'UTC',
                    hour: '2-digit',
                    minute: 'numeric',
                    hour12: false,
                  })}
                </h6>
                <div className="media-body">
                  {appointment.appointmentType !== 'bloqueo' ? (
                    <Fragment>
                      <span className="f-18 p-r-10">
                        {appointment.patient?.fullName}
                      </span>
                      <span
                        className="f-16 p-l-10 text-muted"
                        style={{ borderLeft: '2px solid #999' }}
                      >
                        <i
                          className={`mr-1 fa fa-${
                            appointment.patient?.biologicalSex === 'm'
                              ? 'male'
                              : 'female'
                          }`}
                        >
                          {' '}
                        </i>
                        {appointment.patient?.age
                          ? appointment.patient.age + ' años'
                          : ''}
                      </span>
                    </Fragment>
                  ) : (
                    <span className="f-18 p-r-10">Agenda Bloqueada</span>
                  )}
                  <p className="f-12">
                    <i className="icofont icofont-doctor-alt"></i>{' '}
                    {appointment.doctor.fullName} |{' '}
                    {appointment.doctor.specialities.join(', ')}
                  </p>
                  {/* {appointment.isDone && (
                          <a
                            href="#javascript"
                            className="badge badge-pill badge-success pull-right"
                            title={'Estado "Inactivo"'}
                          >
                            <i className="icon-check"></i>
                          </a>
                        )} */}
                </div>
              </div>
            </Fragment>
          ))}

        <Pagination
          aria-label="Agenda Pagination"
          className="pagination justify-content-center pagination-primary"
        >
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              first
              href="#javascript"
              onClick={(e) => handleAgendaPaginationClick(e, 0)}
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              previous
              href="#javascript"
              onClick={(e) => handleAgendaPaginationClick(e, currentPage - 1)}
            />
          </PaginationItem>
          {[...Array(pagesCount)].map((page, i) => (
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink
                onClick={(e) => handleAgendaPaginationClick(e, i)}
                href="#"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage >= pagesCount - 1}>
            <PaginationLink
              next
              href="#javascript"
              onClick={(e) => handleAgendaPaginationClick(e, currentPage + 1)}
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage >= pagesCount - 1}>
            <PaginationLink
              last
              href="#javascript"
              onClick={(e) => handleAgendaPaginationClick(e, pagesCount - 1)}
            />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default translate(Agenda);
