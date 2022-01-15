import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import DataTable from 'react-data-table-component';
import {productData,productColumns} from '../../../data/product-list';

const ProductList = () => {
    return (
        <Fragment>
            <Breadcrumb title="Product List" parent="Ecommerce" />
            <div className="container-fluid">
                <div className="row">
                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{"Individual column searching (text inputs)"} </h5><span>{"The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns."}</span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive product-table">
                                    <DataTable
                                        noHeader
                                        columns={productColumns}
                                        data={productData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Individual column searching (text inputs) Ends--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default ProductList;