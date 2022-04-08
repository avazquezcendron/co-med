import React,{useState,useEffect} from 'react';
import {TabContent,TabPane, Collapse} from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import axios from 'axios'

import PatientPersonalData from './patientPersonalData';

const PatientHealthRecord = (props) => {
  registerLocale('es', es);

  const patient = props.patient;
    
  const [dataTab, setdataTab] = useState('datos');
  const [alergias, setAlergias] = useState([])
  const [medicamentosActivos, setmedicamentosActivos] = useState([])
  const [isAlergias, setisAlergias] = useState(false);
  const [isMedicamentos, setisMedicamentos] = useState(false);
  const [isAntecedentesPato, setisAntecedentesPato] = useState(false);
  const [isAntecedentesNoPato, setisAntecedentesNoPato] = useState(false);
  const [isHeredoFam, setisHeredoFam] = useState(false);
  const [isAntecedentesPsico, setisAntecedentesPsico] = useState(false);
  const [isAntecedentesNutri, setisAntecedentesNutri] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isHealthRecord, setisHealthRecord] = useState(true);


  useEffect(() => {
      // axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
      setAlergias(["Productos Cosméticos", "Penicilina", "Picadura de Insectos"]);
      setmedicamentosActivos(["Lexotanil", "Rivotril", "Acitromicina"]);
      axios.get(`${process.env.PUBLIC_URL}/api/sticky.json`).then(res => setNotes(res.data))
  },[])

  //Add new sticky note
  const addPrescription = () => {
    setNotes([...notes, { id: notes.length + 1, isDeleted: false }]);
  };

  //Delete a particulr sticky note
  const deleteNote = (note) => {
    note.isDeleted = true;
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row m-b-2">
          <div className="col-md-9">
            <h4 className="card-title mb-0">{'Historia Clínica'}</h4>
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-link pl-0"
              onClick={() => setisHealthRecord(!isHealthRecord)}
              data-toggle="collapse"
              data-target="#collapseicon2"
              aria-expanded={isHealthRecord}
              aria-controls="collapseicon2"
            >
              {''}
            </button>
          </div>
        </div>
      </div> 
    <Collapse isOpen={isHealthRecord}>
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
                <div className="col-md-12">
                    <PatientPersonalData />
                </div>
            </TabPane>
            <TabPane tabId="antecedentes">
              <div className="col-md-12 col-md-12">
                      <div className="card">
                          <div className="card-header">
                            <h5>{"Antecedentes"}</h5><span>{"Antecedentes personales, familiares y tratamientos previos del paciente."}</span>
                          </div>
                          <div className="card-body">
                              <form className="theme-form mega-form">
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        type="button"
                                        onClick={() => setisAlergias(!isAlergias)}
                                        data-toggle="collapse"
                                        data-target="#collapseicon2"
                                        aria-expanded={isAlergias}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Alergias'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isAlergias}>
                                  <div className="form-group">
                                      <Typeahead
                                          id="alergias"
                                          allowNew
                                          multiple
                                          newSelectionPrefix="Agregar nueva alergia: "
                                          options={alergias}
                                      />
                                  </div>
                                </Collapse>
                                <hr className="mt-4 mb-4" />
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        onClick={() => setisMedicamentos(!isMedicamentos)}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseicon3"
                                        aria-expanded={isMedicamentos}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Medicamentos Activos'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isMedicamentos}>
                                  <div className="form-group">
                                      <Typeahead
                                          id="medicamentosActivos"
                                          allowNew
                                          multiple
                                          newSelectionPrefix="Agregar nuevo medicamento: "
                                          options={medicamentosActivos}
                                      />
                                  </div>
                                </Collapse>
                                <hr className="mt-4 mb-4" />
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        onClick={() => setisAntecedentesPato(!isAntecedentesPato)}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseicon3"
                                        aria-expanded={isAntecedentesPato}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Antecedentes Patológicos'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isAntecedentesPato}>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="cardiopatias">{'Cardiopatías'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="cardiopatias" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="traumatismosHeredo">{'Traumatismos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="traumatismosHeredo" rows="1"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="diabetes">{'Diabetes'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="diabetes" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="hipertensionHeredo">{'Hipertensión arterial'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="hipertensionHeredo" rows="1"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="endocrino">{'Endócrino-metabólico'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="endocrino" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="respiratorios">{'Respiratorios'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="respiratorios" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="glaucoma">{'Glaucoma'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="glaucoma" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="digestivos">{'Digestivos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="digestivos" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="oncologicos">{'Oncológicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="oncologicos" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="neurologicos">{'Neurológicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="neurologicos" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="infectologicos">{'Infectológicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="infectologicos" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="nefrourologicos">{'Nefrourológicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="nefrourologicos" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="gineco">{'Gineco y obstétricos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="gineco" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="ets">{'ETS'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="ets" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="hematologicos">{'Hematológicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="hematologicos" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="transfusiones">{'Transfusiones'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="transfusiones" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="hospitalizaciones">{'Hospitalizaciones previas'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="hospitalizaciones" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="cirugias">{'Cirugías previas'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="cirugias" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="otros">{'Otros'}</label>
                                    <div className="col-md-12">
                                      <textarea className="form-control" id="otros" rows="3" />
                                    </div>
                                </div>

                                </Collapse>
                                
                                <hr className="mt-4 mb-4" />
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        onClick={() => setisAntecedentesNoPato(!isAntecedentesNoPato)}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseicon3"
                                        aria-expanded={isAntecedentesNoPato}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Antecedentes No Patológicos'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isAntecedentesNoPato}>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="tabaquismo">{'Tabaquismo'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="tabaquismo" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="alcoholismo">{'Alcoholismo'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="alcoholismo" rows="1"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="drogas">{'Drogas'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="drogas" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="vacunas">{'Vacuna o inmunización reciente'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="vacunas" rows="1"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="exfumador">{'Ex-Fumador'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="exfumador" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="actfisica">{'Actividad física'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="actfisica" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="otrosNoPat">{'Otros'}</label>
                                    <div className="col-md-12">
                                      <textarea className="form-control" id="otrosNoPat" rows="3" />
                                    </div>
                                </div>

                                </Collapse>
                  
                                <hr className="mt-4 mb-4" />
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        onClick={() => setisHeredoFam(!isHeredoFam)}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseicon3"
                                        aria-expanded={isHeredoFam}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Antecedentes Heredo-familiares'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isHeredoFam}>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="cardiopatiasHeredadas">{'Cardiopatías'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="cardiopatiasHeredadas" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="traumatismos">{'Enfermedades de tiroides'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="traumatismos" rows="1"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="diabetesHeredada">{'Diabetes'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="diabetesHeredada" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="hipertension">{'Hipertensión arterial'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="hipertension" rows="1"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="endocrinoHeredada">{'Glaucoma'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="endocrinoHeredada" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="neurologicoHeredo">{'Neurológicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="neurologicoHeredo" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="oncologicoHeredo">{'Oncólogicos'}</label>
                                    <div className="col-md-10">
                                      <textarea className="form-control" id="oncologicoHeredo" rows="1" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="otrosHeredo">{'Otros'}</label>
                                    <div className="col-md-12">
                                      <textarea className="form-control" id="otrosHeredo" rows="3" />
                                    </div>
                                </div>
                                </Collapse>
                                <hr className="mt-4 mb-4" />
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        onClick={() => setisAntecedentesPsico(!isAntecedentesPsico)}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseicon3"
                                        aria-expanded={isAntecedentesPsico}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Antecedentes Psiquiátricos'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isAntecedentesPsico}>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="psicoHeredo">{'Psiquiátricos'}</label>
                                    <div className="col-md-12">
                                      <textarea className="form-control" id="psicoHeredo" rows="3" />
                                    </div>
                                </div>
                                </Collapse>
                                <hr className="mt-4 mb-4" />
                                <div className="row">
                                  <div className="col-md-12">
                                      <button
                                        className="btn btn-link pl-0 m-b-10"
                                        onClick={() => setisAntecedentesNutri(!isAntecedentesNutri)}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseicon3"
                                        aria-expanded={isAntecedentesNutri}
                                        aria-controls="collapseicon2"
                                      >
                                        <h6 className="card-title mb-0">{'Antecedentes Nutricionales'}</h6>
                                      </button>
                                    
                                  </div>
                                </div>
                                <Collapse isOpen={isAntecedentesNutri}>
                                <div className="form-group row">
                                    <label className="col-md-2 col-form-label" htmlFor="nutri">{'Nutricionales'}</label>
                                    <div className="col-md-12">
                                      <textarea className="form-control" id="nutri" rows="3" />
                                    </div>
                                </div>
                                </Collapse>
                              </form>
                          </div>
                    </div>
              </div>
            </TabPane>
            <TabPane tabId="prescripciones">
            
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>
                {"Prescripciones"}
                  <a
                    href="#javascript"
                    onClick={addPrescription}
                    className="btn btn-primary pull-right m-l-10"
                  >
                    {'Agregar'}
                  </a>
                </h5><span>{"Prescripciones del paciente."}</span>
              </div>
              <div className="card-body">
                <div className="sticky-note row" id="board">
                  {notes.map((data, index) => (
                    <div
                      className={`note ui-draggable ui-draggable-handle col-md-5 ${
                        data.isDeleted ? "d-none" : ""
                      }`}
                      key={index}
                    >
                      <a
                        href="#javascript"
                        onClick={() => deleteNote(data)}
                        className="button remove"
                      >
                        X
                      </a>
                      <div className="note_cnt">
                        <textarea
                          className="title"
                          placeholder="Título..."
                          style={{ height: "64px" }}
                        ></textarea>
                        <textarea
                          className="cnt"
                          placeholder="Detalle de la prescripción..."
                          style={{ height: "200px"}}
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
        
        <div className="card-footer">
          <span className="pull-right">
            <button className="btn btn-outline-danger">{'Cancelar'}</button>
            <button className="btn btn-primary ml-1">{'Guardar'}</button>
          </span>
        </div>
      </div>
      </Collapse>
    </div>
  );
};

export default PatientHealthRecord;
