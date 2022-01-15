import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Progress } from 'reactstrap';
import { BasicProgressBars,SmallProgressBars,LargeProgressBars,CustomHeightProgressBars,ProgressBarsStriped,Add,ProgressBarsAnimated,MultipleBarsStacked,StripesAndAnimations,Stripes,AnimatedStripes,Plain,MaxValue } from "../../constant";
const ProgressBar = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Base" title="Progress" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BasicProgressBars}</h5><span>{"Progress components are built with two HTML elements, some CSS to set the width, and a few attributes."}</span>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress />
                                    <Progress value="25" color="primary" />
                                    <Progress value={50} color="secondary" />
                                    <Progress value={75} color="success" />
                                    <Progress value="100" color="info" />
                                    <Progress multi>
                                        <Progress bar value="15" />
                                        <Progress bar color="success" value="30" />
                                        <Progress bar color="info" value="25" />
                                        <Progress bar color="warning" value="20" />
                                        <Progress bar color="danger" value="5" />
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{SmallProgressBars}</h5><span>{"Use"} <code> {".sm-progress-bar"}</code>{"class to change progress size to small:"}</span>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress value={2 * 5} color="primary" className="sm-progress-bar" />
                                    <Progress color="success" value="25" className="sm-progress-bar" />
                                    <Progress color="info" value={50} className="sm-progress-bar" />
                                    <Progress color="warning" value={75} className="sm-progress-bar" />
                                    <Progress color="danger" value="100" className="sm-progress-bar" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{LargeProgressBars}</h5><span>{"Use"} <code> {".lg-progress-bar"}</code>{"class to change progress size to large:"}</span>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress value={2 * 5} color="primary" className="lg-progress-bar" />
                                    <Progress color="success" value="25" className="lg-progress-bar" />
                                    <Progress color="info" value={50} className="lg-progress-bar" />
                                    <Progress color="warning" value={75} className="lg-progress-bar" />
                                    <Progress color="danger" value="100" className="lg-progress-bar" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{CustomHeightProgressBars}</h5><span>{"Set a height value on the "}<code>{".progress-bar"}</code>{", so if you change that value the outer "}<code>{".progress"} </code> {"will automatically resize accordingly."}</span>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress value={2 * 5} color="primary" style={{ height: "1px" }} />
                                    <Progress color="secondary" value="25" style={{ height: "5px" }} />
                                    <Progress color="success" value={50} style={{ height: "11px" }} />
                                    <Progress color="info" value={75} style={{ height: "19px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{"PROGRESS BARS WITH CURRENT VALUE LABELS"}</h5>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress value="25">{"25%"}</Progress>
                                    <Progress value={50}>{"1/2"}</Progress>
                                    <Progress value={75}>{"You're almost there!"}</Progress>
                                    <Progress color="success" value="100">{"You did it!"}</Progress>
                                    <Progress multi>
                                        <Progress bar value="15">{"Meh"}</Progress>
                                        <Progress bar color="success" value="30">{"Wow!"}</Progress>
                                        <Progress bar color="info" value="25">{"Cool"}</Progress>
                                        <Progress bar color="warning" value="20">{"20%"}</Progress>
                                        <Progress bar color="danger" value="5">{"!!"}</Progress>
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{ProgressBarsStriped}</h5><span>{Add} <code>{".progress-bar-striped"}</code> {"to any"} <code>{".progress-bar"}</code> {"to apply a stripe via CSS gradient over the progress bar’s background color."}</span>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress striped value={2 * 5} />
                                    <Progress striped color="success" value="25" />
                                    <Progress striped color="info" value={50} />
                                    <Progress striped color="warning" value={75} />
                                    <Progress striped color="danger" value="100" />
                                    <Progress multi>
                                        <Progress striped bar value="10" />
                                        <Progress striped bar color="success" value="30" />
                                        <Progress striped bar color="warning" value="20" />
                                        <Progress striped bar color="danger" value="20" />
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{ProgressBarsAnimated}</h5><span>{"The striped gradient can also be animated. Add "}<code>{".progress-bar-animated"}</code> {"to"} <code>{".progress-bar"} </code> {"to animate the stripes right to left via CSS3 animations."}</span>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress animated value={2 * 5} />
                                    <Progress animated color="success" value="25" />
                                    <Progress animated color="info" value={50} />
                                    <Progress animated color="warning" value={75} />
                                    <Progress animated color="danger" value="100" />
                                    <Progress multi>
                                        <Progress animated bar value="10" />
                                        <Progress animated bar color="success" value="30" />
                                        <Progress animated bar color="warning" value="20" />
                                        <Progress animated bar color="danger" value="20" />
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{MultipleBarsStacked}</h5>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <Progress multi>
                                        <Progress bar value="15" />
                                        <Progress bar color="success" value="20" />
                                        <Progress bar color="info" value="25" />
                                        <Progress bar color="warning" value="20" />
                                        <Progress bar color="danger" value="15" />
                                    </Progress>
                                    <div className="text-center">{"With Labels"}</div>
                                    <Progress multi>
                                        <Progress bar value="15">{"Meh"}</Progress>
                                        <Progress bar color="success" value="35">{"Wow!"}</Progress>
                                        <Progress bar color="warning" value="25">{"25%"}</Progress>
                                        <Progress bar color="danger" value="25">{"LOOK OUT!!"}</Progress>
                                    </Progress>
                                    <div className="text-center">{StripesAndAnimations}</div>
                                    <Progress multi>
                                        <Progress bar striped value="15">{Stripes}</Progress>
                                        <Progress bar animated color="success" value="30">{AnimatedStripes}</Progress>
                                        <Progress bar color="info" value="25">{Plain}</Progress>
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>{MaxValue}</h5>
                            </div>
                            <div className="card-body progress-showcase row">
                                <div className="col">
                                    <div className="text-center">{"1 of 5"}</div>
                                    <Progress value="1" max="5" />
                                    <div className="text-center">{"50 of 135"}</div>
                                    <Progress value={50} max="135" />
                                    <div className="text-center">{"75 of 111"}</div>
                                    <Progress value={75} max={111} />
                                    <div className="text-center">{"463 of 500"}</div>
                                    <Progress value="463" max={500} />

                                    <div className="text-center">{"Various (40) of 55"}</div>
                                    <Progress multi>
                                        <Progress bar value="5" max={55}>5</Progress>
                                        <Progress bar color="success" value="15" max={55}>{"15"}</Progress>
                                        <Progress bar color="warning" value="10" max={55}>{"10"}</Progress>
                                        <Progress bar color="danger" value="10" max={55}>{"10"}</Progress>
                                    </Progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProgressBar;