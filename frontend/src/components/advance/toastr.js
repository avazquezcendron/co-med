import React, { Fragment} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Custom Componenets
import Breadcrumb from '../common/breadcrumb';
import {BasicExamples,CustomDirections,CustomAutoclose,SuccessNotification,InfoNotification,WarningNotification,DangerNotification,BottomLeft,BottomCenter,RightBottom,AutoCloseIn1000Sec,AutoCloseIn15000Sec,AutoCloseIn500Sec,TopCenter,AutoCloseIn5000Sec} from '../../constant'

const Toastr = () =>{

        return (
            <Fragment>
                <Breadcrumb title="Bootstrap Notify" parent="Advance"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{BasicExamples}</h5>
                                </div>
                                <div className="card-body btn-showcase">

                                    <button type="button" className="btn btn-success"
                                            onClick={() => toast.success("Success Notification !")}>
                                        {SuccessNotification}
                                    </button>

                                    <button type="button" className="btn btn-info sweet-4"
                                            onClick={() => toast.info("Info Notification !")}>
                                        {InfoNotification}
                                    </button>

                                    <button type="button" className="btn btn-warning"
                                            onClick={() => toast.warn("Warning Notification !")}>
                                        {WarningNotification}
                                    </button>

                                    <button type="button" className="btn btn-danger"
                                            onClick={() => toast.error("Error Notification !")}>
                                        {DangerNotification}
                                    </button>
                                </div>

                                <ToastContainer />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{CustomDirections}</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    <button type="button" className="btn btn-success"
                                            onClick={() => toast.success("Success Notification !", {
                                                position: toast.POSITION.TOP_CENTER
                                            })}>
                                        {TopCenter}
                                    </button>

                                    <button type="button" className="btn btn-info sweet-4"
                                            onClick={() => toast.info("Info Notification !", {
                                                position: toast.POSITION.BOTTOM_CENTER
                                            })}>
                                        {BottomCenter}
                                    </button>

                                    <button type="button" className="btn btn-warning"
                                            onClick={() => toast.warn("Warning Notification !", {
                                                position: toast.POSITION.BOTTOM_LEFT
                                            })}>
                                        {BottomLeft}
                                    </button>

                                    <button type="button" className="btn btn-danger"
                                            onClick={() => toast.error("Error Notification !", {
                                                position: toast.POSITION.BOTTOM_RIGHT
                                            })}>
                                        {RightBottom}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{CustomAutoclose}</h5>
                                </div>
                                <div className="card-body btn-showcase">

                                    <button type="button" className="btn btn-success"
                                            onClick={() => toast.success("Success Notification !", { autoClose: 15000 })}>
                                        {AutoCloseIn15000Sec}
                                    </button>

                                    <button type="button" className="btn btn-info sweet-4"
                                            onClick={() => toast.info("Info Notification !", { autoClose: 5000 })}>
                                        {AutoCloseIn5000Sec}
                                    </button>

                                    <button type="button" className="btn btn-warning"
                                            onClick={() => toast.warn("Warning Notification !", { autoClose: 1000 })}>
                                        {AutoCloseIn1000Sec}
                                    </button>

                                    <button type="button" className="btn btn-danger"
                                            onClick={() => toast.error("Error Notification !", { autoClose: 500 })}>
                                        {AutoCloseIn500Sec}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}
            </Fragment>
        )
}
export default Toastr;