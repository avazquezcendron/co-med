import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import seven from '../../assets/images/user/7.jpg';
import axios from 'axios'
import { MyProfile,Bio,MarkJecno,Designer,Password,Website,Save,EditProfile,Company,Username,UsersCountryMenu,AboutMe,UpdateProfile,UsersTableTitle,FirstName,LastName,Address,EmailAddress,PostalCode,Country, UsersTableHeader,City,Edit,Update,Delete} from '../../constant'
const UserEdit = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`).then(res => setData(res.data))
    },[])

    return (
        <Fragment>
            <Breadcrumb parent="User" title="Edit Profile" />
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{MyProfile}</h4>
                                    <div className="card-options">
                                        <a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-2">
                                            <div className="col-auto"><img className="img-70 rounded-circle" alt="" src={seven} /></div>
                                            <div className="col">
                                                <h3 className="mb-1">{MarkJecno}</h3>
                                                <p className="mb-4">{Designer}</p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <h6 className="form-label">{Bio}</h6>
                                            <textarea className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">{EmailAddress}</label>
                                            <input className="form-control" placeholder="your-email@domain.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">{Password}</label>
                                            <input className="form-control" type="password" defaultValue="password" readOnly />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">{Website}</label>
                                            <input className="form-control" placeholder="http://Uplor .com" />
                                        </div>
                                        <div className="form-footer">
                                            <button className="btn btn-primary btn-block">{Save}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{EditProfile}</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="form-label">{Company}</label>
                                                <input className="form-control" type="text" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">{Username}</label>
                                                <input className="form-control" type="text" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">{EmailAddress}</label>
                                                <input className="form-control" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">{FirstName}</label>
                                                <input className="form-control" type="text" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">{LastName}</label>
                                                <input className="form-control" type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">{Address}</label>
                                                <input className="form-control" type="text" placeholder="Home Address" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <div className="form-group">
                                                <label className="form-label">{City}</label>
                                                <input className="form-control" type="text" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">{PostalCode}</label>
                                                <input className="form-control" type="number" placeholder="ZIP Code" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label className="form-label">{Country}</label>
                                                <select className="form-control btn-square">
                                                    {UsersCountryMenu.map((items,i) => 
                                                        <option key={i}>{items}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <label className="form-label">{AboutMe}</label>
                                                <textarea className="form-control" rows="5" placeholder="Enter About your description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary" type="submit">{UpdateProfile}</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">{UsersTableTitle}</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table card-table table-vcenter text-nowrap">
                                        <thead>
                                            <tr>
                                                {UsersTableHeader.map((items,i) => 
                                                    <th key={i}>{items}</th>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((items,i) => 
                                                <tr key={i}>
                                                <td><a className="text-inherit" href="#javascript">{items.projectName} </a></td>
                                                <td>{items.date}</td>
                                                <td><span className="status-icon bg-success"></span>{items.status}</td>
                                                <td>{items.price}</td>
                                                <td className="text-right">
                                                    <button className="btn btn-primary btn-sm" href="javascript">
                                                        <i className="fa fa-pencil"></i> {Edit}
                                                    </button>
                                                    <button className="btn btn-transparent btn-sm" href="javascript">
                                                        <i className="fa fa-link"></i> {Update}
                                                    </button>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> {Delete}
                                                    </button>
                                                </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default UserEdit;