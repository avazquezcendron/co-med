import React ,{Fragment ,useEffect} from 'react';
import Breadcrumb from '../common/breadcrumb';
import { DollarSign, MapPin, X, TrendingDown, ArrowUp, ShoppingCart } from 'react-feather';
import Slider from 'react-slick';
import six from  "../../assets/images/user/6.jpg";
import two from "../../assets/images/user/2.png";
import three from "../../assets/images/user/3.jpg";
import four from "../../assets/images/user/4.jpg";
import five from "../../assets/images/user/5.jpg";
import fifteen from "../../assets/images/user/15.png"
import { saleData , saleOptions,incomeData , incomeOptions,profitData,profitOptions, staticData ,staticOptions} from '../../data/default';
import { Line } from 'react-chartjs-2';
import CountUp from 'react-countup';
import {TotalEarning,TotalWebVisitor,TotalSaleProduct,CompanyLoss,Name,Sale,Stock,Categories,AlanaSlacker,PaymentDone,WorkProcess,SaleCompleted,TotalSale,BestSellers,PaymentStatus,BasicInformation,Portfolio,LegalDocument,Interest,ProductInfo,BillingDetails,Logs,Computer,Active,Headphone,Disable,Furniture,Paused,Shoes,OnWay,Review,TotalIncome,ProfileStatus,TotalProfit,ShoppingCarts} from '../../constant'
var Knob = require('knob')// browserify require
var primary = localStorage.getItem('primary_color') || '#4466f2';

const Ecommerce = () => {

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll:1,
      arrows: false,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };

  useEffect(() => {
    var profit = Knob({
      value: 35,
      left: 1,
      angleOffset: 90,
      className: "review",
      thickness: 0.1,
      width: 285,
      height: 285,
      fgColor: primary,
      bgColor: '#f6f7fb',
      lineCap: 'round'
  })
    document.getElementById('profit').appendChild(profit) 
  });

  return (
    <Fragment>
       <Breadcrumb  parent = "Dashboard"   title = "Ecommerce"  />
       <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 xl-100">
              <div className="row">
                <div className="col-md-12 ecommerce-slider" >
                <Slider {...settings}>
                <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                          <DollarSign />
                          <div><span>{TotalEarning}</span></div>
                          <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={72} /></h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                            <MapPin />
                          <div><span>{TotalWebVisitor}</span></div>
                          <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={65} /></h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                          <ShoppingCart />
                          <div><span>{TotalSaleProduct}</span></div>
                          <h4 className="font-primary mb-0">
                            <CountUp className="counter" end={96} />
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                          <TrendingDown />
                          <div><span>{CompanyLoss}</span></div>
                          <h4 className="font-primary mb-0">
                            <CountUp className="counter" end={89} />
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                            <DollarSign />
                          <div><span>{TotalEarning}</span></div>
                          <h4 className="font-primary mb-0">
                            <CountUp className="counter" end={72} />
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                          <MapPin />
                          <div><span>{TotalWebVisitor}</span></div>
                          <h4 className="font-primary mb-0">
                            <CountUp className="counter" end={65} />
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                          <ShoppingCart />
                          <div><span>{TotalSaleProduct}</span></div>
                          <h4 className="font-primary mb-0">
                            <CountUp className="counter" end={96} />  
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="card-body ecommerce-icons text-center">
                          <TrendingDown />
                          <div><span>{CompanyLoss}</span></div>
                          <h4 className="font-primary mb-0">
                            <CountUp className="counter" end={89} />
                          </h4>
                        </div>
                      </div>
                    </div>
                </Slider>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>{TotalSale}</h5>
                    </div>
                    <div className="card-body charts-box">
                      <div className="flot-chart-container">
                        <div className="flot-chart-placeholder" id="graph123">
                          <Line data={saleData} options={saleOptions} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 xl-100">
              <div className="card">
                <div className="card-header">
                  <h5>{BestSellers}</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive sellers">
                    <table className="table table-bordernone">
                      <thead>
                        <tr>
                          <th scope="col">{Name}</th>
                          <th scope="col">{Sale}</th>
                          <th scope="col">{Stock}</th>
                          <th scope="col">{Categories}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-inline-block align-middle">
                              <img className="img-radius img-30 align-top m-r-15 rounded-circle" src={six} alt="" />
                              <div className="d-inline-block">
                                <p>{AlanaSlacker}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{"8956"}</p>
                          </td>
                          <td>
                            <p>{"54"}</p>
                          </td>
                          <td>
                            <p>{"Product No: 1"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-inline-block align-middle">
                              <img className="img-radius img-30 align-top m-r-15 rounded-circle" src={two} alt="" />
                              <div className="d-inline-block">
                                <p>{AlanaSlacker}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{"8956"}</p>
                          </td>
                          <td>
                            <p>{"54"}</p>
                          </td>
                          <td>
                            <p>{"Product No: 1"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-inline-block align-middle">
                              <img className="img-radius img-30 align-top m-r-15 rounded-circle" src={three} alt="" />
                              <div className="d-inline-block">
                                <p>{AlanaSlacker}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{"8956"}</p>
                          </td>
                          <td>
                            <p>{"54"}</p>
                          </td>
                          <td>
                            <p>{"Product No: 1"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-inline-block align-middle">
                              <img className="img-radius img-30 align-top m-r-15 rounded-circle" src={four} alt="" />
                              <div className="d-inline-block">
                                <p>{AlanaSlacker}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{"8956"}</p>
                          </td>
                          <td>
                            <p>{"54"}</p>
                          </td>
                          <td>
                            <p>{"Product No: 1"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-inline-block align-middle">
                              <img className="img-radius img-30 align-top m-r-15 rounded-circle" src={five} alt="" />
                              <div className="d-inline-block">
                                <p>{AlanaSlacker}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{"8956"}</p>
                          </td>
                          <td>
                            <p>{"54"}</p>
                          </td>
                          <td>
                            <p>{"Product No: 1"}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-inline-block align-middle">
                              <img className="img-radius img-30 align-top m-r-15 rounded-circle" src={fifteen} alt="" />
                              <div className="d-inline-block">
                                <p>{AlanaSlacker}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{"8956"}</p>
                          </td>
                          <td>
                            <p>{"54"}</p>
                          </td>
                          <td>
                            <p>{"Product No: 1"}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 xl-50 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="number-widgets">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <h6 className="mb-0">{PaymentStatus}</h6>
                      </div>
                      <div className="radial-bar radial-bar-95 radial-bar-primary" data-label="95%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 xl-50 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="number-widgets">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <h6 className="mb-0">{WorkProcess}</h6>
                      </div>
                      <div className="radial-bar radial-bar-75 radial-bar-primary" data-label="75%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 xl-50 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="number-widgets">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <h6 className="mb-0">{SaleCompleted}</h6>
                      </div>
                      <div className="radial-bar radial-bar-90 radial-bar-primary" data-label="90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 xl-50 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="number-widgets">
                    <div className="media">
                      <div className="media-body align-self-center">
                        <h6 className="mb-0">{PaymentDone}</h6>
                      </div>
                      <div className="radial-bar radial-bar-80 radial-bar-primary" data-label="80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5>{TotalIncome}</h5>
                </div>
                <div className="card-body chart-block ecommerce-income">
                    <Line data={incomeData} options={incomeOptions}  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5>{TotalProfit}</h5>
                </div>
                <div className="card-body chart-block ecommerce-income">
                <Line data={profitData} options={profitOptions}  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 xl-50 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5>{ProfileStatus}</h5>
                </div>
                <div className="card-body height-equal">
                  <div className="progress-block">
                    <div className="progress-title"><span>{BasicInformation}</span><span className="pull-right">15/18</span></div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-block">
                    <div className="progress-title"><span>{Portfolio}</span><span className="pull-right">5/6</span></div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-block">
                    <div className="progress-title"><span>{LegalDocument}</span><span className="pull-right">12/20</span></div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-block">
                    <div className="progress-title"><span>{Interest}</span><span className="pull-right">5/10</span></div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-block">
                    <div className="progress-title"><span>{ProductInfo}</span><span className="pull-right">15/17</span></div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-block mb-0">
                    <div className="progress-title"><span>{BillingDetails}</span><span className="pull-right">2/5</span></div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 xl-50 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5>{Logs}</h5>
                 
                </div>
                <div className="card-body height-equal log-content">
                  <div className="logs-element">
                    <div className="circle-double-odd"></div><span>{"New User Registration"}</span><span className="pull-right">{"14:12"}</span>
                  </div>
                  <div className="logs-element">
                    <div className="circle-double-even"></div><span>{"New sale: souffle."}</span><span className="pull-right">{"19:00"}</span>
                  </div>
                  <div className="logs-element">
                    <div className="circle-double-odd"></div><span>{"14 products added."}</span><span className="pull-right">{"05:22"}</span>
                  </div>
                  <div className="logs-element">
                    <div className="circle-double-even"></div><span>{"New sale: Napole."}</span><span className="pull-right">{"08:45"}</span>
                  </div>
                  <div className="logs-element">
                    <div className="circle-double-odd"></div><span>{"New User Registration"}</span><span className="pull-right">{"06:51"}</span>
                  </div>
                  <div className="logs-element">
                    <div className="circle-double-even"></div><span>{"New User Registration"}</span><span className="pull-right">{"09:42"}</span>
                  </div>
                  <div className="logs-element">
                    <div className="circle-double-odd"></div><span>{"New User Registration"}</span><span className="pull-right">{"10:45"}</span>
                  </div>
                  <div className="logs-element mb-0">
                    <div className="circle-double-even"></div><span>{"New User Registration"}</span><span className="pull-right">{"02:05"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 xl-100">
              <div className="card">
                <div className="card-header">
                  <h5>{"statics"}</h5>
                </div>
                <div className="card-body updating-chart height-equal">
                  <div className="upadates text-center">
                    <h2 className="font-primary">
                      <DollarSign />
                      <span> <CountUp className="counter" end={89.65} />{"89.68"} </span>
                      <ArrowUp />
                    </h2>
                    <p>{"Week2 +"}<span><CountUp className="counter" end={15.44} />{"15.44"}</span></p>
                  </div>
                  <div className="flot-chart-container">
                    <div className="flot-chart-placeholder" id="updating-data-morris-chart">
                        <Line data={staticData} options={staticOptions}  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 xl-50">
              <div className="card">
                <div className="card-header">
                  <h5>{ShoppingCarts}</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive shopping-table text-center">
                    <table className="table table-bordernone">
                      <thead>
                        <tr>
                          <th scope="col">{"No"}</th>
                          <th scope="col">{"Product"}</th>
                          <th scope="col">{"Quantity"}</th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col">{"Amount"}</th>
                          <th scope="col">{"Delete"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{"1"}</td>
                          <td>{Computer}</td>
                          <td>{"5"}</td>
                          <td>
                            <button className="btn btn-primary btn-pill">{Active}</button>
                          </td>
                          <td>{"15000"}</td>
                          <td>
                            <X />
                          </td>
                        </tr>
                        <tr>
                          <td>{"2"}</td>
                          <td>{Headphone}</td>
                          <td>{"8"}</td>
                          <td>
                            <button className="btn btn-primary btn-pill">{Disable}</button>
                          </td>
                          <td>{"8000"}</td>
                          <td>
                            <X /></td>
                        </tr>
                        <tr>
                          <td>{"3"}</td>
                          <td>{Furniture}</td>
                          <td>{"3"}</td>
                          <td>
                            <button className="btn btn-primary btn-pill">{Paused}</button>
                          </td>
                          <td>{"12000"}</td>
                          <td><X /></td>
                        </tr>
                        <tr>
                          <td>{"4"}</td>
                          <td>{Shoes}</td>
                          <td>{"9"}</td>
                          <td>
                            <button className="btn btn-primary btn-pill">{OnWay}</button>
                          </td>
                          <td>{"5500"}</td>
                          <td>
                            <X />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 xl-50">
              <div className="card">
                <div className="card-header">
                  <h5>{Review}</h5>
                </div>
                <div className="card-body">
                  <div className="text-center knob-block">
                    <div className="knob" id="profit">
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

export default Ecommerce;