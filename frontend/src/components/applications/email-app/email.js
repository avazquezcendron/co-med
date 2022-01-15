import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Breadcrumb from '../../common/breadcrumb';
import user from '../../../assets/images/user/1.jpg';
import email1 from '../../../assets/images/email/1.jpg';
import email2 from '../../../assets/images/email/2.jpg';
import email3 from '../../../assets/images/email/3.jpg';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CKEditors from "react-ckeditor-component";
import {groupBy} from '../../../redux/email/action'
import {UPDATE_EMAIL_TYPES, GET_ALL_EMAIL_ASYN,WATCH_ALL_TYPE_EMAIL, GET_ALL_TYPE_ASYN} from '../../../redux/actionTypes'
import {MARKJENCO,MARKJENCOEMAIL,NEWMAIL,Inbox,AllMail,Sent,Draft,Trash,IMPORTANT,Starred,UNREAD,Spam,OUTBOX,UPDATE,ALERT,NOTES,NoMailFound,NewMessage,To,ATTACHMENTS,DownloadAll,Reply,ReplyAll,Forward,Send,Messages,More,Subject} from '../../../constant'
var images = require.context('../../../assets/images', true);

const Email = () => {

    const dispatch = useDispatch();
    const usersList = useSelector(content => content.EmailApp.allEmails);
    const TypesOfData = useSelector(mailTypes => mailTypes.EmailApp.types);
    const mailData =  [];
    const [singleMailRecord, setSingleMailRecord] = useState({});
    const [compose, setCompose] = useState(true);
    const [dropdownOpen, setOpen] = useState(false);
    const [type, setType] = useState('Inbox');
    const [emailIds, setEmailIds] = useState([]);
    const [checked, setchecked] = useState(false);
    const [selectedFav, setSelectedFav] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    useEffect(() => {
        if(usersList !== null){
        const result = groupBy(usersList, (item) => {
          return [item.type];
        });
        dispatch({type : WATCH_ALL_TYPE_EMAIL,result});
      }
      
     }, [dispatch,usersList]);


    const dynamicImage = (image) => {
        return images(`./${image}`);
    }
    const clickCompose = () => {
        setCompose(true);
    }
    const selectedCompose = (email) => {
        setCompose(false);
        setSingleMailRecord(email);
    }

    const addFavourite = (singleMailRecord) => {
        dispatch({ type: UPDATE_EMAIL_TYPES, payload: singleMailRecord })
    }


    const selectTypes = (types) => {
        setSelectedFav(false)
        setType(types)
    }

    const selectFev = (types) => {
        setSelectedFav(true)
    }

    const moveEmails = (val) => {
        [...document.querySelectorAll('.checkbox_animated')].map((input) => {
            if (input.checked) {
                let fakeInput = {
                    target: {
                        value: input.value,
                        checked: false
                    }
                }
                input.checked = !input.checked;
                selectedmail(fakeInput);
            }
            return null;
        })
        for (var i = 0; i < usersList.length; i++) {
            if (emailIds.includes(usersList[i].id)) {
                usersList[i].type = val;
            }
        }

        var result = groupBy(usersList, function (item) {
            return [item.type];
        });

        dispatch({type : GET_ALL_EMAIL_ASYN, usersList})
        dispatch({ type: GET_ALL_TYPE_ASYN, result })

    }

    const selectedmail = (e, emailID) => {
        const IDs = emailIds;
        setchecked(e.target.checked);
        if (emailIds == null) {
            setEmailIds(mailData)
        } else {
            if (e.target.checked) {
                IDs.push(emailID)
                setEmailIds(IDs)
                const arr = [...new Set(emailIds)];;
                setEmailIds(arr)
            } else {
                setEmailIds(mailData)
            }
        }
    }


    return (
        <Fragment>
            <Breadcrumb title="Email App" parent="Apps" />
            <div className="container-fluid">
                <div className="email-wrap">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="email-left-aside">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="email-app-sidebar">
                                            <div className="media">
                                                <div className="media-size-email">
                                                    <img className="mr-3 rounded-circle img-50" src={user} alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="f-w-600">{MARKJENCO}</h6>
                                                    <p>{MARKJENCOEMAIL}</p>
                                                </div>
                                            </div>
                                            <ul className="nav main-menu" role="tablist">
                                                <li className="nav-item" onClick={clickCompose}>
                                                    <a className="btn-primary btn-block btn-mail" id="pills-darkhome-tab" data-toggle="pill"
                                                        href="#pills-darkhome" role="tab" aria-controls="pills-darkhome"
                                                        aria-selected="true"><i className="icofont icofont-envelope mr-2">
                                                        </i> {NEWMAIL}</a>
                                                </li>
                                                <li className="nav-item" onClick={() => selectTypes('Inbox')}>
                                                    <a className={`show ${type === 'Inbox' ? 'active' : ''}`} id="pills-darkprofile-tab" data-toggle="pill" href="#pills-darkprofile"
                                                        role="tab" aria-controls="pills-darkprofile" aria-selected="false">
                                                        <span className="title">
                                                            <i className="icon-import"></i>
                                                            {Inbox}
                                                        </span>
                                                        <span className="badge pull-right digits">
                                                            ({TypesOfData['Inbox'] ? TypesOfData['Inbox'].length : 0})
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectTypes('AllEmails')}>
                                                    <a href="#javascript" className={`${type === 'AllEmails' ? 'active' : ''}`}>
                                                        <span className="title">
                                                            <i className="icon-folder"></i>
                                                            {AllMail}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectTypes('Sent')}>
                                                    <a href="#javascript" className={`${type === 'Sent' ? 'active' : ''}`}>
                                                        <span className="title">
                                                            <i className="icon-new-window"></i>
                                                            {Sent}
                                                        </span>
                                                        <span className="badge pull-right digits">
                                                            ({TypesOfData['Sent'] ? TypesOfData['Sent'].length : 0})
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectTypes('Draft')}>
                                                    <a href="#javascript" className={`${type === 'Draft' ? 'active' : ''}`}>
                                                        <span className="title">
                                                            <i className="icon-pencil-alt"></i>
                                                            {Draft}
                                                        </span>
                                                        <span className="badge pull-right digits">
                                                            ({TypesOfData['Draft'] ? TypesOfData['Draft'].length : 0})
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectTypes('Trash')}>
                                                    <a href="#javascript" className={`${type === 'Trash' ? 'active' : ''}`}>
                                                        <span className="title">
                                                            <i className="icon-trash"></i>
                                                            {Trash}
                                                        </span>
                                                        <span className="badge pull-right digits">
                                                            ({TypesOfData['Trash'] ? TypesOfData['Trash'].length : 0})
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-info-alt"></i>
                                                            {IMPORTANT}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectFev('favourite')}>
                                                    <a href="#javascript" className={`${type === 'favourite' ? 'active' : ''}`}>
                                                        <span className="title">
                                                            <i className="icon-star"></i>
                                                            {Starred}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr />
                                                </li>
                                                <li onClick={() => selectTypes('Unread')}>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-email"></i>
                                                            {UNREAD}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectTypes('Spam')}>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-export"></i>
                                                            {Spam}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li onClick={() => selectTypes('Outbox')}>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-share"></i>
                                                            {OUTBOX}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-file"></i>
                                                            {UPDATE}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-bell"></i>
                                                            {ALERT}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#javascript">
                                                        <span className="title">
                                                            <i className="icon-notepad"></i>
                                                            {NOTES}
                                                        </span>
                                                        <span className="badge pull-right digits">
                                                            {"(20)"}
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="email-right-aside">
                                <div className="card email-body">
                                    <div className="pr-0 b-r-light">
                                        <div className="email-top">
                                            <div className="row">
                                                <div className="col">
                                                    <h5>{selectedFav ? 'Favourite' : type}</h5>
                                                </div>
                                                <div className="col text-right">
                                                    <div className="dropdown">
                                                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                            <DropdownToggle className="dropbtn" color="primary" caret> {More} </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem onClick={() => moveEmails("draft")}>{Draft}</DropdownItem>
                                                                <DropdownItem onClick={() => moveEmails('trash')}>{Trash}</DropdownItem>
                                                                <DropdownItem onClick={() => moveEmails('spam')}>{Spam}</DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inbox custom-scrollbar">
                                            {
                                                selectedFav ?
                                                    usersList.filter((email) => email.favourite === true).length > 0 ?
                                                        usersList.filter((email) => email.favourite === true).map((list, index) => {
                                                            return (
                                                                <div className="media" key={index} onClick={() => selectedCompose(list)}>
                                                                    <label className="d-block" htmlFor="chk-ani">
                                                                        <input className="checkbox_animated" id="chk-ani"
                                                                            name="chk-ani" type="checkbox" onChange={(e) => selectedmail(e, list.id)} defaultChecked={checked} />
                                                                    </label>
                                                                    <div className="media-size-email">
                                                                        <img className="mr-3 rounded-circle" src={list.image ? dynamicImage(list.image) : ''} alt="" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        <h6>{list.name}  <small><span className="digits">({list.date})</span></small></h6>
                                                                        <p>{list.cc},</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                        :
                                                        <div className="search-not-found text-center ng-star-inserted" >
                                                            <div className="">
                                                                <img alt="" className="second-search" src={images(`./search-not-found.png`)} />
                                                                <p className="mb-0">{NoMailFound}</p>
                                                            </div>
                                                        </div>
                                                    :
                                                    TypesOfData[type] ? TypesOfData[type].map((list, index) => {
                                                        return (
                                                            <div className="media" key={index} onClick={() => selectedCompose(list)}>
                                                                <label className="d-block" htmlFor="chk-ani">
                                                                    <input className="checkbox_animated" id="chk-ani"
                                                                        name="chk-ani" type="checkbox" onChange={(e) => selectedmail(e, list.id)} defaultChecked={checked} />
                                                                </label>
                                                                <div className="media-size-email">
                                                                    <img className="mr-3 rounded-circle" src={list.image ? dynamicImage(list.image) : ''} alt="" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6>{list.name}  <small><span className="digits">({list.date})</span></small></h6>
                                                                    <p>{list.cc},</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    }) :
                                                        type === 'AllEmails' ?
                                                            usersList.map((list, index) => {
                                                                return (
                                                                    <div className="media" key={index} onClick={() => selectedCompose(list)}>
                                                                        <label className="d-block" htmlFor="chk-ani">
                                                                            <input className="checkbox_animated" id="chk-ani"
                                                                                name="chk-ani" type="checkbox" onChange={(e) => selectedmail(e, list.id)} defaultChecked={checked} />
                                                                        </label>
                                                                        <div className="media-size-email">
                                                                            <img className="mr-3 rounded-circle img-60" src={list.image ? dynamicImage(list.image) : ''} alt="" />
                                                                        </div>
                                                                        <div className="media-body">
                                                                            <h6>{list.name}  <small><span className="digits">({list.date})</span></small></h6>
                                                                            <p>{list.cc},</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                            :
                                                            <div className="search-not-found text-center ng-star-inserted" >
                                                                <div className="">
                                                                    <img alt="" className="second-search" src={images(`./search-not-found.png`)} />
                                                                    <p className="mb-0">{NoMailFound}</p>
                                                                </div>
                                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="email-right-aside">
                                <div className="card email-body radius-left">
                                    <div className="pl-0">
                                        <div className="tab-content">
                                            <div className={`tab-pane fade ${compose ? 'active show' : ''}`} id="pills-darkhome" role="tabpanel" aria-labelledby="pills-darkhome-tab">
                                                <div className="email-compose">
                                                    <div className="email-top compose-border">
                                                        <div className="row">
                                                            <div className="col-sm-8 xl-50">
                                                                <h4 className="mb-0">{NewMessage}</h4>
                                                            </div>
                                                            <div className="col-sm-4 btn-middle xl-50">
                                                                <button className="btn btn-primary btn-block btn-mail text-center mb-0 mt-0" type="button"><i className="fa fa-paper-plane mr-2"></i> {Send}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="email-wrapper">
                                                        <form className="theme-form">
                                                            <div className="form-group">
                                                                <label className="col-form-label pt-0" htmlFor="exampleInputEmail1">{To}</label>
                                                                <input className="form-control" id="exampleInputEmail1" type="email" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputPassword1">{Subject}</label>
                                                                <input className="form-control" id="exampleInputPassword1" type="text" />
                                                            </div>
                                                            <div className="form-group mb-0">
                                                                <label className="text-muted">{Messages}</label>
                                                                <CKEditors
                                                                    activeclassName="p10"
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${compose !== true ? 'active show' : ''}`} id="pills-darkprofile" role="tabpanel" aria-labelledby="pills-darkprofile-tab">
                                                <div className="email-content">
                                                    <div className="email-top">
                                                        <div className="row">
                                                            <div className="col-md-6 xl-100 col-sm-12">
                                                                <div className="media">
                                                                    <img className="mr-3 rounded-circle img-50" src={singleMailRecord.image ? dynamicImage(singleMailRecord.image) : ''} alt="" />
                                                                    <div className="media-body">
                                                                        <h6>{singleMailRecord.name} <small><span className="digits">{singleMailRecord.date}</span> <span className="digits">{"6:00"}</span> {"AM"}</small></h6>
                                                                        <p>{singleMailRecord.cc}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-12">
                                                                <div className="float-right d-flex" onClick={() => addFavourite(singleMailRecord)}>
                                                                    <p className="user-emailid">{"Lormlpsa"}<span className="digits">{"23"}</span>{"@company.com"}</p>
                                                                    <i className={`fa fa-star-o f-18 mt-1 ${singleMailRecord.favourite ? 'starred' : ''} `} ></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="email-wrapper">
                                                        <p>{"Hello"}</p>
                                                        <p>{"Dear Sir Good Morning,"}</p>
                                                        <h5>{"Elementum varius nisi vel tempus. Donec eleifend egestas viverra."}</h5>
                                                        <p className="m-b-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor."}</p>
                                                        <p>{"In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit"}</p>
                                                        <hr />
                                                        <div className="d-inline-block">
                                                            <h6 className="text-muted"><i className="icofont icofont-clip"></i> {ATTACHMENTS}</h6><a className="text-muted text-right right-download" href="#javascript"><i className="fa fa-long-arrow-down mr-2"></i>{DownloadAll}</a>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="attachment">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item"><img className="img-fluid" src={email1} alt="" /></li>
                                                                <li className="list-inline-item"><img className="img-fluid" src={email2} alt="" /></li>
                                                                <li className="list-inline-item"><img className="img-fluid" src={email3} alt="" /></li>
                                                            </ul>
                                                        </div>
                                                        <hr />
                                                        <div className="action-wrapper">
                                                            <ul className="actions">
                                                                <li><a className="text-muted" href="#javascript"><i className="fa fa-reply mr-2"></i>{Reply}</a></li>
                                                                <li><a className="text-muted" href="#javascript"><i className="fa fa-reply-all mr-2"></i>{ReplyAll}</a></li>
                                                                <li><a className="text-muted" href="#javascript"><i className="fa fa-share mr-2"></i></a>{Forward}</li>
                                                            </ul>
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
                </div>
            </div>
        </Fragment>
    );
};

export default Email;