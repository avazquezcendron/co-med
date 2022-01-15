import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import ChartistGraph from 'react-chartist';
import { bitcoinChartOptions, bitcoinChartData, tradingChartData, tradingChartOptions, ethereumChartData, ethereumChartOptions, marketChartData, marketChartOption, salesChartData, salesChartOptions, doughnutData, doughnutOptions } from '../../../data/default';
import three from '../../../assets/images/user/3.jpg';
import five from '../../../assets/images/user/5.jpg';
import one from '../../../assets/images/user/1.jpg';
import market1 from '../../../assets/images/bitcoin/market-1.jpg';
import market2 from '../../../assets/images/bitcoin/market-2.jpg';
import market3 from '../../../assets/images/bitcoin/market-3.jpg';
import market4 from '../../../assets/images/bitcoin/market-4.jpg';
import { Line, Doughnut } from 'react-chartjs-2';
import bitcoin1 from '../../../assets/images/bitcoin/1.png';
import bitcoin2 from '../../../assets/images/bitcoin/2.png';
import bitcoin3 from '../../../assets/images/bitcoin/3.png';
import chat1 from '../../../assets/images/bitcoin/chat-1.jpg';
import chat2 from '../../../assets/images/bitcoin/chat-2.jpg';
import smiley from '../../../assets/images/smiley.png';
import AccordionComponent from './accordion-component';
import TabsetComponent from './tabset-component';
import { ArrowDown, ArrowUp, DollarSign } from 'react-feather';
import CountUp from 'react-countup';
import {BTC,DASH,ETH,Tranding,MarketValue,Ethereum,Buy,Parchase,Amount,Link1,Link2,Link3,Units,Bid,Today,Total,BuyNow,SellNow,Bitcoin,Limit,ActiveOrder,Status ,SalesStatistics,TotalEarning,TotalTax,BitcoinSale,EthereumSale,Balance,Chat,SEND,Invest,Ripple,Sell,TotalSale} from '../../../constant'

const Crypto = () => {
    const datasetKeyProvider = () => {
        return Math.random();
    }
    return (
        <Fragment>
            <Breadcrumb title="Crypto" parent="Dashboard" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card o-hidden">
                            <div className="card-body">
                                <div className="media bitcoin-graph">
                                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.4 511.4" style={{ enableBackground: "new 0 0 511.4 511.4" }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M418.967,102.891l23.376-21.856c-7.78-8.307-16.096-16.094-24.896-23.312l-20.288,24.752C404.873,88.79,412.158,95.611,418.967,102.891z"></path>
                                                    <path d="M453.527,151.371l28.288-14.944c-5.305-10.06-11.282-19.751-17.888-29.008l-26.064,18.56C443.643,134.086,448.876,142.569,453.527,151.371z"></path>
                                                    <path d="M495.703,167.547v0.016l-30.032,11.04c42.684,116.115-16.843,244.847-132.958,287.531S87.867,449.292,45.182,333.177S62.025,88.33,178.14,45.646c64.467-23.698,136.244-16.51,194.731,19.502l16.816-27.2                                        C269.426-36.042,111.955,1.469,37.965,121.73S1.486,399.463,121.748,473.452s277.733,36.479,351.722-83.783                                        C514.521,322.946,522.715,241.084,495.703,167.547z"></path>
                                                    <path d="M303.367,431.899v-48.816c39.225-4.087,67.711-39.198,63.624-78.423c-2.003-19.228-11.716-36.821-26.92-48.761c17.166-13.524,27.218-34.146,27.296-56c-0.115-36.555-27.663-67.195-64-71.184V79.899h-32v48h-32v-48h-32v48h-64v256h64v48h32                                        v-48h32v48H303.367z M175.367,159.899h120c22.091,0,40,17.909,40,40s-17.909,40-40,40h-120V159.899z M175.367,351.899v-80h120c22.091,0,40,17.909,40,40c0,22.091-17.909,40-40,40H175.367z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="top-bitcoin">
                                        <h5>{BTC}</h5><span>{Bitcoin}</span>
                                    </div>
                                    <div className="media-body">
                                        <div className="bitcoin-content text-right">
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 1h"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowDown className="font-primary" />
                                                    </span> {"0.12"}
                                                    </h6>
                                            </div>
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 24h"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowUp className="font-primary" />
                                                    </span> {"+0.30"}
                                                    </h6>
                                            </div>
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 7d"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowDown className="font-primary" />
                                                    </span> {"-0.20"}
                                                    </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-chart-container">
                                <div className="bitcoinchart-1">
                                    <ChartistGraph data={bitcoinChartData} options={bitcoinChartOptions} type={'Line'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card o-hidden">
                            <div className="card-body">
                                <div className="media bitcoin-graph">
                                    <svg id="Capa_2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 510.8 510.8" style={{ enableBackground: "new 0 0 510.8 510.8" }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M465.099,178.447l30.032-11.024c-3.93-10.682-8.569-21.089-13.888-31.152l-28.304,14.944C457.591,160.013,461.653,169.11,465.099,178.447z"></path>
                                                    <path d="M463.339,107.263c-6.613-9.254-13.829-18.063-21.6-26.368l-23.36,21.856c6.806,7.276,13.124,14.995,18.912,23.104L463.339,107.263z"></path>
                                                    <path d="M504.731,200.079v0.08l-31.248,6.928c26.89,120.808-49.245,240.542-170.053,267.432S62.888,425.274,35.998,304.465C9.107,183.657,85.243,63.924,206.051,37.033c67.091-14.934,137.325,1.747,190.536,45.253l20.272-24.768C307.572-31.651,146.691-15.343,57.522,93.944S-15.34,364.111,93.946,453.281s270.168,72.862,359.337-36.425C502.709,356.281,521.666,276.404,504.731,200.079z"></path>
                                                    <path d="M143.195,266.687l111.6,161.2l111.6-161.2l-111.6-186.016L143.195,266.687z M254.795,371.663l-46.96-67.888l46.96,20.944l46.96-20.944L254.795,371.663z M254.795,289.695l-69.552-30.912l69.552-115.904l69.552,115.904L254.795,289.695z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="top-bitcoin">
                                        <h5>{DASH}</h5><span>{Tranding}</span>
                                    </div>
                                    <div className="media-body">
                                        <div className="bitcoin-content text-right">
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 1h"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowDown className="font-primary" />
                                                    </span> {"0.12"}
                                                    </h6>
                                            </div>
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 24h"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowUp className="font-primary" />
                                                    </span> {"+0.30"}
                                                    </h6>
                                            </div>
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 7d"}
                                                    </h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowDown className="font-primary" />
                                                    </span> {"-0.20"}
                                                    </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-chart-container">
                                <div className="bitcoinchart-2">
                                    <ChartistGraph data={tradingChartData} options={tradingChartOptions} type={'Line'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card o-hidden">
                            <div className="card-body">
                                <div className="media bitcoin-graph">
                                    <svg id="Capa_3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.496 511.496" style={{ enableBackground: "new 0 0 511.496 511.496" }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M495.791,167.563l-30.032,11.04c42.696,116.111-16.819,244.849-132.93,287.544c-116.111,42.696-244.849-16.819-287.544-132.93S62.104,88.369,178.214,45.674c64.469-23.706,136.251-16.523,194.744,19.49                                        l16.816-27.2C269.496-36.048,111.992,1.46,37.981,121.739S1.477,399.521,121.756,473.533c120.279,74.011,277.783,36.504,351.794-83.775C514.62,323.013,522.816,241.123,495.791,167.563z"></path>
                                                    <path d="M453.615,151.355l28.288-14.96c-5.317-10.048-11.293-19.733-17.888-28.992l-26.064,18.576C443.731,134.08,448.964,142.557,453.615,151.355z"></path>
                                                    <path d="M419.055,102.891l23.36-21.872c-7.775-8.306-16.092-16.089-24.896-23.296l-20.256,24.768C404.971,88.8,412.252,95.615,419.055,102.891z"></path>
                                                    <path d="M352.863,309.339l27.696-95.04l0.528-2.464c0.155-1.306,0.235-2.62,0.24-3.936c0-17.673-14.327-32-32-32H191.455v32h157.664l-27.2,93.52l-0.592,2.48H159.455v32h161.872C336.902,335.9,350.215,324.687,352.863,309.339z"></path>
                                                    <rect x="127.455" y="239.899" width="96" height="32"></rect>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="top-bitcoin">
                                        <h5>{ETH}</h5><span>{Ethereum}</span>
                                    </div>
                                    <div className="media-body">
                                        <div className="bitcoin-content text-right">
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 1h"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowDown className="font-primary" />
                                                    </span> {"0.12"}</h6>
                                            </div>
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 24h"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowUp className="font-primary" />
                                                    </span> {"+0.30"}</h6>
                                            </div>
                                            <div className="bitcoin-numbers d-inline-block">
                                                <h6 className="mb-0">{"% 7d"}</h6>
                                                <h6 className="mb-0 font-primary">
                                                    <span>
                                                        <ArrowDown className="font-primary" />
                                                    </span> {"-0.20"}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-chart-container">
                                <div className="bitcoinchart-3">
                                    <ChartistGraph data={ethereumChartData} options={ethereumChartOptions} type={'Line'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-100">
                        <div className="card">
                            <div className="card-header b-l-primary"><h5>{MarketValue}</h5></div>
                            <div className="card-body">
                                <div className="market-chart">
                                    <ChartistGraph data={marketChartData} options={marketChartOption} type={'Bar'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <h5 className="bitcoin-header">{Buy}</h5>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-right right-header-color">
                                            <p className="mb-0">{"USD Balance: $ 5000.00"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="bitcoin-form">
                                    <div className="form-row">
                                        <div className="col-xl-4 mb-3 col-sm-3">
                                            <label className="f-w-600">{Parchase}</label>
                                            <div className="bitcoin-form-dropdown">
                                                <div className="onhover-dropdown">
                                                    <button className="btn f-12" type="button">{Amount} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div"><a className="d-block" href="#javascript">{Link1}</a><a className="d-block" href="#javascript">{Link2}</a><a className="d-block" href="#javascript">{Link3}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 mb-3 col-sm-9">
                                            <label className="f-w-600">{Units}</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-btc font-primary"></i></span></div>
                                                <input className="form-control" id="validationCustomUsername" type="text" aria-describedby="inputGroupPrepend" required="" />
                                                <div className="invalid-feedback">{"Please choose a username."}</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3 col-sm-3">
                                            <label className="f-w-600">{Bid}</label>
                                            <div className="bitcoin-form-dropdown">
                                                <div className="onhover-dropdown">
                                                    <button className="btn f-12" type="button">{Limit} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div"><a className="d-block" href="#javascript">{Link1}</a><a className="d-block" href="#javascript">{Link2}</a><a className="d-block" href="#javascript">{Link3}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 mb-3 col-sm-9">
                                            <label className="f-w-600">{Bid}</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend1"><i className="fa fa-btc font-primary"></i></span></div>
                                                <input className="form-control" id="validationCustomUsername1" type="text" aria-describedby="inputGroupPrepend" required="" />
                                                <div className="invalid-feedback">{"Please choose a username."}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="f-w-600">{Total}</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend2"><i className="fa fa-btc font-primary"></i></span></div>
                                                <input className="form-control" id="validationCustomUsername2" type="text" aria-describedby="inputGroupPrepend" required="" />
                                                <div className="invalid-feedback">{"Please choose a username."}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="btn-bottom">
                                                <button className="btn btn-primary" type="button">{BuyNow}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <h5 className="bitcoin-header">{Sell}</h5>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-right right-header-color">
                                            <p className="mb-0">{"BTC Balance: $ 5000.00"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="bitcoin-form">
                                    <div className="form-row">
                                        <div className="col-xl-4 mb-3 col-sm-3">
                                            <label className="f-w-600">{Sell}</label>
                                            <div className="bitcoin-form-dropdown">
                                                <div className="onhover-dropdown">
                                                    <button className="btn f-12" type="button">{Amount}  <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div"><a className="d-block" href="#javascript">{Link1}</a><a className="d-block" href="#javascript">{Link2}</a><a className="d-block" href="#javascript">{Link3}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 mb-3 col-sm-9">
                                            <label className="f-w-600">{Units}</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend3"><i className="fa fa-btc font-primary"></i></span></div>
                                                <input className="form-control" id="validationCustomUsername3" type="text" aria-describedby="inputGroupPrepend" required="" />
                                                <div className="invalid-feedback">{"Please choose a username."}</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3 col-sm-3">
                                            <label className="f-w-600">{Bid}</label>
                                            <div className="bitcoin-form-dropdown">
                                                <div className="onhover-dropdown">
                                                    <button className="btn f-12" type="button">{Limit} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                                    <div className="onhover-show-div"><a className="d-block" href="#javascript">{Link1}</a><a className="d-block" href="#javascript">{Link2}</a><a className="d-block" href="#javascript">{Link3}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 mb-3 col-sm-9">
                                            <label className="f-w-600">{Bid}</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend5"><i className="fa fa-btc font-primary"></i></span></div>
                                                <input className="form-control" id="validationCustomUsername5" type="text" aria-describedby="inputGroupPrepend" required="" />
                                                <div className="invalid-feedback">{"Please choose a username."}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="f-w-600">{Total}</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text" id="inputGroupPrepend6"><i className="fa fa-btc font-primary"></i></span></div>
                                                <input className="form-control" id="validationCustomUsername6" type="text" aria-describedby="inputGroupPrepend" required="" />
                                                <div className="invalid-feedback">{"Please choose a username."}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="btn-bottom">
                                                <button className="btn btn-primary" type="button">{SellNow}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 xl-50">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <h5>{ActiveOrder}</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive active-order-table">
                                    <table className="table table-bordernone">
                                        <thead>
                                            <tr>
                                                <th scope="col">{"Data"}</th>
                                                <th scope="col">{"Type"}</th>
                                                <th scope="col">{"Customer"}</th>
                                                <th scope="col">{"Price"}</th>
                                                <th scope="col">{"USD"}</th>
                                                <th scope="col">{"Fee(%)"}</th>
                                                <th scope="col">{"Status"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>{"2018-01-31"}</p>
                                                    <p className="mb-0">{"6:51:51"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-pill" type="button">{Buy}</button>
                                                </td>
                                                <td>
                                                    <div className="customers">
                                                        <ul>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={three} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={five} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={one} alt="" /></li>
                                                            <li className="d-inline-block">
                                                                <p className="f-12">{"+10 More"}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{"11900.12"}</p>
                                                </td>
                                                <td>
                                                    <p>{"$ 6979.78"}</p>
                                                </td>
                                                <td>
                                                    <p>{"0.2"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-pill" type="button">{Status}</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>{"2018-01-31"}</p>
                                                    <p className="mb-0">{"06:50:50"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-secondary btn-pill" type="button">{Sell}</button>
                                                </td>
                                                <td>
                                                    <div className="customers">
                                                        <ul>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={three} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={five} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={one} alt="" /></li>
                                                            <li className="d-inline-block">
                                                                <p className="f-12">{"+10 More"}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{"11900.12"}</p>
                                                </td>
                                                <td>
                                                    <p>{"$ 6979.78"}</p>
                                                </td>
                                                <td>
                                                    <p>{"0.2"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-pill" type="button">{Status}</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>{"2018-01-31"}</p>
                                                    <p className="mb-0">{"06:49:51"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-pill" type="button">{Buy}</button>
                                                </td>
                                                <td>
                                                    <div className="customers">
                                                        <ul>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={three} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={five} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={one} alt="" /></li>
                                                            <li className="d-inline-block">
                                                                <p className="f-12">{"+10 More"}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{"11900.12"}</p>
                                                </td>
                                                <td>
                                                    <p>{"$ 6979.78"}</p>
                                                </td>
                                                <td>
                                                    <p>{"0.2"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-pill" type="button">{Status}</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>{"2018-01-31"}</p>
                                                    <p className="mb-0">{"06:50:50"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-secondary btn-pill" type="button">{Sell}</button>
                                                </td>
                                                <td>
                                                    <div className="customers">
                                                        <ul>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={three} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={five} alt="" /></li>
                                                            <li className="d-inline-block"><img className="img-40 rounded-circle" src={one} alt="" /></li>
                                                            <li className="d-inline-block">
                                                                <p className="f-12">{"+10 More"}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{"11900.12"}</p>
                                                </td>
                                                <td>
                                                    <p>{"$ 6979.78"}</p>
                                                </td>
                                                <td>
                                                    <p>{"0.2"}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-pill" type="button">{Status}</button>
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
                            <div className="card-header b-l-primary">
                                <h5>Market News</h5>
                            </div>
                            <div className="card-body">
                                <div className="media markets">
                                    <img src={market1} alt="" />
                                    <div className="media-body">
                                        <h5 className="font-primary">{"03 Jan"}</h5>
                                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}</p>
                                    </div>
                                </div>
                                <div className="media markets"><img src={market2} alt="" />
                                    <div className="media-body">
                                        <h5 className="font-primary">{"03 Jan"}</h5>
                                        <p>
                                            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}</p>
                                    </div>
                                </div>
                                <div className="media markets"><img src={market3} alt="" />
                                    <div className="media-body">
                                        <h5 className="font-primary">{"03 Jan"}</h5>
                                        <p>
                                            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}</p>
                                    </div>
                                </div>
                                <div className="media markets mb-0"><img src={market4} alt="" />
                                    <div className="media-body">
                                        <h5 className="font-primary">{"03 Jan"}</h5>
                                        <p>
                                            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <h5>{SalesStatistics}</h5>
                            </div>
                            <div className="card-body">
                                <div className="show-value-top d-flex pull-right">
                                    <div className="value-left d-inline-block">
                                        <div className="circle-graph bg-primary d-inline-block m-r-5"></div><span>{TotalEarning}</span>
                                    </div>
                                    <div className="value-right d-inline-block">
                                        <div className="circle-graph d-inline-block bg-secondary m-r-5"></div><span>{TotalTax}</span>
                                    </div>
                                </div>
                                <div className="chart-block sales-block">
                                    <Line data={salesChartData} options={salesChartOptions} datasetKeyProvider={datasetKeyProvider} />
                                </div>
                                <div className="row chart-bottom">
                                    <div className="col text-center">
                                        <div className="d-inline-block">
                                            <h5 className="font-primary counter">
                                                <CountUp end={75000} /></h5>
                                            <h6 className="mb-0">{TotalSale}</h6>
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="d-inline-block">
                                            <h5 className="font-primary counter">
                                                <CountUp end={40000} /></h5>
                                            <h6 className="mb-0">{BitcoinSale}</h6>
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="d-inline-block">
                                            <h5 className="font-primary counter">
                                                <CountUp end={35000} /></h5>
                                            <h6 className="mb-0">{EthereumSale}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <TabsetComponent />
                        </div>
                    </div>
                    <div className="col-md-12 xl-100">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body bg-primary">
                                        <div className="icons-section text-center">
                                            <img src={bitcoin1} alt="" />
                                            <h6>{Bitcoin}</h6>
                                            <h5>
                                                <span>
                                                    <DollarSign />
                                                </span>{"760.03"}
                                                    <span className="ml-1">
                                                    <ArrowDown />
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body bg-secondary">
                                        <div className="icons-section text-center">
                                            <img src={bitcoin2} alt="" />
                                            <h6>{Ethereum}</h6>
                                            <h5>
                                                <span>
                                                    <DollarSign />
                                                </span> {"750.03"}
                                                    <span className="ml-1">
                                                    <ArrowUp />
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body bg-primary">
                                        <div className="icons-section text-center">
                                            <img src={bitcoin3} alt="" />
                                            <h6>{Balance}</h6>
                                            <h5>
                                                <span>
                                                    <DollarSign />
                                                </span>{"9,980"}
                                                    <span className="ml-1">
                                                    <ArrowDown />
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <h5>{Chat}</h5>
                            </div>
                            <div className="card-body chat-box">
                                <div className="chat-right-aside bitcoin-chat">
                                    <div className="chat">
                                        <div className="chat-history chat-msg-box custom-scrollbar">
                                            <ul>
                                                <li>
                                                    <div className="message my-message">
                                                        <img className="rounded-circle float-left chat-user-img" src={chat1} alt="" />
                                                        <div className="message-data text-right">
                                                        <span className="message-data-time">{"1:00 pm"}</span></div>
                                                        {"Project has been already finished and I have results to show you."}</div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="message other-message pull-right">
                                                        <img className="rounded-circle float-right chat-user-img" src={chat2} alt="" />
                                                        <div className="message-data"><span className="message-data-time">{"1:08 pm"}</span></div>
                                                        {"Well I am not sure. The rest of the team is not here yet."}</div>
                                                </li>
                                                <li>
                                                    <div className="message my-message mb-0">
                                                        <img className="rounded-circle float-left chat-user-img" src={chat1} alt="" />
                                                        <div className="message-data text-right"><span className="message-data-time">1:12 pm</span></div>
                                                        {"Actually everything was fine. I'm very excited to show this to our team."}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bitcoin-message clearfix">
                                            <div className="row">
                                                <div className="col-xl-12 d-flex">
                                                    <div className="smiley-box bg-primary">
                                                        <div className="picker"><img src={smiley} alt="" /></div>
                                                    </div>
                                                    <div className="input-group text-box">
                                                        <input className="form-control input-txt-bx" id="message-to-send" type="text" name="message-to-send" placeholder="Type a message......" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">{SEND}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 xl-50">
                        <AccordionComponent />
                    </div>
                    <div className="col-xl-4 xl-100">
                        <div className="card">
                            <div className="card-header b-l-primary">
                                <h5>{Invest}</h5>
                            </div>
                            <div className="card-body chart-block">
                                <div className="pull-right right-header invest-dropdown">
                                    <div className="onhover-dropdown">
                                        <button className="btn" type="button">{Today} <span className="pr-0"><i className="fa fa-angle-down"></i></span></button>
                                        <div className="onhover-show-div right-header-dropdown"><a className="d-block" href="#javascript">{Link1}</a><a className="d-block" href="#javascript">{Link2}</a><a className="d-block" href="#javascript">{Link3}</a></div>
                                    </div>
                                </div>
                                <div className="flot-chart-placeholder" id="bitcoin-morris">
                                    <Doughnut data={doughnutData} options={doughnutOptions} height={305} datasetKeyProvider={datasetKeyProvider} />
                                </div>
                                <div className="show-value-top d-flex mb-0 bottom-morris-chart">
                                    <div className="value-left d-inline-block">
                                        <div className="circle-graph bg-primary d-inline-block m-r-5"></div><span>{Bitcoin}</span>
                                    </div>
                                    <div className="value-right d-inline-block">
                                        <div className="circle-graph d-inline-block bg-secondary m-r-5"></div><span>{Ripple}</span>
                                    </div>
                                    <div className="value-third d-inline-block">
                                        <div className="circle-graph d-inline-block bg-light m-r-5"></div><span>{Invest}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Crypto;