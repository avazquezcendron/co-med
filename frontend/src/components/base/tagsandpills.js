import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import { DollarSign, Headphones, GitHub, Award, Activity, Heart, Link, Mail, Settings, Music, AlertTriangle, AlertCircle, Bell } from 'react-feather';
import { ContextualVariations,Primary,Secondary,Warning,Info,Danger,Success,Light,Dark,TagsWithIcon,TagsWithNumber,PillsWithIcon,PillsWithNumber,New,Messages,Notifications,UpdateAvailable,PlayingNow,Alert,BadgesExample } from "../../constant";
const Tagsandpills = () => {
  return (
    <div>
      <Breadcrumb parent="Base" title="Tag & Pills" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{ContextualVariations}</h5>
              </div>
              <div className="card-body"><span className="badge badge-primary">{Primary}</span><span className="badge badge-secondary">{Secondary}</span><span className="badge badge-success">{Success}</span><span className="badge badge-info">{Info}</span><span className="badge badge-warning">{Warning}</span><span className="badge badge-danger">{Danger}</span><span className="badge badge-light">{Light}</span><span className="badge badge-dark tag-pills-sm-mb">{Dark}</span></div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{ContextualVariations}</h5>
              </div>
              <div className="card-body"><span className="badge badge-pill badge-primary">{Primary}</span><span className="badge badge-pill badge-secondary">{Secondary}</span><span className="badge badge-pill badge-success">{Success}</span><span className="badge badge-pill badge-info">{Info}</span><span className="badge badge-pill badge-warning">{Warning}</span><span className="badge badge-pill badge-danger">{Danger}</span><span className="badge badge-pill badge-light">{Light}</span><span className="badge badge-pill badge-dark tag-pills-sm-mb">{Dark}</span></div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{TagsWithNumber}</h5>
              </div>
              <div className="card-body digits"><a className="badge badge-primary" href="#javascript">{"1"}</a><a className="badge badge-secondary" href="#javascript">{"2"}</a><a className="badge badge-success" href="#javascript">{"3"}</a><a className="badge badge-info" href="#javascript">{"4"}</a><a className="badge badge-warning" href="#javascript">{"5"}</a><a className="badge badge-danger" href="#javascript">{"6"}</a><a className="badge badge-light" href="#javascript">{"7"}</a><a className="badge badge-dark" href="#javascript">{"8"}</a></div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{PillsWithNumber}</h5>
              </div>
              <div className="card-body digits"><span className="badge badge-pill badge-primary">{"1"}</span><span className="badge badge-pill badge-secondary">{"2"}</span><span className="badge badge-pill badge-success">{"3"}</span><span className="badge badge-pill badge-info">{"4"}</span><span className="badge badge-pill badge-warning">{"5"}</span><span className="badge badge-pill badge-danger">{"6"}</span><span className="badge badge-pill badge-light">{"7"}</span><span className="badge badge-pill badge-dark">{"8"}</span></div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{TagsWithIcon}</h5>
              </div>
              <div className="card-body">
                <a className="badge badge-primary" href="#javascript"><DollarSign /></a>
                <a className="badge badge-secondary" href="#javascript"><Headphones /></a>
                <a className="badge badge-success" href="#javascript"><Link /></a>
                <a className="badge badge-info" href="#javascript"><GitHub /></a>
                <a className="badge badge-warning" href="#javascript"><Award /></a>
                <a className="badge badge-danger" href="#javascript"><Activity /></a>
                <a className="badge badge-light" href="#javascript"><Heart /></a>
                <a className="badge badge-dark" href="#javascript"><Mail /></a></div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{PillsWithIcon}</h5>
              </div>
              <div className="card-body">
                <a className="badge badge-pill badge-primary" href="#javascript"><DollarSign /></a>
                <a className="badge badge-pill badge-secondary" href="#javascript"><Headphones /></a>
                <a className="badge badge-pill badge-success" href="#javascript"><Link /></a>
                <a className="badge badge-pill badge-info" href="#javascript"><GitHub /></a>
                <a className="badge badge-pill badge-warning" href="#javascript"><Award /></a>
                <a className="badge badge-pill badge-danger" href="#javascript"><Activity /></a>
                <a className="badge badge-pill badge-light" href="#javascript"><Heart /></a>
                <a className="badge badge-pill badge-dark" href="#javascript"><Mail /></a></div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card height-equal">
              <div className="card-header">
                <h5>{BadgesExample}</h5>
              </div>
              <div className="card-body">
                <h1>{"heading"} <span className="badge badge-primary">{New}</span></h1>
                <h2>{"heading"} <span className="badge badge-primary">{New}</span></h2>
                <h3>{"heading"} <span className="badge badge-primary">{New}</span></h3>
                <h4>{"heading"} <span className="badge badge-primary">{New}</span></h4>
                <h5>{"heading"} <span className="badge badge-primary">{New}</span></h5>
                <h6>{"heading"} <span className="badge badge-primary">{New}</span></h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card height-equal">
              <div className="card-header">
                <h5>{"Badges as part buttons"}</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <button className="btn btn-primary" type="button">{Messages} <span className="badge badge-pill badge-light"><Mail /></span></button>
                </div>
                <div className="mb-3">
                  <button className="btn btn-secondary" type="button">{Notifications} <span className="badge badge-pill badge-light"><Bell /></span></button>
                </div>
                <div className="mb-3">
                  <button className="btn badge-success" type="button">{UpdateAvailable} <span className="badge badge-pill badge-light"><Settings /></span></button>
                </div>
                <div className="mb-3">
                  <button className="btn badge-info" type="button">{PlayingNow} <span className="badge badge-pill badge-light"><Music /></span></button>
                </div>
                <div className="mb-3">
                  <button className="btn badge-warning" type="button">{"1.2 GB Used"} <span className="badge badge-pill badge-light"><AlertTriangle /></span></button>
                </div>
                <div>
                  <button className="btn badge-danger" type="button">{Alert} <span className="badge badge-pill badge-light"><AlertCircle /></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tagsandpills;