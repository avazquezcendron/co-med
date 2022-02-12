import React, { Fragment } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Breadcrumb from '../common/breadcrumb';
import { Users, Calendar } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import Calender from './calender';
import PatientsAgenda from './patientsAgenda';

const Appointments = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const filter = query.get('filter');
  return (
    <Fragment>
      <Breadcrumb title="Turnos" parent="Agenda" />
      <div className="container-fluid">
        <div className="row theme-tab">
          <Tabs
            className="col-sm-12"
            defaultIndex={filter !== 'patients' ? 0 : 1}
          >
            <TabList className="tabs tab-title">
              <Tab className="current">
                <Calendar />
                {'Calendario'}
              </Tab>
              <Tab>
                <Users />
                {'Por Pacientes'}
              </Tab>
            </TabList>
            <div className="tab-content-cls">
              <TabPanel>
                <Calender />
              </TabPanel>
              <TabPanel>
                <PatientsAgenda history={props.history}/>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};

export default Appointments;
