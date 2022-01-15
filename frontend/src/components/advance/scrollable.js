import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import ScrollBars from 'react-scrollbar';
import {VerticalScrollbar,ClickAndDragScrollbar,SmoothScrollbar,NoScrollbar} from '../../constant'
const scrollbarStyles = { borderRadius: 5 }

const Scrollable = () => {

    return (
        <Fragment>
            <Breadcrumb title="Scrollable" parent="Advance" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{VerticalScrollbar}</h5>
                            </div>
                            <div className="card-body">
                                <ScrollBars horizontal autoHide={false} >
                                    <div><img src={require('../../assets/images/banner/3.jpg')} alt="girl" className="img-fluid" /></div>
                                </ScrollBars>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ClickAndDragScrollbar}</h5>
                            </div>
                            <div className="card-body">
                                <ScrollBars
                                    vertical
                                    horizontalScrollbarStyle={scrollbarStyles}
                                    horizontalContainerStyle={scrollbarStyles}
                                    minScrollSize={40}
                                    swapWheelAxes={true} >
                                    <div><img src={require('../../assets/images/banner/3.jpg')} alt="girl" className="img-fluid" /></div>
                                </ScrollBars>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SmoothScrollbar}</h5>
                            </div>
                            <div className="card-body">
                                <ScrollBars
                                    vertical
                                    smoothScrolling={true}
                                    minScrollSize={40}
                                    swapWheelAxes={false} >
                                    <div><img src={require('../../assets/images/banner/3.jpg')} alt="girl" className="img-fluid" /></div>
                                </ScrollBars>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{NoScrollbar}</h5>
                            </div>
                            <div className="card-body">
                                <ScrollBars
                                    vertical={false}
                                >
                                    <div><img src={require('../../assets/images/banner/3.jpg')} alt="girl" className="img-fluid" /></div>
                                </ScrollBars>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Scrollable;