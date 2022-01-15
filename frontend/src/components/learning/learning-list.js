import React, { Fragment,useEffect,useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import LearningFilter from './learning-filter';
import axios from 'axios'

const LearningList = (props) => {
    
    const [learnindData,setLearningData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/learning.json`).then(res => setLearningData(res.data))
    },[])

    const clickApply = (course) => {
        const id = course.Id
        props.history.push(`${process.env.PUBLIC_URL}/learning/learning-detail`, { id });
    }

    return (
        <Fragment>
            <Breadcrumb title="Learning List" parent="Learning" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 xl-60">
                        <div className="row">
                            {learnindData.map((data, i) => {
                                return (
                                    <div className="col-xl-4 xl-50 col-sm-6" key={i}>
                                        <div className="card">
                                            <div className="blog-box blog-grid text-center product-box">
                                                <div className="product-img">
                                                    <img className="img-fluid top-radius-blog" src={require('../../assets/images/' + data.img)} alt="" />
                                                    <div className="product-hover">
                                                        <ul>
                                                            <li><i className="icon-link" onClick={() => clickApply(data)}></i></li>
                                                            <li><i className="icon-import"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-details-main">
                                                    <ul className="blog-social">
                                                        <li className="digits">{data.date}</li>
                                                        <li className="digits">by: {data.writer}</li>
                                                        <li className="digits">{data.hits} Hits</li>
                                                    </ul>
                                                    <hr />
                                                    <h6 className="blog-bottom-details">{data.short_description}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <LearningFilter />
                </div>
            </div>
        </Fragment>
    );
};

export default LearningList;