import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { ExtraLargeTables,LargeTable,SmallTable,ExtraSmallTable,DefaultTable } from "../../../constant";

const SizingTable = () => {
    return (
        <Fragment>
              <Breadcrumb title="Sizing tables" parent="Bootstrap tables" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ExtraLargeTables}</h5><span>{"Example of Extra large table, Add"} <code>{".table-xl"}</code> {"class to the"} <code>{".table"}</code> {"to create a table with extra large spacing. Extra larger table all rows have"} <code>{"1.25rem"}</code> {"height."}</span>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-xl">
                                    <thead>
                                        <tr>
                                            <th>{"#"}</th>
                                            <th>{"First Name"}</th>
                                            <th>{"Last Name"}</th>
                                            <th>{"Username"}</th>
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
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LargeTable}</h5><span>{"Example of large table, Add"} <code>{".table-lg"}</code>{"class to the"} <code>{".table"}</code>{"to create a table with large spacing. larger table all rows have"} <code>{"0.9rem"}</code> {"height."}</span>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-lg">
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First"}</th>
                                            <th scope="col">{"Last"}</th>
                                            <th scope="col">{"Handle"}</th>
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
                                            <td colSpan="2">{"Larry the Bird"}</td>
                                            <td>{"@twitter"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{DefaultTable}</h5><span>{"Example of large table, Add"} <code>{".table-de"}</code>{"class to the"} <code>{".table"}</code>{"to create a table with large spacing. larger table all rows have"} <code>{"0.75rem"}</code> {"height."}</span>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-de">
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First"}</th>
                                            <th scope="col">{"Last"}</th>
                                            <th scope="col">{"Handle"}</th>
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
                                            <td colSpan="2">{"Larry the Bird"}</td>
                                            <td>{"@twitter"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SmallTable}</h5><span>{"Example of small table, Add"} <code>{".table-sm"}</code> {"class to the"} <code>{".table"}</code> {"to create a table with small spacing. Small table all rows have"} <code>{"0.3rem"}</code> {"height"}</span>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First"}</th>
                                            <th scope="col">{"Last"}</th>
                                            <th scope="col">{"Handle"}</th>
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
                                            <td colSpan="2">{"Larry the Bird"}</td>
                                            <td>{"@twitter"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ExtraSmallTable}</h5><span>{"Example of small table, Add"} <code>{".table-xs"}</code> {"class to the"} <code>{".table"}</code> {"to create a table with extra small spacing. Small table all rows have"} <code>{"1.5rem"}</code> {"height"}</span>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-xs">
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First"}</th>
                                            <th scope="col">{"Last"}</th>
                                            <th scope="col">{"Handle"}</th>
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
                                            <td colSpan="2">{"Larry the Bird"}</td>
                                            <td>{"@twitter"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SizingTable;