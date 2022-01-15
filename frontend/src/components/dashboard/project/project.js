import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { Home, Activity, Users } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import HomeComponent from './home-component';
import BudgetComponent from './budget-component';
import UserComponent from './user-component';
import { Homes,BudgetSummary,TeamMembers } from "../../../constant";

const Project = () => {
        return (
            <Fragment>
                <Breadcrumb title="Project" parent="Dashboard" />
                <div className="container-fluid">
                    <div className="row theme-tab">
                        <Tabs className="col-sm-12">
                            <TabList className="tabs tab-title">
                                <Tab className="current">
                                    <Home />{Homes}
                                </Tab>
                                <Tab>
                                    <Activity />{BudgetSummary}
                                </Tab>
                                <Tab>
                                    <Users />{TeamMembers}
                                </Tab>
                            </TabList>
                            <div className="tab-content-cls">
                                <TabPanel>
                                    <HomeComponent />
                                </TabPanel>
                                <TabPanel>
                                    <BudgetComponent />
                                </TabPanel>
                                <TabPanel >
                                    <UserComponent />
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </Fragment>
        );
}

export default Project;