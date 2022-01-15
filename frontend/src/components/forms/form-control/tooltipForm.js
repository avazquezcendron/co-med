import React ,{useState} from 'react';
import {useForm} from 'react-hook-form'
import {FirstName,LastName,Username,State,City,Zip,SubmitForm} from '../../../constant'
const TooltipForm = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const [validateClass , setValidateClass] = useState(false);
  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };
  return (
    <div>
      <form className={`needs-validation tooltip-validation ${validateClass ? 'validateClass' : ''}`} noValidate="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">{FirstName}</label>
            <input className="form-control" id="validationTooltip01" name="firstName" type="text" placeholder="First name" ref={register({ required: true })} />
            <span>{errors.firstName && 'First name is required'}</span>
            <div className="valid-feedback">{"Looks good!"}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">{LastName}</label>
            <input className="form-control" id="validationTooltip02" name="lastName" type="text" placeholder="Last name" ref={register({ required: true })} />
            <span>{errors.lastName && 'Last name is required'}</span>
            <div className="valid-feedback">{"Looks good!"}</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">{Username}</label>
            <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text" id="validationTooltip03">@</span></div>
              <input className="form-control" id="validationTooltip03" name="userName" type="text" placeholder="Username" aria-describedby="inputGroupPrepend" ref={register({ required: true })} />
              <span>{errors.lastName && 'User name is required'}</span>
              <div className="invalid-feedback">{"Please choose a username."}</div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip04">{City}</label>
            <input className="form-control" id="validationTooltip04" name="city" type="text" placeholder="City" ref={register({ required: true })} />
            <span>{errors.city && 'Please provide a valid city'}</span>
            <div className="invalid-feedback">{"Please provide a valid city."}</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">{State}</label>
            <input className="form-control" id="validationTooltip05" name="state" type="text" placeholder="State" ref={register({ required: true })} />
            <span>{errors.state && 'Please provide a valid state.'}</span>
            <div className="invalid-feedback">{"Please provide a valid state."}</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip06">{Zip}</label>
            <input className="form-control" id="validationTooltip06" name="zip" type="text" placeholder="Zip" ref={register({ required: true })} />
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
        <button className="btn btn-primary" type="submit" onClick={() => setValidateClass(!validateClass)}>{SubmitForm}</button>
      </form>
    </div>
  );
};

export default TooltipForm;