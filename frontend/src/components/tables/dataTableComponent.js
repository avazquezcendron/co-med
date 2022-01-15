import React, { Fragment, useState,useMemo,useCallback } from 'react';
import Breadcrumb from '../common/breadcrumb';
import differenceBy from 'lodash/differenceBy';
import {tableData} from '../../data/dummyTableData'
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'

const DataTableComponent = () => {

    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState(tableData);

    const columns = [
        {
            name: 'ID',
            selector: 'id', 
            sortable: true,
            center:true,
          },
        {
          name: 'Name',
          selector: 'name',
          sortable: true,
          center:true,
        },
        {
          name: 'Status',
          selector: 'status',
          sortable: true,
          center:true,
        },
        {
            name: 'Creat_on',
            selector: 'creat_on',
            sortable: true,
            center:true,
          },
      ];
  
    
    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const contextActions = useMemo(() => {
        const handleDelete = () => {
          
          if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
            setToggleCleared(!toggleCleared);
            setData(differenceBy(data, selectedRows, 'name'));
            toast.success("Successfully Deleted !")
          }
        };
    
        return <button key="delete" onClick={handleDelete}>{"Delete"}</button>;
      }, [data, selectedRows, toggleCleared]);


    return (
        <Fragment>
            <Breadcrumb title="Data Tables" parent="Table" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{"Select Multiple and Delete Single Data"}</h5>
                            </div>
                            <div className="card-body datatable-react">
                                <DataTable
                                        columns={columns}
                                        data={data}
                                        striped={true}
                                        center={true}
                                        selectableRows
                                        persistTableHead
                                        contextActions={contextActions}
                                        onSelectedRowsChange={handleRowSelected}
                                        clearSelectedRows={toggleCleared}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
    }
export default DataTableComponent;