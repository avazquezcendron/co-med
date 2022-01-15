import React, { Fragment, useState } from 'react';
import { Collapse } from 'reactstrap';
import { Search } from 'react-feather';

const LearningFilter = () => {
    const [isFilter, setIsFilter] = useState(true);
    const [isDesign, setIsDesign] = useState(true);
    const [isDevelopment, setIsDevelopment] = useState(true);
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
                                            data-target="#collapseicon" aria-expanded={isFilter} aria-controls="collapseicon">Find Course</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isFilter}>
                                    <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordion">
                                        <div className="card-body filter-cards-view animate-chk">
                                            <div className="job-filter">
                                                <div className="faq-form">
                                                    <input className="form-control" type="text" placeholder="Search.." />
                                                    <Search className="search-icon"/>
                                                </div>
                                            </div>
                                            <div className="checkbox-animated">
                                                <div className="learning-header"><span className="f-w-600">Categories</span></div>
                                                <label className="d-block" htmlFor="chk-ani">
                                                    <input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                                    Accounting
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani0">
                                                    <input className="checkbox_animated" id="chk-ani0" type="checkbox" />
                                                    Design
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani1">
                                                    <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                                                    Development
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani2">
                                                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                    Management
                                                </label>
                                            </div>
                                            <div className="checkbox-animated mt-0">
                                                <div className="learning-header"><span className="f-w-600">Duration</span></div>
                                                <label className="d-block" htmlFor="chk-ani6">
                                                    <input className="checkbox_animated" id="chk-ani6" type="checkbox" />
                                                    0-50 hours
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani7">
                                                    <input className="checkbox_animated" id="chk-ani7" type="checkbox" />
                                                    50-100 hours
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani8">
                                                    <input className="checkbox_animated" id="chk-ani8" type="checkbox" />
                                                    100+ hours
                                                </label>
                                            </div>
                                            <div className="checkbox-animated mt-0">
                                                <div className="learning-header"><span className="f-w-600">Price</span></div>
                                                <label className="d-block" htmlFor="edo-ani">
                                                    <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked="" />
                                                    All Courses
                                                </label>
                                                <label className="d-block" htmlFor="edo-ani1">
                                                    <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" defaultChecked="" />
                                                    Paid Courses
                                                    </label>
                                                <label className="d-block" htmlFor="edo-ani2">
                                                    <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked="" />
                                                    Free Courses
                                                </label>
                                            </div>
                                            <div className="checkbox-animated mt-0">
                                                <div className="learning-header"><span className="f-w-600">Status</span></div>
                                                <label className="d-block" htmlFor="chk-ani3">
                                                    <input className="checkbox_animated" id="chk-ani3" type="checkbox" />
                                                    Registration
                                                </label>
                                                <label className="d-block" htmlFor="chk-ani4">
                                                    <input className="checkbox_animated" id="chk-ani4" type="checkbox" />
                                                    Progress
                                                    </label>
                                                <label className="d-block" htmlFor="chk-ani5">
                                                    <input className="checkbox_animated" id="chk-ani5" type="checkbox" />
                                                    Completed
                                                    </label>
                                            </div>
                                            <button className="btn btn-primary text-center" type="button">Filter</button>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" onClick={() => setIsDesign(!isDesign)}
                                            data-toggle="collapse" data-target="#collapseicon1" aria-expanded={isDesign} aria-controls="collapseicon1">Categories</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isDesign}>
                                    <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordion">
                                        <div className="categories">
                                            <div className="learning-header"><span className="f-w-600">Design</span></div>
                                            <ul>
                                                <li><a href="#javascript">UI Design </a><span className="badge badge-primary pull-right">28</span></li>
                                                <li><a href="#javascript">UX Design </a><span className="badge badge-primary pull-right">35</span></li>
                                                <li><a href="#javascript">Interface Design </a><span className="badge badge-primary pull-right">17</span></li>
                                                <li><a href="#javascript">User Experience </a><span className="badge badge-primary pull-right">26</span></li>
                                            </ul>
                                        </div>
                                        <div className="categories pt-0">
                                            <div className="learning-header"><span className="f-w-600">Development</span></div>
                                            <ul>
                                                <li><a href="#javascript">Frontend Development</a><span className="badge badge-primary pull-right">48</span></li>
                                                <li><a href="#javascript">Backend Development</a><span className="badge badge-primary pull-right">19</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link pl-0" onClick={() => setIsDevelopment(!isDevelopment)} data-toggle="collapse" data-target="#collapseicon2" aria-expanded="true" aria-controls="collapseicon2">Upcoming Courses</button>
                                    </h5>
                                </div>
                                <Collapse isOpen={isDevelopment}>
                                    <div className="collapse show" id="collapseicon2" aria-labelledby="collapseicon2" data-parent="#accordion">
                                        <div className="upcoming-course card-body">
                                            <div className="media">
                                                <div className="media-body"><span className="f-w-600">UX Development</span><span className="d-block">Course By <a href="#javascript"> Lorem ipsum</a></span><span className="d-block"><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star-half-o font-warning"></i></span></div>
                                                <div>
                                                    <h5 className="mb-0 font-primary">18</h5><span className="d-block">Dec</span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-body"><span className="f-w-600">Business Analyst</span><span className="d-block">Course By <a href="#javascript">Lorem ipsum </a></span><span className="d-block"><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span></div>
                                                <div>
                                                    <h5 className="mb-0 font-primary">28</h5><span className="d-block">Dec</span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-body"><span className="f-w-600">Web Development</span><span className="d-block">Course By <a href="#javascript">Lorem ipsum </a></span><span className="d-block"><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star-o font-warning"></i></span></div>
                                                <div>
                                                    <h5 className="mb-0 font-primary">5</h5><span className="d-block">Jan</span>
                                                </div>
                                            </div>
                                        </div>
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

export default LearningFilter;