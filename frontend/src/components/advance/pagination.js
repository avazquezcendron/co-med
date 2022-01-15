import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {Pagi_Nations,PaginationWithIcons,PaginationAlignment,PaginationActiveDisabled,PaginationColor,PaginationSizing,Previous,Next} from '../../constant'

const PaginationComponent = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Advance" title="Pagination" />
            <div className="container-fluid">
                <div className="row">
                    {/* <!-- simple pagination--> */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{Pagi_Nations}</h5>
                            </div>
                            <div className="card-body" aria-label="Page navigation example">
                                <Pagination aria-label="Page navigation" className="pagination-primary">
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {Previous}
                                        </PaginationLink>
                                        </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"1"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"2"}
                                         </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"3"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {Next}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </div>
                    {/* <!-- pagination with icons--> */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PaginationWithIcons}</h5>
                            </div>
                            <div className="card-body">
                                <Pagination aria-label="Page navigation example" className="pagination-primary">
                                    <PaginationItem disabled>
                                        <PaginationLink first href="#javascript" />
                                    </PaginationItem>
                                    <PaginationItem disabled>
                                        <PaginationLink previous href="#javascript" />
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#javascript">
                                            {"1"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"2"}
                                       </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"3"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#javascript" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink last href="#javascript" />
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </div>
                    {/* <!-- pagination alignment left--> */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PaginationAlignment}</h5>
                            </div>
                            <div className="card-body">
                                {/* <!-- left aligned pagination--> */}
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-primary">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                {/* <!-- center aligned pagination--> */}
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination justify-content-center pagination-primary">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                        </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                {/* <!-- right aligned pagination--> */}
                                <nav aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination justify-content-end pagination-primary">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                        </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- pagination with active and disabled state--> */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PaginationActiveDisabled}</h5>
                            </div>
                            <div className="card-body">
                                <Pagination aria-label="Page navigation" className="pagination pagination-primary">
                                    <PaginationItem disabled>
                                        <PaginationLink href="#javascript">
                                            {Previous}
                                        </PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"1"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#javascript">
                                            {"2"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"3"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink last href="#javascript" >
                                            {Next}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </div>
                    {/* <!-- pagination Color--> */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PaginationColor}</h5>
                            </div>
                            <div className="card-body">
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-primary">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-secondary">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-success">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                        </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-info">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                <nav className="m-b-30" aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-warning">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                                <nav aria-label="Page navigation example">
                                    <Pagination aria-label="Page navigation" className="pagination pagination-danger">
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {Previous}
                                            </PaginationLink>
                                        </PaginationItem>

                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"1"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"2"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#javascript">
                                                {"3"}
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#javascript" >
                                                {Next}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- pagination sizing--> */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PaginationSizing}</h5>
                            </div>
                            <div className="card-body">
                                {/* <!-- large size pagination--> */}
                                <Pagination size="lg" aria-label="Page navigation example" className="m-b-30 pagination-primary">
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {Previous}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"1"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"2"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"3"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {Next}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                                <Pagination size="sm" aria-label="Page navigation example" className="pagination-primary">
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {Previous}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"1"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"2"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {"3"}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#javascript">
                                            {Next}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PaginationComponent;