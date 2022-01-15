import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SingleFileUpload,MultipleImageUpload,MultipleImageVideoAudioUpload,LimitationFileUpload,CustomFileUpload} from '../../constant'


const DropzoneComponent = () => {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    // called every time a file's `status` changes
    
    const handleChangeStatus = ({ meta, file }, status) => {
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove())
        toast.success("Dropzone successfully submitted !");
    }

    return (
        <Fragment>
            <Breadcrumb title="Dropzone" parent="Advance" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SingleFileUpload}</h5>
                            </div>
                            <div className="card-body">
                                <form className="dropzone digits" id="singleFileUpload" action="/upload.php">
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            styles={{
                                                dropzone: { width: 400, height: 200 },
                                                dropzoneActive: { borderColor: 'green' },
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MultipleImageUpload}</h5>
                            </div>
                            <div className="card-body">
                                <form className="dropzone dropzone-primary" id="multiFileUpload" action="/upload.php">
                                <ToastContainer />
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            onSubmit={handleSubmit}
                                            accept="image/*"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MultipleImageVideoAudioUpload}</h5>
                            </div>
                            <div className="card-body">
                                <form className="dropzone dropzone-info" id="fileTypeValidation" action="/upload.php">
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            onSubmit={handleSubmit}
                                            accept="image/*,audio/*,video/*"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LimitationFileUpload}</h5>
                            </div>
                            <div className="card-body">
                                <form className="dropzone dropzone-info" id="fileTypeValidation" action="/upload.php">
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            onChangeStatus={handleChangeStatus}
                                            onSubmit={handleSubmit}
                                            maxFiles={3}
                                            inputContent="Drop 3 Files"
                                            inputWithFilesContent={files => `${3 - files.length} more`}
                                            submitButtonDisabled={files => files.length < 3}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{CustomFileUpload}</h5>
                            </div>
                            <div className="card-body">
                                <form className="dropzone dropzone-info" id="fileTypeValidation" action="/upload.php">
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onSubmit={handleSubmit}
                                            inputContent="Drop Files (Custom Layout)"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DropzoneComponent;