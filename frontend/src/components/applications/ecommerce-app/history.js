import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {MoreVertical} from 'react-feather';
import {ShippedOrders,CancelledOrders,OrderHistoryTable,OrdersHistory, NewOrders} from '../../../constant'
import axios from "axios";

const History = () => {

  const [orders,setOrders] = useState([])

   useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/orederhistory.json`).then(res => setOrders(res.data))
    },[])

    return (
        <Fragment>
          <Breadcrumb title="Order History" parent="Ecommerce" />
            <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>{OrdersHistory}</h5>
                  </div>
                  <div className="card-body">
                    <div className="order-history table-responsive">
                      <table className="table table-bordernone">
                        <thead>
                          <tr>
                            {OrderHistoryTable.map((table,i) =>
                            <th scope="col" key={i}>{table}</th>
                            )}
                            <th scope="col"><i className="fa fa-angle-down"></i></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="title-orders">
                            <td>{NewOrders}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {orders.slice(0,3).map((items,i) => 
                            <tr key={i}>
                              <td><img className="img-fluid img-60" src={require(`../../../assets/images/${items.img}`)} alt="#"/></td>
                              <td>
                                <div className="product-name"><a href="#javascript">{items.product}</a>
                                  <div className="order-process"><span className="order-process-circle"></span>{items.prdouctstatus}</div>
                                </div>
                              </td>
                              <td>{items.size}</td>
                              <td>{items.color}</td>
                              <td>{items.articlenumber}</td>
                              <td>{items.units}</td>
                              <td>{items.price}</td>
                              <td><MoreVertical/></td>
                            </tr>
                          )}
                          <tr className="title-orders">
                            <td>{ShippedOrders}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {orders.slice(3,7).map((items,i) => 
                            <tr key={i}>
                            <td><img className="img-fluid img-60" src={require(`../../../assets/images/${items.img}`)} alt="#"/></td>
                            <td>
                              <div className="product-name"><a href="#javascript">{items.product}</a>
                                <div className="order-process"><span className="order-process-circle shipped-order"></span>{items.prdouctstatus}</div>
                              </div>
                            </td>
                            <td>{items.size}</td>
                            <td>{items.color}</td>
                            <td>{items.articlenumber}</td>
                            <td>{items.units}</td>
                            <td>{items.price}</td>
                            <td><MoreVertical/></td>
                          </tr>
                          )}
                          <tr className="title-orders">
                            <td>{CancelledOrders}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          {orders.slice(7,10).map((items,i) => 
                            <tr key={i}>
                            <td><img className="img-fluid img-60" src={require(`../../../assets/images/${items.img}`)} alt="#"/></td>
                            <td>
                              <div className="product-name"><a href="#javascript">{items.product}</a>
                              <div className="order-process"><span className="order-process-circle cancel-order"></span>{items.prdouctstatus}</div>
                              </div>
                            </td>
                            <td>{items.size}</td>
                            <td>{items.color}</td>
                            <td>{items.articlenumber}</td>
                            <td>{items.units}</td>
                            <td>{items.price}</td>
                            <td><MoreVertical/></td>
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

export default History;