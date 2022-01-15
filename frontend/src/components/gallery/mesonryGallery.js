import React, { Fragment,useEffect,useState } from 'react'
import Masonry from 'react-masonry-css';
import Breadcrumb from '../common/breadcrumb';
import axios from 'axios'
import { MasonryGallery } from '../../constant';

const MesonryGallery = () => {

    const [masonryImg,setMasonryImg] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/masonry.json`).then((response) => {
            setMasonryImg(response.data);
        })
    },[])

    return (
        <Fragment>
            <Breadcrumb parent="Gallery" title="Masonry Gallery" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MasonryGallery}</h5>
                            </div>
                            <div className="card-body">
                                <Masonry
                                    breakpointCols={3}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column">
                                    {masonryImg.map((element, index) =>
                                        <li key={index} ><img src={require(`../../assets/images/${element.src}`)} style={{ width: '100%' }} alt="" /></li>
                                    )}
                                </Masonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default MesonryGallery;