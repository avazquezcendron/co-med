import React, { Fragment, useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import es from 'date-fns/locale/es';
import { Star, Search, Circle } from 'react-feather';

const PatientVisitHistory = (props) => {
  registerLocale('es', es);
  const patient = props.patient;
    
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(null);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setstartDate(start);
    setEndDate(end);
  };

  // eslint-disable-next-line
  const setEndDate = (date) => {
    setendDate(date);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card card-mb-faq xs-mt-search">
          <div className="card-header faq-header">
            <h6>{'Filtrar por fecha y/o especialidad'}</h6>
          </div>
          <div className="card-body faq-body">
            <div className="datepicker-here m-b-10" data-language="es">
              <DatePicker
                className="form-control digits"
                // selected={startDate}
                onChange={handleChange}
                locale="es"
                inline
                selectsRange
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            <div className="faq-form">
              <input
                className="form-control"
                type="text"
                placeholder="Ingresar especialidad.."
              />
              <Search className="search-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <VerticalTimeline layout={'1-column'} className="m-b-30">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            animate={true}
            // date="25/01/2021 14:00 PM"
            icon={<Circle />}
          >
            <div className="blog-box blog-list row">
              <div className="col-md-8">
                <div className="blog-details">
                  <div className="blog-date digits">
                    <span>{'10'}</span> {'Enero 2022'}
                  </div>
                  <h6>{'Síntomas compatibles con COVID'} </h6>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li>{'Atendido por: Dra. Tayhana Ortolá'}</li>
                      <li className="digits">{'Clínica Médica, Virtual'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary " type="submit">
                  <i className="fa fa-eye m-r-5"></i>
                  {'Ver Consulta Completa'}
                </button>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            animate={true}
            // date="25/01/2021 14:00 PM"
            icon={<Circle />}
          >
            <div className="blog-box blog-list row">
              <div className="col-md-8">
                <div className="blog-details">
                  <div className="blog-date digits">
                    <span>{'10'}</span> {'Enero 2022'}
                  </div>
                  <h6>{'Síntomas compatibles con COVID'} </h6>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li>{'Atendido por: Dra. Tayhana Ortolá'}</li>
                      <li className="digits">{'Clínica Médica, Presencial'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary " type="submit">
                  <i className="fa fa-eye m-r-5"></i>
                  {'Ver Consulta Completa'}
                </button>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            animate={true}
            // date="25/01/2021 14:00 PM"
            icon={<Circle />}
          >
            <div className="blog-box blog-list row">
              <div className="col-md-8">
                <div className="blog-details">
                  <div className="blog-date digits">
                    <span>{'10'}</span> {'Enero 2022'}
                  </div>
                  <h6>{'Síntomas compatibles con COVID'} </h6>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li className="p-r-10">
                        {'Atendido por: Dra. Tayhana Ortolá'}
                      </li>
                      <li className="digits">{'Clínica Médica, Presencial'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary " type="submit">
                  <i className="fa fa-eye m-r-5"></i>
                  {'Ver Consulta Completa'}
                </button>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            animate={true}
            // date="25/01/2021 14:00 PM"
            icon={<Circle />}
          >
            <div className="blog-box blog-list row">
              <div className="col-md-8">
                <div className="blog-details">
                  <div className="blog-date digits">
                    <span>{'10'}</span> {'Enero 2022'}
                  </div>
                  <h6>{'Síntomas compatibles con COVID'} </h6>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li>{'Atendido por: Dra. Tayhana Ortolá'}</li>
                      <li className="digits">{'Clínica Médica, Virtual'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary " type="submit">
                  <i className="fa fa-eye m-r-5"></i>
                  {'Ver Consulta Completa'}
                </button>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              background: 'rgb(16, 204, 82)',
              color: '#fff',
            }}
            icon={<Star />}
          >
            <div className="blog-box blog-list row ribbon-vertical-right-wrapper ">
              <div className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-success">
                <i class="icon-signal" title={'Primera Consulta'}></i>
              </div>
              <div className="col-md-8 ">
                <div className="blog-details">
                  <div className="blog-date digits">
                    <span>{'10'}</span> {'Enero 2022'}
                  </div>
                  <h6>{'Síntomas compatibles con COVID'} </h6>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li>{'Atendido por: Dra. Tayhana Ortolá'}</li>
                      <li className="digits">{'Clínica Médica, Presencial'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary " type="submit">
                  <i className="fa fa-eye m-r-5"></i>
                  {'Ver Consulta Completa'}
                </button>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default PatientVisitHistory;
