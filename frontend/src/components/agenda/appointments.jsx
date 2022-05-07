import React, { Fragment,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Users, Calendar } from 'react-feather';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { useSelector, useDispatch } from 'react-redux';

import Breadcrumb from '../common/breadcrumb';
import Calender from './calender';
import PatientsAgenda from './patientsAgenda';
import { appointmentsInitialize, getAppointmentsWatcher } from '../../redux/appointments/actions';
import { SUCCEEDED } from '../../redux/statusTypes';

const Appointments = (props) => {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.Appointments);
  
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const filter = query.get('filter');

  useEffect(() => {
    return () => {
      dispatch(appointmentsInitialize());
    };
  }, []);

  useEffect(() => {
    if (status === SUCCEEDED) dispatch(getAppointmentsWatcher());
  }, [status]);

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
                {'Próximos Turnos'}
              </Tab>              
            </TabList>            
            <div className="tab-content-cls">              
              <TabPanel>
                <Calender history={props.history}/>
              </TabPanel>
              <TabPanel>
                <PatientsAgenda history={props.history} />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};

export default Appointments;
