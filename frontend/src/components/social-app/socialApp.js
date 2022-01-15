import React, { Fragment, useState } from 'react';
import Breadcrumb from "../common/breadcrumb";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import one from "../../assets/images/user/1.jpg";
import TimelineTab from './timelineTab';
import AboutTab from './aboutTab';
import FriendsTab from './friendsTab';
import ImageDesc from '../gallery/ImageDesc';
import {Timline,Friends,About,Photos,GeneralManager,ELANA} from "../../constant";
const SocialApp = () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            <Breadcrumb title="Social App" parent="Social App" />
            <div className="container-fluid">
                <div className="user-profile social-app-profile">
                    <div className="row">
                        {/* <!-- user profile first-style start--> */}
                        <div className="col-sm-12">
                            <div className="card hovercard text-center">
                                <div className="cardheader socialheader"></div>
                                <div className="user-image">
                                    <div className="avatar"><img alt="user" src={one} /></div>
                                    <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5"></i></div>
                                    <ul className="share-icons">
                                        <li><a className="social-icon bg-primary" href="#javascripts"><i className="fa fa-smile-o"></i></a></li>
                                        <li><a className="social-icon bg-secondary" href="#javascripts"><i className="fa fa-wechat"></i></a></li>
                                        <li><a className="social-icon bg-warning" href="#javascripts"><i className="fa fa-share-alt"></i></a></li>
                                    </ul>
                                </div>
                                <div className="info market-tabs p-0">
                                    <Nav tabs className="tabs-scoial border-tab nav-primary market-tabs">
                                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                            <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                                {Timline}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="nav nav-tabs " id="myTab" role="tablist">
                                            <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                                {About}
                                            </NavLink>
                                        </NavItem>
                                        <li className="nav-item">
                                            <div className="user-designation"></div>
                                            <div className="title"><a href="#javascript">{ELANA}</a></div>
                                            <div className="desc mt-2">{GeneralManager}</div>
                                        </li>
                                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                            <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                                {Friends}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                            <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                                {Photos}
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TabContent activeTab={activeTab} className="tab-content">
                        <TabPane tabId="1">
                            <TimelineTab />
                        </TabPane>
                        <TabPane tabId="2">
                            <AboutTab />
                        </TabPane>
                        <TabPane tabId="3">
                            <FriendsTab />
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <ImageDesc />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </Fragment>
    );
};

export default SocialApp;