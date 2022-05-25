import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { Collapse, UncontrolledTooltip } from 'reactstrap';
import { Typeahead, Highlighter, Token } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';

import { patientUpdateHRWatcher } from '../../redux/patients/actions';
import { SUCCEEDED, LOADED, FAILED, LOADING } from '../../redux/statusTypes';
import Loader from '../common/loader';
import * as entityService from '../../services/entity.service';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PatientBackground = (props) => {
  const { patient, status } = useSelector((store) => store.Patient);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, errors } = useForm();

  const query = useQuery();
  const mode = query.get('mode');
  const { id } = useParams();

  const [alergias, setAlergias] = useState([]);
  const [medicamentosActivos, setmedicamentosActivos] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [isAlergias, setisAlergias] = useState(false);
  const [isMedicamentos, setisMedicamentos] = useState(false);
  const [isAntecedentesPato, setisAntecedentesPato] = useState(false);
  const [isAntecedentesNoPato, setisAntecedentesNoPato] = useState(false);
  const [isHeredoFam, setisHeredoFam] = useState(false);
  const [isAntecedentesPsico, setisAntecedentesPsico] = useState(false);
  const [isAntecedentesNutri, setisAntecedentesNutri] = useState(false);

  const healthRecordPB = patient.healthRecord?.pathologicalBackground || {};

  const [pHeartDisease, setpHeartDisease] = useState(
    healthRecordPB.heartDisease
  );
  const [pinjuries, setpinjuries] = useState(healthRecordPB.injuries);
  const [pdiabetes, setpdiabetes] = useState(healthRecordPB.diabetes);
  const [parterialHypertension, setparterialHypertension] = useState(
    healthRecordPB.arterialHypertension
  );
  const [pendocrineMetabolic, setpendocrineMetabolic] = useState(
    healthRecordPB.endocrineMetabolic
  );
  const [prespiratory, setprespiratory] = useState(healthRecordPB.respiratory);
  const [pglaucoma, setpglaucoma] = useState(healthRecordPB.glaucoma);
  const [pdigestive, setpdigestive] = useState(healthRecordPB.digestive);
  const [poncological, setponcological] = useState(healthRecordPB.oncological);
  const [pneurological, setpneurological] = useState(
    healthRecordPB.neurological
  );
  const [pinfectological, setpinfectological] = useState(
    healthRecordPB.infectological
  );
  const [pnephrourological, setpnephrourological] = useState(
    healthRecordPB.nephrourological
  );
  const [pgynecoObstetrics, setpgynecoObstetrics] = useState(
    healthRecordPB.gynecoObstetrics
  );
  const [pstd, setpstd] = useState(healthRecordPB.std);
  const [phematological, setphematological] = useState(
    healthRecordPB.hematological
  );
  const [ptransfusions, setptransfusions] = useState(
    healthRecordPB.transfusions
  );
  const [phospitalizations, setphospitalizations] = useState(
    healthRecordPB.hospitalizations
  );
  const [psurgeries, setpsurgeries] = useState(healthRecordPB.surgeries);

  const healthRecordNPB = patient.healthRecord?.noPathologicalBackground || {};

  const [npsmoking, setnpsmoking] = useState(healthRecordNPB.smoking);
  const [npalcoholism, setnpalcoholism] = useState(healthRecordNPB.alcoholism);
  const [npdrugs, setnpdrugs] = useState(healthRecordNPB.drugs);
  const [npvaccines, setnpvaccines] = useState(healthRecordNPB.vaccines);
  const [npphysicalActivities, setnpphysicalActivities] = useState(
    healthRecordNPB.physicalActivities
  );

  const healthRecordHB = patient.healthRecord?.hereditaryBackground || {};

  const [hbthyroid, sethbthyroid] = useState(healthRecordHB.thyroid);
  const [hbheartDisease, sethbheartDisease] = useState(
    healthRecordHB.heartDisease
  );
  const [hbdiabetes, sethbdiabetes] = useState(healthRecordHB.diabetes);
  const [hbarterialHypertension, sethbarterialHypertension] = useState(
    healthRecordHB.arterialHypertension
  );
  const [hbglaucoma, sethbglaucoma] = useState(healthRecordHB.glaucoma);
  const [hbneurological, sethbneurological] = useState(
    healthRecordHB.neurological
  );
  const [hboncological, sethboncological] = useState(
    healthRecordHB.oncological
  );

  useEffect(() => {
    if (patient && patient.id === id) {
      if (patient.healthRecord?.allergiesInfo) {
        setAlergias(patient.healthRecord.allergiesInfo.allergies);
      }

      if (patient.healthRecord?.drugsInfo) {
        setmedicamentosActivos(patient.healthRecord.drugsInfo.drugs);
      }
    }
  }, [id, patient]);

  useEffect(() => {
    entityService.getAll('drug', loggedUser).then((data) => setDrugs(data));
  }, []);

  const handleSubmitForm = (data) => {
    if (data !== '') {
      const title = patient.id
        ? `Se actualizarán los datos del paciente ${patient.fullName}.`
        : `Se dará de alta al paciente ${data.firstName} ${data.lastName}.`;
      SweetAlert.fire({
        title: 'Atención',
        text: title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#ff0000',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          const healthRecordData = { ...patient.healthRecord, ...data };
          if (healthRecordData.allergiesInfo)
            healthRecordData.allergiesInfo.allergies = alergias.map(
              (x) => x.label || x
            );
          if (healthRecordData.drugsInfo)
            healthRecordData.drugsInfo.drugs = medicamentosActivos.map(
              (x) => x.id
            );
          dispatch(
            patientUpdateHRWatcher({
              patient: patient,
              healthRecordData: healthRecordData,
            })
          );
        }
      });
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      {status === LOADED ||
      status === SUCCEEDED ||
      status === FAILED ||
      (mode === 'new' && status !== LOADING) ? (
        <div className="card">
          <div className="card-header">
            <h5>{'Antecedentes'}</h5>
            <span>
              {
                'Antecedentes personales, familiares y tratamientos previos del paciente.'
              }
            </span>
          </div>
          <div className="card-body">
            <form
              className="theme-form mega-form"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
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
                    disabled={false}
                  >
                    <h6 className="card-title mb-0">{'Alergias'}</h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isAlergias}>
                <div className="form-group row">
                  <div className="col-md-12">
                    <Typeahead
                      id="alergias"
                      allowNew
                      multiple
                      newSelectionPrefix="Agregar nueva alergia: "
                      options={alergias}
                      selected={alergias}
                      disabled={mode === 'browse'}
                      onChange={(selected) => setAlergias(selected)}
                    />
                  </div>
                  <label
                    className="col-md-12 col-form-label"
                    htmlFor="alergiasText"
                  >
                    {'Comentarios extras'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="alergiasText"
                      rows="2"
                      disabled={mode === 'browse'}
                      defaultValue={
                        patient.healthRecord?.allergiesInfo?.extraComments
                      }
                      name="allergiesInfo.extraComments"
                      ref={register({ required: false })}
                    />
                  </div>
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
                    <h6 className="card-title mb-0">
                      {'Medicamentos Activos'}
                    </h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isMedicamentos}>
                <div className="form-group row">
                  <div className="col-md-12">
                    <Typeahead
                      id="drugs"
                      // labelKey={(option) => `${option.description} (Composición: ${option.composition}, ${option.format})`}
                      labelKey="description"
                      emptyLabel="No se encontraron resultados..."
                      multiple
                      minLength={3}
                      newSelectionPrefix="Agregar nuevo medicamento: "
                      options={drugs}
                      disabled={mode === 'browse'}
                      // selected={drugs.length > 0 ? drugs.filter((x) => x.description === doctor.description) : null}
                      selected={medicamentosActivos}
                      onChange={(selected) => setmedicamentosActivos(selected)}
                      renderToken={(option, props, index) => (
                        <Token
                          key={index}
                          onRemove={props.onRemove}
                          option={option}
                          disabled={mode === 'browse'}
                        >
                          <span
                            id={`drug${index}`}
                          >{`${option.description}`}</span>
                          <UncontrolledTooltip
                            placement="top"
                            target={`drug${index}`}
                          >
                            <h6>Composición:</h6>
                            {option.composition}
                            <h6>Formato:</h6>
                            {option.format}
                          </UncontrolledTooltip>
                        </Token>
                      )}
                      renderMenuItemChildren={(option, props) => (
                        <Fragment>
                          <Highlighter search={props.text}>
                            {option.description}
                          </Highlighter>
                          ,
                          <div>
                            <small className="text-muted">
                              Composición: {option.composition}, {option.format}
                            </small>
                          </div>
                        </Fragment>
                      )}
                    />
                  </div>
                  <label
                    className="col-md-12 col-form-label"
                    htmlFor="drugsText"
                  >
                    {'Comentarios extras'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control col-md-12"
                      id="drugsText"
                      rows="2"
                      disabled={mode === 'browse'}
                      defaultValue={
                        patient.healthRecord?.drugsInfo?.extraComments
                      }
                      name="drugsInfo.extraComments"
                      ref={register({ required: false })}
                    />
                  </div>
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
                    <h6 className="card-title mb-0">
                      {'Antecedentes Patológicos'}
                    </h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isAntecedentesPato}>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="cardiopatias"
                  >
                    {'Cardiopatías'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chpatoCardio"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.heartDisease
                      }
                      onClick={(e) => {
                        setpHeartDisease(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.heartDiseaseText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.heartDisease"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="cardiopatias"
                      rows="1"
                      disabled={mode === 'browse' || !pHeartDisease}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.heartDiseaseText
                      }
                      name="pathologicalBackground.heartDiseaseText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="traumatismosHeredo"
                  >
                    {'Traumatismos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chktraumatismosHeredo"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground?.injuries
                      }
                      onClick={(e) => {
                        setpinjuries(e.target.checked);
                        if (!e.target.checked) {
                          setValue('pathologicalBackground.injuriesText', '');
                        }
                      }}
                      name="pathologicalBackground.injuries"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="traumatismosHeredo"
                      rows="1"
                      disabled={mode === 'browse' || !pinjuries}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.injuriesText
                      }
                      name="pathologicalBackground.injuriesText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="diabetes">
                    {'Diabetes'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpdiabetes"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground?.diabetes
                      }
                      onClick={(e) => {
                        setpdiabetes(e.target.checked);
                        if (!e.target.checked) {
                          setValue('pathologicalBackground.diabetesText', '');
                        }
                      }}
                      name="pathologicalBackground.diabetes"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="diabetes"
                      rows="1"
                      disabled={mode === 'browse' || !pdiabetes}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.diabetesText
                      }
                      name="pathologicalBackground.diabetesText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="hipertensionHeredo"
                  >
                    {'Hipertensión arterial'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkparterialHypertension"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.arterialHypertension
                      }
                      onClick={(e) => {
                        setparterialHypertension(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.arterialHypertensionText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.arterialHypertension"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="hipertensionHeredo"
                      rows="1"
                      disabled={mode === 'browse' || !parterialHypertension}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.arterialHypertensionText
                      }
                      name="pathologicalBackground.arterialHypertensionText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="endocrino"
                  >
                    {'Endócrino-metabólico'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpendocrineMetabolic"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.endocrineMetabolic
                      }
                      onClick={(e) => {
                        setpendocrineMetabolic(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.endocrineMetabolicText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.endocrineMetabolic"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="endocrino"
                      rows="1"
                      disabled={mode === 'browse' || !pendocrineMetabolic}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.endocrineMetabolicText
                      }
                      name="pathologicalBackground.endocrineMetabolicText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="respiratorios"
                  >
                    {'Respiratorios'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkprespiratory"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.respiratory
                      }
                      onClick={(e) => {
                        setprespiratory(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.respiratoryText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.respiratory"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="respiratorios"
                      rows="1"
                      disabled={mode === 'browse' || !prespiratory}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.respiratoryText
                      }
                      name="pathologicalBackground.respiratoryText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="glaucoma">
                    {'Glaucoma'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpglaucoma"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground?.glaucoma
                      }
                      onClick={(e) => {
                        setpglaucoma(e.target.checked);
                        if (!e.target.checked) {
                          setValue('pathologicalBackground.glaucomaText', '');
                        }
                      }}
                      name="pathologicalBackground.glaucoma"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="glaucoma"
                      rows="1"
                      disabled={mode === 'browse' || !pglaucoma}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.glaucomaText
                      }
                      name="pathologicalBackground.glaucomaText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="digestivos"
                  >
                    {'Digestivos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpdigestive"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground?.digestive
                      }
                      onClick={(e) => {
                        setpdigestive(e.target.checked);
                        if (!e.target.checked) {
                          setValue('pathologicalBackground.digestiveText', '');
                        }
                      }}
                      name="pathologicalBackground.digestive"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="digestivos"
                      rows="1"
                      disabled={mode === 'browse' || !pdigestive}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.digestiveText
                      }
                      name="pathologicalBackground.digestiveText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="oncologicos"
                  >
                    {'Oncológicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkponcological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.oncological
                      }
                      onClick={(e) => {
                        setponcological(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.oncologicalText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.oncological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="oncologicos"
                      rows="1"
                      disabled={mode === 'browse' || !poncological}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.oncologicalText
                      }
                      name="pathologicalBackground.oncologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="neurologicos"
                  >
                    {'Neurológicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpneurological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.neurological
                      }
                      onClick={(e) => {
                        setpneurological(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.neurologicalText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.neurological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="neurologicos"
                      rows="1"
                      disabled={mode === 'browse' || !pneurological}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.neurologicalText
                      }
                      name="pathologicalBackground.neurologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="infectologicos"
                  >
                    {'Infectológicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpinfectological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.infectological
                      }
                      onClick={(e) => {
                        setpinfectological(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.infectologicalText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.infectological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="infectologicos"
                      rows="1"
                      disabled={mode === 'browse' || !pinfectological}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.infectologicalText
                      }
                      name="pathologicalBackground.infectologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="nefrourologicos"
                  >
                    {'Nefrourológicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpnephrourological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.infectological
                      }
                      onClick={(e) => {
                        setpnephrourological(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.nephrourologicalText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.nephrourological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="nefrourologicos"
                      rows="1"
                      disabled={mode === 'browse' || !pnephrourological}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.nephrourologicalText
                      }
                      name="pathologicalBackground.nephrourologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="gineco">
                    {'Gineco y obstétricos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpgynecoObstetrics"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.gynecoObstetrics
                      }
                      onClick={(e) => {
                        setpgynecoObstetrics(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.gynecoObstetricsText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.gynecoObstetrics"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="gineco"
                      rows="1"
                      disabled={mode === 'browse' || !pgynecoObstetrics}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.gynecoObstetricsText
                      }
                      name="pathologicalBackground.gynecoObstetricsText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="ets">
                    {'ETS'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpstd"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground?.std
                      }
                      onClick={(e) => {
                        setpstd(e.target.checked);
                        if (!e.target.checked) {
                          setValue('pathologicalBackground.stdText', '');
                        }
                      }}
                      name="pathologicalBackground.std"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="ets"
                      rows="1"
                      disabled={mode === 'browse' || !pstd}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground?.stdText
                      }
                      name="pathologicalBackground.stdText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="hematologicos"
                  >
                    {'Hematológicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkphematological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.hematological
                      }
                      onClick={(e) => {
                        setphematological(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.hematologicalText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.hematological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="hematologicos"
                      rows="1"
                      disabled={mode === 'browse' || !phematological}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.hematologicalText
                      }
                      name="pathologicalBackground.hematologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="transfusiones"
                  >
                    {'Transfusiones'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkptransfusions"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.transfusions
                      }
                      onClick={(e) => {
                        setptransfusions(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.transfusionsText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.transfusions"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="transfusiones"
                      rows="1"
                      disabled={mode === 'browse' || !ptransfusions}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.transfusionsText
                      }
                      name="pathologicalBackground.transfusionsText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="hospitalizaciones"
                  >
                    {'Hospitalizaciones previas'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkphospitalizations"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground
                          ?.hospitalizations
                      }
                      onClick={(e) => {
                        setphospitalizations(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'pathologicalBackground.hospitalizationsText',
                            ''
                          );
                        }
                      }}
                      name="pathologicalBackground.hospitalizations"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="hospitalizaciones"
                      rows="1"
                      disabled={mode === 'browse' || !phospitalizations}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.hospitalizationsText
                      }
                      name="pathologicalBackground.hospitalizationsText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="cirugias">
                    {'Cirugías previas'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkpsurgeries"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.pathologicalBackground?.surgeries
                      }
                      onClick={(e) => {
                        setpsurgeries(e.target.checked);
                        if (!e.target.checked) {
                          setValue('pathologicalBackground.surgeriesText', '');
                        }
                      }}
                      name="pathologicalBackground.surgeries"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="cirugias"
                      rows="1"
                      disabled={mode === 'browse' || !psurgeries}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground
                          ?.surgeriesText
                      }
                      name="pathologicalBackground.surgeriesText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="otros">
                    {'Otros'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="otros"
                      rows="3"
                      disabled={mode === 'browse'}
                      defaultValue={
                        patient.healthRecord?.pathologicalBackground?.others
                      }
                      name="pathologicalBackground.others"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
              </Collapse>

              <hr className="mt-4 mb-4" />
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-link pl-0 m-b-10"
                    onClick={() =>
                      setisAntecedentesNoPato(!isAntecedentesNoPato)
                    }
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseicon3"
                    aria-expanded={isAntecedentesNoPato}
                    aria-controls="collapseicon2"
                  >
                    <h6 className="card-title mb-0">
                      {'Antecedentes No Patológicos'}
                    </h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isAntecedentesNoPato}>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="tabaquismo"
                  >
                    {'Tabaquismo'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chknpsmoking"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.noPathologicalBackground?.smoking
                      }
                      onClick={(e) => {
                        setnpsmoking(e.target.checked);
                        if (!e.target.checked) {
                          setValue('noPathologicalBackground.smokingText', '');
                        }
                      }}
                      name="noPathologicalBackground.smoking"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="tabaquismo"
                      rows="1"
                      disabled={mode === 'browse' || !npsmoking}
                      defaultValue={
                        patient.healthRecord?.noPathologicalBackground
                          ?.smokingText
                      }
                      name="noPathologicalBackground.smokingText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="alcoholismo"
                  >
                    {'Alcoholismo'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chknpalcoholism"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.noPathologicalBackground
                          ?.alcoholism
                      }
                      onClick={(e) => {
                        setnpalcoholism(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'noPathologicalBackground.alcoholismText',
                            ''
                          );
                        }
                      }}
                      name="noPathologicalBackground.alcoholism"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="alcoholismo"
                      rows="1"
                      disabled={mode === 'browse' || !npalcoholism}
                      defaultValue={
                        patient.healthRecord?.noPathologicalBackground
                          ?.alcoholismText
                      }
                      name="noPathologicalBackground.alcoholismText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="drogas">
                    {'Drogas'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chknpdrugs"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.noPathologicalBackground?.drugs
                      }
                      onClick={(e) => {
                        setnpdrugs(e.target.checked);
                        if (!e.target.checked) {
                          setValue('noPathologicalBackground.drugsText', '');
                        }
                      }}
                      name="noPathologicalBackground.drugs"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="drogas"
                      rows="1"
                      disabled={mode === 'browse' || !npdrugs}
                      defaultValue={
                        patient.healthRecord?.noPathologicalBackground
                          ?.drugsText
                      }
                      name="noPathologicalBackground.drugsText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="vacunas">
                    {'Vacuna o inmunización reciente'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chknpvaccines"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.noPathologicalBackground?.vaccines
                      }
                      onClick={(e) => {
                        setnpvaccines(e.target.checked);
                        if (!e.target.checked) {
                          setValue('noPathologicalBackground.vaccinesText', '');
                        }
                      }}
                      name="noPathologicalBackground.vaccines"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="vacunas"
                      rows="1"
                      disabled={mode === 'browse' || !npvaccines}
                      defaultValue={
                        patient.healthRecord?.noPathologicalBackground
                          ?.vaccinesText
                      }
                      name="noPathologicalBackground.vaccinesText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="actfisica"
                  >
                    {'Actividad física'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chknpphysicalActivities"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.noPathologicalBackground
                          ?.physicalActivities
                      }
                      onClick={(e) => {
                        setnpphysicalActivities(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'noPathologicalBackground.physicalActivitiesText',
                            ''
                          );
                        }
                      }}
                      name="noPathologicalBackground.physicalActivities"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="actfisica"
                      rows="1"
                      disabled={mode === 'browse' || !npphysicalActivities}
                      defaultValue={
                        patient.healthRecord?.noPathologicalBackground
                          ?.physicalActivitiesText
                      }
                      name="noPathologicalBackground.physicalActivitiesText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="otrosNoPat"
                  >
                    {'Otros'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="otrosNoPat"
                      rows="3"
                      disabled={mode === 'browse'}
                      defaultValue={
                        patient.healthRecord?.noPathologicalBackground?.others
                      }
                      name="noPathologicalBackground.others"
                      ref={register({ required: false })}
                    />
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
                    <h6 className="card-title mb-0">
                      {'Antecedentes Heredo-familiares'}
                    </h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isHeredoFam}>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="cardiopatiasHeredadas"
                  >
                    {'Cardiopatías'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhbheartDisease"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground?.heartDisease
                      }
                      onClick={(e) => {
                        sethbheartDisease(e.target.checked);
                        if (!e.target.checked) {
                          setValue('hereditaryBackground.heartDiseaseText', '');
                        }
                      }}
                      name="hereditaryBackground.heartDisease"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="cardiopatiasHeredadas"
                      rows="1"
                      disabled={mode === 'browse' || !hbheartDisease}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground
                          ?.heartDiseaseText
                      }
                      name="hereditaryBackground.heartDiseaseText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="traumatismos"
                  >
                    {'Enfermedades de tiroides'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhbthyroid"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground?.thyroid
                      }
                      onClick={(e) => {
                        sethbthyroid(e.target.checked);
                        if (!e.target.checked) {
                          setValue('hereditaryBackground.thyroidText', '');
                        }
                      }}
                      name="hereditaryBackground.thyroid"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="traumatismos"
                      rows="1"
                      disabled={mode === 'browse' || !hbthyroid}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground?.thyroidText
                      }
                      name="hereditaryBackground.thyroidText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="diabetesHeredada"
                  >
                    {'Diabetes'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhbdiabetes"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground?.diabetes
                      }
                      onClick={(e) => {
                        sethbdiabetes(e.target.checked);
                        if (!e.target.checked) {
                          setValue('hereditaryBackground.diabetesText', '');
                        }
                      }}
                      name="hereditaryBackground.diabetes"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="diabetesHeredada"
                      rows="1"
                      disabled={mode === 'browse' || !hbdiabetes}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground?.diabetesText
                      }
                      name="hereditaryBackground.diabetesText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="hipertension"
                  >
                    {'Hipertensión arterial'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhbarterialHypertension"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground
                          ?.arterialHypertension
                      }
                      onClick={(e) => {
                        sethbarterialHypertension(e.target.checked);
                        if (!e.target.checked) {
                          setValue(
                            'hereditaryBackground.arterialHypertensionText',
                            ''
                          );
                        }
                      }}
                      name="hereditaryBackground.arterialHypertension"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="hipertension"
                      rows="1"
                      disabled={mode === 'browse' || !hbarterialHypertension}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground
                          ?.arterialHypertensionText
                      }
                      name="hereditaryBackground.arterialHypertensionText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="glaucomaHeredada"
                  >
                    {'Glaucoma'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhbaglaucoma"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground?.glaucoma
                      }
                      onClick={(e) => {
                        sethbglaucoma(e.target.checked);
                        if (!e.target.checked) {
                          setValue('hereditaryBackground.glaucomaText', '');
                        }
                      }}
                      name="hereditaryBackground.glaucoma"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="glaucomaHeredada"
                      rows="1"
                      disabled={mode === 'browse' || !hbglaucoma}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground?.glaucomaText
                      }
                      name="hereditaryBackground.glaucomaText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="neurologicoHeredo"
                  >
                    {'Neurológicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhbneurological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground?.neurological
                      }
                      onClick={(e) => {
                        sethbneurological(e.target.checked);
                        if (!e.target.checked) {
                          setValue('hereditaryBackground.neurologicalText', '');
                        }
                      }}
                      name="hereditaryBackground.neurological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="neurologicoHeredo"
                      rows="1"
                      disabled={mode === 'browse' || !hbneurological}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground
                          ?.neurologicalText
                      }
                      name="hereditaryBackground.neurologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="oncologicoHeredo"
                  >
                    {'Oncólogicos'}
                  </label>
                  <div className="col-md-1 p-2">
                    <input
                      className="checkbox_animated"
                      id="chkhboncological"
                      type="checkbox"
                      disabled={mode === 'browse'}
                      defaultChecked={
                        patient.healthRecord?.hereditaryBackground?.oncological
                      }
                      onClick={(e) => {
                        sethboncological(e.target.checked);
                        if (!e.target.checked) {
                          setValue('hereditaryBackground.oncologicalText', '');
                        }
                      }}
                      name="hereditaryBackground.oncological"
                      ref={register({ required: false })}
                    />
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="oncologicoHeredo"
                      rows="1"
                      disabled={mode === 'browse' || !hboncological}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground
                          ?.oncologicalText
                      }
                      name="hereditaryBackground.oncologicalText"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="otrosHeredo"
                  >
                    {'Otros'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="otrosHeredo"
                      rows="3"
                      disabled={mode === 'browse'}
                      defaultValue={
                        patient.healthRecord?.hereditaryBackground?.others
                      }
                      name="hereditaryBackground.others"
                      ref={register({ required: false })}
                    />
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
                    <h6 className="card-title mb-0">
                      {'Antecedentes Psiquiátricos'}
                    </h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isAntecedentesPsico}>
                <div className="form-group row">
                  <label
                    className="col-md-2 col-form-label"
                    htmlFor="psicoHeredo"
                  >
                    {'Psiquiátricos'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="psicoHeredo"
                      rows="3"
                      disabled={mode === 'browse'}
                      defaultValue={patient.healthRecord?.psychiatricBackgroud}
                      name="psychiatricBackgroud"
                      ref={register({ required: false })}
                    />
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
                    <h6 className="card-title mb-0">
                      {'Antecedentes Nutricionales'}
                    </h6>
                  </button>
                </div>
              </div>
              <Collapse isOpen={isAntecedentesNutri}>
                <div className="form-group row">
                  <label className="col-md-2 col-form-label" htmlFor="nutri">
                    {'Nutricionales'}
                  </label>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id="nutri"
                      rows="3"
                      disabled={mode === 'browse'}
                      defaultValue={patient.healthRecord?.nutritionalBackgroud}
                      name="nutritionalBackgroud"
                      ref={register({ required: false })}
                    />
                  </div>
                </div>
              </Collapse>
              {mode !== 'browse' && (
                <div className="card-footer m-b-40">
                  <span className="pull-right">
                    <button className="btn btn-primary ml-1" type="submit">
                      {'Guardar'}
                    </button>
                  </span>
                </div>
              )}
            </form>
          </div>
          {mode === 'browse' && (
            <div className="card-footer m-b-40">
              <span className="pull-right">
                <Link
                  className="btn btn-primary"
                  to={`${process.env.PUBLIC_URL}/patient/${patient.id}?mode=edit`}
                >
                  {' '}
                  <i className="fa fa-pencil mr-2" />
                  Editar
                </Link>
              </span>
            </div>
          )}
        </div>
      ) : (
        <Loader show={true} />
      )}
    </Fragment>
  );
};

export default PatientBackground;
