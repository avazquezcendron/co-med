import React, { Fragment, useState } from 'react';
import { Search, MapPin } from 'react-feather';
import { Collapse } from 'reactstrap';
import { Filters,Location,FindJobs,AllLocations,AllJobTitle,Industry,SpecificSkills,AllSkills,JobTitle,AllIndustries } from "../../constant";


const JobFilter = () => {
    const [isFilter, setIsFilter] = useState(true);
    const [location, setLocation] = useState(true);
    const [isJobTitle, setisJobTitle] = useState(true);
    const [isIndustry, setisIndustry] = useState(true);
    const [isSkill, setisSkill] = useState(true);

    return (
        <Fragment>
            <div className="col-xl-3 xl-40">
                <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" data-toggle="collapse" onClick={() => setIsFilter(!isFilter)}
                                            data-target="#collapseicon" aria-expanded={isFilter} aria-controls="collapseicon">{Filters}</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isFilter}>
                                    <div className="card-body filter-cards-view animate-chk">
                                        <div className="job-filter">
                                            <div className="faq-form">
                                                <input className="form-control" type="text" placeholder="Search.." />
                                                <Search className="search-icon" />
                                            </div>
                                        </div>
                                        <div className="job-filter">
                                            <div className="faq-form">
                                                <input className="form-control" type="text" placeholder="location.." />
                                                <MapPin className="search-icon" />
                                            </div>
                                        </div>
                                        <div className="checkbox-animated">
                                            <label className="d-block" htmlFor="chk-ani">
                                                <input className="checkbox_animated" id="chk-ani" type="checkbox" />{"Full-time (8688)"}
                                                    </label>
                                            <label className="d-block" htmlFor="chk-ani1">
                                                <input className="checkbox_animated" id="chk-ani1" type="checkbox" />{"Contract (503)"}
                                                    </label>
                                            <label className="d-block" htmlFor="chk-ani2">
                                                <input className="checkbox_animated" id="chk-ani2" type="checkbox" />{"Part-time (288)"}
                                                    </label>
                                            <label className="d-block" htmlFor="chk-ani3">
                                                <input className="checkbox_animated" id="chk-ani3" type="checkbox" />{"Internship (236)"}
                                                    </label>
                                            <label className="d-block" htmlFor="chk-ani4">
                                                <input className="checkbox_animated" id="chk-ani4" type="checkbox" />{"Temporary (146)"}
                                                    </label>
                                            <label className="d-block" htmlFor="chk-ani5">
                                                <input className="checkbox_animated" id="chk-ani5" type="checkbox" />{"Commission (25)"}
                                                    </label>
                                        </div>
                                        <button className="btn btn-primary text-center" type="button">{FindJobs}</button>
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" data-toggle="collapse" onClick={() => setLocation(!location)}
                                            data-target="#collapseicon1" aria-expanded={location} aria-controls="collapseicon1">{Location}  </button>
                                    </h5>
                                </div>
                                <Collapse isOpen={location}>
                                    <div className="card-body animate-chk">
                                        <div className="location-checkbox">
                                            <label className="d-block" htmlFor="chk-ani6">
                                                <input className="checkbox_animated" id="chk-ani6" type="checkbox" />
                                                {"New York"}<span className="d-block">{"NY (399)"}</span>
                                            </label>
                                            <label className="d-block" htmlFor="chk-ani7">
                                                <input className="checkbox_animated" id="chk-ani7" type="checkbox" />
                                                {"San Francisco"}<span className="d-block">{"CA (252)"}</span>
                                            </label>
                                            <label className="d-block mb-0" htmlFor="chk-ani8">
                                                <input className="checkbox_animated" id="chk-ani8" type="checkbox" />
                                                {"Washington"}<span className="d-block">{"DC (226)"}</span>
                                            </label>
                                            <label className="d-block mb-0" htmlFor="chk-ani9">
                                                <input className="checkbox_animated" id="chk-ani9" type="checkbox" />
                                                {"Seattle"}<span className="d-block">{"WA (242)"}</span>
                                            </label>
                                            <label className="d-block mb-0" htmlFor="chk-ani10">
                                                <input className="checkbox_animated" id="chk-ani10" type="checkbox" />
                                                {"Chicago"}<span className="d-block">{"IL (187)"}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-primary text-center" type="button">{AllLocations}</button>
                                </Collapse>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" onClick={() => setisJobTitle(!isJobTitle)}
                                            data-toggle="collapse" data-target="#collapseicon2" aria-expanded={isJobTitle} aria-controls="collapseicon2">{JobTitle}</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isJobTitle}>
                                    <div className="card-body animate-chk">
                                        <label className="d-block" htmlFor="chk-ani11">
                                            <input className="checkbox_animated" id="chk-ani11" type="checkbox" />
                                            {"UI/Ux designer(25)"}
                                            </label>
                                        <label className="d-block" htmlFor="chk-ani12">
                                            <input className="checkbox_animated" id="chk-ani12" type="checkbox" />
                                            {"Graphic designer(10)"}
                                            </label>
                                        <label className="d-block" htmlFor="chk-ani13">
                                            <input className="checkbox_animated" id="chk-ani13" type="checkbox" />
                                            {"Front end designer(15)"}
                                            </label>
                                        <label className="d-block" htmlFor="chk-ani14">
                                            <input className="checkbox_animated" id="chk-ani14" type="checkbox" />
                                            {"PHP developer(42)"}
                                            </label>
                                        <label className="d-block mb-0" htmlFor="chk-ani15">
                                            <input className="checkbox_animated" id="chk-ani15" type="checkbox" />
                                            {"React Developer(5)"}
                                            </label>
                                    </div>
                                    <button className="btn btn-block btn-primary text-center" type="button">{AllJobTitle}</button>
                                </Collapse>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" onClick={() => setisIndustry(!isIndustry)}
                                            data-toggle="collapse" data-target="#collapseicon3" aria-expanded={isIndustry} aria-controls="collapseicon3">{Industry}</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isIndustry}>
                                    <div className="collapse show" id="collapseicon3" data-parent="#accordion" aria-labelledby="collapseicon3">
                                        <div className="card-body animate-chk">
                                            <label className="d-block" htmlFor="chk-ani16">
                                                <input className="checkbox_animated" id="chk-ani16" type="checkbox" />
                                                {"Computer Software(14)"}
                                                </label>
                                            <label className="d-block" htmlFor="chk-ani17">
                                                <input className="checkbox_animated" id="chk-ani17" type="checkbox" />
                                                {"IT Engineer(10)"}
                                                </label>
                                            <label className="d-block" htmlFor="chk-ani18">
                                                <input className="checkbox_animated" id="chk-ani18" type="checkbox" />
                                                {"Service industry(20)"}
                                                </label>
                                            <label className="d-block" htmlFor="chk-ani19">
                                                <input className="checkbox_animated" id="chk-ani19" type="checkbox" />
                                                {"Accounting(34)"}
                                                </label>
                                            <label className="d-block mb-0" htmlFor="chk-ani20">
                                                <input className="checkbox_animated" id="chk-ani20" type="checkbox" />
                                                {"Financial Services(5)"}
                                                </label>
                                        </div>
                                        <button className="btn btn-block btn-primary text-center" type="button">{AllIndustries}</button>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" onClick={() => setisSkill(!isSkill)}
                                            data-toggle="collapse" data-target="#collapseicon4" aria-expanded={isSkill} aria-controls="collapseicon4">{SpecificSkills}</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isSkill}>
                                    <div className="collapse show" id="collapseicon4" data-parent="#accordion" aria-labelledby="collapseicon4">
                                        <div className="card-body animate-chk">
                                            <label className="d-block" htmlFor="chk-ani21">
                                                <input className="checkbox_animated" id="chk-ani21" type="checkbox" />
                                                {"HTML,scss & sass"}
                                                </label>
                                            <label className="d-block" htmlFor="chk-ani22">
                                                <input className="checkbox_animated" id="chk-ani22" type="checkbox" />
                                                {"Javascript"}
                                                </label>
                                            <label className="d-block" htmlFor="chk-ani23">
                                                <input className="checkbox_animated" id="chk-ani23" type="checkbox" />
                                                {"Node.js"}
                                                </label>
                                            <label className="d-block" htmlFor="chk-ani24">
                                                <input className="checkbox_animated" id="chk-ani24" type="checkbox" />
                                                {"Gulp & Pug"}
                                                </label>
                                            <label className="d-block mb-0" htmlFor="chk-ani25">
                                                <input className="checkbox_animated" id="chk-ani25" type="checkbox" />
                                                {"Angular.js"}
                                                </label>
                                        </div>
                                        <button className="btn btn-block btn-primary text-center" type="button">{AllSkills}</button>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default JobFilter;