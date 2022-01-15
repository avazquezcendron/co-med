import React from 'react';
import * as feather from 'feather-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';


const IconMarkUp = props => {

    const closeIconContainer = () => {
        document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'none';
    }

    if (props.itag !== '' && props.icons !== '') {
        document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'block';
    }

    return (
        <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div" >
            <div className="container-fluid">
                <div className="row">
                    <div className="icon-popup">
                        <div className="close-icon" onClick={() => closeIconContainer()}>
                            <i className="icofont icofont-close"></i>
                        </div>
                        <div className="icon-first">
                            {props.icons.feathericon ? 
                            <div dangerouslySetInnerHTML={{ __html: feather.icons[props.icons.feathericon].toSvg(props.icons.feathericon) }} />
                            :
                            <i id="icon_main" className={props.icons.icon}></i>
                            }
                        </div>
                        <div className="icon-class">
                            <label className="icon-title"></label>
                            <span id="fclass1"></span>
                        </div>
                        <div className="icon-last icon-last">
                            <label className="icon-title">Markup</label>
                            <div className="form-inline">
                                <div className="form-group">
                                    <input type="text" className="inp-val form-control m-r-10" defaultValue={props.itag.iTag} id="input_copy" />
                                    <CopyToClipboard text={props.itag.iTag}
                                    >
                                        <button
                                            className="btn btn-primary notification"
                                            onClick={() => toast.success("Code Copied to clipboard !", {
                                                position: toast.POSITION.BOTTOM_RIGHT
                                            })}
                                        >Copy text</button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconMarkUp;