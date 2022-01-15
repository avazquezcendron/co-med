import React, { Fragment, useState,useEffect } from 'react';
import * as feather from 'feather-icons';
import Breadcrumb from '../common/breadcrumb';
import IconMarkUp from './icon-markup';
import axios from 'axios'
import {Feather,Icons} from "../../constant";

const FeatherIcons = () => {

    const [data,setData] = useState([])
    const [iTag, setiTag] = useState('');
    const [feathericon, setfeatherIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/featherData.json`).then(res => setData(res.data))
    },[])

    const getItag = (tag) => {
        setiTag({
            iTag: '<i data-feather="' + tag + '"></i>',
        })
        setfeatherIcon({
            feathericon : tag
        })
    }
    return (
        <Fragment>
            <Breadcrumb title="Feather" parent="Icons" />

            <div className="container-fluid">
                {
                    data.map((icons, index) => {
                        return (
                            <div className="row" key={index} >
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{Feather}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists feather-icons">
                                                {
                                                    icons.feather_icons.map((icon, i) => {
                                                    return (
                                                        <div className="col-12 col-sm-6 col-xl-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <div className="media">
                                                            <div dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg(icon) }} />
                                                                <div className="media-body align-self-center">
                                                                    <h6 className="mt-0">{icon}</h6>
                                                                </div>
                                                            </div>
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
            <IconMarkUp itag={iTag} icons={feathericon} /> 
        </Fragment>
    );
};

export default FeatherIcons;