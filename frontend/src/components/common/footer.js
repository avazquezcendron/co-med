import React from "react";

const Footer = props => {
    var d = new Date();
    var year = d.getFullYear();
    return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 footer-copyright">
                    <p className="mb-0">{"Copyright " + year + " © Co-Med | Consultorios Médicos San Julián. All Rights Reserved."}</p>
                </div>
                <div className="col-md-6">
                    <p className="pull-right mb-0">{"Made by "}<a href="https://resume.aonikenk.dev/" target="_blank" rel="noreferrer">aonikenk.dev</a>
                        <i className="fa fa-code"></i>
                    </p>
                </div>
            </div>
        </div>
</footer>
)};

export default Footer;