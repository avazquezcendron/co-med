import React, { Fragment } from 'react';
import three from "../../assets/images/user/3.jpg";
import two from "../../assets/images/user/2.png";
import eight from "../../assets/images/user/8.jpg";
import ten from "../../assets/images/user/10.jpg";
import fourteen from "../../assets/images/user/14.png";
import four from "../../assets/images/user/4.jpg";
import { MoreVertical, ThumbsUp, UserPlus, MessageSquare } from 'react-feather';
import RightBar from './rightBar';
import LeftBar from './leftBar';
import {AddFriend,ActivityLog,AnnaMull,DionCast,KarleneLex,WaiSchalk,Hobbies,VellaChism, JasonBorne, } from "../../constant";


const AboutTab = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-xl-3 xl-40 col-lg-12 col-md-5">
                    <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc2">
                        <div className="row">
                            <LeftBar />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 xl-60 col-lg-12 col-md-7">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{"Pepole You May Know"}</h5>
                                </div>
                                <div className="card-body avatar-showcase">
                                    <div className="pepole-knows">
                                        <ul>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="twoImg" src={two} /><span className="d-block f-w-600">{JasonBorne}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="threeImg" src={three} /><span className="d-block f-w-600">{AnnaMull}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="threeImg" src={three} /><span className="d-block f-w-600">{DionCast}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="four" src={four} /><span className="d-block f-w-600">{KarleneLex}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="eightImg" src={eight} /><span className="d-block f-w-600">{VellaChism}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="tenImg" src={ten} /><span className="d-block f-w-600">{WaiSchalk}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="" src={fourteen} /><span className="d-block f-w-600">{KarleneLex}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header social-header">
                                    <h5><span>{"Hobbies and Interests"}</span><span className="pull-right"><MoreVertical /></span></h5>
                                </div>
                                <div className="card-body">
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{Hobbies}:</span>
                                                <p>{"I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside."}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"Favourite Music Bands / Artists"}:</span>
                                                <p>{"Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge."}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{"Favourite TV Shows"}:</span>
                                                <p>{"Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy."}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"Favourite Books"}:</span>
                                                <p>{"The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water."}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{"Favourite Movies"}:</span>
                                                <p>{"Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man."}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"Favourite Writers"}:</span>
                                                <p>{"Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth."}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{"Favourite Games"}:</span>
                                                <p>{"The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto."}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"Other Interests"}:</span>
                                                <p>{"Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art."}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header social-header">
                                    <h5><span>{"Education and Employement"}</span><span className="pull-right"><MoreVertical /></span></h5>
                                </div>
                                <div className="card-body">
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{"The New College of Design"}</span>
                                                <p>{"2001 - 2006"}</p>
                                                <p>{"Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy."}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"Digital Design Intern"}</span>
                                                <p>{"2006-2008"}</p>
                                                <p>{"Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients."}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{"Rembrandt Institute"}</span>
                                                <p>{"2008"}</p>
                                                <p>{"Five months Digital Illustration course. Professor: Leonardo Stagg"}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"UI/UX Designer"}</span>
                                                <p>{"2001 - 2006"}</p>
                                                <p>{"Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy."}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row details-about">
                                        <div className="col-sm-6">
                                            <div className="your-details"><span className="f-w-600">{"The Digital College"}</span>
                                                <p>{"2010"}</p>
                                                <p>{"6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle."}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="your-details your-details-xs"><span className="f-w-600">{"The New College of Design"}</span>
                                                <p>{"2008 - 2013"}</p>
                                                <p>{"UI/UX Designer for the “Daydreams” agency."}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{"Viewed Your Profile"}</h5>
                                </div>
                                <div className="card-body avatar-showcase">
                                    <div className="pepole-knows">
                                        <ul>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="" src={two} />
                                                    <span className="d-block f-w-600">{JasonBorne}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="" src={three} />
                                                    <span className="d-block f-w-600">{AnnaMull}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="" src={three} />
                                                    <span className="d-block f-w-600">{DionCast}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="" src={four} />
                                                    <span className="d-block f-w-600">{KarleneLex}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src={eight} />
                                                    <span className="d-block f-w-600">{VellaChism}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center"><img className="img-60 img-fluid rounded-circle" alt="" src={ten} />
                                                    <span className="d-block f-w-600">{WaiSchalk}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="add-friend text-center">
                                                    <img className="img-60 img-fluid rounded-circle" alt="fourteenImg" src={fourteen} />
                                                    <span className="d-block f-w-600">{KarleneLex}</span>
                                                    <button className="btn btn-primary btn-xs">{AddFriend}</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{ActivityLog}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="activity-log">
                                        <div className="my-activity">
                                            <h6 className="f-w-600">{"Today"}</h6>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Comeren Diaz likes your photos."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Karlene Lex and Comeren Diaz now friends."}</p>
                                            <p><span><MessageSquare className="m-r-20" /></span>{"Sarah Loren wrote on your timeline"}</p>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Johny Waston likes your post's."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Andew Jon became friends with Comeren Diaz."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Johny Waston became friends with Bucky Barnes."}</p>
                                        </div>
                                        <div className="my-activity">
                                            <h6 className="f-w-600">{"25 December"}</h6>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Comeren Diaz likes your photos."}</p>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Johny Waston likes your post's."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Karlene Lex and Comeren Diaz now friends."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Johny Waston became friends with Bucky Barnes."}</p>
                                            <p><span><MessageSquare className="m-r-20" /></span>{"Sarah Loren wrote on your timeline"}</p>
                                            <p><span><MessageSquare className="m-r-20" /></span>{"Comeren Diaz wrote on your timeline"}</p>
                                        </div>
                                        <div className="my-activity">
                                            <h6 className="f-w-600">{"8 september"}</h6>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Comeren Diaz likes your photos."}</p>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Johny Waston likes your post's."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Karlene Lex and Comeren Diaz now friends."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Johny Waston became friends with Bucky Barnes."}</p>
                                            <p><span><MessageSquare className="m-r-20" /></span>{"Sarah Loren wrote on your timeline"}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Andew Jon became friends with Comeren Diaz."}</p>
                                        </div>
                                        <div className="my-activity">
                                            <h6 className="f-w-600">{"6 June"}</h6>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Comeren Diaz likes your photos."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Karlene Lex and Comeren Diaz now friends."}</p>
                                            <p><span><MessageSquare className="m-r-20" /></span>{"Sarah Loren wrote on your timeline"}</p>
                                            <p><span><ThumbsUp className="m-r-20" /></span>{"Johny Waston likes your post's."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Andew Jon became friends with Comeren Diaz."}</p>
                                            <p><span><UserPlus className="m-r-20" /></span>{"Johny Waston became friends with Bucky Barnes."}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 xl-100">
                    <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc3">
                        <div className="row">
                            <RightBar />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutTab;