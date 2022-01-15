import React, { Fragment } from 'react';
import Breadcrumb from "../common/breadcrumb";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import CKEditors from "react-ckeditor-component";
import Dropzone from 'react-dropzone-uploader'
import {PostEdit,Title,Type,Category,Content,Post,Text,Audio,Video,Image} from "../../constant";

const BlogPost = () => {
    const data = [
        { name: 'Lifestyle' },
        { name: 'Travel' }
    ]
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { }

    return (
        <Fragment>
            <Breadcrumb title="Add Post" parent="Blog" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PostEdit}</h5>
                            </div>
                            <div className="card-body add-post">
                                <form className="row needs-validation" noValidate="">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01">{Title}:</label>
                                            <input className="form-control" id="validationCustom01" type="text" placeholder="Post Title" required="" />
                                            <div className="valid-feedback">{"Looks good!"}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>{Type}:</label>
                                            <div className="m-checkbox-inline">
                                                <label htmlFor="edo-ani">
                                                    <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />{Text}
                                                </label>
                                                <label htmlFor="edo-ani1">
                                                    <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />{Image}
                                                </label>
                                                <label htmlFor="edo-ani2">
                                                    <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />{Audio}
                                                </label>
                                                <label htmlFor="edo-ani3">
                                                    <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani" />{Video}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>{Category}: </label>
                                            <Typeahead
                                                id="multiple-typeahead"
                                                clearButton
                                                defaultSelected={data.slice(0, 5)}
                                                labelKey="name"
                                                multiple
                                                options={data}
                                                placeholder="Select Your Name...."
                                            />
                                        </div>
                                        <div className="email-wrapper">
                                            <div className="theme-form">
                                                <div className="form-group">
                                                    <label>{Content}:</label>
                                                    <CKEditors
                                                        activeclassName="p10"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form className="dropzone digits" id="singleFileUpload" action="/upload.php">
                                    <div className="m-0 dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            styles={{
                                                dropzone: { width: '100%', height: 50 },
                                                dropzoneActive: { borderColor: 'green' },
                                            }}
                                        />
                                    </div>
                                </form>
                                <div className="btn-showcase">
                                    <button className="btn btn-primary" type="reset">{Post}</button>
                                    <input className="btn btn-light" type="reset" value="Discard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BlogPost;