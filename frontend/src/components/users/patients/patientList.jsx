import React, { Fragment,useState,useEffect, useMemo } from 'react';
import { Container, Row, Col, FormGroup, CardHeader, CardFooter, Media } from 'reactstrap'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { translate } from 'react-switch-lang';
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import axios from 'axios'
import Breadcrumb from '../../common/breadcrumb';
import DataTableFilterComponent from '../../common/data-table/dataTableFilterComponent';
import { supportDB,supportColumns } from '../../../data/support-ticket';

const PatientList = (props) => {

    const [patients,setPatients] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/patients.json`).then(res => setPatients(res.data))
    }, [])
    
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );
    // const filteredItems = data.filter(
    //   item => item.name && item.name.includes(filterText)
    // );
    const filteredUsers = patients.filter(
        item =>
        {
            // const dataToFilter = { position: item.position, salary: item.salary, office: item.office, email: item.email };
            // return  JSON.stringify(dataToFilter)
            //     .toLowerCase()
            //     .indexOf(filterText.toLowerCase()) !== -1;
            return  JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1;
        }
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText("");
        }
        };

        return (
            <DataTableFilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const customStyles = {
        headRow: {
            style: {
                border: 'none !important',
            },
        },
        headCells: {
            style: {
                color: '#202124  !important',
                fontSize: '14px  !important',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)  !important',
                borderBottomColor: '#FFFFFF  !important',
                borderRadius: '25px  !important',
                outline: '1px solid #FFFFFF  !important',
            },
        },
        pagination: {
            style: {
                border: 'none  !important',
            },
        },
    };
    
    const handleRowClick = (row, event) => {
        props.history.push(`${process.env.PUBLIC_URL}/users/patients/${row.id}`)
    }

    return (
        <Fragment>
            <Breadcrumb parent={props.t('Users')} title={props.t('Patients')} />
            <Container fluid={true}>
                <Row>
                    <Col md="12" lg="12" xl="12">
                        <div className="card">
                            <div className="card-header project-list">
                                <Row>
                                    <Col md="6">
                                        <h5>{props.t("PatientList")}</h5>
                                    </Col>
                                    <Col md="6">
                                        <div className="text-right">
                                            {/* <FormGroup className="mb-0 mr-0"></FormGroup> */}
                                            <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/users/patients/0`}> <PlusCircle/>{props.t('New')}</Link>
                                        </div>
                                    </Col>
                                </Row>                                    
                            </div>
                            <div className="card-body datatable-react">
                                <div className="table-responsive support-table">
                                    <DataTable
                                        columns={supportColumns}
                                        data={filteredUsers}
                                        // striped={true}
                                        // center={true}
                                        pagination
                                        highlightOnHover
                                        pointerOnHover
                                        noHeader
                                        subHeader
                                        subHeaderAlign={'left'}
                                        subHeaderComponent={subHeaderComponent}
                                        paginationPerPage={20}
                                        paginationComponentOptions={paginationComponentOptions}
                                        customStyles={customStyles}
                                        onRowClicked={handleRowClick}
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

export default translate(PatientList);