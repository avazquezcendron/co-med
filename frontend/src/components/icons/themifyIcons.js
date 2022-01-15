import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import IconMarkUp from './icon-markup';
import axios from 'axios'
import {ArrowsDirection,WebApp,Control,TextEditor,Brand,Icons} from "../../constant";

const ThemifyIcons = () => {

    const [data,setData] = useState([])
    const [iTag, setiTag] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/themifyData.json`).then(res => setData(res.data))
    },[])
    
    const getItag = (tag) => {
        setiTag({
            iTag: '<i className= "' + tag + '"></i>',
        })
        setIcon({
            icon : '' + tag + ' fa-5x'
        })
    }
    return (
        <Fragment>
            <Breadcrumb title="Themify" parent="Icons" />

            <div className="container-fluid">
                {
                    data.map((icons, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{ArrowsDirection}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.directional.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{WebApp}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.webapp.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{Control}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.control.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{TextEditor}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.texteditor.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{Brand}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.brand.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <IconMarkUp itag={iTag} icons={icon} />
        </Fragment>
    );
};

export default ThemifyIcons;