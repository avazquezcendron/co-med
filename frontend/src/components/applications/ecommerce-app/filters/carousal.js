import React from 'react';
import Slider from 'react-slick';
import one from '../../../../assets/images/ecommerce/01.jpg';
import two from '../../../../assets/images/ecommerce/02.jpg';
import three from '../../../../assets/images/ecommerce/03.jpg';
import {NewProducts,FancyShirt,FancyShirtPrice} from '../../../../constant'

const Carousal = (props) => {
    
    var settings = {
      slidesToShow: 1,
      swipeToSlide: false,
      arrows: true,
      dots: false,
    };
    
    return (
      <div>
        <hr />
        <h6 className="f-w-600">{NewProducts}</h6>
        <div className="product-filter pb-0 new-products">
          <div className="owl-carousel owl-theme" id="testimonial">
            <Slider {...settings}>
              <div className="item">
                <div className="product-box row">
                  <div className="product-img col-md-6">
                    <img className="img-fluid" src={one} alt="" data-original-title="" title="" />
                  </div>
                  <div className="product-details col-md-6 text-left">
                    <span>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning"></i>
                    </span>
                    <p className="mb-0">{FancyShirt}</p>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </div>
                </div>
                <div className="product-box row">
                  <div className="product-img col-md-6">
                    <img className="img-fluid" src={two} alt="" data-original-title="" title="" />
                  </div>
                  <div className="product-details col-md-6 text-left">
                    <span>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning"></i>
                    </span>
                    <p className="mb-0">{FancyShirt}</p>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </div>
                </div>
                <div className="product-box row">
                  <div className="product-img col-md-6">
                    <img className="img-fluid" src={three} alt="" data-original-title="" title="" />
                  </div>
                  <div className="product-details col-md-6 text-left">
                    <span>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning mr-1"></i>
                      <i className="fa fa-star font-warning"></i>
                    </span>
                    <p className="mb-0">{FancyShirt}</p>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product-box row">
                  <div className="product-img col-md-6"><img className="img-fluid" src={one} alt="" data-original-title="" title="" /></div>
                  <div className="product-details col-md-6 text-left"><span><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning"></i></span>
                    <p className="mb-0">{FancyShirt}</p>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </div>
                </div>
                <div className="product-box row">
                  <div className="product-img col-md-6"><img className="img-fluid" src={two} alt="" data-original-title="" title="" /></div>
                  <div className="product-details col-md-6 text-left"><span><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning"></i></span>
                    <p className="mb-0">{FancyShirt}</p>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </div>
                </div>
                <div className="product-box row">
                  <div className="product-img col-md-6"><img className="img-fluid" src={three} alt="" data-original-title="" title="" /></div>
                  <div className="product-details col-md-6 text-left"><span><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning mr-1"></i><i className="fa fa-star font-warning"></i></span>
                    <p className="mb-0">{FancyShirt}</p>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
export default Carousal