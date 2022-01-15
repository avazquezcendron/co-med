import React, { Fragment } from 'react';
import comingsoon from '../assets/images/other-images/coming-soon-bg.jpg';
import logo from "../assets/images/other-images/coming-soon-Logo.png";
import authVideo from '../assets/video/auth-bg.mp4';
import CountdownComponent from '../components/common/countdownComponent';
import { WE_ARE_COMING_SOON } from "../constant";
const ComingSoonVideo = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    <div className="comingsoon auth-bg-video">
                    <video id="bgvid" poster={comingsoon} playsInline="" autoPlay={true} muted="" loop="" >
                            <source src={authVideo} type="video/mp4" />
                        </video>
                        <div className="comingsoon-inner text-center"><img src={logo} alt="" />
                            <h5>{WE_ARE_COMING_SOON}</h5>
                            <div id="clockdiv">
                               <CountdownComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ComingSoonVideo;