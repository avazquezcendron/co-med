import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import four from '../../../assets/images/user/4.jpg';
import one from '../../../assets/images/user/1.jpg';
import two from '../../../assets/images/user/2.png';
import start_conversion from '../../../assets/images/start-conversion.jpg';
import errorImg from '../../../assets/images/search-not-found.png';
import {Picker} from 'emoji-mart'
// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb';
import { SEND_MESSAGE_WATCHER,REPLY_MESSAGE_WATCHER, CREATE_CHAT_WATCHER} from '../../../redux/actionTypes'
import { changeChat,searchMember,watchfetchChatMember,watchfetchChat} from '../../../redux/chat/action'
import {CALL,STATUS,PROFILE,EricaHughes,VincentPorter,Active,Following,Follower,MarkJecno,Send} from '../../../constant'
var images = require.context('../../../assets/images', true);


const Chat = () => {

    const allMembers = useSelector(content => content.ChatApp.allMembers);
    const chats = useSelector(content => content.ChatApp.chats);
    const selectedUser = useSelector(content => content.ChatApp.selectedUser);
    const currentUser = useSelector(content => content.ChatApp.currentUser);
    const online = useSelector(content => content.ChatApp.online);
    const members = useSelector(content => content.ChatApp.members);
    const [showEmojiPicker,setShowEmojiPicker] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(watchfetchChatMember())
        dispatch(watchfetchChat())
    }, [dispatch]);

    const [searchKeyword, setSearchKeyword] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [menuToggle, setMenuToggle] = useState(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const addEmoji = (emoji) =>  {
        const text = `${messageInput}${emoji.native}`;
        setShowEmojiPicker(false);
        setMessageInput(text)
        }
    const changeChatClick = (e, selectedUserId) => {
        handleSearchKeyword('');
        const currentUserId = currentUser.id
        const currentChat = chats.find(x => x.users.includes(currentUser.id) && x.users.includes(selectedUserId))
        if (currentChat) {
            dispatch(changeChat(selectedUserId));
        } else {
            dispatch({type : CREATE_CHAT_WATCHER , currentUserId, selectedUserId, chats})
        }
    }

    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword)
        dispatch(searchMember(keyword))
    }

    const handleMessageChange = (message) => {
        setMessageInput(message)
    }

    const handleMessagePress = (e) => {
        if (e.key === "Enter" || e === "send") {

            var container = document.querySelector(".chat-history");
            setTimeout(function () {
                container.scrollBy({ top: 200, behavior: 'smooth' });
            }, 310)

            let currentUserId = currentUser.id;
            let selectedUserId = selectedUser.id;
            let selectedUserName = selectedUser.name;


            if (messageInput.length > 0) {
                dispatch({type : SEND_MESSAGE_WATCHER, currentUserId, selectedUserId, messageInput, chats, online})
                setMessageInput('');
                setTimeout(() => {
                    const replyMessage = "Hey This is " + selectedUserName + ", Sorry I busy right now, I will text you later";

                    if (selectedUser.online === true)
                        document.querySelector(".status-circle").classList.add('online');

                    selectedUser.online = true;
                    dispatch({type : REPLY_MESSAGE_WATCHER,currentUserId, selectedUserId, replyMessage, chats, online});
                }, 5000);
            }
        }
    }
    const dynamicImage = (image) => {
        return images(`./${image}`);
    }

    const chatMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    const selectedChat = (allMembers && chats && selectedUser) ?
        chats.find(x => x.users.includes(currentUser.id) && x.users.includes(selectedUser.id)) :
        null;

    var activeChat = 0;
    if (selectedUser != null)
        activeChat = selectedUser.id;

    const [activeTab, setActiveTab] = useState('1');
    return (
        (allMembers && chats && selectedUser) ?
            <div>
                <Breadcrumb title="Chat App" parent="Apps" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col call-chat-sidebar col-sm-12">
                            <div className="card">
                                <div className="card-body chat-body">
                                    <div className="chat-box">
                                        <div className="chat-left-aside">
                                            <div className="media">
                                                <img src={dynamicImage(currentUser.thumb)} className="rounded-circle user-image" alt="" />
                                                <div className="about">
                                                    <div className="name f-w-600">{currentUser.name}</div>
                                                    <div className="status">
                                                        {currentUser.status}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="people-list custom-scrollbar" id="people-list">
                                                <div className="search">
                                                    <form className="theme-form">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="search"
                                                                defaultValue={searchKeyword}
                                                                onChange={(e) => handleSearchKeyword(e.target.value)}
                                                            />
                                                            <i className="fa fa-search"></i>
                                                        </div>
                                                    </form>
                                                </div>
                                                 {members.length > 0 ?
                                                    <ul className="list">
                                                        {members.filter(x => x.id !== currentUser.id).map((item, i) => {
                                                            return (
                                                                <li className={`clearfix ${activeChat === item.id ? 'active' : ''}`}
                                                                    key={i} onClick={(e) => changeChatClick(e, item.id)} >
                                                                    <img src={dynamicImage(item.thumb)} className="rounded-circle user-image" alt="" />
                                                                    <div className={`status-circle ${item.online === true ? 'online' : 'offline'}`}></div>
                                                                    <div className="about">
                                                                        <div className="name">{item.name}</div>
                                                                        <div className="status">
                                                                            {item.status}
                                                                        </div>
                                                                    </div>
                                                                </li>);
                                                        })
                                                        }
                                                    </ul>
                                                    :  
                                                    <img className="img-fluid m-auto" src={errorImg} alt=""/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col call-chat-body">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="row chat-box">
                                        <div className="col pr-0 chat-right-aside">
                                            <div className="chat">
                                                <div className="chat-header clearfix">
                                                    <img src={dynamicImage(selectedUser.thumb)} className="rounded-circle" alt="" />
                                                    <div className="about">
                                                        <div className="name">
                                                            {selectedUser.name}
                                                        </div>
                                                        <div className="status digits" >
                                                            {selectedUser.online ? 'online' : selectedUser.lastSeenDate}
                                                        </div>
                                                    </div>
                                                    <ul className="list-inline float-left float-sm-right chat-menu-icons">
                                                        <li className="list-inline-item"><a href="#javascript"><i className="icon-search"></i></a></li>
                                                        <li className="list-inline-item"><a href="#javascript"><i className="icon-clip"></i></a></li>
                                                        <li className="list-inline-item"><a href="#javascript"><i className="icon-headphone-alt"></i></a></li>
                                                        <li className="list-inline-item"><a href="#javascript"><i className="icon-video-camera"></i></a></li>
                                                        <li className="list-inline-item toogle-bar" onClick={() => chatMenuToggle()}><a href="#javascript"><i className="icon-menu"></i></a></li>
                                                    </ul>
                                                </div>

                                                <div className="chat-history chat-msg-box custom-scrollbar" >
                                                    <ul>
                                                        {selectedChat.messages.length > 0 ? selectedChat.messages.map((item, index) => {
                                                            const participators = allMembers.chats.find(x => x.id === item.sender);
                                                            return (
                                                                <li key={index} className="clearfix">
                                                                    <div className={`message my-message ${item.sender !== currentUser.id ? '' : 'float-right'}`}>
                                                                        <img src={dynamicImage(participators.thumb)}
                                                                            className={`rounded-circle ${item.sender !== currentUser.id ? 'float-left' : 'float-right'} chat-user-img img-30`} alt="" />
                                                                        <div className="message-data text-right">
                                                                            <span className="message-data-time">{item.time}</span>
                                                                        </div>
                                                                        {item.text}
                                                                    </div>
                                                                </li>
                                                            );
                                                        }) :
                                                            <div>
                                                                <img className="img-fluid" src={start_conversion} alt="start conversion " />
                                                            </div>
                                                        }
                                                    </ul>

                                                </div>
                                                <div className="chat-message clearfix">
                                                    <div className="row">
                                                        <div className="mb-2">
                                                        {showEmojiPicker ? (
                                                                <Picker set="apple" emojiSize={30} onSelect={addEmoji} />
                                                        ) : null}
                                                        </div>
                                                        <div className="col-xl-12 d-flex">
                                                            <div className="smiley-box bg-primary">
                                                                <div className="picker" onClick={() => toggleEmojiPicker()}><img src={require('../../../assets/images/smiley.png')} className="" alt="" /></div>
                                                            </div>
                                                            <div className="input-group text-box">
                                                                <input
                                                                    type="text"
                                                                    className="form-control input-txt-bx"
                                                                    placeholder="Type a message......"
                                                                    value={messageInput}
                                                                    onKeyPress={(e) => handleMessagePress(e)}
                                                                    onChange={(e) => handleMessageChange(e.target.value)}
                                                                />
                                                                <div className="input-group-append">
                                                                    <button className="btn btn-primary" type="button" onClick={() => handleMessagePress('send')} >{Send}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col pl-0 chat-menu ${menuToggle ? 'show' : ''}`}>
                                            <Nav tabs className="border-tab nav-primary">
                                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                                        {CALL}
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                                    <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                                        {STATUS}
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                                        {PROFILE}
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={activeTab}>
                                                <TabPane tabId="1">
                                                    <div className="people-list">
                                                        <ul className="list digits custom-scrollbar">
                                                            <li className="clearfix"><img className="rounded-circle user-image" src={four} alt="" />
                                                                <div className="about">
                                                                    <div className="name">{EricaHughes}</div>
                                                                    <div className="status"><i className="fa fa-share font-success"></i>  {"5 May, 4:40 PM"}</div>
                                                                </div>
                                                            </li>
                                                            <li className="clearfix"><img className="rounded-circle user-image mt-0" src={one} alt="" />
                                                                <div className="about">
                                                                    <div className="name">{VincentPorter}
                                                                                 <div className="status">
                                                                            <i className="fa fa-reply font-danger"></i>  {"5 May, 5:30 PM"}</div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            {allMembers.chats.filter(x => x.id !== currentUser.id).map((member, i) =>
                                                                <li className="clearfix" key={i} onClick={(e) => changeChatClick(e, member.id)}>
                                                                    <img src={dynamicImage(member.thumb)} className="rounded-circle user-image" alt="" />
                                                                    <div className="about">
                                                                        <div className="name">{member.name}</div>
                                                                        <div className="status">
                                                                            {member.reply}
                                                                            {member.status}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <div className="people-list">
                                                        <div className="search">
                                                            <form className="theme-form">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="text" placeholder="Write Status..." /><i className="fa fa-pencil"></i>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="status">
                                                        <p className="font-dark">{Active}</p>
                                                        <hr />
                                                        <p>
                                                           {" Established fact that a reader will be distracted"}  <i className="icofont icofont-emo-heart-eyes font-danger f-20"></i>
                                                            <i className="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5"></i>
                                                        </p>
                                                        <hr />
                                                        <p>{"Dolore magna aliqua"}  <i className="icofont icofont-emo-rolling-eyes font-success f-20"></i></p>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <div className="user-profile">
                                                        <div className="image">
                                                            <div className="avatar text-center"><img alt="" src={two} /></div>
                                                            <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5"></i></div>
                                                        </div>
                                                        <div className="user-content text-center">
                                                            <h5 className="text-uppercase">{MarkJecno}</h5>
                                                            <div className="social-media">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item"><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                                                                    <li className="list-inline-item"><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                                                                    <li className="list-inline-item"><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                                                                    <li className="list-inline-item"><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                                                                    <li className="list-inline-item"><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <hr />
                                                            <div className="follow text-center">
                                                                <div className="row">
                                                                    <div className="col border-right"><span>{Following}</span>
                                                                        <div className="follow-num">{"236k"}</div>
                                                                    </div>
                                                                    <div className="col"><span>{Follower}</span>
                                                                        <div className="follow-num">{"3691k"}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="text-center digits">
                                                                <p className="mb-0">{"Mark.jecno23@gmail.com"}</p>
                                                                <p className="mb-0">{"+91 365 - 658 - 1236"}</p>
                                                                <p className="mb-0">{"Fax: 123-4560"}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <div className="loading"></div>
    )
}
export default Chat