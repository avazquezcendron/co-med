import React from 'react';
import Breadcrumb from '../common/breadcrumb'
import ImageDesc from './ImageDesc';
import {IMAGE_GALLERY } from "../../constant";
const ImageWithDesc = () => {

        return(
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Gallery grid with description" parent="Gallery" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{IMAGE_GALLERY}</h5>
                                </div>
                                <ImageDesc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default ImageWithDesc;