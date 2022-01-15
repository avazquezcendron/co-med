import React, { Fragment, useState } from 'react';
import CKEditors from "react-ckeditor-component";
import Breadcrumb from '../common/breadcrumb';
import { CKEditorExample } from "../../constant";

const Editor1 = () => {
    const [content,setContent] = useState('content') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }
    return (
        <Fragment>
            <Breadcrumb parent="Editor" title="Ck Editor" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{CKEditorExample}</h5>
                            </div>
                            <div className="card-body">
                                <CKEditors
                                        activeclassName="p10"
                                        content={content}
                                        events={{
                                            "change": onChange
                                        }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Editor1;