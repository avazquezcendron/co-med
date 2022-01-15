import React, { useState, Fragment,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../common/breadcrumb';
import { useSelector,useDispatch } from 'react-redux';
import Tablet from './tabset';
import { addToCart,watchfetchSingleProducts } from '../../../../redux/ecommerce/product/action';
import Slider from 'react-slick';
import Ratings from 'react-ratings-declarative'
import { ProductReview, Brand, Availability, AddToCart, BuyNow, ContinueShopping,OutOfStock } from "../../../../constant";

const ProductDetail = (props) => {

    const dispatch = useDispatch()
    const [state, setState] = useState({ nav1: null, nav2: null });
    const [rating,setRating] = useState(0)
    // eslint-disable-next-line
    const [quantity,Setquantity] = useState(1)
    const { nav1, nav2 } = state;
    const singleItem = useSelector(content => content.Product.singleItem)
    const symbol = useSelector(content => content.Product.symbol)
    const slider1 = useRef();
    const slider2 = useRef();
    

    useEffect(() => {
        dispatch(watchfetchSingleProducts())
        setState({
            nav1: slider1.current,
            nav2: slider2.current
          });
          // eslint-disable-next-line 
      } ,[dispatch]);

    const  addcart = (product, qty) => {
        dispatch(addToCart(product, qty));
        props.history.push(`${process.env.PUBLIC_URL}/ecommerce/cart/${product.id}`)
    }

    const buyProduct = (product, qty) => {
        dispatch(addToCart(product, qty)); 
        props.history.push(`${process.env.PUBLIC_URL}/ecommerce/checkout`)
    }

    const changeRating =  (newRating) => {
        setRating(newRating)
    }

    return (
        <Fragment>
            <Breadcrumb title="Product Detail" parent="Ecommerce" />
            <div className="container-fluid">
                <div className="card">
                    <div className="row product-page-main">
                        <div className="col-xl-4">
                            <Slider asNavFor={nav2} arrows= {false} ref={slider => (slider1.current = slider)}
                                className="product-slider">
                                {singleItem.variants ? singleItem.variants.map((item, i) => {
                                    return (
                                        <div className="item" key={i}>
                                            <img src={require("../../../../assets/images/" + item.images)} alt="" className="img-fluid" />
                                        </div>
                                    )
                                }) :
                                    <img src={singleItem.img ? require("../../../../assets/images/" + singleItem.img) : ""} alt="" className="img-fluid" />}
                            </Slider>

                            <Slider asNavFor={nav1}
                                ref={slider => (slider2.current= slider)}
                                slidesToShow={4}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                infinite={true}
                                className="small-slick">
                                {singleItem.variants ? singleItem.variants.map((item, i) => {
                                    return (
                                        <div className="item" key={i}>
                                            <img src={require("../../../../assets/images/" + item.images)} alt="" className="img-fluid" />
                                        </div>
                                    )
                                }) : ''}
                            </Slider>

                        </div>
                        <div className="col-xl-8">
                            <div className="product-page-details">
                                <h5>{singleItem.name}</h5>
                                <div className="d-flex">
                                    <Ratings
                                        rating={rating}
                                        widgetRatedColors="blue"
                                        changeRating={changeRating}
                                    >
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                    </Ratings>
                                    <span>{ProductReview}</span>
                                </div>
                            </div>
                            <hr />
                            <p>{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}</p>
                            <div className="product-price digits">
                                <del>{symbol}{singleItem.discountPrice}    </del>{symbol}{singleItem.price}
                            </div>
                            <hr />
                            <div>
                                <table className="product-page-width">
                                    <tbody>
                                        <tr>
                                            <td>{Brand} :</td>
                                            <td>{singleItem.tags}</td>
                                        </tr>
                                        <tr>
                                            <td>{Availability} :</td>
                                            <td className="in-stock">{singleItem.stock}</td>
                                            <td className="out-of-stock" style={{ display: "none" }}>{OutOfStock}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <ul className="product-color m-t-15">
                                <li className="bg-primary"></li>
                                <li className="bg-secondary"></li>
                                <li className="bg-success"></li>
                                <li className="bg-info"></li>
                                <li className="bg-warning"></li>
                            </ul>
                            <div className="m-t-15">
                                <button className="btn btn-primary-gradien m-r-10" type="button" data-original-title="btn btn-info-gradien" title="" onClick={() => addcart(singleItem, quantity)}>
                                    {AddToCart}
                                </button>
                                <button className="btn btn-success-gradien m-r-10" type="button" data-original-title="btn btn-info-gradien" title="" onClick={() => buyProduct(singleItem, quantity)}>
                                    {BuyNow}
                                </button>
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`} ><button className="btn btn-secondary-gradien" type="button" data-original-title="btn btn-info-gradien" title="">{ContinueShopping}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Tablet />
            </div>
        </Fragment>
    );
}
export default ProductDetail
