import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Button, ButtonGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Left,Right,Middle,BasicButtonGroup,EdgesButtonGroup,FlatButtonGroup,LargeButtonGroup,OutlineButtonGroup,OutlineCustomButtonGroup,OutlineFlatButton,Add,CheckBoxButtonGroup,Nesting,Vertical,LargeEdgesButtonGroup,OutlineEdgesButton,RadioButtonGroup, AnotherAction,Action,Header} from "../../constant";
const GroupBtn = () => {
    return (
        <Fragment>
            <Breadcrumb title="Button Group" parent="Buttons" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BasicButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-primary" type="button">{Left}</button>
                                            <button className="btn btn-primary" type="button">{Middle}</button>
                                            <button className="btn btn-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-secondary" type="button">{Left}</button>
                                            <button className="btn btn-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-success" type="button">{Left}</button>
                                            <button className="btn btn-success" type="button">{Middle}</button>
                                            <button className="btn btn-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-info" type="button">{Left}</button>
                                            <button className="btn btn-info" type="button">{Middle}</button>
                                            <button className="btn btn-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-warning" type="button">{Left}</button>
                                            <button className="btn btn-warning" type="button">{Middle}</button>
                                            <button className="btn btn-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-danger" type="button">{Left}</button>
                                            <button className="btn btn-danger" type="button">{Middle}</button>
                                            <button className="btn btn-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-light" type="button">{Left}</button>
                                            <button className="btn btn-light" type="button">{Middle}</button>
                                            <button className="btn btn-light" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark" type="button">{Left}</button>
                                            <button className="btn btn-dark" type="button">{Middle}</button>
                                            <button className="btn btn-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{EdgesButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-primary" type="button">{Left}</button>
                                            <button className="btn btn-primary" type="button">{Middle}</button>
                                            <button className="btn btn-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-secondary" type="button">{Left}</button>
                                            <button className="btn btn-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-success" type="button">{Left}</button>
                                            <button className="btn btn-success" type="button">{Middle}</button>
                                            <button className="btn btn-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-info" type="button">{Left}</button>
                                            <button className="btn btn-info" type="button">{Middle}</button>
                                            <button className="btn btn-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-warning" type="button">{Left}</button>
                                            <button className="btn btn-warning" type="button">{Middle}</button>
                                            <button className="btn btn-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-danger" type="button">{Left}</button>
                                            <button className="btn btn-danger" type="button">{Middle}</button>
                                            <button className="btn btn-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-light" type="button">{Left}</button>
                                            <button className="btn btn-light" type="button">{Middle}</button>
                                            <button className="btn btn-light" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark" type="button">{Left}</button>
                                            <button className="btn btn-dark" type="button">{Middle}</button>
                                            <button className="btn btn-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{FlatButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-primary" type="button">{Left}</button>
                                            <button className="btn btn-primary" type="button">{Middle}</button>
                                            <button className="btn btn-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-secondary" type="button">{Left}</button>
                                            <button className="btn btn-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-success" type="button">{Left}</button>
                                            <button className="btn btn-success" type="button">{Middle}</button>
                                            <button className="btn btn-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-info" type="button">{Left}</button>
                                            <button className="btn btn-info" type="button">{Middle}</button>
                                            <button className="btn btn-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark" type="button">{Left}</button>
                                            <button className="btn btn-dark" type="button">{Middle}</button>
                                            <button className="btn btn-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-warning" type="button">{Left}</button>
                                            <button className="btn btn-warning" type="button">{Middle}</button>
                                            <button className="btn btn-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-danger" type="button">{Left}</button>
                                            <button className="btn btn-danger" type="button">{Middle}</button>
                                            <button className="btn btn-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-light" type="button">{Left}</button>
                                            <button className="btn btn-light" type="button">{Middle}</button>
                                            <button className="btn btn-light" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark" type="button">{Left}</button>
                                            <button className="btn btn-dark" type="button">{Middle}</button>
                                            <button className="btn btn-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LargeButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-primary btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-primary btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-primary btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-secondary btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-secondary btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-secondary btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-success btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-success btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-success btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-info btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-info btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-info btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-warning btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-warning btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-warning btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-danger btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-danger btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-danger btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-light btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-light btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-light btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-dark btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-dark btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LargeEdgesButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-primary btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-primary btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-primary btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-secondary btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-secondary btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-secondary btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-success btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-success btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-success btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-info btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-info btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-info btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-warning btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-warning btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-warning btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-danger btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-danger btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-danger btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-light btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-light btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-light btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark btn-lg" type="button">{Left}</button>
                                            <button className="btn btn-dark btn-lg" type="button">{Middle}</button>
                                            <button className="btn btn-dark btn-lg" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{OutlineCustomButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-primary" type="button">{Left}</button>
                                            <button className="btn btn-primary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-secondary" type="button">{Left}</button>
                                            <button className="btn btn-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-success" type="button">{Left}</button>
                                            <button className="btn btn-success" type="button">{Middle}</button>
                                            <button className="btn btn-outline-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-info" type="button">{Left}</button>
                                            <button className="btn btn-info" type="button">{Middle}</button>
                                            <button className="btn btn-outline-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-warning" type="button">{Left}</button>
                                            <button className="btn btn-warning" type="button">{Middle}</button>
                                            <button className="btn btn-outline-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-danger" type="button">{Left}</button>
                                            <button className="btn btn-danger" type="button">{Middle}</button>
                                            <button className="btn btn-outline-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-light txt-dark" type="button">{Left}</button>
                                            <button className="btn btn-light" type="button">{Middle}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-dark" type="button">{Left}</button>
                                            <button className="btn btn-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{OutlineCustomButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-primary" type="button">{Left}</button>
                                            <button className="btn btn-outline-primary" type="button">{Middle}</button>
                                            <button className="btn btn-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-secondary" type="button">{Left}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-success" type="button">{Left}</button>
                                            <button className="btn btn-outline-success" type="button">{Middle}</button>
                                            <button className="btn btn-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-info" type="button">{Left}</button>
                                            <button className="btn btn-outline-info" type="button">{Middle}</button>
                                            <button className="btn btn-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-warning" type="button">{Left}</button>
                                            <button className="btn btn-outline-warning" type="button">{Middle}</button>
                                            <button className="btn btn-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-danger" type="button">{Left}</button>
                                            <button className="btn btn-outline-danger" type="button">{Middle}</button>
                                            <button className="btn btn-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-light" type="button">{Left}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Middle}</button>
                                            <button className="btn btn-light" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-dark" type="button">{Middle}</button>
                                            <button className="btn btn-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{OutlineButtonGroup}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-primary" type="button">{Left}</button>
                                            <button className="btn btn-outline-primary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-secondary" type="button">{Left}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-success" type="button">{Left}</button>
                                            <button className="btn btn-outline-success" type="button">{Middle}</button>
                                            <button className="btn btn-outline-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-info" type="button">{Left}</button>
                                            <button className="btn btn-outline-info" type="button">{Middle}</button>
                                            <button className="btn btn-outline-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-warning" type="button">{Left}</button>
                                            <button className="btn btn-outline-warning" type="button">{Middle}</button>
                                            <button className="btn btn-outline-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-danger" type="button">{Left}</button>
                                            <button className="btn btn-outline-danger" type="button">{Middle}</button>
                                            <button className="btn btn-outline-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-light txt-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{OutlineEdgesButton}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-primary" type="button">{Left}</button>
                                            <button className="btn btn-outline-primary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-secondary" type="button">{Left}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-success" type="button">{Left}</button>
                                            <button className="btn btn-outline-success" type="button">{Middle}</button>
                                            <button className="btn btn-outline-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-info" type="button">{Left}</button>
                                            <button className="btn btn-outline-info" type="button">{Middle}</button>
                                            <button className="btn btn-outline-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-warning" type="button">{Left}</button>
                                            <button className="btn btn-outline-warning" type="button">{Middle}</button>
                                            <button className="btn btn-outline-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-danger" type="button">{Left}</button>
                                            <button className="btn btn-outline-danger" type="button">{Middle}</button>
                                            <button className="btn btn-outline-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-light txt-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-pill" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{OutlineFlatButton}</h5>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-primary" type="button">{Left}</button>
                                            <button className="btn btn-outline-primary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-primary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-secondary" type="button">{Left}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Middle}</button>
                                            <button className="btn btn-outline-secondary" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-success" type="button">{Left}</button>
                                            <button className="btn btn-outline-success" type="button">{Middle}</button>
                                            <button className="btn btn-outline-success" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-info" type="button">{Left}</button>
                                            <button className="btn btn-outline-info" type="button">{Middle}</button>
                                            <button className="btn btn-outline-info" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-warning" type="button">{Left}</button>
                                            <button className="btn btn-outline-warning" type="button">{Middle}</button>
                                            <button className="btn btn-outline-warning" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-danger" type="button">{Left}</button>
                                            <button className="btn btn-outline-danger" type="button">{Middle}</button>
                                            <button className="btn btn-outline-danger" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-light txt-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-light txt-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-group-square" role="group" aria-label="Basic example">
                                            <button className="btn btn-outline-dark" type="button">{Left}</button>
                                            <button className="btn btn-outline-dark" type="button">{Middle}</button>
                                            <button className="btn btn-outline-dark" type="button">{Right}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{RadioButtonGroup}</h5><span>{Add} <code>{".active"}</code> {"for active state and"}<code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute"}</span>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-primary">
                                                    <div className="radio radio-primary">
                                                        <input id="radio7" type="radio" name="radio1" value="option1" />
                                                        <label htmlFor="radio7">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-primary active">
                                                    <div className="radio radio-primary">
                                                        <input id="radio8" type="radio" name="radio1" value="option1" defaultChecked/>
                                                        <label htmlFor="radio8">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-secondary">
                                                    <div className="radio radio-secondary">
                                                        <input id="radio11" type="radio" name="radio2" value="option1" />
                                                        <label htmlFor="radio11">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-secondary active">
                                                    <div className="radio radio-secondary">
                                                        <input id="radio12" type="radio" name="radio2" value="option1" defaultChecked/>
                                                        <label htmlFor="radio12">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-success">
                                                    <div className="radio radio-success">
                                                        <input id="radio13" type="radio" name="radio3" value="option1" />
                                                        <label htmlFor="radio13">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-success active">
                                                    <div className="radio radio-success">
                                                        <input id="radio14" type="radio" name="radio3" value="option1" defaultChecked/>
                                                        <label htmlFor="radio14">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-info">
                                                    <div className="radio radio-info">
                                                        <input id="radio15" type="radio" name="radio4" value="option1" />
                                                        <label htmlFor="radio15">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-info active">
                                                    <div className="radio radio-info">
                                                        <input id="radio16" type="radio" name="radio4" value="option1" defaultChecked/>
                                                        <label htmlFor="radio16">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-warning">
                                                    <div className="radio radio-warning">
                                                        <input id="radio17" type="radio" name="radio5" value="option1" />
                                                        <label htmlFor="radio17">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-warning active">
                                                    <div className="radio radio-warning">
                                                        <input id="radio18" type="radio" name="radio5" value="option1" defaultChecked/>
                                                        <label htmlFor="radio18">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-danger">
                                                    <div className="radio radio-danger">
                                                        <input id="radio20" type="radio" name="radio6" value="option1" />
                                                        <label htmlFor="radio20">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-danger active">
                                                    <div className="radio radio-danger">
                                                        <input id="radio22" type="radio" name="radio6" value="option1" defaultChecked/>
                                                        <label htmlFor="radio22">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-radio">
                                            <div className="btn-group" data-toggle="buttons">
                                                <div className="btn btn-light txt-dark">
                                                    <div className="radio radio-light">
                                                        <input id="radio23" type="radio" name="radio7" value="option1" />
                                                        <label htmlFor="radio23">{"Option 1"}</label>
                                                    </div>
                                                </div>
                                                <div className="btn btn-light active txt-dark">
                                                    <div className="radio radio-light">
                                                        <input id="radio24" type="radio" name="radio7" value="option1" defaultChecked/>
                                                        <label htmlFor="radio24">{"Option 2"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{CheckBoxButtonGroup}</h5><span>{Add} <code>{".active"}</code> {"for active state and"} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> attribute</span>
                            </div>
                            <div className="card-body btn-group-showcase">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-primary">
                                                <div className="checkbox checkbox-primary">
                                                    <input id="checkbox-primary-1" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-1">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-primary">
                                                <div className="checkbox checkbox-primary">
                                                    <input id="checkbox-primary-2" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-2">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-secondary">
                                                <div className="checkbox checkbox-secondary">
                                                    <input id="checkbox-primary-3" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-3">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-secondary">
                                                <div className="checkbox checkbox-secondary">
                                                    <input id="checkbox-primary-4" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-4">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-success">
                                                <div className="checkbox checkbox-success">
                                                    <input id="checkbox-primary-5" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-5">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-success">
                                                <div className="checkbox checkbox-success">
                                                    <input id="checkbox-primary-6" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-6">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-info">
                                                <div className="checkbox checkbox-info">
                                                    <input id="checkbox-primary-7" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-7">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-info">
                                                <div className="checkbox checkbox-info">
                                                    <input id="checkbox-primary-8" type="checkbox" />
                                                    <label htmlFor="checkbox-primary-8">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-warning">
                                                <div className="checkbox checkbox-warning">
                                                    <input id="checkbox-warning-9" type="checkbox" />
                                                    <label htmlFor="checkbox-warning-9">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-warning">
                                                <div className="checkbox checkbox-warning">
                                                    <input id="checkbox-warning-10" type="checkbox" />
                                                    <label htmlFor="checkbox-warning-10">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-danger">
                                                <div className="checkbox checkbox-danger">
                                                    <input id="checkbox-danger-11" type="checkbox" />
                                                    <label htmlFor="checkbox-danger-11">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-danger">
                                                <div className="checkbox checkbox-danger">
                                                    <input id="checkbox-danger-12" type="checkbox" />
                                                    <label htmlFor="checkbox-danger-12">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <div className="btn btn-light txt-dark">
                                                <div className="checkbox checkbox-light">
                                                    <input id="checkbox-light-13" type="checkbox" />
                                                    <label htmlFor="checkbox-light-13">{"Option 1"}</label>
                                                </div>
                                            </div>
                                            <div className="btn btn-light txt-dark">
                                                <div className="checkbox checkbox-light">
                                                    <input id="checkbox-light-14" type="checkbox" />
                                                    <label htmlFor="checkbox-light-14">{"Option 2"}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>{Nesting}</h5><span>{"Make nesting buttons"}</span>
                            </div>
                            <div className="card-body btn-group-wrapper">
                                <div className="m-b-30">
                                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                        <Button color='primary'><i className="fa fa-bold"></i></Button>
                                        <Button color='secondary'><i className="fa fa fa-italic"></i></Button>
                                        <UncontrolledDropdown>
                                            <DropdownToggle color='light'>
                                                {"Dropdown"}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>{Header}</DropdownItem>
                                                <DropdownItem disabled>{Action}</DropdownItem>
                                                <DropdownItem>{AnotherAction}</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>{AnotherAction}</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                                <div className="m-b-30">
                                    <div className="btn-group">
                                        <button className="btn btn-primary"><i className="fa fa-bold"></i></button>
                                        <button className="btn btn-secondary"><i className="fa fa fa-italic"></i></button>
                                        <button className="btn btn-success"><i className="fa fa-file-image-o"></i></button>
                                        <button className="btn btn-info"><i className="fa fa-paperclip"></i></button>
                                    </div>
                                </div>
                                <div className="m-b-30">
                                    <div className="btn-group">
                                        <button className="btn btn-primary btn-lg"><i className="fa fa-bold"></i></button>
                                        <button className="btn btn-secondary btn-lg"><i className="fa fa fa-italic"></i></button>
                                        <button className="btn btn-success btn-lg"><i className="fa fa-file-image-o"></i></button>
                                        <button className="btn btn-info btn-lg"><i className="fa fa-paperclip"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>{Vertical}</h5><span>{"Make vertical buttons"}</span>
                            </div>
                            <div className="card-body btn-group-wrapper">
                                <ButtonGroup vertical >
                                    <Button color='primary' type="button">{"Button"}</Button>
                                    <Button color='secondary' type="button" className="b-r-0">{"Button"}</Button>
                                    <UncontrolledDropdown>
                                        <DropdownToggle color='success' caret className="b-r-0">
                                            {"Button Dropdown"}
                                            </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>{AnotherAction}</DropdownItem>
                                            <DropdownItem>{AnotherAction}</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <Button color='info' type="button" className="b-r-0">{"Button"}</Button>
                                    <Button color='warning' type="button" className="b-r-0">{"Button"}</Button>
                                    <UncontrolledDropdown>
                                        <DropdownToggle color='danger' caret>
                                            {"Button Dropdown"}
                                            </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>{AnotherAction}</DropdownItem>
                                            <DropdownItem>{AnotherAction}</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default GroupBtn;