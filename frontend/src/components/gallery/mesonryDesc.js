import React, { Fragment,useState,useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Breadcrumb from '../common/breadcrumb';
import axios from 'axios'
import { PortfolioTitle, MasonryGallery } from '../../constant';

const MesonryDesc = () => {

    const [masonryImg,setMasonryImg] = useState([])
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/masonry.json`).then((response) => {
            setMasonryImg(response.data);
        })
    },[])

    return (
        <Fragment>
            <Breadcrumb parent="Gallery" title="Masonry Gallery With Discription" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MasonryGallery}</h5>
                            </div>
                            <div className="card-body">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid masonry-with-dec"
                                    columnClassName="my-masonry-grid_column"
                                >
                                    {masonryImg.map((element, index) =>
                                        <li key={index} >
                                            <img src={require(`../../assets/images/${element.src}`)} style={{ width: '100%' }} alt="" />
                                            <div className="caption">
                                                <h4>{PortfolioTitle}</h4>
                                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                            </div>
                                        </li>
                                    )}
                                </Masonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MesonryDesc;