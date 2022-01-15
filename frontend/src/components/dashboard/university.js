import React, { useState, Fragment, useEffect } from 'react';
import ChartistGraph from 'react-chartist';
import { earningData, earningOptions, staticChartData, staticChartOptions, yearChartData, yearChartOptions, admissionChartData, admissionChartOptions, htmlChartData, htmlChartOptions, phpChartData, phpChartOptions } from '../../data/default'
import { Command, Navigation, DollarSign, HelpCircle, Mic, Zap } from 'react-feather';
import math from '../../assets/images/university/math-1.jpg'
import math2 from '../../assets/images/university/math-2.jpg';
import bio1 from '../../assets/images/university/bio-1.jpg';
import bio2 from '../../assets/images/university/bio-2.jpg';
import four from '../../assets/images/user/4.jpg';
import two from '../../assets/images/user/2.png';
import chart3 from '../../assets/images/university/chart-3.png'
import five from '../../assets/images/user/5.jpg';
import chart4 from '../../assets/images/university/chart-4.png';
import round from '../../assets/images/university/round.png';
import chart2 from '../../assets/images/university/chart-2.png';
import chart1 from '../../assets/images/university/chart-1.png';
import { Line } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import Breadcrumb from '../common/breadcrumb';
import CountUp from 'react-countup';
import {UniversityEarning,Monthly,Yearly,Average,Maximum,Minimum,TotalAdmission,TotalUniversityVisit,HtmlCourse,PHPCourse,MathProfessors,Elanhormas,BioProfessors,EranaSiddy,Director,Tomkerrly,DemoContent,QuizCompition,SingingCompition,Lusonketer,DiwaliCelebration,RankerRatio,Student,Statistics,OurTopperList,OssimKeter,PhoneNumber,Rank,TotalMarks,FranLoain,VenterLoren,LoftenHoren,Notifications,TotalStudent,AdmissionRatio} from '../../constant'

var Knob = require('knob')// browserify require
var primary = localStorage.getItem('primary_color') || '#4466f2';

const University = props => {
    const [date, setDate] = useState({
        date: new Date(),
    });

    useEffect(() => {

        var ranker = Knob({
            value: 25,
            angleOffset: -125,
            angleArc: 250,
            className: "review",
            lineCap: "round",
            thickness: 0.2,
            width: 295,
            height: 295,
            fgColor: primary
        })
        document.getElementById('ranker').appendChild(ranker);
        var student = Knob({
            value: 85,
            angleOffset: 80,
            angleArc: 360,
            className: "review",
            lineCap: "round",
            thickness: 0.1,
            width: 180,
            height: 180,
            fgColor: '#fff',
            bgColor: primary
        })
        document.getElementById('student').appendChild(student)

    }, []);

    const onChange = date => setDate({ date });
    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="University" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 xl-100">
                        <div className="card" data-intro="This is University Earning Chart">
                            <div className="card-header university-header">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>{UniversityEarning}</h5>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="pull-right d-flex buttons-right">
                                            <div className="right-header">
                                                <div className="onhover-dropdown">
                                                    <button className="btn btn-primary" type="button">{Monthly} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div right-header-dropdown"><a className="d-block" href="#javascript">{Average}</a><a className="d-block" href="#javascript">{Maximum}</a><a className="d-block" href="#javascript">{Minimum}</a></div>
                                                </div>
                                            </div>
                                            <div className="right-header">
                                                <div className="onhover-dropdown">
                                                    <button className="btn btn-light" type="button">{Yearly} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div right-header-dropdown"><a className="d-block" href="#javascript">{Average}</a><a className="d-block" href="#javascript">{Maximum}</a><a className="d-block" href="#javascript">{Minimum}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body height-curves">
                                <div className="curves-2">
                                    <div className="animate-curve ct-golden-section" >
                                        <ChartistGraph data={earningData} options={earningOptions} type={'Line'} />
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
                                        <div className="media feather-main">
                                            <div className="feather-icon-block">
                                                <Command />
                                            </div>
                                            <div className="media-body align-self-center">
                                                <h6>{TotalAdmission}</h6>
                                                <p>{"5678"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media feather-main">
                                            <div className="feather-icon-block">
                                                <Navigation />
                                            </div>
                                            <div className="media-body align-self-center">
                                                <h6>{TotalUniversityVisit}</h6>
                                                <p>{"8569"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media chart-university">
                                            <div className="media-body">
                                                <h3 className="mb-0">
                                                    <DollarSign />
                                                    <span>
                                                        <CountUp className="counter" end={5683} />
                                                    </span>
                                                </h3>
                                                <p>{HtmlCourse}</p>
                                            </div>
                                            <div className="small-bar">
                                                <div className="ct-small-left flot-chart-container">
                                                    <ChartistGraph data={htmlChartData} options={htmlChartOptions} listener={{
                                                        "draw": function (data) {
                                                            if (data.type === 'bar') {
                                                                data.element.attr({
                                                                    style: 'stroke-width: 2px'
                                                                });
                                                            }
                                                        }
                                                    }} type={'Bar'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media chart-university">
                                            <div className="media-body">
                                                <h3 className="mb-0">
                                                    <DollarSign />
                                                    <span className="counter">
                                                        <CountUp end={7243} />
                                                    </span></h3>
                                                <p>{PHPCourse}</p>
                                            </div>
                                            <div className="small-bar">
                                                <div className="ct-small-right flot-chart-container">
                                                    <ChartistGraph data={phpChartData} options={phpChartOptions} type={'Bar'} listener={{
                                                        "draw": function (data) {
                                                            if (data.type === 'bar') {
                                                                data.element.attr({
                                                                    style: 'stroke-width: 2px'
                                                                });
                                                            }
                                                        }
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{MathProfessors}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive professor-table">
                                            <table className="table table-bordernone">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img className="img-radius img-35 align-top m-r-15 rounded-circle" src={math} alt="" />
                                                            <div className="professor-block d-inline-block">{Lusonketer}
                                                                    <p>{MathProfessors}</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <label className="pull-right mb-0" >
                                                                <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img className="img-radius img-25 align-top m-r-15 rounded-circle" src={math2} alt="" />
                                                            <div className="professor-block d-inline-block">{Elanhormas}
                                                                    <p>{BioProfessors}</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <label className="pull-right mb-0" >
                                                                <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" defaultChecked />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{BioProfessors}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive professor-table">
                                            <table className="table table-bordernone">
                                                <tbody>
                                                    <tr>
                                                        <td><img className="img-radius img-25 align-top m-r-15 rounded-circle" src={bio1} alt="" />
                                                            <div className="professor-block d-inline-block">{EranaSiddy}
                                                                     <p>{Director}</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <label className="pull-right mb-0" >
                                                                <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani2" defaultChecked />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img className="img-radius img-35 align-top m-r-15 rounded-circle" src={bio2} alt="" />
                                                            <div className="professor-block d-inline-block">{Tomkerrly}
                                                                     <p>{Director}</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <label className="pull-right mb-0" >
                                                                <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani2" />
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Upcoming Event</h5>
                            </div>
                            <div className="card-body">
                                <div className="upcoming-event">
                                    <div className="upcoming-innner media">
                                        <div className="bg-primary left m-r-20">
                                            <HelpCircle />
                                        </div>
                                        <div className="media-body">
                                            <p className="mb-0">{DemoContent} <span className="pull-right">{"Mar 18"}</span></p>
                                            <h6 className="f-w-600">{QuizCompition}</h6>
                                            <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum"}</p>
                                        </div>
                                    </div>
                                    <div className="upcoming-innner media">
                                        <div className="bg-primary left m-r-20">
                                            <Mic />
                                        </div>
                                        <div className="media-body">
                                            <p className="mb-0">{DemoContent} <span className="pull-right">{"Sep 18"}</span></p>
                                            <h6 className="f-w-600">{SingingCompition}</h6>
                                            <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum"}</p>
                                        </div>
                                    </div>
                                    <div className="upcoming-innner media">
                                        <div className="bg-primary left m-r-20">
                                            <Zap />
                                        </div>
                                        <div className="media-body">
                                            <p className="mb-0">{DemoContent} <span className="pull-right">{"Dec 18"}</span></p>
                                            <h6 className="f-w-600">{DiwaliCelebration}</h6>
                                            <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50">
                        <div className="card height-equal" data-intro="This is Ranker Ratio">
                            <div className="card-header">
                                <h5>{RankerRatio}</h5>
                            </div>
                            <div className="card-body">
                                <div className="knob-block text-center knob-sm">
                                    <div className="knob" id="ranker">
                                    </div>
                                </div>
                                <div className="ranker text-center">
                                    <h6>{Student}</h6>
                                    <h5 className="mb-0">{"New Ranker 2018"}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-100">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>{Notifications}</h5>
                            </div>
                            <div className="card-body">
                                <div className="notifiaction-media">
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="circle-left"></div>
                                            <h6>{"You are confirmation visit.."}<span className="pull-right f-12">{"1 Day Ago"}</span></h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="circle-left"></div>
                                            <h6>{"Lorem Ipsum has been the.."}<span className="pull-right f-12">{"5 Day Ago"}</span></h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="circle-left"></div>
                                            <h6>{"Standard dummy text ever.."}<span className="pull-right f-12">{"7 Day Ago"}</span></h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="circle-left"></div>
                                            <h6>{"When an unknown printer.."}<span className="pull-right f-12">{"9 Day Ago"}</span></h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="circle-left"></div>
                                            <h6>{"Took a gallery of type.."}<span className="pull-right f-12">{"6 Day Ago"}</span></h6>
                                        </div>
                                    </div>
                                    <div className="media mb-0">
                                        <div className="media-body">
                                            <div className="circle-left"></div>
                                            <h6>{"Scrambled it to make a type.."}<span className="pull-right f-12">{"2 Day Ago"}</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer btn-more text-center"><a href="#javascript">{"MORE..."}</a></div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>{Statistics}</h5>
                                        <button className="btn btn-primary btn-sm header-btn btn-pill">{"2017"}</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="pull-right statistics">
                                            <h5 className="counter">
                                                <CountUp end={85} />
                                            </h5>
                                            <p className="f-12 mb-0">{"Statistics 2017"}</p>
                                            <div className="font-primary font-weight-bold d-flex f-11 pull-right">
                                                <i className="fa fa-sort-up mr-2"></i>
                                                <span className="number">
                                                    <span className="counter">
                                                        <CountUp end={100} />
                                                    </span>{"%"}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="curves-2">
                                    <div className="animate-curve2 ct-golden-section">
                                        <ChartistGraph data={staticChartData} options={staticChartOptions} type={'Line'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>{"Last 5 Year Board"}</h5>
                                        <p className="f-12 header-small mb-0">{"18 september, 2018"}</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="pull-right statistics">
                                            <h5 className="counter"><CountUp end={50} /></h5>
                                            <p className="f-12 mb-0">{"Board 2018"}</p>
                                            <div className="font-primary font-weight-bold d-flex f-11 pull-right">
                                                <i className="fa fa-sort-up mr-2"></i><span className="number">
                                                    <span className="counter"><CountUp end={78} /></span>{"%"}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="board-chart ct-golden-section">
                                    <ChartistGraph data={yearChartData} options={yearChartOptions} type={'Bar'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 xl-50">
                        <div className="card" data-intro="This is Our Topper List">
                            <div className="card-header">
                                <h5>{OurTopperList}</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive topper-lists">
                                    <table className="table table-bordernone">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-inline-block align-self-center">
                                                        <div className="form-group d-inline-block">
                                                            <div className="checkbox">
                                                                <input id="checkbox1" type="checkbox" />
                                                                <label ></label>
                                                            </div>
                                                        </div>
                                                        <img className="img-radius img-40 align-top m-r-15 rounded-circle" src={four} alt="" />
                                                        <div className="d-inline-block"><span className="f-w-600">{OssimKeter}</span>
                                                            <p>{"1"}<sup>{"st"}</sup> {"year"}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"+48 605 562 215"}</span>
                                                        <p>{PhoneNumber}</p>
                                                    </div>
                                                </td>
                                                <td><img className="align-top" src={chart1} alt="" /></td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">1</span>
                                                        <p>{Rank}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"590/600"}</span>
                                                        <p>{TotalMarks}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-inline-block align-self-center">
                                                        <div className="form-group d-inline-block">
                                                            <div className="checkbox">
                                                                <input id="checkbox2" type="checkbox" defaultChecked />
                                                                <label ></label>
                                                            </div>
                                                        </div>
                                                        <img className="img-radius img-40 align-top m-r-15 rounded-circle" src={math} alt="" />
                                                        <div className="check-dot d-inline-block"></div>
                                                        <div className="d-inline-block">
                                                            <span className="f-w-600">{VenterLoren}</span>
                                                            <p>{"1"}<sup>{"st"}</sup> {"year"}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"+25 598 559 368"}</span>
                                                        <p>{PhoneNumber}</p>
                                                    </div>
                                                </td>
                                                <td><img className="align-top" src={chart2} alt="" /></td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"2"}</span>
                                                        <p>{Rank}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"570/600"}</span>
                                                        <p>{TotalMarks}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-inline-block align-self-center">
                                                        <div className="form-group d-inline-block">
                                                            <div className="checkbox">
                                                                <input id="checkbox3" type="checkbox" />
                                                                <label></label>
                                                            </div>
                                                        </div><img className="img-radius img-40 align-top m-r-15 rounded-circle" src={two} alt="" />
                                                        <div className="d-inline-block"><span className="f-w-600">{FranLoain}</span>
                                                            <p>{"1"}<sup>{"st"}</sup> {"year"}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"+65 659 145 235"}</span>
                                                        <p>{PhoneNumber}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="align-top" src={chart3} alt="" />
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center">
                                                        <span className="f-w-600">{"3"}</span>
                                                        <p>{Rank}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center">
                                                        <span className="f-w-600">{"565/600"}</span>
                                                        <p>{TotalMarks}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-inline-block align-self-center">
                                                        <div className="form-group d-inline-block">
                                                            <div className="checkbox">
                                                                <input id="checkbox4" type="checkbox" />
                                                                <label ></label>
                                                            </div>
                                                        </div>
                                                        <img className="img-radius img-40 align-top m-r-15 rounded-circle" src={five} alt="" />
                                                        <div className="d-inline-block"><span className="f-w-600">{LoftenHoren}</span>
                                                            <p>{"1"}<sup>{"st"}</sup> {"year"}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center"><span className="f-w-600">{"+37 595 367 368"}</span>
                                                        <p>{PhoneNumber}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img className="align-top" src={chart4} alt="" />
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center">
                                                        <span className="f-w-600">{"4"}</span>
                                                        <p>{Rank}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-center">
                                                        <span className="f-w-600">{"540/600"}</span>
                                                        <p>{TotalMarks}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 xl-50">
                        <div className="card card-gradient">
                            <div className="card-body text-center o-hidden">
                                <div className="knob-header">
                                    <h5>{TotalStudent}</h5>
                                    <div className="d-inline-block pull-right f-16">{"120 /"} <span>{"130"}</span></div>
                                </div>
                                <div className="knob-block text-center knob-center university-knob">
                                    <div className="knob" id="student">
                                    </div>
                                </div>
                                <img className="round-image" src={round} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 xl-50">
                        <div className="card" data-intro="This is Date picker">
                            <div className="datepicker-here date-picker-university" data-language="en">
                                <Calendar onChange={onChange} defaultValue={date} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 xl-50">
                        <div className="card">
                            <div className="card-header">
                                <h5>{AdmissionRatio}</h5>
                            </div>
                            <div className="card-body chart-block admission-chart">
                                <Line data={admissionChartData} options={admissionChartOptions} />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default University;