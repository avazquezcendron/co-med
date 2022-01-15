import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import IconMarkUp from './icon-markup';
import axios from 'axios'
import { Abstract,Animal,Brand,Business,Charts,Construction,Currency,Device,Education,Emotion,FileType,Food,Law,KidsToys,Mathematical,Medical,MobileUI,Multimedia,Payment,Person,Search,Social,Sport,TextEditor,Transport,Travel,WebApplication,Weather,Directional,Icons } from "../../constant";

const IcoIcons = () => {

    const [data,setData] = useState([])
    const [iTag, setiTag] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/icoData.json`).then(res => setData(res.data))
    },[])

    const getItag = (tag) => {
        setiTag({
            iTag: '<i className="icofont icofont-' + tag + '"></i>',
        })
        setIcon({
            icon : 'icofont icofont-' + tag + ' fa-5x'
        })
    }
    return (
        <Fragment>
            <Breadcrumb title="Ico Icon" parent="Icons" />

            <div className="container-fluid">
                {
                    data.map((icons, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="m-b-0"><span className="digits">{Abstract}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.abstract.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Animal}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.animal.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Business}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.business.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Charts}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.chart.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Construction}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.construction.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Currency}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.currency.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Device}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.device.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Directional}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.directional.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Education}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.eduction.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Emotion}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.emotion.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{FileType}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.file.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Food}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.food.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{KidsToys}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.kids.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Law}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.law.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Mathematical}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.mathematical.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Medical}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.medical.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{MobileUI}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.mobileui.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Multimedia}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.multimedia.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Payment}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.payment.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Person}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.person.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Search}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.search.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Social}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.social.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Sport}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.sport.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Transport}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.transport.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Travel}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.travel.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{Weather}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.weather.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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
                                            <h5 className="m-b-0"><span className="digits">{WebApplication}</span> {Icons}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row icon-lists">
                                                {icons.webapplication.map((icon, i) => {
                                                    return (
                                                        <div className="col-sm-6 col-lg-4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`icofont icofont-${icon}`}></i> {icon}
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

export default IcoIcons;





