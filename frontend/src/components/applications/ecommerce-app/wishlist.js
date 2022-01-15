import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../common/breadcrumb';
import { removeFromWishlist } from '../../../redux/ecommerce/wishlist/action';
import { XCircle } from 'react-feather';
import { useSelector,useDispatch } from 'react-redux';
import { WishlistTitle,WishlistTableHeader,NewOrders,ContinueShopping } from '../../../constant';

const WishlistComponent = () => {

    const dispatch = useDispatch()

    const list = useSelector(content => content.Wishlist.list);
   
    const removefromwishlist = (item) => {
      dispatch(removeFromWishlist(item))
    }
    
    return (
        <Fragment>
            <Breadcrumb title="Wishlist" parent="Ecommerce" />
            {
                list ?
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{WishlistTitle}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="order-history table-responsive wishlist">
                                            <table className="table table-bordernone">
                                                <thead>
                                                    <tr>
                                                        {WishlistTableHeader.map((items,i)  => 
                                                            <th key={i}>{items}</th>
                                                        )}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="title-orders">
                                                        <td colSpan="12">{NewOrders}</td>
                                                    </tr>
                                                    {list.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td><img className="img-fluid img-60" src={require("../../../assets/images/" + item.img)} alt="#" /></td>
                                                                <td>
                                                                    <div className="product-name"><a href="#javascript">{item.name}</a></div>
                                                                </td>
                                                                <td>{item.price}</td>
                                                                <td>{item.stock}</td>
                                                                <td><a href="#javascript" onClick={() => removefromwishlist(item)}><XCircle /></a></td>
                                                            </tr>
                                                        )
                                                    })
                                                    }
                                                    <tr>
                                                        <td colSpan="5"><Link className="btn btn-primary cart-btn-transform" to={`${process.env.PUBLIC_URL}/ecommerce/product`} >{ContinueShopping}</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h1>{"Error"}</h1>
                    </div>
            }
        </Fragment>
    );
}
export default WishlistComponent