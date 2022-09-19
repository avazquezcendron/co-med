import React, { Fragment, useEffect } from 'react';
import { Users, Calendar } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

import Breadcrumb from '../common/breadcrumb';
import InteractiveRooms from './interactiveRooms';
import RoomsStats from './roomsStats';

const HospitalRoomsDashboard = (props) => {
  
  return (
    <Fragment>
      <Breadcrumb title="Salas" parent="Hospital" />
      <div className="container-fluid">
        <div className="row theme-tab">
          <Tabs
            className="col-sm-12"
            defaultIndex={0}
          >
            <TabList className="tabs tab-title">
              <Tab className="current">
                <Calendar />
                {'Salas'}
              </Tab>
              <Tab>
                <Users />
                {'Estadísticas'}
              </Tab>              
            </TabList>            
            <div className="tab-content-cls">              
              <TabPanel>
                <InteractiveRooms history={props.history}/>
              </TabPanel>
              <TabPanel>
                <RoomsStats history={props.history} />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};

export default HospitalRoomsDashboard;
