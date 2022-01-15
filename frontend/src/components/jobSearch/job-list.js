import React, { Fragment,useState,useEffect } from 'react';
import JobFilter from './job-filter';
import Breadcrumb from '../common/breadcrumb'
import axios from 'axios'

const JobList = () => {

    const [JobData,setJobData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/jobSearch.json`).then(res => setJobData(res.data))
    },[])
    
    return (
        <Fragment>
            <Breadcrumb title="List View" parent="Job Search" />
            <div className="container-fluid">
                <div className="row">
                    <JobFilter />
                    <div className="col-xl-9 xl-60" >
                        {JobData.map((data, i) => {
                            return (
                                <div className={`card ${data.badgeValue ? '' : 'ribbon-vertical-left-wrapper'}`} key={i}>
                                    <div className="job-search">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="img-40 img-fluid m-r-20" src={require(`../../assets/images/${data.logo}`)} alt="" />
                                                <div className="media-body">
                                                    <h6 className="f-w-600"><a href="#javascript">{data.job_name}</a>
                                                        {(data.badgeType === 'primary' ? <span className="badge badge-primary pull-right">{data.badgeValue}</span>
                                                            : <span className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                                                                <i className="icofont icofont-love">{data.badgeValue}</i>
                                                            </span>
                                                        )}
                                                    </h6>
                                                    <p>{data.job_area}, {data.job_city}
                                                        <span>
                                                            <i className="fa fa-star font-warning"></i>
                                                            <i className="fa fa-star font-warning"></i>
                                                            <i className="fa fa-star font-warning"></i>
                                                            <i className="fa fa-star font-warning"></i>
                                                            <i className="fa fa-star font-warning"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p>
                                                {`We are looking for an experienced and creative designer and/or frontend engineer with expertise in accessibility to join our team ,
                                                3+ years of experience working in as a Frontend Engineer or comparable role. You won’t be a team of one though — you’ll be collaborating closely with other...`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default JobList;