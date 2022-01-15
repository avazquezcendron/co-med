import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Breadcrumb from '../../common/breadcrumb';
import { Grid, List, ChevronDown } from 'react-feather';
import banner from '../../../assets/images/ecommerce/banner.jpg';
import errorImg from '../../../assets/images/search-not-found.png';
import Modal from 'react-responsive-modal';
import { getVisibleproducts } from '../../../services/index';
import Carousal from './filters/carousal';
import AllFilters from './filters/allfilters';
import {SORT_BY} from '../../../redux/actionTypes'
import  {watchfetchProducts} from "../../../redux/ecommerce/product/action"
import { Filters,ShowingProducts,NotFoundData,ProductDetails,Quantity,AddToCart,ViewDetails,ProductSizeArray } from "../../../constant";
  
const EcommerceApp = (props) => {

  const layoutColumns = 3;
  const data = useSelector(content => content.Product.productItems);
  const filters = useSelector(content => content.Filters);
  const products = getVisibleproducts(data, filters)
  const symbol = useSelector(content => content.Product.symbol);
  const dispatch = useDispatch();

  const [singleProduct, setSingleProduct] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sidebaron, setSidebaron] = useState(true);
  // eslint-disable-next-line
  const [stock, setStock] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [filterSidebar, setFilterSidebar] = useState(true);

  const onCloseModal = () => {
    setOpen(false)
  };

  useEffect(() => {
    dispatch(watchfetchProducts())
  },[dispatch]);

  const filterSortFunc = (event) => {
    dispatch({ type: SORT_BY, sort_by: event })
  }
  
  const gridLayout = () => {
    document.querySelector(".product-wrapper-grid").classList.remove("list-view");
    var elems = document.querySelector(".gridRow").childNodes;
    [].forEach.call(elems, function (el) {
      el.className = '';
      el.classList.add('col-xl-3');
      el.classList.add('col-sm-6');
      el.classList.add('xl-4')
    });
  }
  //Grid Layout View
  const listLayout = () => {
    document.querySelector(".product-wrapper-grid").classList.add("list-view");
    var elems = document.querySelector(".gridRow").childNodes;
    [].forEach.call(elems, function (el) {
      el.className = '';
      el.classList.add('col-xl-12');
    });
  }

  // Layout Column View
  const LayoutView = (layoutColumns) => {
    if (!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
      var elems = document.querySelector(".gridRow").childNodes;
      [].forEach.call(elems, function (el) {
        el.className = '';
        el.classList.add('col-xl-' + layoutColumns);
      });
    }
  }

  const onClickDetailPage = (product) => {
    const id = product.id;
    props.history.push(`${process.env.PUBLIC_URL}/ecommerce/product-detail/${id}`)
  }


  const onClickFilter = () => {
    if (sidebaron) {
      setSidebaron(false)
      document.querySelector(".product-wrapper").classList.add('sidebaron');
    } else {
      setSidebaron(true)
      document.querySelector(".product-wrapper").classList.remove('sidebaron');
    }
  }

  const minusQty = () => {
    if (quantity > 1) {
      setStock('InStock')
      setQuantity(quantity - 1)
    }
  }

  const onOpenModal = (productId) => {
    setOpen(true);
    products.map((product, i) => {
      if (product.id === productId) {
        setSingleProduct(product)
      }
      return 0;
    })
  };


  const plusQty = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1)
    } else {
      setStock('Out of Stock !')
    }
  }

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const addcart = (product, qty) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, qty } })
    props.history.push(`${process.env.PUBLIC_URL}/ecommerce/cart/${product.id}`);
  }

  const addWishList = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    props.history.push(`${process.env.PUBLIC_URL}/ecommerce/wishlist/${product.id}`);
  }

  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword)
    dispatch({ type: 'SEARCH_BY', search: keyword })
  }

  return (
    <Fragment>
      <Breadcrumb title="Product" parent="Ecommerce" />
      <div className="container-fluid product-wrapper">
        <div className="product-grid">
          <div className="feature-products">
            <div className="row">
              <div className="col-md-6 products-total">
                <div className="square-product-setting d-inline-block">
                  <a className="icon-grid grid-layout-view " href="#javascript" onClick={gridLayout} data-original-title="" title="">
                    <Grid />
                  </a>
                </div>
                <div className="square-product-setting d-inline-block">
                  <a className="icon-grid m-0 list-layout-view" href="#javascript" onClick={listLayout} data-original-title="" title="">
                    <List />
                  </a>
                </div>
                <span className="d-none-productlist filter-toggle" onClick={() => setFilterSidebar(!filterSidebar)}>
                  <h6 className="mb-0">{Filters}
                      <span className="ml-2">
                      <ChevronDown className="toggle-data" />
                    </span>
                  </h6>
                </span>
                <div className="grid-options d-inline-block">
                  <ul>
                    <li>
                      <a className="product-2-layout-view" href="#javascript" onClick={() => LayoutView(6)} data-original-title="" title="">
                        <span className="line-grid line-grid-1 bg-primary"></span>
                        <span className="line-grid line-grid-2 bg-primary"></span>
                      </a>
                    </li>
                    <li>
                      <a className="product-3-layout-view" href="#javascript" onClick={() => LayoutView(4)} data-original-title="" title="">
                        <span className="line-grid line-grid-3 bg-primary"></span>
                        <span className="line-grid line-grid-4 bg-primary"></span>
                        <span className="line-grid line-grid-5 bg-primary"></span>
                      </a>
                    </li>
                    <li>
                      <a className="product-4-layout-view" href="#javascript" onClick={() => LayoutView(3)} data-original-title="" title="">
                        <span className="line-grid line-grid-6 bg-primary"></span>
                        <span className="line-grid line-grid-7 bg-primary"></span>
                        <span className="line-grid line-grid-8 bg-primary"></span>
                        <span className="line-grid line-grid-9 bg-primary"></span>
                      </a>
                    </li>
                    <li>
                      <a className="product-6-layout-view" href="#javascript" onClick={() => LayoutView(2)} data-original-title="" title="">
                        <span className="line-grid line-grid-10 bg-primary"></span>
                        <span className="line-grid line-grid-11 bg-primary"></span>
                        <span className="line-grid line-grid-12 bg-primary"></span>
                        <span className="line-grid line-grid-13 bg-primary"></span>
                        <span className="line-grid line-grid-14 bg-primary"></span>
                        <span className="line-grid line-grid-15 bg-primary"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <span className="f-w-600 m-r-10">{ShowingProducts}</span>
                <div className="select2-drpdwn-product select-options d-inline-block">
                  <select className="form-control btn-square" onChange={(e) => filterSortFunc(e.target.value)}>
                    <option value="">{"Sorting items"}</option>
                    <option value="HighToLow">{"Price: High to Low"}</option>
                    <option value="LowToHigh">{"Price: Low to High"}</option>
                    <option value="Newest">{"Newest Items"}</option>
                    <option value="AscOrder">{"Sort By Name: A To Z"}</option>
                    <option value="DescOrder">{"Sort By Name: Z To A"}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className={`product-sidebar ${filterSidebar ? '' : 'open'}`}>
                  <div className="filter-section">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="mb-0 f-w-600">{Filters}
                                <span className="pull-right">
                            <i className="fa fa-chevron-down toggle-data" onClick={onClickFilter}></i>
                          </span>
                        </h6>
                      </div>
                      <div className="left-filter">
                        <div className="card-body filter-cards-view animate-chk">
                          <AllFilters />
                          <Carousal />
                          <div className="product-filter text-center">
                            <img className="img-fluid banner-product" src={banner} alt="" data-original-title="" title="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-sm-12">
                <form>
                  <div className="form-group m-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="search"
                      defaultValue={searchKeyword}
                      onChange={(e) => handleSearchKeyword(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="product-wrapper-grid">
            {searchKeyword.length > 0 ?
              <div className="search-not-found text-center">
                <div>
                  <img className="img-fluid second-search" src={errorImg} alt="" />
                  <p>{NotFoundData}</p>
                </div>
              </div>
              :
              <div className="row gridRow">
                {products ? products.map((item, i) =>
                  <div className={`${layoutColumns === 3 ? 'col-xl-3 col-sm-6 xl-4 col-grid-box' : 'col-xl-' + layoutColumns}`} key={i}>
                    <div className="card" >
                      <div className="product-box">
                        <div className="product-img">
                          {(item.status === 'sale') ?
                            <span className="ribbon ribbon-danger">
                              {item.status}
                            </span> : ''}
                          {(item.status === '50%') ?
                            <span className="ribbon ribbon-success ribbon-right">
                              {item.status}
                            </span> : ''}
                          {(item.status === 'gift') ?
                            <span className="ribbon ribbon-secondary ribbon-vertical-left">
                              <i className="icon-gift">{item.status}</i>
                            </span> : ''}
                          {(item.status === 'love') ?
                            <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                              <i className="icon-heart">{item.status}</i>
                            </span> : ''}
                          {(item.status === 'Hot') ?
                            <span className="ribbon ribbon ribbon-clip ribbon-warning">
                              {item.status}
                            </span> : ''}
                          <img className="img-fluid" src={require("../../../assets/images/" + item.img)} alt="" />
                          <div className="product-hover">
                            <ul>
                              <li>
                                <button className="btn" type="button" onClick={() => addcart(item, quantity)} >
                                  <i className="icon-shopping-cart"></i>
                                </button>
                              </li>
                              <li>
                                <button className="btn" type="button" data-toggle="modal"
                                  onClick={() => onOpenModal(item.id)} data-target="#exampleModalCenter">
                                  <i className="icon-eye"></i>
                                </button>
                              </li>
                              <li>
                                <button className="btn" type="button" onClick={() => addWishList(item)}>
                                  <i className="icon-heart"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-details">
                          <h5>
                            <a onClick={() => onClickDetailPage(item)} className="font-primary" href="#javascript">
                              {item.name}
                            </a></h5>
                          <div className="product-price">
                            <del>
                              {symbol} {item.discountPrice} </del>
                            {symbol} {item.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : ''}
                <Modal open={open} onClose={onCloseModal} >
                  <div className="modal-body">
                    <div className="product-modal row">
                      <div className="product-img col-md-6">
                        <img className="img-fluid" src={singleProduct.img ? require("../../../assets/images/" + singleProduct.img) : ""} alt="" /></div>
                      <div className="product-details col-md-6 text-left">
                        <h3>{singleProduct.category}</h3>
                        <div className="product-price">
                          <del>{symbol}{singleProduct.discountPrice}
                          </del> {symbol}{singleProduct.price}
                        </div>
                        <div className="product-view">
                          <h6 className="f-w-600">{ProductDetails}</h6>
                          <p className="mb-0">{singleProduct.discription}</p>
                        </div>
                        <div className="product-size">
                          <ul>
                              {ProductSizeArray.map((items,i) => 
                                <li key={i}>
                                  <button className="btn btn-outline-light">{items}</button>
                                </li>
                              )}
                          </ul>
                        </div>
                        <div className="product-qnty">
                          <h6 className="f-w-600">{Quantity}</h6>
                          <fieldset className="qty-box">
                            <div className="input-group">
                              <span className="input-group-prepend">
                                <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                  <i className="fa fa-minus"></i>
                                </button>
                              </span>
                              <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                              <span className="input-group-append">
                                <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">
                                  <i className="fa fa-plus"></i>
                                </button>
                              </span>
                            </div>
                          </fieldset>
                          <div className="addcart-btn">
                            <button className="btn btn-primary m-r-10" type="button" onClick={() => addcart(singleProduct, quantity)}>{AddToCart}</button>
                            <button className="btn btn-success" type="button" onClick={() => onClickDetailPage(singleProduct)}>{ViewDetails}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EcommerceApp;
