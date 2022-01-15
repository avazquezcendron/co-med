import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../../../common/breadcrumb';
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './typeahead-one';
import { BasicDemo,MultipleSelections,CustomSelections,Remote } from "../../../../constant";
import axios from 'axios'

const TypeaheadComp = () => {

    const multiple = false

    const [options,setOptions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    },[])

    return (
        <Fragment>
            <Breadcrumb parent="Forms" title="Typeahead" />
            <div className="container-fluid">
                <div className="typeahead">
                    <div className="row">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{BasicDemo}</h5><span>{"This is the simple demo for Typeahead."}</span>
                                </div>
                                <div className="card-body">
                                    <div id="the-basics">
                                        <form className="theme-form">
                                            <div className="form-group">
                                                <Typeahead
                                                    id="basic-typeahead"
                                                    labelKey="name"
                                                    multiple={multiple}
                                                    options={options}
                                                    placeholder="Choose a state..."
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{MultipleSelections}</h5>
                                </div>
                                <div className="card-body">
                                    <div id="prefetch">
                                        <form className="theme-form">
                                            <div className="form-group">
                                                <Typeahead
                                                    id="multiple-typeahead"
                                                    clearButton
                                                    defaultSelected={options.slice(0, 5)}
                                                    labelKey="name"
                                                    multiple
                                                    options={options}
                                                    placeholder="Choose a state..."
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{CustomSelections}</h5>
                                </div>
                                <div className="card-body">
                                    <div id="bloodhound">
                                        <form className="theme-form">
                                            <div className="form-group">
                                                <Typeahead
                                                    id="custom-typeahead"
                                                    allowNew
                                                    multiple
                                                    newSelectionPrefix="Add a new item: "
                                                    options={[]}
                                                    placeholder="Type anything..."
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{Remote}</h5><span>{"Remote data is only used when the data provided by local and prefetch is insufficient"}</span>
                                </div>
                                <div className="card-body">
                                    <div id="remote">
                                        <form className="theme-form">
                                            <div className="form-group">
                                                <TypeaheadOne />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TypeaheadComp;