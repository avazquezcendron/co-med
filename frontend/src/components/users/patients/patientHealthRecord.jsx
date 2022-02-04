import React,{useState} from 'react';
import {TabContent,TabPane} from 'reactstrap'

const PatientHealthRecord = (props) => {
    const patient = props.patient;
    
  const [dataTab, setdataTab] = useState('datos');

  return (
    <div className="card-body">
      <ul className="nav nav-tabs nav-secondary m-b-30">
        <li className="nav-item">
          <a href="#javascript" className={`nav-link ${dataTab === 'datos' ? 'active' : ''}`} onClick={() => setdataTab('datos')}>
            <i className="icofont icofont-id"></i>Datos
          </a>
        </li>
        <li className="nav-item">
          <a href="#javascript" className={`nav-link ${dataTab === 'antecedentes' ? 'active' : ''}`} onClick={() => setdataTab('antecedentes')}>
            <i className="icofont icofont-prescription"></i>
            Antecendentes
          </a>
        </li>
        <li className="nav-item">
          <a href="#javascript" className={`nav-link ${dataTab === 'prescripciones' ? 'active' : ''}`} onClick={() => setdataTab('prescripciones')}>
            <i className="icofont icofont-pills"></i>
            Prescripciones
          </a>
        </li>
        <li className="nav-item">
          <a href="#javascript" className={`nav-link ${dataTab === 'laboratorios' ? 'active' : ''}`} onClick={() => setdataTab('laboratorios')}>
            <i className="icofont icofont-laboratory"></i>
            Laboratorios
          </a>
        </li>
        <li className="nav-item">
          <a href="#javascript" className={`nav-link ${dataTab === 'estudioscompl' ? 'active' : ''}`} onClick={() => setdataTab('estudioscompl')}>
            <i className="icofont icofont-heartbeat"></i>
            Estudios Complementarios
          </a>
        </li>
        <li className="nav-item">
          <a href="#javascript" className={`nav-link ${dataTab === 'metricas' ? 'active' : ''}`} onClick={() => setdataTab('metricas')}>
            <i className="icofont icofont-chart-histogram"></i>
            Métricas
          </a>
        </li>
      </ul>
        <TabContent  activeTab={dataTab}>
            <TabPane  className="fade show" tabId="datos">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>{"Datos generales del paciente"}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                        </div>
                        <div className="card-body">
                            <form className="theme-form ">
                            <div className="form-group row">
                                <label className="col-md-2 col-form-label" htmlFor="inputName">{'Nombre'}</label>
                                <div className="col-md-3">
                                <input className="form-control" id="inputName" type="text"  />
                                </div>
                                <label className="col-md-2 col-form-label" htmlFor="inputLastnames">{'Apellido'}</label>
                                <div className="col-md-3">
                                <input className="form-control" id="inputLastnames" type="text"  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-2 col-form-label" htmlFor="inputDocType">{'Tipo de Documento'}</label>
                                <div className="col-md-3">
                                    <select className="form-control" id="inputDocType" defaultValue="DNI">
                                        <option>{"DNI"}</option>
                                        <option>{"LE"}</option>
                                        <option>{"Otro"}</option>
                                    </select>
                                </div>
                                <label className="col-md-2 col-form-label" htmlFor="inputDocNumber">{'Nro. de Documento'}</label>
                                <div className="col-md-3">
                                <input className="form-control" id="inputDocNumber" type="number"  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-2 col-form-label" htmlFor="inputNationality">{'Nacionalidad'}</label>
                                <div className="col-md-3">
                                    <input className="form-control" id="inputNationality" type="text" />
                                </div>
                                <label className="col-md-2 col-form-label" htmlFor="inputEmail3">{'Email'}</label>
                                <div className="col-md-3">
                                <input className="form-control" id="inputEmail3" type="email" />
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <label className="col-md-2 col-form-label" htmlFor="inputSex">{'Sexo Biológico'}</label>
                                    <div className="col-md-3">
                                        <div className="radio radio-primary ml-2">
                                            <input id="radio11" type="radio" name="radio1" value="Masculino" />
                                            <label htmlFor="radio11">{"Masculino"}</label>
                                        </div>
                                        <div className="radio radio-primary ml-2">
                                            <input id="radio22" type="radio" name="radio1" value="Femenino" />
                                            <label htmlFor="radio22">{"Femenino"}</label>
                                        </div>
                                    </div>
                                            
                                    <label className="col-md-2 col-form-label" htmlFor="inputPerceptGender">{'Género Percibido'}</label>
                                    <div className="col-md-3">
                                        <select className="form-control" id="inputPerceptGender" defaultValue="Cisgénero">
                                            <option>{"Cisgénero"}</option>
                                            <option>{"Transgénero"}</option>
                                            <option>{"Transexual"}</option>
                                            <option>{"No-binario"}</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                            
                            {/*<div className="form-group row mb-0">
                                <label className="col-sm-3 col-form-label pb-0">{Checkboxes}</label>
                                <div className="col-sm-9">
                                <div className="form-group m-checkbox-inline mb-0 ml-1">
                                    <div className="checkbox checkbox-primary">
                                    <input id="inline-form-1" type="checkbox" />
                                    <label className="mb-0" htmlFor="inline-form-1">{Option} {"1"}</label>
                                    </div>
                                    <div className="checkbox checkbox-primary">
                                    <input id="inline-form-2" type="checkbox" />
                                    <label className="mb-0" htmlFor="inline-form-2">{Option} {"2"}</label>
                                    </div>
                                </div>
                                </div>
                            </div> */}
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary mr-1">{'Guardar'}</button>
                            <button className="btn btn-secondary">{'Cancelar'}</button>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="antecedentes">
            <p className="mb-0">
                Lorem Ipsum is simply dummy , but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages
            </p>
            </TabPane>
            <TabPane tabId="prescripciones">
            <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
            </p>
            </TabPane>
            <TabPane tabId="laboratorios">
            <p className="mb-0">
                Lorem Ipsum is simply dummy , but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages
            </p>
            </TabPane>
            <TabPane tabId="estudioscompl">
            <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
            </p>
            </TabPane>
            <TabPane tabId="metricas">
            <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
            </p>
            </TabPane>
        </TabContent>
    </div>
  );
};

export default PatientHealthRecord;
