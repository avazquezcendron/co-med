import React, { Fragment } from 'react';
import logo from '../assets/images/other-images/coming-soon-Logo.png';
import CountdownComponent from '../components/common/countdownComponent';
import { WE_ARE_COMING_SOON } from "../constant";

const ComingSoon = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                {/* <!-- Page Body Start--> */}
                <div className="container-fluid p-0">
                    <div className="comingsoon">
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

export default ComingSoon;