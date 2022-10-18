import React, { Fragment, useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Agenda from '../agenda/agenda';
import PatientQuickAdd from '../common/patientQuickAdd';
import AppointmentQuickAddComponent from '../common/appointments/appointmentQuickAdd';

const ThemeCustomizer = () => {
  const configDB = useSelector((content) => content.Customizer.customizer);
  const { loggedUser } = useSelector((store) => store.UserLogin);
  const primary_color = localStorage.getItem('primary_color');
  const secondary_color = localStorage.getItem('secondary_color');
  const layout_version = localStorage.getItem('layout_version');
  const sidebar_type =
    localStorage.getItem('wrapper') || configDB.settings.sidebar.wrapper;
  const body_sidebar_type =
    localStorage.getItem('bodyWrapper') ||
    configDB.settings.sidebar.bodyWrapper;
  const [rightSidebar, setRightSidebar] = useState(false);
  const [activeTab1, setActiveTab1] = useState('1');
  const color = localStorage.getItem('color');
  const mix_layout = configDB.color.mix_layout;
  const [layout_type, setLayout_type] = useState(configDB.settings.layout_type);
  const dispatch = useDispatch();
  const config_primary = configDB.color.primary_color;
  const config_secondary = configDB.color.secondary_color;
  const config_color = configDB.color.color;
  const config_layout_version = configDB.color.layout_version;

  useEffect(() => {
    // TODO: move this code to another component to initiaalize color and layout config.
    dispatch({ type: 'ADD_COSTOMIZER' });

    dispatch({
      type: 'ADD_COLOR',
      payload: {
        color,
        primary_color,
        secondary_color,
        layout_version,
      },
    });

    //set layout_type
    document.body.setAttribute('main-theme-layout', layout_type);
    document.documentElement.dir = layout_type;

    //set sidebar wrapper
    if (sidebar_type === null && body_sidebar_type === null) {
      document.querySelector('.page-wrapper').className =
        'page-wrapper ' + configDB.settings.sidebar.wrapper;
      document.querySelector('.page-body-wrapper').className =
        'page-body-wrapper ' + configDB.settings.sidebar.bodyWrapper;
    } else {
      document.querySelector('.page-wrapper').className =
        'page-wrapper ' + sidebar_type;
      document.querySelector('.page-body-wrapper').className =
        'page-body-wrapper ' + body_sidebar_type;
    }

    //set sidebar setting
    document
      .querySelector('.page-sidebar')
      .setAttribute('sidebar-layout', configDB.settings.sidebar_setting);

    //set colors
    document.body.className = mix_layout;

    if (
      localStorage.getItem('primary_color') == null ||
      localStorage.getItem('secondary_color') == null ||
      localStorage.getItem('color') == null ||
      localStorage.getItem('layout_version') == null
    ) {
      document.documentElement.className = config_color;
      localStorage.setItem('primary_color', config_primary);
      localStorage.setItem('secondary_color', config_secondary);
      localStorage.setItem('color', config_color);
      localStorage.setItem('layout_version', config_layout_version);
      dispatch({
        type: 'ADD_COLOR',
        payload: {
          color: config_color,
          primary_color: config_primary,
          secondary_color: config_secondary,
          layout_version: config_layout_version,
        },
      });
    }

    if (
      sidebar_type === 'compact-wrapper' ||
      configDB.settings.sidebar.wrapper === 'compact-wrapper'
    ) {
      document.querySelector('.compactLogo').className = 'compactLogo show';
    } else {
      document.querySelector('.compactLogo').className = 'compactLogo hide';
    }
    // eslint-disable-next-line
  }, []);

  const openCustomizer = () => {
    if (!rightSidebar) {
      setRightSidebar(!rightSidebar);
      document.querySelector('.customizer-contain').classList.add('open');
      document.querySelector('.customizer-links').classList.add('open');
    }
  };

  const closeCustomizer = () => {
    setRightSidebar(!rightSidebar);
    document.querySelector('.customizer-contain').classList.remove('open');
    document.querySelector('.customizer-links').classList.remove('open');
  };

  const handleNewAppointment = () => {
    openCustomizer();
  };
    
  return (
    <Fragment>
      <div className="customizer-links">
        <div
          className="nav flex-column nac-pills"
          id="c-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <Nav tabs className="tab-list-bottom border-tab-primary">
            <NavItem className="nav nav-tabs" id="myTab" role="tablist">
              <NavLink
                className={activeTab1 === '1' ? 'active' : ''}
                onClick={() => setActiveTab1('1')}
                title="Agenda"
              >
                <div className="settings">
                  <i
                    className="icofont icofont-ui-calendar"
                    onClick={openCustomizer}
                  ></i>
                </div>
              </NavLink>
            </NavItem>
            {(loggedUser.user.isAdmin || loggedUser.user.isReceptionist) && (
              <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                <NavLink
                  className={activeTab1 === '2' ? 'active' : ''}
                  onClick={() => setActiveTab1('2')}
                  title="Nuevo Paciente"
                >
                  <div className="settings color-settings">
                    <i
                      className="icofont icofont-ui-user"
                      onClick={openCustomizer}
                    ></i>
                  </div>
                </NavLink>
              </NavItem>
            )}
            <NavItem className="nav nav-tabs" id="myTab" role="tablist">
              <NavLink
                className={activeTab1 === '3' ? 'active' : ''}
                onClick={() => setActiveTab1('3')}
                title="Nuevo Turno"
              >
                <div className="settings color-settings">
                  <i
                    className="icofont icofont-meeting-add"
                    onClick={handleNewAppointment}
                  ></i>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <div className="customizer-contain">
        <div className="tab-content" id="c-pills-tabContent">
          <div className="customizer-header">
            <i className="icon-close" onClick={closeCustomizer}></i>
            <h5>
              {activeTab1 === '1'
                ? 'Agenda'
                : activeTab1 === '2'
                ? 'Nuevo Paciente'
                : 'Nuevo Turno'}
            </h5>
          </div>
          <div className="customizer-body custom-scrollbar">
            <TabContent activeTab={activeTab1}>
              <TabPane tabId="1">
                {rightSidebar && activeTab1 === '1' && <Agenda />}
              </TabPane>
              {(loggedUser.user.isAdmin || loggedUser.user.isReceptionist) && (
                <TabPane tabId="2">
                  {rightSidebar && activeTab1 === '2' && (
                    <PatientQuickAdd modalToggle={closeCustomizer} />
                  )}
                </TabPane>
              )}
              <TabPane tabId="3">
                {rightSidebar && activeTab1 === '3' && (
                  <AppointmentQuickAddComponent
                    modalToggle={closeCustomizer}
                  />
                )}
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeCustomizer;
