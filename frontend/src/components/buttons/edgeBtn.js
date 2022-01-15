import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import {DefaultButtons,PrimaryButton,SecondaryButton,SuccessButton,InfoButton,WarningButton,DangerButton,LightButton,SmallButtons,Add,Disabled,Active,LargeButtons,OutlineButtons,OutlineLargeButtons,OutlineSmallButtons,ActiveButtons,DisabledButtons,GradienButtons,CustomStateButtons,BoldBorderOutlineButtons,OutlineExtraSmallButtons,DisabledOutlineButtons} from "../../constant";

const EdgeBtn = () => {
    return (
        <Fragment>
            <Breadcrumb title="Edge Style" parent="Buttons" />
            <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{DefaultButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code> {"class for edge button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-secondary" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-success" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-info" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-warning" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-danger" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-light" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{LargeButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-lg" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-secondary btn-lg" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-success btn-lg" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-info btn-lg" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-warning btn-lg" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-danger btn-lg" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-light btn-lg" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{SmallButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary btn-sm" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-secondary btn-sm" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-success btn-sm" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-info btn-sm" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-warning btn-sm" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-danger btn-sm" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-light btn-sm" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{ActiveButtons}</h5>
                    <span>{Add} <code>{".active"}</code> {"for active state"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary active" type="button">{Active}</button>
                    <button className="btn btn-pill btn-secondary active" type="button">{Active}</button>
                    <button className="btn btn-pill btn-success active" type="button">{Active}</button>
                    <button className="btn btn-pill btn-info active" type="button">{Active}</button>
                    <button className="btn btn-pill btn-warning active" type="button">{Active}</button>
                    <button className="btn btn-pill btn-danger active" type="button">{Active}</button>
                    <button className="btn btn-pill btn-light active txt-dark" type="button">{Active}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{DisabledButtons}</h5>
                    <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-secondary disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-success disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-info disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-warning disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-danger disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-light disabled" type="button">{Disabled}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{CustomStateButtons}</h5>
                    <span>{"The "}<code>{".btn"}</code> {"class used with"} <code>&lt;{"button"}&gt;</code>, <code>&lt;{"a"}&gt;</code> {"and"} <code>&lt;{"input"}&gt;</code> {"elements"}.</span>
                  </div>
                  <div className="card-body btn-showcase"><a className="btn btn-pill btn-primary" href="#javascript" data-toggle="tooltip" title="btn btn-primary" role="button">{"Link"}</a>
                    <input className="btn btn-pill btn-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                    <input className="btn btn-pill btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                    <button className="btn btn-pill btn-info" type="submit">{"Button"}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{OutlineButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-outline-*"}</code> {"class for button with outline"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-outline-secondary" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-outline-success" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-outline-info" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-outline-warning" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-outline-danger" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-outline-light txt-dark" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{BoldBorderOutlineButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-outline-*-2x"}</code> {"class for button with bold outline"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary-2x" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-outline-secondary-2x" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-outline-success-2x" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-outline-info-2x" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-outline-warning-2x" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-outline-danger-2x" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-outline-light-2x txt-dark" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{OutlineLargeButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-lg" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-outline-secondary btn-lg" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-outline-success btn-lg" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-outline-info btn-lg" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-outline-warning btn-lg" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-outline-danger btn-lg" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-outline-light btn-lg txt-dark" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{OutlineSmallButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-sm" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-outline-secondary btn-sm" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-outline-success btn-sm" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-outline-info btn-sm" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-outline-warning btn-sm" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-outline-danger btn-sm" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-outline-light btn-sm txt-dark" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{OutlineExtraSmallButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-xs"}</code> {"class for extra small button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary btn-xs" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-outline-secondary btn-xs" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-outline-success btn-xs" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-outline-info btn-xs" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-outline-warning btn-xs" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-outline-danger btn-xs" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-outline-light btn-xs txt-dark" type="button">{LightButton}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{DisabledOutlineButtons}</h5>
                    <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-outline-primary disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-outline-secondary disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-outline-success disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-outline-info disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-outline-warning disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-outline-danger disabled" type="button">{Disabled}</button>
                    <button className="btn btn-pill btn-outline-light disabled txt-dark" type="button">{Disabled}</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>{GradienButtons}</h5>
                    <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-*-gradien"}</code>{"class for gradien button"}</span>
                  </div>
                  <div className="card-body btn-showcase">
                    <button className="btn btn-pill btn-primary-gradien" type="button">{PrimaryButton}</button>
                    <button className="btn btn-pill btn-secondary-gradien" type="button">{SecondaryButton}</button>
                    <button className="btn btn-pill btn-success-gradien" type="button">{SuccessButton}</button>
                    <button className="btn btn-pill btn-info-gradien" type="button">{InfoButton}</button>
                    <button className="btn btn-pill btn-warning-gradien" type="button">{WarningButton}</button>
                    <button className="btn btn-pill btn-danger-gradien" type="button">{DangerButton}</button>
                    <button className="btn btn-pill btn-light-gradien txt-dark" type="button">{LightButton}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    );
};

export default EdgeBtn;