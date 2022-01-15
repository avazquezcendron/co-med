import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import card from '../../../assets/images/ecommerce/card.png';
import masterCard from '../../../assets/images/ecommerce/mastercard.png';
import visa from '../../../assets/images/ecommerce/visa.png';
import paypal from '../../../assets/images/ecommerce/paypal.png';
import { CreditCard, DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit, COD, EMI, BankName, SelectCard, SelectDuration,NetBanking } from "../../../constant";

const Payment = () => {
    return (
        <Fragment>
            <Breadcrumb title="Payment Details" parent="Ecommerce" />
            <div className="container-fluid credit-card">
            <div className="row">
              {/* <!-- Individual column searching (text inputs) Starts--> */}
              <div className="col-xl-8">
                <div className="card height-equal">
                  <div className="card-header">
                    <h5>{CreditCard}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 text-center"><img className="img-fluid" src={card} alt="" /></div>
                      <div className="col-md-8">
                        <form className="theme-form mega-form">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Card number" />
                          </div>
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="First Name" />
                          </div>
                          <div className="form-group">
                            <input className="form-control" type="date" />
                          </div>
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Full Name" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Individual column searching (text inputs) Ends-->
              <!-- Debit Card Starts--> */}
              <div className="col-xl-4 col-lg-6 debit-card">
                <div className="card height-equal">
                  <div className="card-header">
                    <h5>{DebitCard}</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form e-commerce-form row">
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="Full name here" />
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="text" placeholder="Card number" />
                      </div>
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="CVV number" />
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="text" placeholder="CVC" />
                      </div>
                      <div className="col-12">
                        <label className="col-form-label p-t-0">{ExpirationDate}</label>
                      </div>
                      <div className="form-group col-6 p-r-0">
                        <select className="form-control" size="1">
                          {SelectMonth.map((months,i) => 
                            <option key={i}>{months}</option>
                          )}
                        </select>
                      </div>
                      <div className="form-group col-6">
                        <select className="form-control" size="1">
                          {SelectYear.map((years,i) => 
                           <option key={i}>{years}</option>
                          )}
                        </select>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary-gradien btn-block" type="button">{Submit}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Debit Card Ends-->
              <!-- COD Starts--> */}
              <div className="col-xl-4 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{COD}</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form row">
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="First Name" />
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="text" placeholder="Last name" />
                      </div>
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="Pincode" />
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="number" placeholder="Enter mobile number" />
                      </div>
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="State" />
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="text" placeholder="City" />
                      </div>
                      <div className="form-group col-12">
                        <textarea className="form-control" rows="3" placeholder="Address"></textarea>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary-gradien btn-block" type="button">{Submit}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- COD Ends-->
              <!-- EMI Starts--> */}
              <div className="col-xl-4 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{EMI}</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form row">
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="First Name" />
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="text" placeholder="Last name" />
                      </div>
                      <div className="form-group col-6 p-r-0">
                        <input className="form-control" type="text" placeholder="Pincode" />
                      </div>
                      <div className="form-group col-6">
                        <select className="form-control" size="1">
                          {BankName.map((name,i) => 
                            <option key={i}>{name}</option>
                          )}
                        </select>
                      </div>
                      <div className="form-group col-12">
                        <select className="form-control" size="1">
                          {SelectCard.map((card,i) => 
                            <option key={i}>{card}</option>
                          )}
                        </select>
                      </div>
                      <div className="form-group col-12">
                        <select className="form-control" size="1">
                          {SelectDuration.map((duration,i) => 
                            <option key={i}>{duration}</option>
                          )}
                        </select>
                      </div>
                      <div className="form-group col-12">
                        <ul className="payment-opt">
                          <li><img src={masterCard} alt="" /></li>
                          <li><img src={visa} alt="" /></li>
                          <li><img src={paypal} alt="" /></li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary-gradien btn-block" type="button">{Submit}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- EMI Ends-->
              <!-- EMI Starts--> */}
              <div className="col-xl-4 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h5>{NetBanking}</h5>
                  </div>
                  <div className="card-body">
                    <form className="theme-form row">
                      <div className="form-group col-12">
                        <input className="form-control" type="text" placeholder="AC Holder name" />
                      </div>
                      <div className="form-group col-12">
                        <input className="form-control" type="text" placeholder="Account number" />
                      </div>
                      <div className="form-group col-6 p-r-0">
                        <select className="form-control" size="1">
                          {BankName.map((name,i) => 
                          <option key={i}>{name}</option>
                          )}
                        </select>
                      </div>
                      <div className="form-group col-6">
                        <input className="form-control" type="text" placeholder="ICFC code" />
                      </div>
                      <div className="form-group col-12">
                        <input className="form-control" type="number" placeholder="Enter mobile number" />
                      </div>
                      <div className="form-group col-12">
                        <input className="form-control" type="text" placeholder="Other Details" />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary-gradien btn-block" type="button">{Submit}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- EMI Ends--> */}
            </div>
          </div>
        </Fragment>
    );
};

export default Payment;