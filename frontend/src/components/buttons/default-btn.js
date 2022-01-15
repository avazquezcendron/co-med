import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import {DefaultButtons,BootstrapStateButtons,PrimaryButton,SecondaryButton,SuccessButton,InfoButton,WarningButton,DangerButton,LightButton,SmallButtons,Add,Disabled,Active,LargeButtons,OutlineButtons,OutlineLargeButtons,OutlineSmallButtons,ActiveButtons,DisabledButtons,GradienButtons,ExtraSmallButtons,CustomStateButtons,BoldBorderOutlineButtons,OutlineExtraSmallButtons,DisabledOutlineButtons} from "../../constant";
const DefaultBtn = () => {
    return (
        <Fragment>
            <Breadcrumb title="Default Style" parent="Buttons" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card" id="default">
                            <div className="card-header">
                                <h5>{DefaultButtons}</h5>
                                <span>{BootstrapStateButtons}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary" type="button">{PrimaryButton}</button>
                                <button className="btn btn-secondary" type="button">{SecondaryButton}</button>
                                <button className="btn btn-success" type="button">{SuccessButton}</button>
                                <button className="btn btn-info" type="button">{InfoButton}</button>
                                <button className="btn btn-warning" type="button">{WarningButton}</button>
                                <button className="btn btn-danger" type="button">{DangerButton}</button>
                                <button className="btn btn-light" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="large-btn">
                            <div className="card-header">
                                <h5>{LargeButtons}</h5>
                                <span>{Add} <code>{".btn-lg"}</code> {"class for large size buttons"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary btn-lg" type="button">{PrimaryButton}</button>
                                <button className="btn btn-secondary btn-lg" type="button">{SecondaryButton}</button>
                                <button className="btn btn-success btn-lg" type="button">{SuccessButton}</button>
                                <button className="btn btn-info btn-lg" type="button">{InfoButton}</button>
                                <button className="btn btn-warning btn-lg" type="button">{WarningButton}</button>
                                <button className="btn btn-danger btn-lg" type="button">{DangerButton}</button>
                                <button className="btn btn-light btn-lg" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="small-btn">
                            <div className="card-header">
                                <h5>{SmallButtons}</h5>
                                <span>{Add} <code>{".btn-sm"}</code> {"class for small size buttons"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary btn-sm" type="button">{PrimaryButton}</button>
                                <button className="btn btn-secondary btn-sm" type="button">{SecondaryButton}</button>
                                <button className="btn btn-success btn-sm" type="button">{SuccessButton}</button>
                                <button className="btn btn-info btn-sm" type="button">{InfoButton}</button>
                                <button className="btn btn-warning btn-sm" type="button">{WarningButton}</button>
                                <button className="btn btn-danger btn-sm" type="button">{DangerButton}</button>
                                <button className="btn btn-light btn-sm" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="ex-small-btn">
                            <div className="card-header">
                                <h5>{ExtraSmallButtons}</h5>
                                <span>{Add} <code>{".btn-xs"}</code> {"class for extra small size buttons"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary btn-xs" type="button">{PrimaryButton}</button>
                                <button className="btn btn-secondary btn-xs" type="button">{SecondaryButton}</button>
                                <button className="btn btn-success btn-xs" type="button">{SuccessButton}</button>
                                <button className="btn btn-info btn-xs" type="button">{InfoButton}</button>
                                <button className="btn btn-warning btn-xs" type="button">{WarningButton}</button>
                                <button className="btn btn-danger btn-xs" type="button">{DangerButton}</button>
                                <button className="btn btn-light btn-xs" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="active-btn">
                            <div className="card-header">
                                <h5>{ActiveButtons}</h5>
                                <span>{Add} <code>{".active"}</code> {"class for active state"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary active" type="button">{Active}</button>
                                <button className="btn btn-secondary active" type="button">{Active}</button>
                                <button className="btn btn-success active" type="button">{Active}</button>
                                <button className="btn btn-info active" type="button">{Active}</button>
                                <button className="btn btn-warning active" type="button">{Active}</button>
                                <button className="btn btn-danger active" type="button">{Active}</button>
                                <button className="btn btn-light active txt-dark" type="button">{Active}</button>
                            </div>
                        </div>
                        <div className="card" id="disabled-btn">
                            <div className="card-header">
                                <h5>{DisabledButtons}</h5>
                                <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary disabled" type="button">{Disabled}</button>
                                <button className="btn btn-secondary disabled" type="button">{Disabled}</button>
                                <button className="btn btn-success disabled" type="button">{Disabled}</button>
                                <button className="btn btn-info disabled" type="button">{Disabled}</button>
                                <button className="btn btn-warning disabled" type="button">{Disabled}</button>
                                <button className="btn btn-danger disabled" type="button">{Disabled}</button>
                                <button className="btn btn-light disabled" type="button">{Disabled}</button>
                            </div>
                        </div>
                        <div className="card" id="custom-state-button">
                            <div className="card-header">
                                <h5>{CustomStateButtons}</h5>
                                <span>{"The"} <code>{".btn"}</code> {"class used with"} <code>&lt;{"button"}&gt;</code>, <code>&lt;{"a"}&gt;</code> {"and"} <code>&lt;{"input"}&gt;</code> {"elements"}.</span>
                            </div>
                            <div className="card-body btn-showcase"><a className="btn btn-primary" href="#javascript" data-toggle="tooltip" title="btn btn-primary" role="button">{"Link"}</a>
                                <input className="btn btn-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                                <input className="btn btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                                <button className="btn btn-info" type="submit">{"Button"}</button>
                            </div>
                        </div>
                        <div className="card" id="outline-button">
                            <div className="card-header">
                                <h5>{OutlineButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for border button"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-outline-primary" type="button">{PrimaryButton}</button>
                                <button className="btn btn-outline-secondary" type="button">{SecondaryButton}</button>
                                <button className="btn btn-outline-success" type="button">{SuccessButton}</button>
                                <button className="btn btn-outline-info" type="button">{InfoButton}</button>
                                <button className="btn btn-outline-warning" type="button">{WarningButton}</button>
                                <button className="btn btn-outline-danger" type="button">{DangerButton}</button>
                                <button className="btn btn-outline-light txt-dark" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="outline-bold-button">
                            <div className="card-header">
                                <h5>{BoldBorderOutlineButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*-2x"}</code> {"class for bold outline"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-outline-primary-2x" type="button">{PrimaryButton}</button>
                                <button className="btn btn-outline-secondary-2x" type="button">{SecondaryButton}</button>
                                <button className="btn btn-outline-success-2x" type="button">{SuccessButton}</button>
                                <button className="btn btn-outline-info-2x" type="button">{InfoButton}</button>
                                <button className="btn btn-outline-warning-2x" type="button">{WarningButton}</button>
                                <button className="btn btn-outline-danger-2x" type="button">{DangerButton}</button>
                                <button className="btn btn-outline-light-2x txt-dark" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="outline-large-button">
                            <div className="card-header">
                                <h5>{OutlineLargeButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for outline and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-outline-primary btn-lg" type="button">{PrimaryButton}</button>
                                <button className="btn btn-outline-secondary btn-lg" type="button">{SecondaryButton}</button>
                                <button className="btn btn-outline-success btn-lg" type="button">{SuccessButton}</button>
                                <button className="btn btn-outline-info btn-lg" type="button">{InfoButton}</button>
                                <button className="btn btn-outline-warning btn-lg" type="button">{WarningButton}</button>
                                <button className="btn btn-outline-danger btn-lg" type="button">{DangerButton}</button>
                                <button className="btn btn-outline-light btn-lg txt-dark" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="outline-small-button">
                            <div className="card-header">
                                <h5>{OutlineSmallButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for outline and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-outline-primary btn-sm" type="button">{PrimaryButton}</button>
                                <button className="btn btn-outline-secondary btn-sm" type="button">{SecondaryButton}</button>
                                <button className="btn btn-outline-success btn-sm" type="button">{SuccessButton}</button>
                                <button className="btn btn-outline-info btn-sm" type="button">{InfoButton}</button>
                                <button className="btn btn-outline-warning btn-sm" type="button">{WarningButton}</button>
                                <button className="btn btn-outline-danger btn-sm" type="button">{DangerButton}</button>
                                <button className="btn btn-outline-light btn-sm txt-dark" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card" id="ex-outline-small-button">
                            <div className="card-header">
                                <h5>{OutlineExtraSmallButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for outline and"} <code>{".btn-xs"}</code> {"class for extra small button"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-outline-primary btn-xs" type="button">{PrimaryButton}</button>
                                <button className="btn btn-outline-secondary btn-xs" type="button">{SecondaryButton}</button>
                                <button className="btn btn-outline-success btn-xs" type="button">{SuccessButton}</button>
                                <button className="btn btn-outline-info btn-xs" type="button">{InfoButton}</button>
                                <button className="btn btn-outline-warning btn-xs" type="button">{WarningButton}</button>
                                <button className="btn btn-outline-danger btn-xs" type="button">{DangerButton}</button>
                                <button className="btn btn-outline-light btn-xs txt-dark" type="button">{LightButton}</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{DisabledOutlineButtons}</h5>
                                <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled state"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-outline-primary disabled" type="button">{Disabled}</button>
                                <button className="btn btn-outline-secondary disabled" type="button">{Disabled}</button>
                                <button className="btn btn-outline-success disabled" type="button">{Disabled}</button>
                                <button className="btn btn-outline-info disabled" type="button">{Disabled}</button>
                                <button className="btn btn-outline-warning disabled" type="button">{Disabled}</button>
                                <button className="btn btn-outline-danger disabled" type="button">{Disabled}</button>
                                <button className="btn btn-outline-light txt-dark disabled" type="button">{Disabled}</button>
                            </div>
                        </div>
                        <div className="card" id="gradiant">
                            <div className="card-header">
                                <h5>{GradienButtons}</h5>
                                <span>{Add} <code>{".btn-*-gradien"}</code> {"class for gradien button"}</span>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary-gradien" type="button">{PrimaryButton}</button>
                                <button className="btn btn-secondary-gradien" type="button">{SecondaryButton}</button>
                                <button className="btn btn-success-gradien" type="button">{SuccessButton}</button>
                                <button className="btn btn-info-gradien" type="button">{InfoButton}</button>
                                <button className="btn btn-warning-gradien" type="button">{WarningButton}</button>
                                <button className="btn btn-danger-gradien" type="button">{DangerButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DefaultBtn;