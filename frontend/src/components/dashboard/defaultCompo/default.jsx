import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Navigation, Users, Calendar } from 'react-feather';
import { translate } from 'react-switch-lang';
import ApexCharts from 'react-apexcharts';
import CountUp from 'react-countup';
import { useSelector, useDispatch } from 'react-redux';

import Breadcrumb from '../../common/breadcrumb';
// import configDB from '../../../data/customizer/config';
import Todo from '../../applications/todo-app/todo';
import {
  patientGetAllWatcher,
  patientsInitialize,
} from '../../../redux/patients/actions';
import {
  getAppointmentsWatcher,
  appointmentsInitialize,
} from '../../../redux/appointments/actions';
import { LOADED, SUCCEEDED } from '../../../redux/statusTypes';
import * as entityService from '../../../services/entity.service';
import Agenda from '../../agenda/agenda';

// var Knob = require('knob'); // browserify require
// var primary =
//   localStorage.getItem('primary_color') || configDB.data.color.primary_color;

const Default = (props) => {
  const month = [
    props.t('January'),
    props.t('February'),
    props.t('March'),
    props.t('April'),
    props.t('May'),
    props.t('June'),
    props.t('July'),
    props.t('August'),
    props.t('September'),
    props.t('October'),
    props.t('November'),
    props.t('December'),
  ];

  
  const { status: patientStatus } = useSelector(
    (store) => store.Patient
  );
  const { patients, status: patientsStatus } = useSelector(
    (store) => store.Patients
  );
  const { appointments, status: appointmentsStatus } = useSelector(
    (store) => store.Appointments
  );
  const { loggedUser } = useSelector((store) => store.UserLogin);

  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [dateNow, setDateNow] = useState(new Date());

  const dateRef = useRef(null);

  const [currentMonthAppointments, setCurrentMonthAppointments] = useState([]);
  const [currentDayAppointments, setCurrentDayAppointments] = useState([]);
  const [currentDayPatients, setCurrentDayPatients] = useState([]);
  const [apexPatientisPerHIChart, setApexPatientisPerHIChart] = useState({ options: {}, series: []});
  const [apexPatientisPerAgeChart, setApexPatientisPerAgeChart] = useState({ options: {}, series: []});

  useEffect(() => {
    dispatch(patientGetAllWatcher());
    dispatch(getAppointmentsWatcher(loggedUser.user.doctor?.id));
    return () => {
      dispatch(patientsInitialize());
      dispatch(appointmentsInitialize());
    };
  }, []);

  // useEffect(() => {
  //   var appointmentsAvailablesToday = Knob({
  //     label: '%',
  //     labelColor: primary,
  //     value: 15,
  //     left: 1,
  //     angleOffset: 0,
  //     className: 'review',
  //     thickness: 0.1,
  //     width: 70,
  //     height: 70,
  //     fgColor: primary,
  //     readOnly: true,
  //     dynamicDraw: false,
  //     tickColorizeValues: true,
  //     bgColor: '#f6f7fb',
  //     lineCap: 'round',
  //     displayPrevious: true,
  //   });
  //   document
  //     .getElementById('appAvailToday')
  //     .appendChild(appointmentsAvailablesToday);

  //   var appointmentsAvailablesMonth = Knob({
  //     label: '%',
  //     labelColor: primary,
  //     value: 60,
  //     left: 1,
  //     angleOffset: 0,
  //     className: 'review',
  //     thickness: 0.1,
  //     width: 70,
  //     height: 70,
  //     fgColor: primary,
  //     readOnly: true,
  //     dynamicDraw: false,
  //     tickColorizeValues: true,
  //     bgColor: '#f6f7fb',
  //     lineCap: 'round',
  //     displayPrevious: true,
  //   });
  //   document
  //     .getElementById('appAvailMonth')
  //     .appendChild(appointmentsAvailablesMonth);
  // }, []);
 
  useEffect(() => {
    if (appointmentsStatus === SUCCEEDED) {
      dispatch(getAppointmentsWatcher(loggedUser.user.doctor?.id));
    }
  }, [appointmentsStatus]);

  useEffect(() => {
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

      setCurrentDayPatients(
        appointments.filter(
          (x) =>
            new Date(x.start).toLocaleDateString() ===
              dateNow.toLocaleDateString() && !x.isLocked
        )
      );
    }
  }, [appointmentsStatus]);

  useEffect(() => {
    if (patientStatus === SUCCEEDED) {
      dispatch(patientGetAllWatcher());
    }
  }, [patientStatus]);

  useEffect(() => {
    if (patientsStatus === LOADED) {
      let labelsPatientPerHI = [];
      let seriesPatientPerHI = [];
      entityService.getAll('healthInsurance', loggedUser).then((data) => {
        data?.forEach((healthInsuranceComp) => {
          const numPatients = patients?.filter(
            (x) =>
              x.healthInsurances[0] ?.healthInsuranceCompany.id ===
                healthInsuranceComp.id
          ).length;
          labelsPatientPerHI.push(`${healthInsuranceComp.description} (${numPatients})`);
          seriesPatientPerHI.push(numPatients);
        });
        setApexPatientisPerHIChart({
          series: seriesPatientPerHI,
          options: {
            labels: labelsPatientPerHI,
            chart: {
              type: 'donut',
              height: '100%',
            },
            colors: [
              '#f85370',
              '#1ea6ec',
              '#fa9f40',
              '#c7c3c3',
              '#66ff78',
              '#9c437f',
              '#8795ed',
              '#544fff',
              '#51bb25',
              '#fb740d',
              '#f8fc00',
              '#93fc00',
              '#fb00ff',
              '#00ffbb',
              '#f05024',
              '#6fd9c4',
              '#4466f2',
              '#8a5b5b',
              '#292626',
            ],
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300,
                  },
                  legend: {
                    position: 'bottom',
                  },
                },
              },
            ],
          },
        });
      });

      const seriesPatientPerAge = [patients.filter((x) => x.gender === 'm').length, patients.filter((x) => x.gender === 'f').length, patients.filter((x) => x.gender === 'no-binario')
        .length];
      const labelsPatientPerAge = [`Masculino (${seriesPatientPerAge[0]})`, `Femenino (${seriesPatientPerAge[1]})`, `No-binario (${seriesPatientPerAge[2]})`];
      setApexPatientisPerAgeChart(
        {
          series: seriesPatientPerAge,
          options:  {
            labels: labelsPatientPerAge,            
            chart: {
              type: 'pie',
            },
            colors: ['#1ea6ec', '#22af47', '#6c757d'],
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: 'bottom',
                  },
                },
              },
            ],
          }
        }
      );
    }
  }, [patientsStatus]);

  useEffect(() => {
    clearInterval(dateRef.current);
    dateRef.current = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(dateRef.current);
  }, [date]);

  const handlePatientsClick = (today) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/patient${today ? '?filter=today' : ''}`
    );
  };

  const handleAppointmentsClick = (filter) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/agenda/appointments${
        filter ? '?filter=' + filter : ''
      }`
    );
  };

  return (
    <Fragment>
      <Breadcrumb title="Dashboard" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div
                className="bg-primary b-r-4 card-body toggle-data"
                onClick={() => handlePatientsClick(false)}
              >
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <i className="icofont icofont-doctor-alt"></i>
                  </div>
                  <div className="media-body">
                    <span className="m-0">
                      {props.t('Patients') + ' Totales'}
                    </span>
                    <h4 className="mb-0 counter">
                      <CountUp className="counter" end={patients.length} />
                    </h4>
                    <Users className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div
                className="bg-primary b-r-4 card-body toggle-data"
                onClick={() => handleAppointmentsClick('patients')}
              >
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <i className="icofont icofont-doctor-alt"></i>
                  </div>
                  <div className="media-body">
                    <span className="m-0">
                      {props.t('Patients') + ' que nos visitan hoy'}
                    </span>
                    <h4 className="mb-0 counter">
                      <CountUp
                        className="counter"
                        end={currentDayPatients.length}
                      />
                    </h4>
                    <Users className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div
                className="bg-primary b-r-4 card-body toggle-data"
                onClick={() => handleAppointmentsClick('currentMonth')}
              >
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Calendar />
                  </div>
                  <div className="media-body">
                    <span className="m-0">
                      {props.t('Appointments') +
                        ' pendientes ' +
                        month[dateNow.getMonth()]}
                    </span>
                    <h4 className="mb-0 counter">
                      <CountUp
                        className="counter"
                        end={currentMonthAppointments.length}
                      />
                    </h4>
                    <Calendar className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div
                className="bg-primary b-r-4 card-body toggle-data"
                onClick={() => handleAppointmentsClick('todayAppointments')}
              >
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Navigation />
                  </div>
                  <div className="media-body">
                    <span className="m-0">
                      {props.t('Appointments') + ' pendientes de atender hoy'}
                    </span>
                    <h4 className="mb-0 counter">
                      <CountUp
                        className="counter"
                        end={currentDayAppointments.length}
                      />
                    </h4>
                    <Calendar className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{height: '93%'}}>
              <div className="cal-date-widget card-body" >
                <div className="row">
                  <div className="col-md-12">
                    <div className="cal-info text-center">
                      <h2>{date.getDate()}</h2>
                      <div className="d-inline-block mt-2">
                        <span className="b-r-dark pr-3">
                          {month[date.getMonth()]}
                        </span>
                        <span className="pl-3">{date.getFullYear()}</span>
                      </div>
                      <div>
                        <p className="mt-4 f-16 text-muted">
                          <i className="fa fa-clock-o"></i>{' '}
                          {date.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 xl-100">
            <div className="row">
              {/* <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="number-widgets">
                      <div className="media">
                        <div className="media-body align-self-center">
                          <h6 className="mb-0">
                            {props.t('AppointmentsAvailable') + ' (hoy)'}
                          </h6>
                        </div>
                        <div className="knob-block text-center">
                          <div className="knob" id="appAvailToday"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="number-widgets">
                      <div className="media">
                        <div className="media-body align-self-center">
                          <h6 className="mb-0">
                            {props.t('Turnos Disponibles (resto del mes)')}
                          </h6>
                        </div>
                        <div className="knob-block text-center">
                          <div className="knob" id="appAvailMonth"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{'Pacientes por género percibido'}</h5>
                  </div>
                  <div className="card-body p-0">
                  <ApexCharts
                      options={apexPatientisPerAgeChart.options}
                      series={apexPatientisPerAgeChart.series}
                      type="pie"
                      height="300"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{'Pacientes por Obras Sociales'}</h5>
                  </div>
                  <div className="card-body p-0">
                    <ApexCharts
                      options={apexPatientisPerHIChart.options}
                      series={apexPatientisPerHIChart.series}
                      type="donut"
                      height="300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <Agenda />
          </div>
          <div className="col-xl-6 col-md-6 xl-50">
            <Todo />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default translate(Default);
