import React, {Fragment} from 'react';
import Breadcrumb from '../common/breadcrumb';
import { ShoppingBag, MessageCircle, MinusCircle, Tag } from 'react-feather';
import { TimelinePrimaryColor,TimelineInfoColor,TimelineDangerColor,TimelineSecondaryColor,TimelineWarningColor,TimelineSuccessColor,New, NewMessage,NewSale,NewReport,NewVisits } from "../../constant";

const Timeline2 = () => {
    return (
        <Fragment>
            <Breadcrumb title="Timeline 2" parent="Timeline" />
            <div className="container-fluid">
            <div className="row timeline-custom">
              <div className="col-xl-4 xl-50">
                <div className="card">
                  <div className="card-header">
                    <h5>{TimelinePrimaryColor}</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline-small">
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 small-line bg-primary">
                            <MinusCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 medium-line bg-primary">
                            <Tag />
                        </div>
                        <div className="media-body">
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50">
                <div className="card">
                  <div className="card-header">
                    <h5>{TimelineSecondaryColor}</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline-small">
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 small-line bg-secondary">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 medium-line bg-secondary">
                            <Tag />
                        </div>
                        <div className="media-body">
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50">
                <div className="card">
                  <div className="card-header">
                    <h5>{TimelineSuccessColor}</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline-small">
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 small-line bg-success">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 medium-line bg-success">
                            <Tag />
                        </div>
                        <div className="media-body">
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50">
                <div className="card">
                  <div className="card-header">
                    <h5>{TimelineInfoColor}r</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline-small">
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 small-line bg-info">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 medium-line bg-info">
                            <Tag />
                        </div>
                        <div className="media-body">
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50">
                <div className="card">
                  <div className="card-header">
                    <h5>{TimelineWarningColor}</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline-small">
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                            <ShoppingBag />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                            <MessageCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 small-line bg-warning">
                            <MinusCircle/>
                        </div>
                        <div className="media-body">
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                            <ShoppingBag />
                    </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 medium-line bg-warning">
                            <Tag />
                        </div>
                        <div className="media-body">
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 xl-50">
                <div className="card">
                  <div className="card-header">
                    <h5>{TimelineDangerColor}</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline-small">
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                            <ShoppingBag  />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                            <MinusCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 small-line bg-danger">
                        <MinusCircle />
                        </div>
                        <div className="media-body">
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                            <ShoppingBag  />
                        </div>
                        <div className="media-body">
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="timeline-round m-r-30 medium-line bg-danger">
                            <Tag  />
                        </div>
                        <div className="media-body">
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    );
};

export default Timeline2;