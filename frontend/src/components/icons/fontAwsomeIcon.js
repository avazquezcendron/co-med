import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import IconMarkUp from './icon-markup';
import axios from 'axios'
import { Icons,Currency,WebApp,Spinner,FormControl,Directional,VideoPlayer,MedicalPlayer,TextEditor,BrandPlayer } from "../../constant";


const FontAwsomeIcon = () => {

  const [data,setData] = useState([])
  const [iTag, setiTag] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/fontawsomeData.json`).then(res => setData(res.data))
  },[])

  const getItag = (tag) => {
    setiTag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    })
    setIcon({
      icon : 'fa fa-' + tag 
  })
  }
  
  return (
    <Fragment>
      <Breadcrumb title="Fontawsome" parent="Icons" />

      <div className="container-fluid">
        {
          data.map((icons, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="m-b-0"><span className="digits">{"20"}</span> {Icons}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row icon-lists">
                        {icons.icons20.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                        {icons.currencyicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                        {icons.webicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                      <h5 className="m-b-0"><span className="digits">{Spinner}</span> {Icons}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row icon-lists">

                        {icons.spinner.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                      <h5 className="m-b-0"><span className="digits">{FormControl}</span> {Icons}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row icon-lists">

                        {icons.formicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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

                        {icons.texteditoricons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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

                        {icons.directionalicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                      <h5 className="m-b-0"><span className="digits">{VideoPlayer}</span> {Icons}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row icon-lists">

                        {icons.videoicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                      <h5 className="m-b-0"><span className="digits">{BrandPlayer}</span> {Icons}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row icon-lists">

                        {icons.branddicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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
                      <h5 className="m-b-0"><span className="digits">{MedicalPlayer}</span> {Icons}</h5>
                    </div>
                    <div className="card-body">
                      <div className="row icon-lists">

                        {icons.medicalicons.map((icon, i) => {
                          return (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={i} onClick={(e) => getItag(icon)}>
                              <i className={`fa fa-${icon}`}></i> {"fa fa-"}{icon}
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

export default FontAwsomeIcon;





