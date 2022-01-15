import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb'
import { BorderLeft,BorderRight,BorderTop,BorderBottom,BorderColorState,AbsoluteStyle,ColorState } from "../../constant";
const CreativeCards = () => {
    return (
        <Fragment>
             <Breadcrumb title="Creative Card" parent="Card" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-xl-6">
                        <div className="card ">
                            <div className="card-header b-l-primary">
                                <h5>{BorderLeft}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card ">
                            <div className="card-header b-r-secondary">
                                <h5>{BorderRight}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card ">
                            <div className="card-header b-t-success">
                                <h5>{BorderTop}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card ">
                            <div className="card-header b-b-info">
                                <h5>{BorderBottom}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-warning">
                                <h5>{BorderColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-danger">
                                <h5>{BorderColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-light">
                                <h5>{BorderColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <h5>{BorderColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-secondary border-2">
                                <h5>{BorderColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-primary border-3">
                                <h5>{BorderColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card card-absolute">
                            <div className="card-header bg-primary">
                                <h5>{AbsoluteStyle}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="card card-absolute">
                            <div className="card-header bg-secondary">
                                <h5>{ColorState}</h5>
                            </div>
                            <div className="card-body">
                                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled.`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreativeCards;