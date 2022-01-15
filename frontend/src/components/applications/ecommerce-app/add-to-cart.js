import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../common/breadcrumb';
import { getCartTotal } from "../../../services/index";
import {ADD_TO_CART} from '../../../redux/actionTypes'
import { removeFromCart, decrementQty } from '../../../redux/ecommerce/cart/action';
import emptyCart from '../../../assets/images/icon-empty-cart.png';
import { useSelector, useDispatch } from 'react-redux';
import { XCircle } from 'react-feather';
import { CartTitle,CartTableHeader, NewOrders, TotalPrice, ContinueShopping,CheckOut,CartEmpty,ExploreShortlistItems } from '../../../constant';

const AddToCart = () => {
    
    const cart = useSelector(content => content.Cart.cart);
    const symbol = useSelector(content => content.Product.symbol);
    const dispatch = useDispatch();

    const incrementQty = (product, quantity) => {
        dispatch({ type: ADD_TO_CART, payload: { product, quantity } })
    }

    const decrementQuantity = (id) => {
        dispatch(decrementQty(id))
    }

    const removefromcart = (item) => {
        dispatch(removeFromCart(item))
    }

    return (
        <Fragment>
            <Breadcrumb title="Add To Cart" parent="Ecommerce" />
            {
                cart.length > 0 ?
                    <section className="cart-section section-b-space">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{CartTitle}</h5>
                                        </div>
                                        <div className="card-body cart">
                                            <div className="order-history table-responsive wishlist">
                                                <table className="table table-bordernone">
                                                    <thead>
                                                        <tr>
                                                            {CartTableHeader.map((items,i)  => 
                                                                <th key={i}>{items}</th>
                                                            )}
                                                        </tr>
                                                    </thead>

                                                    <tbody >
                                                        <tr className="title-orders">
                                                            <td colSpan="12">{NewOrders}</td>
                                                        </tr>
                                                        {cart.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <img className="img-fluid img-60" src={require("../../../assets/images/" +  item.img)} alt="" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="product-name">
                                                                            <a href="#javascript">{item.category}</a>
                                                                        </div>
                                                                    </td>
                                                                    <td>{symbol}{item.price}</td>
                                                                    <td>
                                                                        <fieldset className="qty-box">
                                                                            <div className="input-group">
                                                                                <span className="input-group-prepend">
                                                                                    <button type="button" className="btn quantity-left-minus" onClick={() => decrementQuantity(item.id)} data-type="minus" data-field="">
                                                                                        <i className="fa fa-angle-left"></i>
                                                                                    </button>
                                                                                </span>
                                                                                <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number" />
                                                                                <span className="input-group-append">
                                                                                    <button type="button" className="btn quantity-right-plus" onClick={() => incrementQty(item, 1)} data-type="plus" data-field="">
                                                                                        <i className="fa fa-angle-right"></i>
                                                                                    </button>
                                                                                </span>
                                                                            </div>
                                                                        </fieldset>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#javascript" onClick={() => removefromcart(item)}><XCircle /></a>
                                                                    </td>
                                                                    <td>{symbol} {item.price * item.qty}</td>
                                                                </tr>

                                                            )
                                                        })}
                                                        <tr>
                                                            <td colSpan="5" className="total-amount"><h6 className="mb-0 f-w-600">{TotalPrice} :</h6></td>
                                                            <td><span>{symbol} {getCartTotal(cart)}</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="5"><Link className="btn btn-primary cart-btn-transform" to={`${process.env.PUBLIC_URL}/ecommerce/product`} >{ContinueShopping}</Link></td>
                                                            <td><Link className="btn btn-primary cart-btn-transform" to={`${process.env.PUBLIC_URL}/ecommerce/checkout/${cart.id}`}>{CheckOut}</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <section className="cart-section section-b-space">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div >
                                        <div className="col-sm-12 empty-cart-cls text-center">
                                            <img src={emptyCart} className="img-fluid mb-4" alt="" />
                                            <h3>
                                                <strong>{CartEmpty}</strong>
                                            </h3>
                                            <h4>{ExploreShortlistItems}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </Fragment >
    );

}

export default AddToCart