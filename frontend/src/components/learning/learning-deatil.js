import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import LearningFilter from './learning-filter';
import learningOne from '../../assets/images/faq/learning-1.png';
import four from '../../assets/images/blog/4.jpg';
import axios from 'axios'

const LearningDeatil = (props) => {

    const location = props.location
    const id = location.state ? location.state.id : 1
    const [singleData, setSingleData] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/learning.json`).then(res => {
            res.data.filter((data) => {
                if (data.Id === id) {
                    setSingleData(data)
                }
                return 0;
            })
        })
        
    }, [id]);

    return (
        <Fragment>
            <Breadcrumb title="Detail Course" parent="Learning" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 xl-60">
                        <div className="blog-single">
                            <div className="blog-box blog-details">
                                <img className="img-fluid w-100" src={learningOne} alt="blog-main" />
                                <div className="blog-details">
                                    <ul className="blog-social">
                                        <li className="digits">{singleData.date}</li>
                                        <li><i className="icofont icofont-user"></i>John <span>Deo  </span></li>
                                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{singleData.hits}<span>Hits</span></li>
                                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{singleData.comments} Comments</li>
                                    </ul>
                                    <h4>
                                        {singleData.des1}
                                    </h4>
                                </div>
                            </div>
                            <section className="comment-box">
                                <h4>Comment</h4>
                                <hr />
                                <ul>
                                    <li>
                                        <div className="media align-self-center">
                                            <img className="align-self-center" src={singleData ? require("../../assets/images/" +  singleData.student_img) : ""} alt="Generic placeholder" />
                                            <div className="media-body">
                                                <div className="row">
                                                    <div className="col-md-4 xl-100">
                                                        <h6 className="mt-0">{singleData.student_name}<span> ( {singleData.student_designation} )</span></h6>
                                                    </div>
                                                    <div className="col-md-8 xl-100">
                                                        <ul className="comment-social float-left float-md-right learning-comment">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{singleData.hits} Hits</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{singleData.comments} Comments</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>{singleData.student_comment}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <div className="media">
                                                    <img className="align-self-center" src={singleData ? require("../../assets/images/" +  singleData.writer_img) : ""} alt="Generic placeholder" />
                                                    <div className="media-body">
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <h6 className="mt-0">{singleData.writer_name}<span> ( {singleData.student_designation} )</span></h6>
                                                            </div>
                                                        </div>
                                                        <p>{singleData.writer_reply}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <img className="align-self-center" src={four} alt="Generic placeholder" />
                                            <div className="media-body">
                                                <div className="row">
                                                    <div className="col-md-4 xl-100">
                                                        <h6 className="mt-0">John Deo<span> ( Designer )</span></h6>
                                                    </div>
                                                    <div className="col-md-8 xl-100">
                                                        <ul className="comment-social float-left float-md-right learning-comment">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>12 Hits</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>328 Comments</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <LearningFilter />
                </div>
            </div>
        </Fragment>
    );
};

export default LearningDeatil;