import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { Mail, Calendar } from 'react-feather';

import Breadcrumb from '../common/breadcrumb';
import ClinicDataConfig from './clinicDataConfig';
import EmailSettings from './emailSettings';
import AppointmentConfigList from './appointmentConfigList';

const GeneralSettings = () => {
  return (
    <Fragment>
      <Breadcrumb title="Configuraciones Generales" parent="Configuración" />
      <div className="container-fluid">
        <div className="row theme-tab">
          <Tabs className="col-sm-12" defaultIndex={0}>
            <TabList className="tabs tab-title">
              <Tab className="current">
                              <i className="icofont icofont-hospital"></i>{' '}
                {'Datos de Co-Comed'}
              </Tab>
              <Tab>
                <Calendar />
                {'Configuración de Turnos'}
              </Tab>
              <Tab>
                <Mail />
                {'Configuración de E-Mails'}
              </Tab>
            </TabList>
            <div className="tab-content-cls">
              <TabPanel>
                <div className="tab-content" id="tab-clinicData">
                  <ClinicDataConfig />
                </div>
              </TabPanel>
              <TabPanel>
              <div className="tab-content" id="tab-Appointments">
                  <AppointmentConfigList />
                </div>
              </TabPanel>
              <TabPanel>
              <div className="tab-content" id="tab-EmailSettings">
                  <EmailSettings />
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};
export default GeneralSettings;
