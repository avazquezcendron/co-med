import React, { useState, Fragment } from "react";
import { Server, FolderPlus, FileText } from "react-feather";
import {Scrollable,New,Rating,Forms,TreeView,Replied,Panding} from '../../../constant'
export const SubNavToggle = (props) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [expanded1, setexpanded1] = useState(true);
  const [expanded2, setexpanded2] = useState(false);

  const Advance = () => {
    setexpanded2(false);
    if (isOpen1 === true) {
      setIsOpen1(false);
      setexpanded1(!expanded1);
    } else {
      setIsOpen1(true);
      setIsOpen2(false);
      setexpanded1(!expanded1);
    }
  };
  const Tables = () => {
    setexpanded1(false);
    if (isOpen2 === true) {
      setIsOpen2(false);
      setexpanded2(!expanded2);
    } else {
      setIsOpen1(false);
      setIsOpen2(true);
      setexpanded2(!expanded2);
    }
  };

  return (
    <Fragment>
      <li>
        <button className="btn btn-link text-muted" data-toggle="collapse" data-target="#advance"  onClick={Advance} aria-expanded={expanded1}><FolderPlus/><span> {"Advance"}</span></button>
        <ul className={` collapse ${isOpen1 ? 'show' : ''}`} id="advance">
          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{Scrollable}</a></li>
          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{TreeView}</a></li>
          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{Rating}</a></li>
        </ul>
      </li>
      <li><a href="#javascript"><FileText/><span> {Forms}</span></a></li>
      <li>
        <button className="btn btn-link text-muted" data-toggle="collapse" data-target="#tabels"  onClick={Tables} aria-expanded={expanded2}><Server/> {"Tables"}</button>
        <ul className={`collapse ${isOpen2 ? 'show' : ''}`} id="tabels" data-parent="#accordionoc">
          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{New}</a></li>
          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{Replied}</a></li>
          <li className="pl-navs-inline"><a href="#javascript"><i className="fa fa-angle-right"></i>{Panding}</a></li>
        </ul>
      </li>
    </Fragment>
  );
};
