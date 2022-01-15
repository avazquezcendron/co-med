import React, { useState ,Fragment} from 'react';
import ImageUploader from 'react-images-upload';
import Breadcrumb from '../common/breadcrumb';
import {SelectSingleImageUpload,MultipleImageUpload} from '../../constant'
const UploadImage = () => {
    const [image,setimage] = useState({ pictures: [] })
   
    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({...image,pictureFiles
        });
    }
    return (
        <Fragment>
        <Breadcrumb title="Upload" parent="Advance" />
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>{MultipleImageUpload}</h5>
                        </div>
                        <div className="card-body">
                            <ImageUploader
                                withIcon={false}
                                withPreview={true}
                                label=""
                                buttonText="Upload Images"
                                onChange={onDrop}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                maxFileSize={1048576}
                                fileSizeError=" file size is too big"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>{SelectSingleImageUpload}</h5>
                        </div>
                        <div className="card-body">
                            <ImageUploader
                                withIcon={false}
                                withPreview={true}
                                label=""
                                singleImage={true}
                                buttonText="Upload Images"
                                onChange={onDrop}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                maxFileSize={1048576}
                                fileSizeError=" file size is too big"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </Fragment>
    );
}

export default UploadImage;