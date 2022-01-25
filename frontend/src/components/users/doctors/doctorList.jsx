import React, { Fragment,useState,useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardFooter, Media } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { translate } from 'react-switch-lang';
import axios from 'axios'
import Breadcrumb from '../../common/breadcrumb';
import { supportDB,supportColumns } from '../../../data/support-ticket';

const DoctorList = (props) => {

    const [cards,setCards] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/usercard.json`).then(res => setCards(res.data))
    },[])

    return (
        <Fragment>
            <Breadcrumb parent={props.t('Users')} title={props.t('Doctors')} />
            <Container fluid={true}>
                <Row>
                    <Col md="12" lg="12" xl="12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{props.t("DoctorList")}</h5>
                            </div>
                            <div className="card-body datatable-react">
                                <div className="table-responsive support-table">
                                    <DataTable
                                            columns={supportColumns}
                                            data={supportDB}
                                            striped={true}
                                            center={true}
                                            pagination
                                            highlightOnHover
                                            pointerOnHover
                                            noHeader                                        
                                        />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default translate(DoctorList);