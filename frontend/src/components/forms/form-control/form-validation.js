import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {useForm} from 'react-hook-form'
import TooltipForm from './tooltipForm';
import {CustomStyles,FirstName,LastName,BrowserDefaults,Tooltips,Username,State,City,Zip,SupportedElements,SubmitForm} from '../../../constant'

const FormValidation = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <Breadcrumb title="Validation" parent="Form" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{CustomStyles}</h5>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">{FirstName}</label>
                      <input className="form-control" name="firstName" type="text" placeholder="First name" ref={register({ required: true })} />
                      <span>{errors.firstName && 'First name is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom02">{LastName}</label>
                      <input className="form-control" name="lastName" type="text" placeholder="Last name" ref={register({ required: true })} />
                      <span>{errors.lastName && 'Last name is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustomUsername">{Username}</label>
                      <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend">{"@"}</span></div>
                        <input className="form-control" name="userName" type="text" placeholder="Username" aria-describedby="inputGroupPrepend" ref={register({ required: true })} />
                        <span>{errors.lastName && 'User name is required'}</span>
                        <div className="invalid-feedback">{"Please choose a username."}</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom03">{City}</label>
                      <input className="form-control" name="city" type="text" placeholder="City" ref={register({ required: true })} />
                      <span>{errors.city && 'Please provide a valid city'}</span>
                      <div className="invalid-feedback">{"Please provide a valid city."}</div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="validationCustom04">{State}</label>
                      <input className="form-control" id="validationCustom04" name="state" type="text" placeholder="State" ref={register({ required: true })} />
                      <span>{errors.state && 'Please provide a valid state.'}</span>
                      <div className="invalid-feedback">{"Please provide a valid state."}</div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="validationCustom05">{Zip}</label>
                      <input className="form-control" id="validationCustom05" name="zip" type="text" placeholder="Zip" ref={register({ required: true })} />
                      <span>{errors.zip && 'Please provide a valid zip.'}</span>
                      <div className="invalid-feedback">{"Please provide a valid zip."}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <div className="checkbox p-0">
                        <input className="form-check-input" id="invalidCheck" type="checkbox" />
                        <label className="form-check-label" htmlFor="invalidCheck">{"Agree to terms and conditions"}</label>
                      </div>
                      <div className="invalid-feedback">{"You must agree before submitting."}</div>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">{SubmitForm}</button>
                </form>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5>{BrowserDefaults}</h5><span>{"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."}</span>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationDefault01">{FirstName}</label>
                      <input className="form-control" id="validationDefault01" type="text" placeholder="First name" required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationDefault02">{LastName}</label>
                      <input className="form-control" id="validationDefault02" type="text" placeholder="Last name" required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationDefaultUsername">{Username}</label>
                      <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend2">{"@"}</span></div>
                        <input className="form-control" id="validationDefaultUsername" type="text" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationDefault03">{City}</label>
                      <input className="form-control" id="validationDefault03" type="text" placeholder="City" required />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="validationDefault04">{State}</label>
                      <input className="form-control" id="validationDefault04" type="text" placeholder="State" required />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="validationDefault05">{Zip}</label>
                      <input className="form-control" id="validationDefault05" type="text" placeholder="Zip" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <div className="checkbox p-0">
                        <input className="form-check-input" id="invalidCheck2" type="checkbox" required />
                        <label className="form-check-label" htmlFor="invalidCheck2">{"Agree to terms and conditions"}</label>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">{SubmitForm}</button>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{SupportedElements}</h5><span>{"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."}</span>
              </div>
              <div className="card-body">
                <form className="was-validated">
                  <div className="custom-control custom-checkbox mb-3">
                    <input className="custom-control-input" id="customControlValidation1" type="checkbox" required />
                    <label className="custom-control-label" htmlFor="customControlValidation1">{"Check this custom checkbox"}</label>
                    <div className="invalid-feedback">{"Example invalid feedback text"}</div>
                  </div>
                  <div className="custom-control custom-radio">
                    <input className="custom-control-input" id="customControlValidation2" type="radio" name="radio-stacked" required />
                    <label className="custom-control-label" htmlFor="customControlValidation2">{"Toggle this custom radio"}</label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input className="custom-control-input" id="customControlValidation3" type="radio" name="radio-stacked" required />
                    <label className="custom-control-label" htmlFor="customControlValidation3">{"Or toggle this other custom radio"}</label>
                    <div className="invalid-feedback">{"More example invalid feedback text"}</div>
                  </div>
                  <div className="form-group">
                    <select className="custom-select" required="">
                      <option value="">{"Open this select menu"}</option>
                      <option value="1">{"One"}</option>
                      <option value="2">{"Two"}</option>
                      <option value="3">{"Three"}</option>
                    </select>
                    <div className="invalid-feedback">{"Example invalid custom select feedback"}</div>
                  </div>
                  <div className="custom-file">
                    <input className="custom-file-input" id="validatedCustomFile" type="file" required="" />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">{"Choose file..."}</label>
                    <div className="invalid-feedback">{"Example invalid custom file feedback"}</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>{Tooltips}</h5><span>{"If your form layout allows it, you can swap the"} <code className="text-danger">{".feedback"}</code> {"classes for"} <code className="text-danger">{".tooltip"}</code> {"classes to display validation feedback in a styled tooltip. Be sure to have a parent with"} <code className="text-danger">{"position: relative"}</code> {"on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup."}</span>
              </div>
              <div className="card-body">
                <TooltipForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormValidation;