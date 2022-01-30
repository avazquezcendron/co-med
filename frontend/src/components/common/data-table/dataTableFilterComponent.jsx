import React from "react";
import {Form,FormGroup,Input} from 'reactstrap'
import { Search, X } from 'react-feather';

const DataTableFilterComponent = ({ filterText, onFilter, onClear }) => {
    return (
        <div className="faq-form">
            <Input
                    className="form-control-plaintext"   
                    type="search"
                    value={filterText}
                    onChange={(e) => { onFilter(e) }}
                    placeholder="Filtrar..." />
            { filterText ?
                <button type="button" className="close btn btn-default" onClick={onClear}><X className="search-icon" /></button>
                :
                <button type="button" className="close btn btn-default"><Search className="search-icon" /></button>
            }
        </div>
        // <Form className="form-inline">
        //     <FormGroup>
        //         <div class="input-group-prepend">
        //             <button type="button" class="close btn btn-default"><span className="fa fa-search"></span></button>
        //             {/* <span class="input-group-text fa fa-search">
        //             </span>
        //             <i className="fa fa-search"></i> */}
        //         </div>
        //         <Input
        //             className="form-control-plaintext"                    
        //             type="search"
        //             value={filterText}
        //             onChange={(e) => onFilter(e)}
        //             placeholder="Filtrar..." />
        //         {/* <i className="fa fa-times" onClick={onClear}></i> */}
        //         <button type="button" class="close btn btn-default" onClick={onClear}><span>x</span></button>
        //     </FormGroup>
        // </Form>
)};

export default DataTableFilterComponent;