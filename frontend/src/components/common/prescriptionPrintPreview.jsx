import React, { Component } from 'react';

import logo from '../../assets/images/logo-principal-gris.png';

class PrescriptionPrintPreview extends Component {
  render() {
    const { patient, prescriptionDrugsList, prescriptionInfo } = this.props;
    return (
      <div className="p-l-50 p-r-50 m-l-50 m-r-50">
        <div className="row  m-2">
          <div className="col"></div>
          <div className="col">
            <div className="text-muted text-center">
              <small className="f-w-900 f-14">
                {prescriptionInfo.doctor?.biologicalSex === 'm'
                  ? 'Dr.'
                  : 'Dra.' + prescriptionInfo.doctor?.fullName}
              </small>
              <br />
              <small>
                {prescriptionInfo.doctor?.licenses?.map(
                  (x, index) =>
                    (index !== 0 ? ' | ' : '') +
                    (x.licenseType.includes('mp') ? 'M.P. ' : 'M.N.') +
                    x.licenseId
                )}
              </small>
              <br />
              <small>{prescriptionInfo.doctor?.specialities?.join(', ')}</small>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <hr className="mb-4 mt-2 ml-4 mr-4" />
        <div className="row">
          <div className="col text-center">
            <div className="card badge badge-light">
              <div className="card-body text-muted ">
                <div className="row ">
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Paciente'}
                      </p>
                      <p className="col-sm-12">
                        <b>{patient.fullName}</b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Edad'}
                      </p>
                      <p className="col-md-12 ">
                        <b>{patient.age}</b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        Doc. Tipo: {patient.nationalIdType}
                      </p>
                      <p className="col-md-12 ">
                        <b>{patient.nationalId}</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Obra Social'}
                      </p>
                      <p className="col-md-12">
                        <b>
                          {patient.healthInsurances?.length > 0
                            ? patient.healthInsurances[0].healthInsuranceCompany
                                .description
                            : '-'}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Plan'}
                      </p>
                      <p className="col-md-12 ">
                        <b>
                          {patient.healthInsurances?.length > 0
                            ? patient.healthInsurances[0].plan.code
                            : '-'}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <p className="col-md-12 col-form-label f-w-100 f-14 ">
                        {'Número de Credencial'}
                      </p>
                      <p className="col-md-12 ">
                        <b>
                          {patient.healthInsurances?.length > 0
                            ? patient.healthInsurances[0].cardNumber
                            : '-'}
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mr-4 ml-4" />
        <div className="row m-2">
          <div className="col text-left">
            <h5>R/P</h5>
            <br />
          </div>
        </div>
        <div className="row m-2">
          <div className="col text-left ml-2">
            <p className="text-muted">Diagnóstico</p>
            <p>{prescriptionInfo.diagnosis}</p>
            <br />
            <p className="text-muted">Indicaciones Generales</p>
            <p>{prescriptionInfo.indications}</p>
            <br />
          </div>
        </div>
        <div className="card m-b-50">
          {prescriptionDrugsList?.length > 0 && (
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">{'Fármaco'}</th>
                      <th scope="col" className="text-center">
                        {'Cantidad'}
                      </th>
                      <th scope="col">{'Indicaciones'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptionDrugsList.map((pDrug, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <i className="icofont icofont-pills"></i>
                        </th>
                        <td>
                          {pDrug.drug?.description +
                            ' (' +
                            pDrug.drug?.composition +
                            ', ' +
                            pDrug.drug?.format +
                            ')'}
                        </td>
                        <td className="text-center">{pDrug.quantity}</td>
                        <td>{pDrug.indications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div className="row ml-4 mr-4" style={{ marginTop: 200 }}>
          <div className="col text-left">
            <span>{new Date().toLocaleDateString('es')}</span>
          </div>
          <div className="col text-right m-r-50">
            <span>Firma</span>
          </div>
        </div>
        <hr className="mr-4 ml-4 mt-0 mb-0" />
        <div className="row ml-2 mr-2">
          <div className="col">
            <img
              className="pull-left"
              style={{ width: 200, height: 130 }}
              src={logo}
              alt=""
            />
          </div>
          <div className="col text-right pt-3">
            <small>
              <i className="fa fa-home"></i> Moreno N° 850
            </small>
            <br />
            <small>
              <i className="icofont icofont-brand-whatsapp"></i>{' '}
              <i className="fa fa-phone"></i> 2966-682961
            </small>
            <br />
            <small>
              <i className="fa fa-envelope"></i> consultoriossanjulian@gmail.com
            </small>
            <br />
            <small>
              <i className="fa fa-map-marker"></i> 9310 Puerto San Julián - Sta.
              Cruz
            </small>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default PrescriptionPrintPreview;
