import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb'
import Countup from 'react-countup';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter} from 'reactstrap'
import ChartistGraph from 'react-chartist';
import { chart1} from '../../../data/default';
import { ClosedToday,DueTasks,Completed,Features,Proposals,Implemented,Issues,Open,Overdue,Tasks,TaskSolved,EndlessAdminDesign,ProjectExplaination,TaskList,OtherDetails,Download,ByCall,ByKaint,ByKan,ByTailer,ByWaiter,ClientName,JohanDeo,StartingDate,EndingDate,DesignWork,DevlopingWork,ProjectFiles,Activitys } from '../../../constant';
const Projectdetails = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Project" title="Project Details"/>
        <Container fluid={true}>
            <Row className="projectdetails">
              <Col xl="3" sm="6">
                <Card>
                  <CardBody>
                    <div className="media">
                      <div className="select-options">
                        <select className="form-control form-control-primary" name="select">
                          <option value="opt1">{"Today"}</option>
                          <option value="opt2">{"Yesterday"}</option>
                          <option value="opt3">{"Tomorrow"}</option>
                          <option value="opt4">{"Monthly"}</option>
                          <option value="opt5">{"Weekly"}</option>
                        </select>
                      </div>
                    </div>
                    <div className="project-widgets text-center">
                      <h1 className="font-primary counter"><Countup end={48} /></h1>
                      <h6 className="mb-0">{DueTasks}</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="project-footer">
                    <h6 className="mb-0">{Completed}: <span className="counter">{"14"}</span></h6>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="3" sm="6">
                <Card>
                  <CardBody>
                    <div className="media">
                      <h5 className="mb-0">{Features}</h5>
                    </div>
                    <div className="project-widgets text-center">
                      <h1 className="font-primary counter"><Countup end={80} /></h1>
                      <h6 className="mb-0">{Proposals}</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="project-footer">
                    <h6 className="mb-0">{Implemented}: <span className="counter">{"14"}</span></h6>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="3" sm="6">
                <Card>
                  <CardBody>
                    <div className="media">
                      <h5 className="mb-0">{Issues}</h5>
                    </div>
                    <div className="project-widgets text-center">
                      <h1 className="font-primary counter"><Countup end={34} /></h1>
                      <h6 className="mb-0">{Open}</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="project-footer">
                    <h6 className="mb-0">{ClosedToday}: <span className="counter">{"10"}</span></h6>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="3" sm="6">
                <Card>
                  <CardBody>
                    <div className="media">
                      <h5 className="mb-0">{Overdue}</h5>
                    </div>
                    <div className="project-widgets text-center">
                      <h1 className="font-primary counter"><Countup end={7} /></h1>
                      <h6 className="mb-0">{Tasks}</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="project-footer">
                    <h6 className="mb-0">{TaskSolved}: <span className="counter">{"4"}</span></h6>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row className="projectmore">
              <Col xl="7 xl-100">
                <Card>
                  <CardBody>
                    <div className="media mb-4">
                      <img className="img-50 mr-4 rounded-circle" src={require("../../../assets/images/user/3.jpg")} alt="" data-original-title="" title=""/>
                      <div className="media-body">
                        <h5>{EndlessAdminDesign}</h5>
                        <p>{"scretch to working project(Build project)"}</p>
                      </div>
                    </div>
                    <h6>{ProjectExplaination}</h6>
                    <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."}</p>
                    <h6>{TaskList}</h6>
                    <div className="task-list mb-3">
                      <ul>
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{"Understend requirement "}</li>
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{"Identify & Meet with Stakeholders"}</li>
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{" Set & Prioritize Goals"}</li>
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{" Define Deliverables"}</li>
                      </ul>
                      <ul>   
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{" Create the Project Schedule"}</li>
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{" Identify Issues"}</li>
                        <li> <i className="fa fa-angle-double-right mr-1"></i>{" Present the Project Plan"}</li>
                      </ul>
                    </div>
                    <h6>{OtherDetails}</h6>
                    <div className="details">
                      <Row>
                        <Col xs="4"><span>{ClientName}</span></Col>
                        <Col xs="4">{JohanDeo}</Col>
                      </Row>
                      <Row>   
                        <Col xs="4"><span> {StartingDate}</span></Col>
                        <Col xs="4">{"8/5/2020"}</Col>
                      </Row>
                      <Row>
                        <Col xs="4"><span> {EndingDate}</span></Col>
                        <Col xs="4">{"9/6/2020"}</Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="5 xl-100">
                <Card>
                  <CardBody>
                    <div className="show-value-top d-flex">
                      <div className="value-left d-inline-block">
                        <div className="square bg-primary d-inline-block"></div><span>{DesignWork}</span>
                      </div>
                      <div className="value-right d-inline-block">
                        <div className="square d-inline-block bg-secondary"></div><span>{DevlopingWork}</span>
                      </div>
                    </div>
                    <div className="smooth-chart flot-chart-container">
                    <ChartistGraph key="1" className="ct-chart-line" data={{
                          labels: ['Fab', 'March', 'Apr', 'May'],
                          series: [ [0, 6, 2, 6],
                          [0, 7, 1, 8]]
                      }} type={'Line'} listener={{
                          "draw": function (data) {
                              if (data.type === 'line' || data.type === 'area') {
                                  data.element.animate({
                                      d: {
                                          begin: 2000 * data.index,
                                          dur: 2000,
                                          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                          to: data.path.clone().stringify(),
                                      }
                                  });
                              }
                          }
                      }} options={chart1} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <Card>
                  <CardHeader className="card-header-border">
                    <h5>{ProjectFiles}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="new-users activity">
                      <div className="media">
                        <div className="gradient-round m-r-30 gradient-line-1"><i className="fa fa-file-zip-o"></i></div>
                        <div className="media-body">
                          <h6 className="mb-1 f-w-700">{"Old_project.zip"}</h6>
                          <p>{"Visual Designer, Github Inc"}</p>
                        </div><span className="pull-right">
                          <button className="btn btn-pill btn-outline-light">{Download}</button></span>
                      </div>
                      <div className="media">
                        <div className="gradient-round m-r-30 gradient-line-1"><i className="fa fa-file-picture-o"></i></div>
                        <div className="media-body">
                          <h6 className="mb-1 f-w-700">{"Logo.PSD"}</h6>
                          <p>{"Visual Designer, Github Inc"}</p>
                        </div><span className="pull-right">
                          <button className="btn btn-pill btn-outline-light">{Download}</button></span>
                      </div>
                      <div className="media">
                        <div className="gradient-round m-r-30 gradient-line-1"><i className="fa fa-file-powerpoint-o"></i></div>
                        <div className="media-body">
                          <h6 className="mb-1 f-w-700">{"Requirement doc"}</h6>
                          <p>{"Visual Designer, Github Inc"}</p>
                        </div><span className="pull-right">
                          <button className="btn btn-pill btn-outline-light">{Download}</button></span>
                      </div>
                      <div className="media">
                        <div className="gradient-round m-r-30 gradient-line-1"><i className="fa fa-file-pdf-o"></i></div>
                        <div className="media-body">
                          <h6 className="mb-1 f-w-700">{"Color details"}</h6>
                          <p>{"Visual Designer, Github Inc"}</p>
                        </div><span className="pull-right">
                          <button className="btn btn-pill btn-outline-light">{Download}</button></span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <Card>
                  <CardHeader className="card-header-border">
                    <h5>{Activitys}</h5>
                  </CardHeader>
                  <CardBody className="recent-notification">
                    <div className="media">
                      <h6>{"09:00"}</h6>
                      <div className="media-body"><span>{"chanage Logo colors"}</span>
                        <p className="f-12">{ByKan}</p>
                      </div>
                    </div>
                    <div className="media">
                      <h6>{"10:50"}</h6>
                      <div className="media-body"><span>{"Check requirement of doc"}</span>
                        <p className="f-12">{ByTailer}</p>
                      </div>
                    </div>
                    <div className="media">
                      <h6>{"01:00"}</h6>
                      <div className="media-body"><span>{"Starting working on psd"}</span>
                        <p className="f-12">{ByKaint}</p>
                      </div>
                    </div>
                    <div className="media">
                      <h6>{"05:00"}</h6>
                      <div className="media-body"><span>{"Starting working on psd to HTML"}</span>
                        <p className="f-12">{ByCall}</p>
                      </div>
                    </div>
                    <div className="media">
                      <h6>{"12:00"}</h6>
                      <div className="media-body"><span>{"Testing"}</span>
                        <p className="f-12">{ByWaiter}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container> 
            
        </Fragment>
    );
}

export default Projectdetails;