import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb'
import IconMarkUp from './icon-markup';
import axios from 'axios'
import {FlagIcons} from '../../constant'

const FlagIconss = () => {

    const [iTag, setiTag] = useState('');
    const [iconsData, seticonsData] = useState([]);
    const [icon, setIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/flagIconData.json`).then(res => seticonsData(res.data))
    },[])

    const getItag = (tag) => {
        setiTag({
            iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
        })
        setIcon({
            icon: 'flag-icon flag-icon-' + tag + ' fa-5x'
        })
    }
    return (
        <Fragment>
            <Breadcrumb title="Flag Icons" parent="Icons" />

            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="m-b-0">{FlagIcons}</h5>
                        </div>
                        <div className="card-body">
                            <div className="row icon-lists flag-icons">
                                {iconsData.map((icon, i) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-xl-4" key={i} onClick={(e) => getItag(icon.abbrivation)}>
                                            <div className="media">
                                                <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
                                                <div className="media-body align-self-center">
                                                    <h5>{icon.abbrivation}</h5>
                                                    <h6 className="mt-0">{icon.name}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <IconMarkUp itag={iTag} icons={icon} />
            </div>

        </Fragment>
    );

};

export default FlagIconss;