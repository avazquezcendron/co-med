import React ,{useEffect, useState , useRef, Fragment} from 'react';
import { CloudDrizzle, Navigation, Users, DollarSign, Tag, Calendar, ShoppingBag, MessageCircle, MinusCircle, ThumbsUp, MessageSquare, Briefcase, MoreHorizontal, Send, Activity, Anchor, Compass, Cpu, Slack, Umbrella, Box, Book } from 'react-feather';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ChartistGraph from 'react-chartist';
import { translate } from 'react-switch-lang';
import EventCharts from './eventCharts';
import { Chart } from "react-google-charts";
import CountUp from 'react-countup';
import { useSelector, useDispatch } from 'react-redux';


import Breadcrumb from '../../common/breadcrumb';
import { calcultionOptions, calcultionData } from '../../../data/default'
import configDB from '../../../data/customizer/config';
import Todo from '../../applications/todo-app/todo'
import {New,NewSale,NewMessage,NewVisits,TotalProfit,AllCustomIncome,All,TotalInvestment,TotalReview,CustomerReview,Change,Online,MarshiKisteen,Dashboard,Ui,Xi,Message,Portfolio,NewUser,Month,Today,NickStone,Follow,WiltorNoice,NewReport,TotalFeedback,MilanoEsco,AnnaStrong,RecentNotification,Order,Download, Trash,ByKan,ByKaint,ByTailer,ByWaiter,ByComman,Calculation,TotalIncome,TotalLoss,Conversations,View,Media,Search,SellingUpdate,Shipping,Purchase,TotalSell,Feedback,ByCall,Activitys} from '../../../constant'
import {
  patientGetAllWatcher,
  patientsInitialize,
} from '../../../redux/patients/actions';
import {
    getAppointmentsWatcher,
  } from '../../../redux/appointments/actions';

var Knob = require('knob')// browserify require
var primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;

const Default = (props) => {
    const { patients } = useSelector((store) => store.Patients);
    const { appointments } = useSelector((store) => store.Appointments);
    const dispatch = useDispatch();
    
    const pageSize = 6;
    const pagesCount = Math.ceil(20 / pageSize);
    
    const [currentPage, setCurrentPage] = useState(0);
    
    const handlePatientsClick = (today) => {
        props.history.push(`${process.env.PUBLIC_URL}/patient${today ? '?filter=today' : ''}`)
    }

    const handleAppointmentsClick = (filter) => {
        props.history.push(`${process.env.PUBLIC_URL}/agenda/appointments${filter ? '?filter='+filter : ''}`)
    }

    const handleAgendaPaginationClick = (e, index) => {
    
        e.preventDefault();

        setCurrentPage(index);
    
    }
    
    const month = [props.t("January"), props.t("February"), props.t("March"), props.t("April"), props.t("May"), props.t("June"), props.t("July"), props.t("August"), props.t("September"),  props.t("October"), props.t("November"), props.t("December")];
    
    const [date, setDate] = useState(new Date());
    const dateRef = useRef(null);

    useEffect(() => {
        dispatch(patientGetAllWatcher());
        dispatch(getAppointmentsWatcher());
        return () => {
          dispatch(patientsInitialize());
        };
      }, []);

    useEffect(() => {
        clearInterval(dateRef.current);
        dateRef.current = setInterval(() =>setDate(new Date()), 1000);
        return () => clearInterval(dateRef.current);
      }, [date]);
    
    useEffect(() => {
        var appointmentsAvailablesToday = Knob({
            label: '%',
            labelColor: primary,
            value: 15,
            left: 1,
            angleOffset: 0,
            className: "review",
            thickness: 0.1,
            width: 70,
            height: 70,
            fgColor: primary,
            readOnly: true,
            dynamicDraw: false,
            tickColorizeValues: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:true
        })
        document.getElementById('appAvailToday').appendChild(appointmentsAvailablesToday);

        var appointmentsAvailablesMonth = Knob({
            label: '%',
            labelColor: primary,
            value: 60,
            left: 1,
            angleOffset: 0,
            className: "review",
            thickness: 0.1,
            width: 70,
            height: 70,
            fgColor: primary,
            readOnly: true,
            dynamicDraw: false,
            tickColorizeValues: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:true
        })
        document.getElementById('appAvailMonth').appendChild(appointmentsAvailablesMonth);
    },[]);
    return (
        <Fragment>
            <Breadcrumb title="Dashboard" />
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-xl-3 col-lg-6">
                            <div className="card o-hidden">
                                <div className="bg-primary b-r-4 card-body toggle-data" onClick={() => handlePatientsClick(false)}>
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <i className="icofont icofont-doctor-alt"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Patients') + ' Totales'}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={patients.length} />
                                        </h4>
                                        <Users className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-xl-3 col-lg-6">
                            <div className="card o-hidden">
                                <div className="bg-primary b-r-4 card-body toggle-data" onClick={() => handleAppointmentsClick('patients')}>
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <i className="icofont icofont-doctor-alt"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Patients') + ' para atender hoy'}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={15} />
                                        </h4>
                                        <Users className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-6 col-xl-3 col-lg-6">
                            <div className="card o-hidden">
                                <div className="bg-primary b-r-4 card-body toggle-data" onClick={() => handleAppointmentsClick()}>
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <Calendar />
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Appointments') + ' Totales'}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={appointments.length} />
                                        </h4>
                                        <Calendar className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-6 col-xl-3 col-lg-6">
                            <div className="card o-hidden">
                                <div className="bg-primary b-r-4 card-body toggle-data" onClick={() => handleAppointmentsClick('todayAppointments')}>
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <Navigation />
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Appointments') + ' para hoy'}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={30} />
                                        </h4>
                                        <Calendar className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cal-date-widget card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="cal-info text-center">
                                                <h2>{date.getDate()}</h2>
                                                <div className="d-inline-block mt-2">
                                                    <span className="b-r-dark pr-3">{month[date.getMonth()]}</span><span className="pl-3">{date.getFullYear()}</span>
                                                </div>
                                                <div><p className="mt-4 f-16 text-muted"><i className="fa fa-clock-o"></i> {date.toLocaleTimeString()}</p></div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 xl-100">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="number-widgets">
                                                <div className="media">
                                                    <div className="media-body align-self-center">
                                                        <h6 className="mb-0">{props.t('AppointmentsAvailable') + ' (hoy)'}</h6>
                                                    </div>
                                                    <div className="knob-block text-center">
                                                        <div className="knob" id="appAvailToday">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="number-widgets">
                                                <div className="media">
                                                    <div className="media-body align-self-center">
                                                        <h6 className="mb-0">{props.t('Turnos Disponibles (resto del mes)')}</h6>
                                                    </div>
                                                    <div className="knob-block text-center">
                                                        <div className="knob" id="appAvailMonth">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{'Pacientes por género'}</h5>
                                        </div>
                                        <div className="card-body p-0">
                                            <Chart
                                                width={'100%'}
                                                height={'192px'}
                                                chartType="PieChart"
                                                loader={<div>{"Cargando..."}</div>}
                                                data={[
                                                    ['Género', 'Porcentaje'],
                                                    ['Masculino', 41],
                                                    ['Femenino', 33],
                                                    ['Otro', 26],
                                                ]}
                                                options={{
                                                    title: '',
                                                    colors: ["#4466f2", "#1ea6ec", "#fa9f40", "#31af47", "#4466f2"],
                                                    sliceVisibilityThreshold: 0.2, // 20%
                                                }}
                                                rootProps={{ 'data-testid': '7' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-md-6">
                                    <div className="card">
                                    <div className="card-header">
                                            <h5>{'Pacientes por edad'}</h5>
                                        </div>
                                        <div className="card-body p-0">
                                            <Chart
                                                width={'100%'}
                                                height={'192px'}
                                                chartType="PieChart"
                                                loader={<div>{"Cargando"}</div>}
                                                data={[
                                                    ['Rango Etáreo', 'Cantidad de Pacientes'],
                                                    ['0-10', 20],
                                                    ['11-20', 25],
                                                    ['21-40', 30],
                                                    ['+40', 80]
                                                ]}
                                                options={{
                                                    title: '',
                                                    colors: ["#4466f2", "#1ea6ec", "#22af47", "#fa9f40", "#f85370"],
                                                    // Just add this option
                                                    pieHole: 0.4,
                                                }}
                                                rootProps={{ 'data-testid': '3' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="col-xl-4 col-md-6 xl-50">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{TotalProfit}</h5><span className="d-block fonts-dashboard">{AllCustomIncome}</span>
                                </div>
                                <div className="card-body">
                                    <div className="knob-block text-center">
                                        <div className="knob" id="profit">
                                        </div>
                                    </div>
                                    <div className="show-value d-flex">
                                        <div className="value-left">
                                            <div className="square bg-primary d-inline-block"></div><span>{TotalProfit}</span>
                                        </div>
                                        <div className="value-right">
                                            <div className="square bg-light d-inline-block"></div><span>{TotalInvestment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-xl-6">
                            <div className="card height-equal">
                                <div className="card-header card-header-border">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h5>{props.t('Agenda')}</h5>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="select2-drpdwn-project select-options">
                                                <select className="form-control form-control-primary btn-square" name="select">
                                                    <option value="opt1">{props.t("Today")}</option>
                                                    <option value="opt2">{props.t("Yesterday")}</option>
                                                    <option value="opt3">{props.t("Tomorrow")}</option>
                                                    <option value="opt4">{props.t("ThisMonth")}</option>
                                                    <option value="opt5">{props.t("ThisWeek")}</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-5">
                                            <div className="pull-right right-header">
                                                <div className="onhover-dropdown">
                                                    <button className="btn btn-primary btn-pill" type="button">{All} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div right-header-dropdown"><a className="d-block" href="#javascript">{Order}</a><a className="d-block" href="#javascript">{Download}</a><a className="d-block" href="#javascript">{Trash}</a></div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>                                
                                <div className="card-body recent-notification">
                                    <div className="media">
                                        <h6>{"09:00"}</h6>
                                        <div className="media-body"><span>{"Lorem ipsum dolor sit amit,consectetur eiusmdd."}</span>
                                            <p className="f-12">{ByKan}</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <h6>{"10:50"}</h6>
                                        <div className="media-body"><span>{"Lorem ipsum."}</span>
                                            <p className="f-12">{ByTailer}</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <h6>{"01:00"}</h6>
                                        <div className="media-body"><span>{"Lorem ipsum dolor sit amit,consectetur eiusmdd."}</span>
                                            <p className="f-12">{ByKaint}</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <h6>{"05:00"}</h6>
                                        <div className="media-body"><span>{"Lorem ipsum dolor sit amit."}</span>
                                            <p className="f-12">{ByCall}</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <h6>{"12:00"}</h6>
                                        <div className="media-body"><span>{"Lorem ipsum dolor sit."}</span>
                                            <p className="f-12">{ByWaiter}</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <h6>{"08:20"}</h6>
                                        <div className="media-body"><span>{"Lorem ipsum dolor sit amit,consectetur eiusmdd dolor sit amit."}</span>
                                            <p className="f-12">{ByComman}</p>
                                        </div>
                                    </div>
                                    <Pagination aria-label="Agenda Pagination" className="pagination justify-content-center pagination-primary">
                                        <PaginationItem disabled={currentPage <= 0}>
                                            <PaginationLink first href="#javascript" onClick={e => handleAgendaPaginationClick(e, 0)}/>
                                        </PaginationItem>
                                        <PaginationItem disabled={currentPage <= 0}>
                                            <PaginationLink previous href="#javascript" onClick={e => handleAgendaPaginationClick(e, currentPage - 1)}/>
                                        </PaginationItem>
                                        {[...Array(pagesCount)].map((page, i) => 
                                            <PaginationItem active={i === currentPage} key={i}>
                                                <PaginationLink onClick={e => handleAgendaPaginationClick(e, i)} href="#">
                                                {i + 1}
                                                </PaginationLink>
                                            </PaginationItem>
                                        )}
                                        <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                            <PaginationLink next href="#javascript" onClick={e => handleAgendaPaginationClick(e, currentPage + 1)}/>
                                        </PaginationItem>
                                        <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                            <PaginationLink last href="#javascript" onClick={e => handleAgendaPaginationClick(e, pagesCount - 1)}/>
                                        </PaginationItem>
                                    </Pagination>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 xl-50">
                            <Todo />
                        </div>
                        
                        {/* <div className="col-xl-8 xl-100">
                            <div className="row">
                                <EventCharts />
                            </div>
                        </div> */}
                        {/* <div className="col-xl-4 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{Activitys}</h5>
                                </div>
                                <div className="card-body activity-scroll">
                                    <div className="activity">
                                        <div className="media">
                                            <div className="gradient-round m-r-30 gradient-line-1">
                                                <ShoppingBag />
                                            </div>
                                            <div className="media-body">
                                                <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="gradient-round m-r-30 gradient-line-1">
                                                <MessageCircle />
                                            </div>
                                            <div className="media-body">
                                                <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="gradient-round m-r-30 small-line">
                                                <MinusCircle />
                                            </div>
                                            <div className="media-body">
                                                <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p className="activity-xl">{"Lorem Ipsum is simply dummy text."}</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="gradient-round m-r-30 gradient-line-1">
                                                <ShoppingBag />
                                            </div>
                                            <div className="media-body">
                                                <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="gradient-round m-r-30 medium-line">
                                                <Tag />
                                            </div>
                                            <div className="media-body">
                                                <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                        
                        {/* <div className="col-xl-4 xl-50 col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body progress-media">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h5>{TotalReview}</h5><span className="mb-0 d-block">{CustomerReview}</span>
                                                </div>
                                                <ThumbsUp />
                                            </div>
                                            <div className="progress-bar-showcase">
                                                <div className="progress sm-progress-bar">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress-change"><span>{Change}</span><span className="pull-right">{"95%"}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body progress-media">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h5>{TotalFeedback}</h5><span className="mb-0 d-block">{Feedback}</span>
                                                </div>
                                                <MessageCircle />
                                            </div>
                                            <div className="progress-bar-showcase">
                                                <div className="progress sm-progress-bar">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress-change"><span>{Change}</span><span className="pull-right">{"85%"}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 xl-100 col-md-12">
                            <div className="card user-card">
                                <div className="card-body">
                                    <div className="online-user">
                                        <h5 className="font-primary f-18 mb-0">{Online}</h5>
                                    </div>
                                    <div className="user-card-image">
                                        <img className="img-fluid rounded-circle image-radius" src={require('../../../assets/images/dashboard/designer.jpg')} alt="" />
                                    </div>
                                    <div className="user-deatils text-center">
                                        <h5>{MarshiKisteen}</h5>
                                        <h6 className="mb-0">{"marshikisteen@gmail.com"}</h6>
                                    </div>
                                    <div className="user-badge text-center">
                                        <a className="badge badge-pill badge-light" href="#javascript">{Dashboard}</a>
                                        <a className="badge badge-pill badge-light" href="#javascript">{Ui}</a>
                                        <a className="badge badge-pill badge-light" href="#javascript">{Xi}</a>
                                        <a href="#javascript">
                                            <span className="badge badge-pill badge-light active">{"2+"}</span>
                                        </a>
                                    </div>
                                    <div className="card-footer row pb-0 text-center">
                                        <div className="col-6">
                                            <div className="d-flex user-footer">
                                                <MessageSquare className="m-r-10" />
                                                <h6 className="f-18 mb-0">{Message}</h6>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex user-footer">
                                                <Briefcase className="m-r-10" />
                                                <h6 className="f-18 mb-0">{Portfolio}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card height-equal">
                                <div className="card-header card-header-border">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5>{NewUser}</h5>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pull-right right-header"><span>{Month}</span><span>
                                                <button className="btn btn-primary btn-pill">{Today}</button></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="new-users">
                                        <div className="media">
                                            <img className="rounded-circle image-radius m-r-15" src={require('../../../assets/images/user/2.png')} alt="" />
                                            <div className="media-body">
                                                <h6 className="mb-0 f-w-700">{NickStone}</h6>
                                                <p>{"Visual Designer, Github Inc"}</p>
                                            </div><span className="pull-right">
                                                <button className="btn btn-pill btn-outline-light">{Follow}</button></span>
                                        </div>
                                        <div className="media">
                                            <img className="rounded-circle image-radius m-r-15" src={require('../../../assets/images/user/5.jpg')} alt="" />
                                            <div className="media-body">
                                                <h6 className="mb-0 f-w-700">{MilanoEsco}</h6>
                                                <p>{"Visual Designer, Github Inc"}</p>
                                            </div><span className="pull-right">
                                                <button className="btn btn-pill btn-outline-light">{Follow}</button></span>
                                        </div>
                                        <div className="media"><img className="rounded-circle image-radius m-r-15" src={require('../../../assets/images/user/3.jpg')} alt="" />
                                            <div className="media-body">
                                                <h6 className="mb-0 f-w-700">{WiltorNoice}</h6>
                                                <p>{"Visual Designer, Github Inc"}</p>
                                            </div><span className="pull-right">
                                                <button className="btn btn-pill btn-outline-light">{Follow}</button></span>
                                        </div>
                                        <div className="media mb-0"><img className="rounded-circle image-radius m-r-15" src={require('../../../assets/images/user/4.jpg')} alt="" />
                                            <div className="media-body">
                                                <h6 className="mb-0 f-w-700">{AnnaStrong}</h6>
                                                <p>{"Visual Designer, Github Inc"}</p>
                                            </div><span className="pull-right">
                                                <button className="btn btn-pill btn-outline-light">{Follow}</button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{Calculation}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="show-value-top d-flex">
                                        <div className="value-left d-inline-block">
                                            <div className="square bg-primary d-inline-block"></div><span>{TotalIncome}</span>
                                        </div>
                                        <div className="value-right d-inline-block">
                                            <div className="square d-inline-block bg-smooth-chart"></div><span>{TotalLoss}</span>
                                        </div>
                                    </div>
                                    <div className="ct-svg">
                                        <ChartistGraph data={calcultionData}
                                         type={'Line'} listener={{
                                            "created": function (data) {
                                                var defs = data.svg.elem('defs');
                                                    defs.elem('linearGradient', {
                                                        id: 'gradient1',
                                                        x1: 0,
                                                        y1: 0,
                                                        x2: 1,
                                                        y2: 1
                                                    }).elem('stop', {
                                                        offset: 0,
                                                        'stop-color': primary
                                                    }).parent().elem('stop', {
                                                        offset: 1,
                                                        'stop-color': primary
                                                    });
                                            }
                                        }} options={calcultionOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 xl-100">
                            <div className="card">
                                <div className="card-header card-header-border chat-header-default">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5>{Conversations}</h5>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="right-header pull-right m-t-5">
                                                <div className="onhover-dropdown">
                                                    <MoreHorizontal />
                                                    <div className="onhover-show-div right-header-dropdown more-dropdown">
                                                        <a className="d-block" href="#javascript">{View}</a>
                                                        <a className="d-block" href="#javascript">{Media}</a>
                                                        <a className="d-block" href="#javascript">{Search}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body chat-box dashboard-chat">
                                    <div className="chat">
                                        <div className="media left-side-chat">
                                            <img className="rounded-circle chat-user-img img-60 m-r-20" src={require('../../../assets/images/user/4.jpg')} alt="" />
                                            <div className="media-body">
                                                <div className="message-main">
                                                    <p className="mb-0">{"Lorem Ipsum is simply dummy text of the"} </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media right-side-chat">
                                            <div className="media-body text-right">
                                                <div className="message-main">
                                                    <p className="pull-right">{"Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's"}</p>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="sub-message message-main">
                                                    <p className="pull-right mb-0">{"Lorem Ipsum is simply dummy text of the"} </p>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                            <img className="rounded-circle chat-user-img img-60 m-l-20" src={require('../../../assets/images/user/5.jpg')} alt="" />
                                        </div>
                                        <div className="media left-side-chat">
                                            <img className="rounded-circle chat-user-img img-60 m-r-20" src={require('../../../assets/images/user/4.jpg')} alt="" />
                                            <div className="media-body">
                                                <div className="message-main">
                                                    <p>{"Lorem Ipsum is simply dummy text of the printing"}</p>
                                                </div>
                                                <div className="sub-message message-main smiley-bg"><img src={require('../../../assets/images/dashboard/smily.png')} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-footer bg-primary">
                                    <i className="icon-face-smile"></i>
                                    <div className="media-body">
                                        <input className="form-control" type="text" placeholder="Type your message" required="" />
                                    </div>
                                    <Send />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 xl-100">
                            <div className="card">
                                <div className="card-header card-header-border">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5 className="align-abjust">{SellingUpdate}</h5>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pull-right right-header">
                                                <div className="onhover-dropdown">
                                                    <button className="btn btn-primary btn-pill" type="button">{All} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div right-header-dropdown"><a className="d-block" href="#javascript">{Shipping}</a><a className="d-block" href="#javascript">{Purchase}</a><a className="d-block" href="#javascript">{TotalSell}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center">
                                                <Activity />
                                                <h5 className="mb-0 f-18">{"+500"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center">
                                                <Anchor />
                                                <h5 className="mb-0 f-18">{"+120"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center">
                                                <Box />
                                                <h5 className="mb-0 f-18">{"-410"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center">
                                                <Book />
                                                <h5 className="mb-0 f-18">{"-155"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center">
                                                <Compass />
                                                <h5 className="mb-0 f-18">{"+920"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center">
                                                <Cpu />
                                                <h5 className="mb-0 f-18">{"+500"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center mb-0 xs-mb-selling">
                                                <DollarSign />
                                                <h5 className="mb-0 f-18">{"+500"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center mb-0 xs-mb-selling">
                                                <Slack />
                                                <h5 className="mb-0 f-18">{"+120"}</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="selling-update text-center mb-0">
                                                <Umbrella />
                                                <h5 className="mb-0 f-18">{"-410"}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

        </Fragment>
    );
};

export default translate(Default);