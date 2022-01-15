import React, { Fragment, useState ,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import JobFilter from './job-filter';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import DatePicker from "react-datepicker";
import one from '../../assets/images/job-search/1.jpg';
import {PersonalDetails,FullName,Email,Position,Password,RepeatPassword,BirthDate,PhoneNumber,YourEducation,YourExperience,CollegeName,Period,DegreeLevel,Specialization,CompanyName,UploadRecommendations,UploadCoverLetter,UploadYourCV,UploadYourFiles,Location,Submit} from "../../constant";
import axios from 'axios'

const JobApply = (props) => {

    const multiple = false;
    const location = props.location;
    const id = location.state?location.state.id:1;
    const [startDate, setStartDate] = useState(new Date(),);
    const [startDate1, setStartDate1] = useState(new Date(),);
    const [startDate2, setStartDate2] = useState(new Date(),);
    const [startDate3, setStartDate3] = useState(new Date(),);
    const [singleData, setSingleData] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/jobSearch.json`).then(res => {
            res.data.filter((data) => {
                if (data.Id === id) {
                    setSingleData(data)
                }
                return 0;
            })
        }) 
    }, [id]);

    
    const handleChange = date => {
       setStartDate(date)
    };

    const handleChange1 = date => {
        setStartDate1(date)
    };

    const handleChange2 = date => {
        setStartDate2(date)
    };

    const handleChange3 = date => {
        setStartDate3(date)
    };

    return (
        <Fragment>
            <Breadcrumb title="Apply" parent="Job Search" />
            <div className="container-fluid">
                <div className="row">
                    <JobFilter />
                    <div className="col-xl-9 xl-60">
                        <div className="card">
                            <div className="job-search">
                                <div className="card-body pb-0">
                                    <div className="media">
                                        <img className="img-40 img-fluid m-r-20" src={one} alt="" />
                                        <div className="media-body">
                                            <h6 className="f-w-600">
                                                <a href="#javascript">{singleData.job_name}</a>
                                                <span className="pull-right">
                                                    <button className="btn btn-primary" type="button"><span><i className="fa fa-check text-white"></i></span> {"Save this job"}</button></span></h6>
                                                <p>{singleData.job_area} && {singleData.job_city}<span>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                </span>
                                                </p>
                                        </div>
                                    </div>
                                    <div className="job-description">
                                        <h6 className="mb-0">{PersonalDetails} </h6>
                                        <form className="form theme-form">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput1">{FullName}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="Enter your full name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput3">{Email}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlInput3" type="email" placeholder="Enter email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlpassword">{Password}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlpassword" type="password" placeholder="Enter password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlpassword1">{RepeatPassword}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlpassword1" type="password" placeholder="Repeat password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="col-form-label pt-0">{BirthDate}</div>
                                                    <div className="form-group">
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                                                            placeholder="Choose a Month..."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group select-no-label">
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']}
                                                            placeholder="date"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group select-no-label">
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={['1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998','1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']}
                                                            placeholder="Year"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput4">{PhoneNumber}:</label>
                                                        <input className="form-control" id="exampleFormControlInput4" type="email" placeholder="Enter Phone no." />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <h6 className="mb-0">{YourEducation}</h6>
                                        <form className="form theme-form">
                                            <div className="row">
                                                <div className="col-xl-6 xl-100">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput5">{CollegeName}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlInput5" type="email" placeholder="Enter college name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 xl-100">
                                                    <label className="col-form-label text-right pt-0">{Period}:<span className="font-danger">{"*"}</span></label>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <DatePicker className="form-control digits" selected={startDate1} onChange={handleChange1} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="col-form-label pt-0">{DegreeLevel}:<span className="font-danger">{"*"}</span></div>
                                                    <div className="form-group">
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={['Student', 'Bachelor', 'Master', 'Associate']}
                                                            placeholder="Degree"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput6">{Specialization}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlInput6" type="email" placeholder="Enter specialization" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <h6 className="mb-0">{YourExperience}</h6>
                                        <form className="form theme-form">
                                            <div className="row">
                                                <div className="col-xl-6 xl-100">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput7">{Location}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlInput7" type="email" placeholder="Enter Location" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 xl-100">
                                                    <label className="col-form-label text-right pt-0">{Period}:<span className="font-danger">{"*"}</span></label>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <DatePicker className="form-control digits" selected={startDate2} onChange={handleChange2} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <DatePicker className="form-control digits" selected={startDate3} onChange={handleChange3} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 xl-100">
                                                    <div className="col-form-label pt-0">{Position}:<span className="font-danger">{"*"}</span></div>
                                                    <div className="form-group">
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={['Web Designer', 'Graphic Designer', 'UI Designer', 'UI/UX Designer']}
                                                            placeholder="Enter Position"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 xl-100">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlInput8">{CompanyName}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" id="exampleFormControlInput8" type="email" placeholder="Enter Company Name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <h6 className="mb-0">{UploadYourFiles}</h6>
                                        <form className="form theme-form">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">{UploadCoverLetter}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">{UploadYourCV}:<span className="font-danger">{"*"}</span></label>
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group mb-0">
                                                        <label className="col-form-label pt-0">{UploadRecommendations}:</label>
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary mr-1" type="submit">{Submit}</button>
                                    <input className="btn btn-light" type="reset" value="Cancel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default JobApply;