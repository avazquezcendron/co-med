import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import {Home,Airplay,Box,FileText,Server,Sidebar,Layout,CloudLightning,CreditCard,Sliders,BarChart,Map,GitPullRequest,FolderPlus} from 'react-feather'
import {SubNavToggle} from './NavComponent'
import {DefaultNav,Base,Forms,Dashboard,Widgets,Tables,DropdownExample,ItemBullets,SectionAndSeparator,Layouts,Sidebars,PageLayout,Footers,LogOut,ActiveAndDisabledLinks,InlineNav,SubNav,StaticSubNav,ToggleSubNav,General,Charts,TreeView,Editors,Rating,Scrollable,Advance,Cards,Timeline,Maps} from '../../../constant'

const Navs = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Base" title="Navs"/>
        <Container fluid={true}>
          <Row>
            <Col md="6">
            <Card>
              <CardHeader>
                <h5>{DefaultNav}</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon">
                  <li><a href="#javascript"><Home/><span> {Dashboard}</span></a></li>
                  <li><a href="#javascript"><Airplay/><span> {Widgets}</span></a></li>
                  <li><a href="#javascript"><Box/><span>{Base}</span></a></li>
                  <li><a href="#javascript"><FileText/><span>{Forms}</span></a></li>
                  <li><a href="#javascript"><Server/><span>{Tables}</span></a></li>
                </ul>
                <div className="onhover-dropdown navs-dropdown">
                  <Button  color="primary" className="onhover-dropdown">{DropdownExample} <i className="icon-arrow-down"></i></Button>
                  <div className="onhover-show-div">
                    <ul className="icon-lists navs-icon">
                    <li><a href="#javascript"><Home/><span> {Dashboard}</span></a></li>
                    <li><a href="#javascript"><Airplay/><span> {Widgets}</span></a></li>
                    <li><a href="#javascript"><Box/><span>{Base}</span></a></li>
                    <li><a href="#javascript"><FileText/><span>{Forms}</span></a></li>
                    <li><a href="#javascript"><Server/><span>{Tables}</span></a></li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
          <Card>
              <CardHeader>
                <h5>{ItemBullets}</h5>
              </CardHeader>
              <CardBody>
                <div className="border nav-list">
                  <ul className="nav-list-disc">
                    <li><a href="#javascript"><i className="fa fa-angle-right"></i><span> {Dashboard}</span></a></li>
                    <li><a href="#javascript"><i className="fa fa-angle-right"></i><span> {Widgets}</span></a></li>
                    <li><a href="#javascript"><i className="fa fa-angle-right"></i><span>{Base}</span></a></li>
                    <li><a href="#javascript"><i className="fa fa-angle-right"></i><span>{Forms}</span></a></li>
                    <li><a href="#javascript"><i className="fa fa-angle-right"></i><span>{Tables}</span></a></li>
                  </ul>
                </div>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">{DropdownExample} <i className="icon-arrow-down"></i></Button>
                  <div className="onhover-show-div">
                    <div className="nav-list">
                      <ul className="nav-list-disc">
                        <li><a href="#javascript"><i className="fa fa-angle-right"></i><span> {Dashboard}</span></a></li>
                        <li><a href="#javascript"><i className="fa fa-angle-right"></i><span> {Widgets}</span></a></li>
                        <li><a href="#javascript"><i className="fa fa-angle-right"></i><span>{Base}</span></a></li>
                        <li><a href="#javascript"><i className="fa fa-angle-right"></i><span>{Forms}</span></a></li>
                        <li><a href="#javascript"><i className="fa fa-angle-right"></i><span>{Tables}</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card height-equal">
              <CardHeader>
                <h5>{SectionAndSeparator}</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon">
                  <li>
                    <h5 className="mb-0">{General}</h5>
                  </li>
                  <li><a href="#javascript"><Home/><span> {Dashboard}</span></a></li>
                  <li className="pb-0"><a href="#javascript"><Airplay/><span>{Widgets}</span></a></li>
                  <li className="main-section">
                    <h5 className="mb-0">{Layouts}</h5>
                  </li>
                  <li><a href="#javascript"><Sidebar/><span>{Sidebars}</span></a></li>
                  <li><a href="#javascript"><Layout/><span>{PageLayout}</span></a></li>
                  <li className="pb-0"><a href="#javascript"><CloudLightning/><span>{Footers}</span></a></li>
                  <li className="separator"></li>
                  <li className="pt-0">
                    <Button color="outline-primary" className="btn btn-pill">{LogOut}</Button>
                  </li>
                </ul>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">{DropdownExample} <i className="icon-arrow-down"></i></Button>
                  <div className="onhover-show-div">
                    <ul className="icon-lists navs-icon">
                      <li>
                        <h5 className="mb-0">{General}</h5>
                      </li>
                      <li><a href="#javascript"><Home/><span> {Dashboard}</span></a></li>
                      <li><a href="#javascript"><Airplay/><span> {Widgets}</span></a></li>
                      <li className="main-section">
                        <h5 className="mb-0">{Layouts}</h5>
                      </li>
                      <li><a href="#javascript"><Sidebar/><span>{Sidebars}</span></a></li>
                      <li><a href="#javascript"><Layout/><span>{PageLayout}</span></a></li>
                      <li className="pb-0"><a href="#javascript"><CloudLightning/><span>{Footers}</span></a></li>
                      <li className="separator"></li>
                      <li className="pt-0">
                        <Button color="outline-primary" className="btn btn-pill">{LogOut}</Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
            <Col lg="6">
            <Card className="card height-equal">
              <CardHeader>
                <h5>{ActiveAndDisabledLinks}</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon">
                  <li><a className="active" href="#javascript"><Home/><span> {Dashboard}</span></a></li>
                  <li><a href="#javascript"><Airplay/><span> {Widgets}</span></a></li>
                  <li><a className="disabled" href="#javascript"><Box/><span>{Base}</span></a></li>
                  <li><a href="#javascript"><FileText/><span>{Forms}</span></a></li>
                  <li><a href="#javascript"><Server/><span>{Tables}</span></a></li>
                  <li><a href="#javascript"><CreditCard/><span>{Cards}</span></a></li>
                  <li><a className="disabled" href="#javascript"><Sliders/><span>{Timeline}</span></a></li>
                  <li><a href="#javascript"><BarChart/><span>{Charts}</span></a></li>
                  <li><a href="#javascript"><Map/><span>{Maps}</span></a></li>
                  <li><a href="#javascript"><GitPullRequest/><span>{Editors}</span></a></li>
                </ul>
                <div className="onhover-dropdown navs-dropdown">
                  <Button color="primary" className="onhover-dropdown">{DropdownExample} <i className="icon-arrow-down"></i></Button>
                  <div className="onhover-show-div">
                    <ul className="icon-lists navs-icon">
                      <li><a className="active" href="#javascript"><Home/><span> {Dashboard}</span></a></li>
                      <li><a href="#javascript"><Airplay/><span> {Widgets}</span></a></li>
                      <li><a className="disabled" href="#javascript"><Box/><span>{Base}</span></a></li>
                      <li><a href="#javascript"><FileText/><span>{Forms}</span></a></li>
                      <li><a href="#javascript"><Server/><span>{Tables}</span></a></li>
                      <li><a href="#javascript"><CreditCard/><span>{Cards}</span></a></li>
                      <li><a className="disabled" href="#javascript"><Sliders/><span>{Timeline}</span></a></li>
                      <li><a href="#javascript"><BarChart/><span>{Charts}</span></a></li>
                      <li><a href="#javascript"><Map/><span>{Maps}</span></a></li>
                      <li><a href="#javascript"><GitPullRequest/><span>{Editors}</span></a></li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-xl-6 xl-40" lg="12">
          <Card>
              <CardHeader>
                <h5>{InlineNav}</h5>
              </CardHeader>
              <CardBody>
                <ul className="icon-lists border navs-icon inline-nav">
                  <li><a href="#javascript"><Box/><span>{Base}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"State color"}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"Typography"}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"Grid"}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"Tags & Pills"}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"Progress"}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"Modal"}</span></a></li>
                  <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i><span> {"Alert"}</span></a></li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-xl-6 xl-60" lg="12">
          <Card>
              <CardHeader>
                <h5>{SubNav}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                    <Col lg="6">
                    <div>
                      <h5>{StaticSubNav}</h5>
                    </div>
                    <ul className="icon-lists border navs-icon">
                      <li><a href="#javascript"><Box/><span>{Base}</span></a></li>
                      <li><a href="#javascript"><i data-feather="folder-plus"></i><span><FolderPlus/>{Advance}</span></a>
                        <ul>
                          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{Scrollable}</a></li>
                          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{TreeView}</a></li>
                          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{Rating}</a></li>
                        </ul>
                      </li>
                      <li><a href="#javascript"><FileText/><span>{Forms}</span></a></li>
                      <li><a href="#javascript"><Server/><span>{Tables}</span></a></li>
                    </ul>
                  </Col>
                  <Col lg="6" className="nav-md-mt">
                    <div>
                      <h5>{ToggleSubNav}</h5>
                    </div>
                     <ul className="icon-lists border navs-icon default-according style-1" id="accordionoc">
                    <li><a href="#javascript"><Box/><span>{Base}</span></a></li>
                      <SubNavToggle/>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </Fragment>
    );
}

export default Navs;