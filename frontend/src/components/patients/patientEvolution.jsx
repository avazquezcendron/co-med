import React, { useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import ApexCharts from 'react-apexcharts';
import DataTable from 'react-data-table-component';

import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import notFoundImg from '../../assets/images/search-not-found.png';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientEvolution = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);

  const query = useQuery();
  const mode = query.get('mode');

  const [currentVitals, setCurrentVitals] = useState({});

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const columnsConfig = [
    {
      name: 'Fecha',
      selector: (row) => new Date(row.date).toLocaleDateString('es'),
      sortable: true,
      left: true,
    },
    {
      name: 'Altura (cm)',
      selector: (row) => row.height,
      sortable: true,
      left: true,
    },
    {
      name: 'Peso (kg)',
      selector: (row) => row.weight,
      sortable: true,
      left: true,
    },
    {
      name: 'IMC (kg/m2)',
      selector: (row) => row.bodyWeight,
      sortable: true,
      left: true,
    },
    {
      name: '% Grasa',
      selector: (row) => row.bodyFat,
      sortable: true,
      left: true,
    },
    {
      name: 'Circ. Abdomen (cm)',
      selector: (row) => row.abdominalCircumference,
      sortable: true,
      left: true,
    },
    {
      name: 'Temperatura (°C)',
      selector: (row) => row.temperature,
      sortable: true,
      left: true,
    },
    {
      name: 'TAS (mmHg)',
      selector: (row) => row.systolicBloodPressure,
      sortable: true,
      left: true,
    },
    {
      name: 'TAD (mmHg)',
      selector: (row) => row.diastolicBloodPressure,
      sortable: true,
      left: true,
    },
    {
      name: 'Frec. Resp. (rpm)',
      selector: (row) => row.breathingRate,
      sortable: true,
      left: true,
    },
    {
      name: 'Frec. Cardíaca (ppm)',
      selector: (row) => row.heartRate,
      sortable: true,
      left: true,
    },
  ];

  const handleRowClick = (row, event) => {
    setCurrentVitals(row);
  };

  const imcApexChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'IMC',
      align: 'center',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      type: 'date',
      categories: patient.healthRecord?.vitalsAndMetrics.map(x => new Date(x.date).toLocaleDateString('es')),
    },
    yaxis: {
      title: {
        text: 'kg/m2'
      }
    },
  };

  const imcApexSeries = [
    {
      name: 'IMC',
      data: patient.healthRecord?.vitalsAndMetrics.map(x => x.bodyWeight || 0),
    },
  ];

  const weightHeightApexChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#0288d1', '#f10542'],
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Peso/Grasa',
      align: 'center',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      type: 'date',
      categories: patient.healthRecord?.vitalsAndMetrics.map(x => new Date(x.date).toLocaleDateString('es')),
    },
    yaxis: {
      title: {
        text: 'kg'
      }
    },
  };

  const weightHeightApexSeries = [
    {
      name: 'Peso',
      data: patient.healthRecord?.vitalsAndMetrics.map(x => x.weight),
    },
    {
      name: 'Grasa',
      data: patient.healthRecord?.vitalsAndMetrics.map(x => x.weight * x.bodyFat / 100),
    },
  ];

  const bodyFatApexChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: '% Grasa',
      align: 'center',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      type: 'date',
      categories: patient.healthRecord ?.vitalsAndMetrics.map(x => new Date(x.date).toLocaleDateString('es')),
    },
    yaxis: {
      title: {
        text: '%'
      }
    },
  };

  const bodyFatApexSeries = [
    {
      name: '% Grasa',
      data: patient.healthRecord?.vitalsAndMetrics.map(x => x.bodyFat || 0),
    },
  ];

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
                  <h5>{'Evolución'}</h5>
                  <span
                    className="text-muted f-12 m-t-5"
                    style={{
                      letterSpacing: 1,
                    }}
                  >
                    {'Gráficos y reportes de la evolución del paciente.'}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              {patient.healthRecord?.vitalsAndMetrics?.length === 0 ? (
                <div className="col-md-12 text-center m-50">
                  <img className="img-fluid" src={notFoundImg} alt="" />
                  <br />
                  <span className="txt-info">
                    Aún no se registran datos de la evolución del paciente...
                  </span>
                </div>
              ) : (
                <Fragment>
                  <div className="datatable-react  m-b-30">
                    <div className="table-responsive support-table">
                      <DataTable
                        columns={columnsConfig}
                        data={patient.healthRecord?.vitalsAndMetrics}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        noHeader
                        subHeader
                        dense
                        subHeaderAlign={'left'}
                        paginationPerPage={10}
                        paginationComponentOptions={paginationComponentOptions}
                        onRowClicked={handleRowClick}
                      />
                    </div>
                  </div>
                  <div className="m-t-50 m-b-30">
                    <ApexCharts
                      options={imcApexChartOptions}
                      series={imcApexSeries}
                      type="line"
                      height={350}
                    />
                  </div>
                  <div className="m-t-50 m-b-30">
                    <ApexCharts
                      options={weightHeightApexChartOptions}
                      series={weightHeightApexSeries}
                      type="line"
                      height={350}
                    />
                  </div>
                  <div className="m-t-50 m-b-30">
                    <ApexCharts
                      options={bodyFatApexChartOptions}
                      series={bodyFatApexSeries}
                      type="line"
                      height={350}
                    />
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientEvolution;
