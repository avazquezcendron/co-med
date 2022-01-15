import React, { Fragment, useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import CountUp from 'react-countup';
import { Navigation, ShoppingBag ,TrendingUp } from 'react-feather';
import { Sparklines ,SparklinesLine } from 'react-sparklines';
import {  marketChartData, marketChartOptions ,EarningChartOptions ,EarningChartData ,liveData,skillData,skillOption,   
          browserData,browserOption,orderData,orderOption, liveOption,financeOption,financeData ,turnoverData ,turnoverOption, MonthlySaleData, MonthlySaleOption ,usesData ,usesOption} from '../../data/widgets';
import {Sale,Projects,Products,MarketingExpenses,Affiliate,Marketing,Advertise,Year,Month,Today,LiveProducts,Turnover,TotalEarning,MonthlySales,Uses,Finance,Investor,Money,Earning,OrderStatus,Complete,Pending,Cancel,SkillStatus,Design,Market,Converse,BrowserUses,WebsiteVisiter} from '../../constant'
import ChartistGraph from 'react-chartist';

var primary = localStorage.getItem('primary_color') || '#4466f299';

const Chart = () => {

    useEffect(() => {
        const controller = new AbortController();
        return () => {
            controller.abort();
          }
    },[]);
    
    return (
        <Fragment>
            <Breadcrumb parent = "Widgets" title ="Chart"/>
            <div className="container-fluid">
            {/* <!-- Chart widget top Start--> */}
            <div className="row">
                    <div className="col-xl-4 col-md-12">
                        <div className="card">
                            <div className="chart-widget-top">
                                <div className="row card-body">
                                    <div className="col-5">
                                        <h5 className="font-primary">{Sale}</h5><span className="num">
                                            <span className="counter">   
                                                <CountUp className="counter" end={90} />
                                            </span>{"%"}<i className="icon-angle-up f-12 ml-1"></i></span>
                                    </div>
                                    <div className="col-7 text-right">
                                        <h4 className="num total-value">{"$"} 
                                            <span className="counter">
                                                <CountUp className="counter ml-1" end={3654} />
                                            </span>{".00"}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="flot-chart-placeholder" id="chart-widget-top-first">
                                    <Sparklines data={[25, 50, 30, 40, 60, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]} margin={5 -5} >
                                        <SparklinesLine color={primary} />
                                    </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="card">
                            <div className="chart-widget-top">
                                <div className="row card-body">
                                    <div className="col-7">
                                        <h5 className="font-primary">{Projects}</h5>
                                        <span className="num"><span className="counter">    
                                            <CountUp className="counter" end={30} />
                                        </span>{"%"}
                                            <i className="icon-angle-up f-12 ml-1"></i>
                                        </span>
                                    </div>
                                    <div className="col-5 text-right">
                                        <h4 className="num total-value counter">
                                            <CountUp className="counter" end={12569} />
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="flot-chart-placeholder" id="chart-widget-top-second">
                                    <Sparklines data={[25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]} margin={5 -5} >
                                        <SparklinesLine color={primary} />
                                    </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                        <div className="card">
                            <div className="chart-widget-top">
                                <div className="row card-body">
                                    <div className="col-8">
                                        <h5 className="font-primary">{Products}</h5>
                                            <span className="num">
                                                <span className="counter">
                                                    <CountUp className="counter" end={68} />
                                                </span>{"%"}
                                                <i className="icon-angle-up f-12 ml-1"></i>
                                            </span>
                                    </div>
                                    <div className="col-4 text-right">
                                        <h4 className="num total-value">
                                            <span className="counter">
                                                <CountUp className="counter" end={99} />
                                            </span>{"M"}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="flot-chart-placeholder" id="chart-widget-top-third">
                                    <Sparklines data={[50, 100, 80, 60, 50, 60, 40, 80, 40, 50, 60, 40, 60, 70, 40, 50, 20]} margin={5 -5} >
                                        <SparklinesLine color={primary} />
                                    </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Chart widget top Ends-->
            <!-- Chart widget with bar chart Start--> */}
            <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="card o-hidden">
                            <div className="bar-chart-widget">
                                <div className="top-content bg-primary">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="bar-chart card-body pb-0" id="chart-bar-widget-first">
                                                <ChartistGraph data={marketChartData} options={marketChartOptions} type={'Bar'} />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="earning-details">
                                                <div className="text-left"><span>{MarketingExpenses}</span>
                                                    <h4 className="mt-1 num mb-0">{"$"} 
                                                        <span className="counter">
                                                            <CountUp className="counter" end={3654} />
                                                        </span>
                                                    </h4>
                                                </div><i className="icon-announcement"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-content card-body">
                                    <div className="row">
                                        <div className="col-4 b-r-light">
                                            <div><span className="num font-primary">{"12%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{Marketing}</span>
                                                <h4 className="num m-0">{"$"}
                                                    <span className="counter color-bottom">
                                                        <CountUp className="counter" end={9313} />
                                                    </span></h4>
                                            </div>
                                        </div>
                                        <div className="col-4 b-r-light">
                                            <div><span className="num font-primary">{"15%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{Affiliate}</span>
                                                <h4 className="num m-0">{"$"}
                                                    <span className="counter color-bottom">
                                                        <CountUp className="counter" end={2314} />
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div><span className="num font-primary">{"34%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{Advertise}</span>
                                                <h4 className="num m-0">{"$"}
                                                    <span className="counter color-bottom">
                                                        <CountUp className="counter" end={4219} /> 
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="card o-hidden">
                            <div className="bar-chart-widget">
                                <div className="top-content bg-primary">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="bar-chart card-body pb-0" id="chart-bar-widget-second">
                                            <ChartistGraph data={EarningChartData} options={EarningChartOptions} type={'Bar'} />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="earning-details">
                                                <div className="text-left"><span>{TotalEarning}</span>
                                                    <h4 className="mt-1 num mb-0">
                                                        <span className="counter">
                                                            <CountUp className="counter" end={3653} /> 
                                                        </span> {"M"}</h4>
                                                </div><i className="icofont icofont-coins"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-content card-body">
                                    <div className="row">
                                        <div className="col-4 b-r-light">
                                            <div><span className="num font-primary">{"12%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{Year}</span>
                                                <h4 className="num m-0">
                                                    <span className="counter color-bottom">
                                                        <CountUp className="counter" end={3659} /> 
                                                    </span>{"M"}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-4 b-r-light">
                                            <div><span className="num font-primary">15%<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{Month}</span>
                                                <h4 className="num m-0">
                                                    <span className="counter color-bottom">
                                                        <CountUp className="counter" end={698} /> 
                                                    </span>{"M"}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div><span className="num font-primary">34%<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{Today}</span>
                                                <h4 className="num m-0">
                                                    <span className="counter color-bottom">
                                                        <CountUp className="counter" end={9361} /> 
                                                    </span>M
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Chart widget with bar chart Ends-->
            <!-- small widgets Start--> */}
            <div className="row">
                    {/* <!-- Live Product chart widget Start--> */}
              <div className="xl-50 col-md-6">
                        <div className="small-chart-widget chart-widgets-small">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{LiveProducts}</h5>
                                </div>
                                <div className="card-body bg-primary">
                                    <div className="chart-container">
                                        <div className="live-products">
                                            <ChartistGraph data={liveData} options={liveOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Live Product chart widget Ends-->
              <!-- Turnover chart widget Start--> */}
              <div className="xl-50 col-md-6">
                        <div className="small-chart-widget chart-widgets-small">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{Turnover}</h5>
                                </div>
                                <div className="card-body bg-secondary">
                                    <div className="chart-container">
                                        <div className="turnover">
                                            <ChartistGraph data={turnoverData} options={turnoverOption} type={'Bar'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Turnover chart widget Ends-->
              <!-- Monthly Sale chart widget Start--> */}
              <div className="xl-50 col-md-6">
                        <div className="small-chart-widget chart-widgets-small">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{MonthlySales}</h5>
                                </div>
                                <div className="card-body bg-secondary">
                                    <div className="chart-container">
                                        <div className="monthly">
                                            <ChartistGraph data={MonthlySaleData} options={MonthlySaleOption} type={'Bar'} />
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Monthly Sale chart widget Ends-->
              <!-- Uses chart widget Start--> */}
              <div className="xl-50 col-md-6">
                        <div className="small-chart-widget chart-widgets-small">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{Uses}</h5>
                                </div>
                                <div className="card-body bg-primary">
                                    <div className="chart-container">
                                        <div className="uses">
                                            <ChartistGraph data={usesData} options={usesOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Uses chart widget Ends--> */}
            </div>
                {/* <!-- small widgets Ends-->
            <!-- status widget Start--> */}
            <div className="row">
                    <div className="col-xl-4 col-lg-12">
                        <div className="status-widget">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-9">
                                            <h5>{Finance}</h5>
                                        </div>
                                        <div className="col-3 text-sm-right">
                                            <Navigation className="text-muted" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="status-details">
                                        <div className="row">
                                            <div className="col-4 text-center"><span>{Investor}</span>
                                                <h4 className="counter mb-0">
                                                    <CountUp className="counter" end={3659} />
                                                </h4>
                                            </div>
                                            <div className="col-4 text-center"><span>{Money}</span>
                                                <h4 className="mb-0">$<span className="counter">
                                                  <CountUp className="counter" end={689} />
                                                </span></h4>
                                            </div>
                                            <div className="col-4 text-center"><span>{Earning}</span>
                                                <h4 className="mb-0"><span className="counter"> 
                                                   <CountUp className="counter" end={89} />
                                                </span>%</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="status-chart bg-primary">
                                    <div className="chart-container">
                                        <div className="flot-chart-placeholder" id="finance-graph">
                                            <ChartistGraph data={financeData} options={financeOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="status-widget">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-9">
                                            <h5>{OrderStatus}</h5>
                                        </div>
                                        <div className="col-3 text-sm-right">
                                            <ShoppingBag className="text-muted"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="status-details">
                                        <div className="row">
                                            <div className="col-4 text-center"><span>{Complete}</span>
                                                <h4 className="mb-0">
                                                    <span className="counter">
                                                        <CountUp className="counter" end={62} />
                                                    </span>%</h4>
                                            </div>
                                            <div className="col-4 text-center"><span>{Pending}</span>
                                                <h4 className="mb-0">
                                                    <span className="counter">    <CountUp className="counter" end={36} /></span>%</h4>
                                            </div>
                                            <div className="col-4 text-center"><span>{Cancel}</span>
                                                <h4 className="mb-0">
                                                    <span className="counter">   
                                                        <CountUp className="counter" end={20} />
                                                    </span>%
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="status-chart bg-secondary">
                                    <div className="chart-container">
                                        <div className="flot-chart-placeholder" id="order-graph">
                                            <ChartistGraph data={orderData} options={orderOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="status-widget">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-9">
                                            <h5>{SkillStatus}</h5>
                                        </div>
                                        <div className="col-3 text-sm-right">
                                            <TrendingUp className="text-muted"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="status-details">
                                        <div className="row">
                                            <div className="col-4 text-center"><span>{Design}</span>
                                                <h4 className="mb-0"><span className="counter">    <CountUp className="counter" end={25} /></span>{"%"}</h4>
                                            </div>
                                            <div className="col-4 text-center"><span>{Market}</span>
                                                <h4 className="mb-0"><span className="counter">    <CountUp className="counter" end={40} /></span>{"%"}</h4>
                                            </div>
                                            <div className="col-4 text-center"><span>{Converse}</span>
                                                <h4 className="mb-0"><span className="counter">    <CountUp className="counter" end={35} /></span>{"%"}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="status-chart bg-primary">
                                    <div className="chart-container">
                                        <div className="flot-chart-placeholder" id="skill-graph">
                                            <ChartistGraph data={skillData} options={skillOption} type={'Line'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- status widget Ends-->
            <!-- Browser uses and website visiter widget Start--> */}
            <div className="row">
                    {/* <!-- browser uses widget chart Start--> */}
              <div className="col-sm-6">
                        <div className="donut-chart-widget">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{BrowserUses}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="chart-container">
                                        <div className="flot-chart-placeholder" id="browser-uses-chart">
                                            <ChartistGraph data={browserData} options={browserOption} type={'Pie'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- browser uses widget chart Ends-->
              <!-- Website visiter widget Start--> */}
              <div className="col-sm-6">
                        <div className="donut-chart-widget">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{WebsiteVisiter}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="chart-container">
                                        <div className="flot-chart-placeholder" id="website-visiter-chart">
                                            <ChartistGraph data={browserData} options={browserOption} type={'Pie'} />
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
};

export default Chart;