import React, { Fragment, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink,Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import Breadcrumb from '../common/breadcrumb';
import one from "../../assets/images/blog/blog.jpg";
import ImageDesc from '../gallery/ImageDesc';
import {Email,All,Images,Videos,Settings,SearchSetting,Language,Shopping,Flights,Finance,Previous,Next,MarkJecno,Endless_Education_Info} from '../../constant'

const Searchpage = () => {
    
    const [activeTab, setActiveTab] = useState('1');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <Fragment>
            <Breadcrumb title="Search Page" parent="Search Page" />
            <div className="container-fluid search-page">
                <div className="card">
                    <div className="card-header">
                        <div className="search-form">
                            <div className="form-group m-0">
                                <label className="sr-only">{Email}</label>
                                <input className="form-control" type="search" placeholder="Search.." />
                            </div>
                        </div>
                    </div>
                    <div className="card-body product-page-main">
                        <Nav tabs className="border-tab mb-2 nav-primary">
                            <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                    <i className="icon-target"></i>{All}
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                    <i className="icon-image"></i>{Images}
                                        </NavLink>
                            </NavItem>
                            <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                    <i className="icon-video-clapper"></i>{Videos}
                                        </NavLink>
                            </NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret tag="button" className="nav-link active btn-primary">
                                <i className="icon-settings"></i>{Settings}
                                    </DropdownToggle>
                                <DropdownMenu>
                                <DropdownItem href="#javascript">{SearchSetting}</DropdownItem>
                                <DropdownItem href="#javascript">{Language}</DropdownItem>
                                <DropdownItem href="#javascript">{Shopping}</DropdownItem>
                                <DropdownItem href="#javascript">{Flights}</DropdownItem>
                                <DropdownItem href="#javascript">{Finance}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                                        <div className="info-block">
                                            <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                                            <a href="#javascript">{Endless_Education_Info}</a>
                                            <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                            <div className="star-ratings">
                                                <ul className="search-info">
                                                    <li>{"2.5 stars"}</li>
                                                    <li>{"590 votes"}</li>
                                                    <li>{"Music"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <h6>{"Proin eleifend metus vel erat faucibus, ut bibendum nulla iaculis."}</h6>
                                            <a href="#javascript">{Endless_Education_Info}</a>
                                            <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                            <div className="star-ratings">
                                                <ul className="search-info">
                                                    <li>{"2.5 stars"}</li>
                                                    <li>{"590 votes"}</li>
                                                    <li>{"Music"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <h6>{"Fusce rutrum elit aliquet nisi malesuada cursus."}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                            <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                            <div className="star-ratings">
                                                <ul className="search-info">
                                                    <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                                                    <li>{"2.5 stars"}</li>
                                                    <li>{"590 votes"}</li>
                                                    <li>{"Music"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <h6>{"Morbi feugiat mauris vel semper fringilla."}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                            <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                            <div className="star-ratings">
                                                <ul className="search-info">
                                                    <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                                                    <li>{"2.5 stars"}</li>
                                                    <li>{"590 votes"}</li>
                                                    <li>{"Music"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <h6>{"Morbi feugiat mauris vel semper fringilla."}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                            <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                            <div className="star-ratings">
                                                <ul className="search-info">
                                                    <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                                                    <li>{"2.5 stars"}</li>
                                                    <li>{"590 votes"}</li>
                                                    <li>{"Music"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <Pagination aria-label="Page navigation" className="pagination pagination-primary">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="##javascript">
                                                        {Previous}
                                                    </PaginationLink>
                                                </PaginationItem>

                                                <PaginationItem>
                                                    <PaginationLink href="##javascript">
                                                        {"1"}
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem active>
                                                    <PaginationLink href="##javascript">
                                                        {"2"}
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="##javascript">
                                                        {"3"}
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink last href="##javascript" >
                                                        {Next}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card lg-mt mb-0">
                                            <div className="blog-box blog-shadow"><img className="img-fluid" src={one} alt="" />
                                                <div className="blog-details">
                                                    <p className="digits">{"25 July 2018"}</p>
                                                    <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
                                                    <ul className="blog-social digits">
                                                        <li><i className="icofont icofont-user"></i>{MarkJecno}</li>
                                                        <li><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <ImageDesc />
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                                        <div className="media info-block">
                                            <iframe className="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="media" />
                                            <div className="media-body">
                                                <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                                <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                                <div className="star-ratings">
                                                    <ul className="search-info">
                                                        <li>{"2.5 stars"}</li>
                                                        <li>{"590 votes"}</li>
                                                        <li>{"Music"}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media info-block">
                                            <iframe className="mr-3 mb-3" title="media-block" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk"></iframe>
                                            <div className="media-body">
                                                <h6>{"Morbi eget quam et purus commodo dapibus."}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                                <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                                <div className="star-ratings">
                                                    <ul className="search-info">
                                                        <li>{"2.5 stars"}</li>
                                                        <li>{"590 votes"}</li>
                                                        <li>{"Music"}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media info-block">
                                            <iframe className="mr-3 mb-3" title="media" width="200" height="100" src="https://www.youtube.com/embed/FZzWGr3ruVw"></iframe>
                                            <div className="media-body">
                                                <h6>{"Etiam eget ligula at ante eleifend rutrum."}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                                <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                                <div className="star-ratings">
                                                    <ul className="search-info">
                                                        <li>{"2.5 stars"}</li>
                                                        <li>{"590 votes"}</li>
                                                        <li>{"Music"}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media info-block">
                                            <iframe className="mr-3 mb-3" title="media" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM"></iframe>
                                            <div className="media-body">
                                                <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6><a href="#javascript">{Endless_Education_Info}</a>
                                                <p>{"endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                                                <div className="star-ratings">
                                                    <ul className="search-info">
                                                        <li>{"2.5 stars"}</li>
                                                        <li>{"590 votes"}</li>
                                                        <li>{"Music"}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <Pagination aria-label="Page navigation" className="pagination pagination-primary">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="##javascript">
                                                        {Previous}
                                                    </PaginationLink>
                                                </PaginationItem>

                                                <PaginationItem>
                                                    <PaginationLink href="##javascript">
                                                        {"1"}
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem active>
                                                    <PaginationLink href="##javascript">
                                                        {"2"}
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="##javascript">
                                                        {"3"}
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink last href="##javascript" >
                                                        {Next}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div id="video-links">
                                            <div className="embed-responsive embed-responsive-21by9 lg-mt">
                                                <iframe width="560" title="media" height="315" src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen=""></iframe>
                                            </div>
                                            <div className="embed-responsive embed-responsive-21by9">
                                                <iframe title="media" width="560" height="315" src="https://www.youtube.com/embed/I0-vBdh4sZ8" allowFullScreen=""></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Searchpage;