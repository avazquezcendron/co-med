import React ,{useEffect, useState , Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { CloudDrizzle, Navigation, Users, DollarSign, Tag, Calendar, ShoppingBag, MessageCircle, MinusCircle, ThumbsUp, MessageSquare, Briefcase, MoreHorizontal, Send, Activity, Anchor, Compass, Cpu, Slack, Umbrella, Box, Book } from 'react-feather';
import { calcultionOptions, calcultionData } from '../../../data/default'
import ChartistGraph from 'react-chartist';
import { translate } from 'react-switch-lang';
import EventCharts from './eventCharts';
import { Chart } from "react-google-charts";
import CountUp from 'react-countup';
import configDB from '../../../data/customizer/config';
import Todo from '../../applications/todo-app/todo'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {New,NewSale,NewMessage,NewVisits,TotalProfit,AllCustomIncome,All,TotalInvestment,TotalReview,CustomerReview,Change,Online,MarshiKisteen,Dashboard,Ui,Xi,Message,Portfolio,NewUser,Month,Today,NickStone,Follow,WiltorNoice,NewReport,TotalFeedback,MilanoEsco,AnnaStrong,RecentNotification,Order,Download, Trash,ByKan,ByKaint,ByTailer,ByWaiter,ByComman,Calculation,TotalIncome,TotalLoss,Conversations,View,Media,Search,SellingUpdate,Shipping,Purchase,TotalSell,Feedback,ByCall,Activitys} from '../../../constant'

var Knob = require('knob')// browserify require
var primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;

const Default = (props) => {
    
    const pageSize = 6;
    const pagesCount = Math.ceil(20 / pageSize);
    
    const [currentPage, setCurrentPage] = useState(0);
    

    const handleAgendaPaginationClick = (e, index) => {
    
        e.preventDefault();

        setCurrentPage(index);
    
    }
    
    const month = [props.t("January"), props.t("February"), props.t("March"), props.t("April"), props.t("May"), props.t("June"), props.t("July"), props.t("August"), props.t("September"),  props.t("October"), props.t("November"), props.t("December")];
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
      }, []);
    
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
                                <div className="bg-primary b-r-4 card-body">
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <i className="icofont icofont-doctor-alt"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Doctors')}</span>
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
                                <div className="bg-primary b-r-4 card-body">
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <i className="icofont icofont-doctor-alt"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Patients')}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={150} />
                                        </h4>
                                        <Users className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-6 col-xl-3 col-lg-6">
                            <div className="card o-hidden">
                                <div className="bg-primary b-r-4 card-body">
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <Calendar />
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Appointments')}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={300} />
                                        </h4>
                                        <Calendar className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-sm-6 col-xl-3 col-lg-6">
                            <div className="card o-hidden">
                                <div className="bg-primary b-r-4 card-body">
                                    <div className="media static-top-widget">
                                    <div className="align-self-center text-center">
                                        <Navigation />
                                    </div>
                                    <div className="media-body">
                                        <span className="m-0">{props.t('Visits')}</span>
                                        <h4 className="mb-0 counter">
                                            <CountUp className="counter" end={669} />
                                        </h4>
                                        <Navigation className="icon-bg" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="cal-date-widget card-body">
                                    <div className="row">
                                        <div className="col-xl-6 col-xs-6 col-md-6 col-sm-6">
                                            <div className="cal-info text-center">
                                                <h2>{date.getDate()}</h2>
                                                <div className="d-inline-block mt-2">
                                                    <span className="b-r-dark pr-3">{month[date.getMonth()]}</span><span className="pl-3">{date.getFullYear()}</span>
                                                </div>
                                                <div><p className="mt-4 f-16 text-muted"><i className="fa fa-clock-o"></i> {date.toLocaleTimeString()}</p></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 xl-50 col-sm-6">
                                            <div className="card">
                                            <div className="weather-widget-two">
                                                <div className="card-body">
                                                <div className="media">
                                                    <svg version="1.1" id="sun" class="climacon climacon_sun" viewBox="15 15 70 70"><clipPath id="sunFillClip"><path d="M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z"></path></clipPath><g class="climacon_iconWrap climacon_iconWrap-sun"><g class="climacon_componentWrap climacon_componentWrap-sun"><g class="climacon_componentWrap climacon_componentWrap-sunSpoke"><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east" d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast" d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest" d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west" d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest" d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south" d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"></path><path class="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast" d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"></path></g><g class="climacon_componentWrap climacon_componentWrap_sunBody" clip-path="url(#sunFillClip)"><circle class="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" cx="50.034" cy="50" r="11.999"></circle></g></g></g></svg>
                                                    {/* <!-- cloudDrizzleMoonAlt--> */}
                                                    <div className="media-body align-self-center text-white">
                                                    <h4 className="m-0 f-w-600 num">{"15°C"}</h4>
                                                    <p className="m-0 f-14">{'Mañana'}</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <svg className="climacon climacon_cloudDrizzle" id="cloudDrizzle" version="1.1" viewBox="15 15 70 70">
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"></path>
                                                        </g>
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"></path>
                                                        </g>
                                                    </g>
                                                    </svg>
                                                    {/* <!-- cloudDrizzle--> */}
                                                    <div className="media-body align-self-center text-white">
                                                    <h4 className="m-0 f-w-600 num">{"20°C"}</h4>
                                                    <p className="m-0 f-14">{'Tarde'}</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <svg className="climacon climacon_cloudRainMoon" id="cloudRainMoon" version="1.1" viewBox="15 15 70 70">
                                                    <clippath id="cloudFillClip1">
                                                        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                                                    </clippath>
                                                    <clippath id="moonCloudFillClip1">
                                                        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                                                    </clippath>
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudRainMoon">
                                                        <g clipPath="url(#cloudFillClip1)">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud" clipPath="url(#moonCloudFillClip1)">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                                                        </g>
                                                        </g>
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"></path>
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"></path>
                                                        </g>
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud" clipPath="url(#cloudFillClip1)">
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"></path>
                                                        </g>
                                                    </g>
                                                    </svg>
                                                    {/* <!-- cloudRainMoon--> */}
                                                    <div className="media-body align-self-center text-white">
                                                    <h4 className="m-0 f-w-600 num">{"10°C"}</h4>
                                                    <p className="m-0 f-14">{'Noche'}</p>
                                                    </div>
                                                </div>
                                                <div className="top-bg-whether">
                                                    <svg className="climacon climacon_cloudHailAltFill" id="cloudHailAltFill" version="1.1" viewBox="15 15 70 70">
                                                    <g className="climacon_iconWrap climacon_iconWrap-cloudHailAltFill">
                                                        <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                            <circle cx="42" cy="65.498" r="2"></circle>
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                            <circle cx="49.999" cy="65.498" r="2"></circle>
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                            <circle cx="57.998" cy="65.498" r="2"></circle>
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                                                            <circle cx="42" cy="65.498" r="2"></circle>
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                                                            <circle cx="49.999" cy="65.498" r="2"></circle>
                                                        </g>
                                                        <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                                                            <circle cx="57.998" cy="65.498" r="2"></circle>
                                                        </g>
                                                        </g>
                                                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                                                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                                                        <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                                                        </g>
                                                    </g>
                                                    </svg>
                                                </div>
                                                <div className="bottom-whetherinfo">
                                                    <div className="row">
                                                    <div className="col-6">
                                                        <CloudDrizzle />
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="whether-content"><span>{'Puerto San Julián'}</span>
                                                        <h4 className="num mb-0">{"15°C"}</h4>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 xl-100">
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