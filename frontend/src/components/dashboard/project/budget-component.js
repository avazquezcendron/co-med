import React, { Fragment } from 'react';
import one from '../../../assets/images/user/1.jpg';
import four from '../../../assets/images/user/4.jpg';
import seven from '../../../assets/images/user/7.jpg'
import { DollarSign } from 'react-feather';
import { Pie } from 'react-chartjs-2';
import ChartistGraph from 'react-chartist';
import { pieChartData, pieChartOption, spentChart1Data, spentChart2Data, spentChart3Data} from '../../../data/default';
import { CurrentProgress,WebApplication,DesignAndDevelopment,LoginModule,Development,ModuleTesting,Testing,BudgetDistribution,Spent,WeeklySpent,TotalSpent,Remaining,TotalBudget } from "../../../constant";

const BudgetComponent = () => {
        return (
            <Fragment>
                <div className="tab-content" id="tab-2">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{CurrentProgress}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive current-progress">
                                        <table className="table table-bordernone">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={one} alt="" />
                                                            <div className="d-inline-block">
                                                                <h6>{WebApplication}</h6>
                                                                <p>{DesignAndDevelopment}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <span>{"Latest Updated Today at 1:30 PM"}</span>
                                                            <span className="ml-current">
                                                                <i className="fa fa-clock-o"></i>{"10:32"}</span>
                                                            <span className="ml-current">
                                                                <i className="fa fa-comment"></i>{"540"}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="progress sm-progress-bar">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={four} alt="" />
                                                            <div className="d-inline-block">
                                                                <h6>{LoginModule}</h6>
                                                                <p>{Development}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block align-middle"><span>{"Latest Updated Today at 4:00 PM"}</span><span className="ml-current"><i className="fa fa-clock-o"></i>{"1:32"}</span><span className="ml-current"><i className="fa fa-comment"></i>{"700"}</span></div>
                                                    </td>
                                                    <td>
                                                        <div className="progress sm-progress-bar">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={seven} alt="" />
                                                            <div className="d-inline-block">
                                                                <h6>{ModuleTesting}</h6>
                                                                <p>{Testing}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block align-middle"><span>{"Latest Updated Today at 5:45 PM"}</span><span className="ml-current"><i className="fa fa-clock-o"></i>{"11:40"}</span><span className="ml-current"><i className="fa fa-comment"></i>{"425"}</span></div>
                                                    </td>
                                                    <td>
                                                        <div className="progress sm-progress-bar">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100 project-col">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{BudgetDistribution}</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <div className="flot-chart-container budget-chart">
                                        <div className="flot-chart-placeholder" id="default-pie-flot-chart">
                                            <Pie data={pieChartData} options={pieChartOption} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100 project-col">
                            <div className="card">
                                <div className="card-header project-header">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h5>{Spent}</h5>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="select2-drpdwn-project select-options">
                                                <select className="form-control form-control-primary btn-square" name="select">
                                                    <option value="opt1">{"Today"}</option>
                                                    <option value="opt2">{"Yesterday"}</option>
                                                    <option value="opt3">{"Tomorrow"}</option>
                                                    <option value="opt4">{"Monthly"}</option>
                                                    <option value="opt5">{"Weekly"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body spent">
                                    <div className="spent-graph">
                                        <div className="d-flex">
                                            <div className="project-budget">
                                                <h6>{WeeklySpent}</h6>
                                                <h2 className="mb-0"><span>
                                                    <DollarSign /> {"12,5000"}</span></h2>
                                            </div>
                                            <div className="projects-main mb-0">
                                                <div className="xm-mb-peity">
                                                    <ChartistGraph data={spentChart1Data.data} options={spentChart1Data.options} responsiveOptions={spentChart1Data.responsiveOptions} type={'Bar'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body spent">
                                    <div className="spent-graph">
                                        <div className="d-flex">
                                            <div className="project-budget">
                                                <h6>{TotalSpent}</h6>
                                                <h2 className="mb-0"><span>
                                                <DollarSign />{"15,7452"}</span></h2>
                                            </div>
                                            <div className="projects-main mb-0">
                                                <div className="xm-mb-peity">
                                                    <ChartistGraph data={spentChart2Data.data} options={spentChart2Data.options} responsiveOptions={spentChart2Data.responsiveOptions} type={'Bar'} />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body spent">
                                    <div className="spent-graph">
                                        <div className="d-flex">
                                            <div className="project-budget">
                                                <h6>{Remaining}</h6>
                                                <h2 className="mb-0"><span>
                                                <DollarSign />{"18,5438"}</span></h2>
                                            </div>
                                            <div className="projects-main mb-0">
                                                <div className="xm-mb-peity">
                                                    <ChartistGraph data={spentChart3Data.data} options={spentChart3Data.options} responsiveOptions={spentChart3Data.responsiveOptions} type={'Bar'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer spent">
                                    <div className="spent-graph">
                                        <div className="d-flex">
                                            <div className="project-budget m-0">
                                                <h6>{TotalBudget}</h6>
                                                <h2 className="mb-0"><span>
                                                    <DollarSign />{"34,5812"}</span></h2>
                                            </div>
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

export default BudgetComponent;