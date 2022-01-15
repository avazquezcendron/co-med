import React, { Fragment } from 'react';
import six from '../../../assets/images/user/6.jpg';
import two from '../../../assets/images/user/2.png';
import three from '../../../assets/images/user/3.jpg';
import fifteen  from '../../../assets/images/user/15.png';
import four from '../../../assets/images/user/4.jpg';
import five from '../../../assets/images/user/5.jpg';
import { TeamMembers,JerryPatterson,DesignManager,Etiam,Integer,RosaMatthews,DirectorOfSales,Ipsum,AlvaroAguirre,OfficeAssistant,Praesent,ProgrammerAnalyst,AnneSnyder,SocialWorker,Donec,AlanaSlacker,SystemsEngineer } from "../../../constant";
const UserComponent = () => {
        return (
            <Fragment>
                <div className="tab-content" id="tab-3">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{TeamMembers}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive sellers team-members">
                                        <table className="table table-bordernone">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"Name"}</th>
                                                    <th scope="col">{"Position"}</th>
                                                    <th scope="col">{"Office"}</th>
                                                    <th scope="col">{"E-Mail"}</th>
                                                    <th scope="col">{"Phone"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={six} alt="" />
                                                            <div className="d-inline-block">
                                                                <p>{JerryPatterson}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{DesignManager}</p>
                                                    </td>
                                                    <td>
                                                        <p>{Integer}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"jerry13@gmail.com"}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"+91 264 570 4611"}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={two} alt="" />
                                                            <div className="d-inline-block">
                                                                <p>{RosaMatthews}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{DirectorOfSales}</p>
                                                    </td>
                                                    <td>
                                                        <p>{Ipsum}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"ros456@gmail.com"}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"+01 967 487 1873"}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={three} alt="" />
                                                            <div className="d-inline-block">
                                                                <p>{AlvaroAguirre}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{OfficeAssistant}</p>
                                                    </td>
                                                    <td>
                                                        <p>{Praesent}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"alvar76@gmail.com"}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"+48 724 585 0012"}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={fifteen} alt="" />
                                                            <div className="d-inline-block">
                                                                <p>{JerryPatterson}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{ProgrammerAnalyst}</p>
                                                    </td>
                                                    <td>
                                                        <p>{Ipsum}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"jerry13@gmail.com"}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"+91 264 570 4611"}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={four} alt="" />
                                                            <div className="d-inline-block">
                                                                <p>{AnneSnyder}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{SocialWorker}</p>
                                                    </td>
                                                    <td>
                                                        <p>{Donec}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"annsny@gmail.com"}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"+61 480 087 1175"}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img className="img-radius img-50 align-top m-r-15 rounded-circle" src={five} alt="" />
                                                            <div className="d-inline-block">
                                                                <p>{AlanaSlacker}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{SystemsEngineer}</p>
                                                    </td>
                                                    <td>
                                                        <p>{Etiam}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"alana82@gmail.com"}</p>
                                                    </td>
                                                    <td>
                                                        <p>{"+75 483 761 4680"}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
}

export default UserComponent;