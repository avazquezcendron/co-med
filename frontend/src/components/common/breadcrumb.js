import React, { Fragment } from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom'
import Bookmark from './bookmark';

const Breadcrumb = props => {
    const breadcrumb = props;

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <div className="page-header-left">
                                <h3>{breadcrumb.header || breadcrumb.title}</h3>
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                            <Home />
                                        </Link>
                                    </li>
                                    
                                    {breadcrumb.parent ?
                                        <li className="breadcrumb-item">
                                            {breadcrumb.parent.url ?
                                                <Link to={`${process.env.PUBLIC_URL}/${breadcrumb.parent.url}`}>
                                                    {breadcrumb.parent.title}
                                                </Link>    
                                            : breadcrumb.parent}
                                        </li>    
                                        : ""}
                                    <li className="breadcrumb-item active">{breadcrumb.title}</li>
                                </ol>
                            </div>
                        </div>
                        {/* <!-- Bookmark Start--> */}
                        <Bookmark history={props.history}/>
                        {/* <!-- Bookmark Ends--> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Breadcrumb
