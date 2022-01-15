import React, { Fragment,useEffect,useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import JobFilter from './job-filter';
import axios from 'axios'

const CardView = (props) => {

    const clickApply = (course) => {
        const id = course.Id
        props.history.push(`${process.env.PUBLIC_URL}/jobSearch/job-detail`, { id });
    }

    const [JobData,setJobData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/jobSearch.json`).then(res => setJobData(res.data))
    },[])

    return (
        <Fragment>
            <Breadcrumb title="Cards View" parent="Job Search" />
            <div className="container-fluid">
                <div className="row">
                    <JobFilter />
                    <div className="col-xl-9 xl-60">
                        <div className="row">
                            {JobData.map((data, i) => {
                                return (
                                    <div className="col-xl-6 xl-100" key={i}>
                                        <div className={`card card ${data.badgeValue ? '' : 'ribbon-vertical-left-wrapper'}`}>
                                            <div className="job-search">
                                                <div className="card-body">
                                                    <div className="media">
                                                        <img className="img-40 img-fluid m-r-20" src={require(`../../assets/images/${data.logo}`)} alt="" />
                                                        <div className="media-body">
                                                            <h6 className="f-w-600">
                                                                <a onClick={() => clickApply(data)} href="#javascript">
                                                                    {data.job_name}
                                                                </a>
                                                                {(data.badgeType === 'primary' ?
                                                                    <span className="badge badge-primary pull-right">
                                                                        {data.badgeValue}
                                                                    </span>
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
                                                    <p>{data.Job_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardView;