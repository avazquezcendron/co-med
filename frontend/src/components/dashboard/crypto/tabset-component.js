import React, { Fragment } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { ArrowUp, ArrowDown } from 'react-feather';
import { DatatablesMarket,User,Email,Blog,Chat,Ecommerce } from "../../../constant";
const TabsetComponent = () =>{
        return (
            <Fragment>
                <div className="card-header b-l-primary">
                    <h5>{DatatablesMarket}</h5>
                </div>
                <Tabs>
                    <TabPanel className="market-table table-responsive" id="htc">
                        <div >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">{"Market"}</th>
                                        <th scope="col">{"Price"}</th>
                                        <th scope="col">{"Change"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center">
                                                <ArrowUp className="font-primary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 02157"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.025486854"}</p>
                                        </td>
                                        <td>
                                            <p>{"-05.15%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center">
                                                <ArrowUp className="font-primary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"-18.23%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel className="market-table table-responsive">
                        <div >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">{"Market"}</th>
                                        <th scope="col">{"Price"}</th>
                                        <th scope="col">{"Change"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 02157"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.025486854"}</p>
                                        </td>
                                        <td>
                                            <p>{"-05.15%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center"><ArrowUp className="font-primary" /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"-18.23%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center"><ArrowUp className="font-primary" /></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel className="market-table table-responsive" id="htc">
                        <div >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">{"Market"}</th>
                                        <th scope="col">{"Price"}</th>
                                        <th scope="col">{"Change"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center">
                                                <ArrowUp className="font-primary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 02157"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.025486854"}</p>
                                        </td>
                                        <td>
                                            <p>{"-05.15%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center">
                                                <ArrowUp className="font-primary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"-18.23%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel className="market-table table-responsive">
                        <div >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">{"Market"}</th>
                                        <th scope="col">{"Price"}</th>
                                        <th scope="col">{"Change"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 02157"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.025486854"}</p>
                                        </td>
                                        <td>
                                            <p>{"-05.15%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center"><ArrowUp className="font-primary" /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"-18.23%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center"><ArrowUp className="font-primary" /></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel className="market-table table-responsive">
                        <div >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">{"Market"}</th>
                                        <th scope="col">{"Price"}</th>
                                        <th scope="col">{"Change"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center"><ArrowUp className="font-primary" /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 02157"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.025486854"}</p>
                                        </td>
                                        <td>
                                            <p>{"-05.15%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"+16.23%"}</p>
                                            <div className="text-center"><ArrowUp className="font-primary" /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="font-primary mb-0">{"BTC - 12458"}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0">{"0.002548548"}</p>
                                        </td>
                                        <td>
                                            <p>{"-18.23%"}</p>
                                            <div className="text-center">
                                                <ArrowDown className="font-secondary" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                     <TabList className="nav nav-tabs market-tabs">
                        <Tab className="nav-link">{User}</Tab>
                        <Tab className="nav-link">{Email}</Tab>
                        <Tab className="nav-link">{Blog}</Tab>
                        <Tab className="nav-link">{Chat}</Tab>
                        <Tab className="nav-link">{Ecommerce}</Tab>
                    </TabList>
                </Tabs>
            </Fragment>
        );
}

export default TabsetComponent;