import React, { Fragment ,useState ,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import JobFilter from './job-filter';
import one from '../../assets/images/job-search/1.jpg';
import two from '../../assets/images/job-search/6.jpg';
import {JobDescription,Qualifications,AgencyExperience,Perks,Share,SimilarJobs,SeniorUXDesigner} from "../../constant";
import axios from 'axios'

const JobDetail = (props) => {

    const location = props.location
    const id = location.state?location.state.id:1
    const [singleData, setSingleData] = useState('');
    const [JobData,setJobData] = useState([])
    

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/jobSearch.json`).then(res => {
            setJobData(res.data)
            res.data.filter((data) => {
                if (data.Id === id) {
                    setSingleData(data)
                }
                return 0;
            })
        }) 
    }, [id]);

    const jobApply = (data) => {
        const id = data.Id
        props.history.push(`${process.env.PUBLIC_URL}/jobSearch/job-apply`,{id});
    }

    return (
        <Fragment>
            <Breadcrumb title="job Details" parent="Job Search" />
            <div className="container-fluid">
                <div className="row">
                    <JobFilter />
                    <div className="col-xl-9 xl-60">
                        <div className="card">
                            <div className="job-search">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="img-40 img-fluid m-r-20" src={one} alt="" />
                                        <div className="media-body">
                                            <h6 className="f-w-600">
                                                <a href="#javascript">{singleData.job_name}</a>
                                                <span className="pull-right">
                                                    <button className="btn btn-primary" type="button" onClick={() => jobApply(singleData)}>{"Apply for this job"}</button></span></h6>
                                            <p>{singleData.job_area} - {singleData.job_city}
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
                                    <div className="job-description">
                                        <h6>{JobDescription}</h6>
                                        <p>{"Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team."}</p>
                                    </div>
                                    <div className="job-description">
                                        <h6>{Qualifications} </h6>
                                        <ul>
                                            <li>{"Have shipped multiple iOS, Android, and/or web products"} </li>
                                            <li>{"5+ years UI/UX experience"}</li>
                                            <li>{"Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"}</li>
                                            <li>{"Ability to autonomously pursue elegant solutions to open-ended problems"}</li>
                                            <li>{"Comfort with ambiguity"}</li>
                                            <li>{"Proven ability to create interactive prototypes"}</li>
                                            <li>{"Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"}</li>
                                            <li>{"Strong written communication skills with ability to make transparent design documentation and client-facing presentations"}</li>
                                            <li>{"Ability to create and maintain flow charts, wire frames, prototypes, and mockups."}</li>
                                            <li>{"Ability to effectively work on more than one project at a time"}</li>
                                            <li>{"Experience conducting user research and stakeholder interviews"}</li>
                                            <li>{"Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."}</li>
                                            <li>{"Bonus Considerations "}</li>
                                        </ul>
                                    </div>
                                    <div className="job-description">
                                        <h6>{AgencyExperience}</h6>
                                        <ul>
                                            <li>{"Experience working with Agile development teams"}</li>
                                            <li>{"Experience with RITE method usability testing"}</li>
                                            <li>{"Experience in visual and motion design; ability to translate UX design into high quality visuals"}</li>
                                            <li>{"Mastery of Sketch & InVision"}</li>
                                            <li>{"Knowledge of mobile or front-end web programming"}</li>
                                        </ul>
                                    </div>
                                    <div className="job-description">
                                        <h6>{Perks}</h6>
                                        <ul>
                                            <li>{"Competitive pay"}</li>
                                            <li>{"Competitive medical, dental, and vision insurance plans"}</li>
                                            <li>{"Company-provided 401(k) plan"}</li>
                                            <li>{"Paid vacation and sick time"}</li>
                                            <li>{"Free snacks and beverages"}</li>
                                        </ul>
                                    </div>
                                    <div className="job-description">
                                        <button className="btn btn-primary mr-1" type="button"><span><i className="fa fa-check"></i></span> {"Save this job"}</button>
                                        <button className="btn btn-primary" type="button"><span><i className="fa fa-share-alt"></i></span> {Share}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-faq">
                            <h6 className="mb-0 f-w-600">{SimilarJobs}</h6>
                        </div>
                        <div className="row">
                            {JobData.slice(0, 4).map((data, i) => {
                                return (
                                    <div className="col-xl-6 xl-100" key={i}>
                                        <div className="card">
                                            <div className="job-search">
                                                <div className="card-body">
                                                    <div className="media">
                                                        <img className="img-40 img-fluid m-r-20" src={require(`../../assets/images/${data.logo}`)} alt="" />
                                                        <div className="media-body">
                                                            <h6 className="f-w-600"><a href="#javascript">{data.job_name}</a>
                                                                {(data.badgeType === 'primary' ? <span className="badge badge-primary pull-right">{data.badgeValue}</span>
                                                                    : ''
                                                                )}
                                                            </h6>
                                                            <p>{data.job_area} <span>{data.job_city}</span>
                                                                <span>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning-o"></i>
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
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="job-search">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="img-40 img-fluid m-r-20" src={two} alt="" />
                                                <div className="media-body">
                                                    <h6 className="f-w-600"><a href="#javascript">{SeniorUXDesigner}</a><span className="pull-right">{"5 days ago"}</span></h6>
                                                    <p>{"Sutherland"} <span>{"Lelystad, Netherlands"} </span><span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-half-o"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                                </div>
                                            </div>
                                            <p>{"Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no."}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default JobDetail;