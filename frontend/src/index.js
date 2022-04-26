import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux **
import { Provider } from 'react-redux';
import store from './store';
import App from "./components/app";

// Import custom Components 
import Default from './components/dashboard/defaultCompo/default';

// users
import UserProfile from './components/users/userProfile';
import UserList from './components/users/userList';
import DoctorList from './components/doctors/doctorList';
import DoctorProfile from './components/doctors/doctorProfile';
import PatientList from './components/patients/patientList';
import PatientProfile from './components/patients/patientProfile';

//agenda
import Appointments from './components/agenda/appointments';

//catalogues
import DrugList from './components/catalogues/drugList';

import UnlockUser from './pages/unlockUser';
import ComingSoon from './pages/comingsoon';
import ComingSoonImg from './pages/comingsoonImg';
import ComingSoonVideo from './pages/comingsoonVideo';
import Maintenance from './pages/maintenance';
import Error400 from './pages/errors/error400';
import Error401 from './pages/errors/error401';
import Error403 from './pages/errors/error403';
import Error404 from './pages/errors/error404';
import Error500 from './pages/errors/error500';
import Error503 from './pages/errors/error503';

// Import Applications Components
import Todo from './components/applications/todo-app/todo';
import EmailDefault from './components/applications/email-app/emailDefault';
import Chat from './components/applications/chat-app/chat';

import Signin from './auth/signin';

//config data
import configDB from './data/customizer/config'


const Root = () => {

    const abortController = new AbortController();
    const jwt_token = localStorage.getItem('loggedUser');

    useEffect(() => {

        const color = localStorage.getItem('color')
        const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
        document.body.classList.add(layout);
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);

        return function cleanup() {
            abortController.abort();
        }
        
    // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            {/* <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}> */}
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />                            
                            <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} component={UnlockUser} />                           
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} component={ComingSoon} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} component={ComingSoonImg} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} component={ComingSoonVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503} />
                            
                            {jwt_token ?
                            
                                <App>
                                    {/* dashboard menu */}
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                        return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/default`} />)
                                    }} />
                                    <Route path={`${process.env.PUBLIC_URL}/dashboard/default`} component={Default} />
                                    <Route path={`${process.env.PUBLIC_URL}/agenda/appointments`} component={Appointments} />
                                    {/* Users */}
                                    <Route path={`${process.env.PUBLIC_URL}/settings/user/:id`} component={UserProfile} />
                                    <Route exact path={`${process.env.PUBLIC_URL}/settings/user`} component={UserList} />
                                
                                    <Route exact path={`${process.env.PUBLIC_URL}/doctor`} component={DoctorList} />
                                    <Route path={`${process.env.PUBLIC_URL}/doctor/:id`} component={DoctorProfile} />
                                
                                    <Route exact path={`${process.env.PUBLIC_URL}/patient`} component={PatientList} />
                                    <Route path={`${process.env.PUBLIC_URL}/patient/:id`} component={PatientProfile} />

                                    <Route exact path={`${process.env.PUBLIC_URL}/catalogues/drug`} component={DrugList} />

                                    <Route path={`${process.env.PUBLIC_URL}/todo-app/todo`} component={Todo} />
                                    <Route path={`${process.env.PUBLIC_URL}/email-app/emailDefault`} component={EmailDefault} />
                                    <Route path={`${process.env.PUBLIC_URL}/chat-app/chat`} component={Chat} />
                                </App>
                             :
                                <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                            } 
                        </Switch>
                </BrowserRouter>
            </Provider>
            {/* </Auth0Provider> */}
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();