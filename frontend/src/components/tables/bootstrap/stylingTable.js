import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { DefultStyling,TableHeadOptions,TableHeadOptionsPrimaryBackground,TableFooterStyling,CustomTableColorHoverStripped,CustomTableColor } from "../../../constant";


const StylingTable = () => {
    return (
        <Fragment>
              <Breadcrumb title="Styling tables" parent="Bootstrap Tables" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{DefultStyling}</h5><span>{"use class"} <code>{"table table-styling"}</code>   {"inside table element"}</span>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive">
                                        <table className="table table-styling">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{TableHeadOptions}</h5><span>{"Use class"}<code>{".table-primary"}</code> {"inside thead tr element."}</span>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="table-primary">
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{TableHeadOptionsPrimaryBackground}</h5><span>{"Use background classes"}<code>{".bg-*"}</code>{"and"} <code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-success"}</code>,<code>{"table-danger"}</code> ,<code>{'table-info'}</code>,<code>{"table-warning"}</code>  {"to make custom"} <code>{"thead"}</code> {"background. You can also use Stack Admin color palette classes for background."}</span>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="bg-primary">
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="table-success">
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{TableFooterStyling}</h5><span>{"Use class"} <code>{"table-info"}</code>,<code>{"table-success"}</code>,<code>{"table-success"}</code>,<code>{"table-info"}</code>,<code>{"table-danger"}</code>,<code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-light"}</code>,<code>{"table-active"}</code>{"and also use"} <code>{"bg-*"}</code> {"inside tfoot  element."}</span>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive table-border-radius">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="table-success">
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{CustomTableColor}</h5><span>{"Use class"}<code>{"table-*"}</code>{" inside table element."}</span>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive table-border-radius">
                                        <table className="table table-styling table-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{CustomTableColorHoverStripped}</h5><span>{"Use class"}<code>{"table-hover, table-striped table-*"}</code><code>{"table-info"}</code>,<code>{"table-success"}</code>,<code>{"table-success"}</code>,<code>{"table-info"}</code>,<code>{"table-danger"}</code>,<code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-light"}</code>,<code>{"table-active"}</code> {"inside table elemen"}t.</span>
                            </div>
                            <div className="card-block row">
                                <div className="col-sm-12 col-lg-12 col-xl-12">
                                    <div className="table-responsive table-border-radius">
                                        <table className="table table-styling table-hover table-striped table-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default StylingTable;