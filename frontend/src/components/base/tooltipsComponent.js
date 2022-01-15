import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { UncontrolledTooltip } from 'reactstrap';
import { BasicTooltip,Directions,TooltipOnTop,TooltipOnRight,TooltipOnLeft,TooltipOnBottom,Tooltip,TooltipTitle,HoverMe,Offset,HTMLElements } from "../../constant";

const TooltipsComponent = () => {
    return (
        <Fragment>
            <Breadcrumb  parent="Base" title="Tooltip" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BasicTooltip}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="example-popover btn btn-primary" id="UncontrolledTooltipExample"  >{HoverMe}</button>
                                <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                                   {"Hello world!"}
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{Directions}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary" type="button" id="TooltipTop" data-placement="top" >{TooltipOnTop}</button>
                                <UncontrolledTooltip placement="top" target="TooltipTop">
                                    {"Hello world!"}
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="TooltipRight" data-placement="right" >{TooltipOnRight}</button>
                                <UncontrolledTooltip placement="right" target="TooltipRight" >
                                    {"Hello world!"}
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="TooltipBottom" data-placement="bottom" >{TooltipOnBottom}</button>
                                <UncontrolledTooltip placement="bottom" target="TooltipBottom">
                                    {"Hello world!"}
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="TooltipLeft" data-placement="left">{TooltipOnLeft}</button>
                                <UncontrolledTooltip placement="left" target="TooltipLeft">
                                    {"Hello world!"}
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{HTMLElements}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary" type="button" id="htmlTop" data-placement="top">Click me</button>
                                <UncontrolledTooltip placement="top" target='htmlTop'>
                                    {Tooltip} <b>{"with"}</b> <code>{"HTML"}</code>
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="htmlRight" data-toggle="m-tooltip" data-placement="right" >Click me</button>
                                <UncontrolledTooltip placement="right" target='htmlRight'>
                                    {Tooltip} <b>{"with"}</b> <code>{"HTML"}</code>
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="htmlBottom" data-toggle="m-tooltip" data-placement="bottom" title="" data-html="true" data-content="And here's some amazing &lt;b&gt;HTML&lt;/b&gt; content. It's very &lt;code&gt;engaging&lt;/code&gt;. Right?" data-original-title="Tooltip &lt;b&gt;with&lt;/b&gt; &lt;code&gt;HTML&lt;/code&gt;">Click me</button>
                                <UncontrolledTooltip placement="bottom" target='htmlBottom'>
                                    {Tooltip} <b>{"with"}</b> <code>{"HTML"}</code>
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="htmlLeft" data-toggle="m-tooltip" data-placement="left" >Click me</button>
                                <UncontrolledTooltip placement="left" target='htmlLeft'>
                                    {Tooltip} <b>{"with"}</b> <code>{"HTML"}</code>
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{Offset}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                <button className="btn btn-primary" type="button" id="offsetTop" data-placement="top">0px -20px</button>
                                <UncontrolledTooltip placement="top" target='offsetTop' modifiers={{offset:{offset: '-20px', enabled: true}}}>
                                    {TooltipTitle}
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="offsetRight" data-toggle="m-tooltip" data-placement="right" >20px 0px</button>
                                <UncontrolledTooltip placement="top" target='offsetRight' modifiers={{offset:{offset: '20px', enabled: true}}}>
                                    {TooltipTitle}
                                </UncontrolledTooltip>
                                <button className="btn btn-primary" type="button" id="offsetBottom" data-toggle="m-tooltip" data-placement="bottom" title="" data-html="true" data-content="And here's some amazing &lt;b&gt;HTML&lt;/b&gt; content. It's very &lt;code&gt;engaging&lt;/code&gt;. Right?" data-original-title="Tooltip &lt;b&gt;with&lt;/b&gt; &lt;code&gt;HTML&lt;/code&gt;">-30px -30px</button>
                                <UncontrolledTooltip placement="top" target='offsetBottom' modifiers={{offset:{offset: '-30px', enabled: true}}}>
                                    {TooltipTitle}
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TooltipsComponent;