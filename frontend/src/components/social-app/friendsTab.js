import React, { Fragment,useState,useEffect } from 'react';
import axios from 'axios'
import {Follower,Following,TotalPost} from '../../constant'

const FriendsTab = () => {

    const [cards,setCards] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/usercard.json`).then(res => setCards(res.data))
    },[])

    return (
        <Fragment>
            <div className="row">
                {cards.map((cardItem, i) =>
                <div className="col-md-6 col-lg-6 col-xl-4" key={i}>
                    <div className="card custom-card">
                        <div className="card-header"><img className="img-fluid" src={require(`../../assets/images/${cardItem.card_bg}`)} alt="" /></div>
                        <div className="card-profile"><img className="rounded-circle" src={require(`../../assets/images/${cardItem.avatar}`)} alt="" /></div>
                        <ul className="card-social">
                            <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                        </ul>
                        <div className="text-center profile-details">
                            <h4>{cardItem.name}</h4>
                            <h6>{cardItem.post}</h6>
                        </div>
                        <div className="card-footer row">
                            <div className="col-4 col-sm-4">
                                <h6>{Follower}</h6>
                                <h3 className="counter">{cardItem.follower}</h3>
                            </div>
                            <div className="col-4 col-sm-4">
                                <h6>{Following}</h6>
                                <h3><span className="counter">{cardItem.following}</span>K</h3>
                            </div>
                            <div className="col-4 col-sm-4">
                                <h6>{TotalPost}</h6>
                                <h3><span className="counter">{cardItem.totalPost}</span>M</h3>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </Fragment>
    );
};

export default FriendsTab;