import React, { Fragment, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {Febric,Video,Details,Brand} from '../../../../constant'

const Tabset = () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            <div className="card">
                <div className="row product-page-main m-0">
                    <Nav tabs className="border-tab nav-primary">
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                {Febric}
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                {Video}
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                {Details}
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                {Brand}
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <p className="mb-0 m-t-20">{" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                            <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                        </TabPane>
                        <TabPane tabId="2">
                        <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                                <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                        </TabPane>
                        <TabPane tabId="3">
                        <p className="mb-0 m-t-20">{" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                            <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                        </TabPane>
                        <TabPane tabId="4">
                        <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                                <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    );
}

export default Tabset;