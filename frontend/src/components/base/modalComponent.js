import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BasicModal,ModalTitle,SaveChanges,Cancel,DoSomething,VerticallyModal,TooltipsAndPopovers,UsingTheGrid,NewMessage,Message,Recipient,Simple,ScrollingLongContent,VaryingModalContent,SizesModal,LargeModal,SmallModal } from "../../constant";

const ModalComponent = () => {
    const [modal, setModal] = useState();
    const [modal1, setModal1] = useState();
    const [modal2, setModal2] = useState();
    const [modal3, setModal3] = useState();
    const [modal4, setModal4] = useState();
    const [modal5, setModal5] = useState();
    const [modal6, setModal6] = useState();
    const [modal7, setModal7] = useState();
    const [modal8, setModal8] = useState();
    const [modal9, setModal9] = useState();

    const toggle = () => {
        setModal(!modal)
    }
    const toggle1 = () => {
        setModal1(!modal1)
    }
    const toggle2 = () => {
        setModal2(!modal2)
    }
    const toggle3 = () => {
        setModal3(!modal3)
    }
    const toggle4 = () => {
        setModal4(!modal4)
    }
    const toggle5 = () => {
        setModal5(!modal5)
    }
    const toggle6 = () => {
        setModal6(!modal6)
    }
    const toggle7 = () => {
        setModal7(!modal7)
    }
    const toggle8 = () => {
        setModal8(!modal8)
    }
    const toggle9 = () => {
        setModal9(!modal9)
    }

    return (
        <Fragment>
            <Breadcrumb title="Modal" parent="Base" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{BasicModal}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                {/* <!-- Simple demo--> */}
                                <Button color="primary" onClick={toggle}>{Simple}</Button>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>{ModalTitle}</ModalHeader>
                                    <ModalBody>
                                        .....
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                                {/* <!-- Scrolling long content--> */}
                                <Button color="primary" onClick={toggle1}>{ScrollingLongContent}</Button>
                                <Modal isOpen={modal1} toggle={toggle1}>
                                    <ModalHeader toggle={toggle1}>{ModalTitle}</ModalHeader>
                                    <ModalBody>
                                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle1}>{DoSomething}</Button>{' '}
                                        <Button color="secondary" onClick={toggle1}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                                {/* <!-- Vertically centered modal--> */}
                                <Button color="primary" onClick={toggle2}>{VerticallyModal}</Button>
                                <Modal isOpen={modal2} toggle={toggle2} className="modal-body" centered={true}>
                                    <ModalHeader toggle={toggle2}>{ModalTitle}</ModalHeader>
                                    <ModalBody>
                                        {"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}
                                        </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle2}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                                {/* <!-- Tooltips and popovers modal--> */}
                                <Button color="primary" onClick={toggle3}>{TooltipsAndPopovers}</Button>
                                <Modal isOpen={modal3} toggle={toggle3} className="modal-body" centered={true}>
                                    <ModalHeader toggle={toggle3}>{ModalTitle}</ModalHeader>
                                    <ModalBody>
                                        <h5>{"Popover in a modal"}</h5>
                                        <p>{"This"} <a className="btn btn-primary popover-test" href="#javascript" role="button" title="" data-content="Popover body content is set in this attribute." data-container="#exampleModalPopovers" data-original-title="Popover title">{"button"}</a> {"triggers a popover on click."}</p>
                                        <hr />
                                        <h5>{"Tooltips in a modal"}</h5>
                                        <p><a className="tooltip-test" href="#javascript" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">{"This link"}</a> {"and"} <a className="tooltip-test" href="#javascript" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">{"that link"}</a> {"have tooltips on hover."}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle3}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                                {/* <!-- Using the grid modal--> */}
                                <Button color="primary" onClick={toggle4}>{UsingTheGrid}</Button>
                                <Modal isOpen={modal4} toggle={toggle4} className="modal-body" centered={true}>
                                    <ModalHeader toggle={toggle4}>{ModalTitle}</ModalHeader>
                                    <ModalBody className="grid-showcase">
                                        <div className="container-fluid bd-example-row">
                                            <div className="row">
                                                <div className="col-md-4"><span>{".col-md-4"}</span></div>
                                                <div className="col-md-4 ml-auto"><span>{".col-md-4 .ml-auto"}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 ml-auto"><span>{".col-md-3 .ml-auto"}</span></div>
                                                <div className="col-md-2 ml-auto"><span>{".col-md-2 .ml-auto"}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 ml-auto"><span>{".col-md-6 .ml-auto"}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-9"><span>{"Level 1: .col-sm-9"}</span>
                                                    <div className="row">
                                                        <div className="col-8 col-sm-6"><span>{"Level 2: .col-8 .col-sm-6"}</span></div>
                                                        <div className="col-4 col-sm-6"><span>{"Level 2: .col-4 .col-sm-6"}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle4}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{VaryingModalContent}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                {/* < !-- Using Form Modal --> */}
                                <Button color="primary" onClick={toggle5}>{"Open modal for @mdo"}</Button>
                                <Modal isOpen={modal5} toggle={toggle5}>
                                    <ModalHeader toggle={toggle5}>{NewMessage}</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            <div className="form-group">
                                                <label className="col-form-label" htmlFor="recipient-name">{Recipient}:</label>
                                                <input className="form-control" type="text" placeholder="@mdo" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label" htmlFor="message-text">{Message}:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle5}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                                <Button color="primary" onClick={toggle6}>{"Open modal for @fat"}</Button>
                                <Modal isOpen={modal6} toggle={toggle6}>
                                    <ModalHeader toggle={toggle6}>{NewMessage}</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            <div className="form-group">
                                                <label className="col-form-label" htmlFor="recipient-name">{Recipient}:</label>
                                                <input className="form-control" type="text" placeholder="@fat" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label" htmlFor="message-text">{Message}:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle6}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                                <Button color="primary" onClick={toggle7}>{"Open modal for @getbootstrap"}</Button>
                                <Modal isOpen={modal7} toggle={toggle7}>
                                    <ModalHeader toggle={toggle7}>{NewMessage}</ModalHeader>
                                    <ModalBody>
                                        <form>
                                            <div className="form-group">
                                                <label className="col-form-label" htmlFor="recipient-name">{Recipient}:</label>
                                                <input className="form-control" type="text" placeholder="@getbootstrap" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label" htmlFor="message-text">{Message}:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary">{SaveChanges}</Button>
                                        <Button color="secondary" onClick={toggle7}>{Cancel}</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{SizesModal}</h5>
                            </div>
                            <div className="card-body btn-showcase">
                                {/* <!-- Large modal--> */}
                                <Button color="primary" onClick={toggle8}>{LargeModal}</Button>
                                <Modal isOpen={modal8} toggle={toggle8} size="lg">
                                    <ModalHeader toggle={toggle8}>{ModalTitle}</ModalHeader>
                                    <ModalBody>
                                        .....
                                    </ModalBody>
                                </Modal>
                                {/* <!-- Small modal--> */}
                                <Button color="primary" onClick={toggle9}>{SmallModal}</Button>
                                <Modal isOpen={modal9} toggle={toggle9} size="sm">
                                    <ModalHeader toggle={toggle9}>{ModalTitle}</ModalHeader>
                                    <ModalBody>
                                        .....
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
    // }
}

export default ModalComponent;