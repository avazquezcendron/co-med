import React from "react";
import Breadcrumb from "../common/breadcrumb";
import {Headings,Heading1,Heading2,Heading3,Heading4,Heading5,Heading6,SubHeading,VeryThin100,TextColor, Thin300,Normal400,LightNormal600,Bold700,ExtraBold900,DisplayHeadings,Lead,ListingTypography,UnorderList,OrderList,FontawesomeList,ICOIconList,ThemfyList,Blockquotes,SourceTitle,AlignmentsCenter,AlignmentRight} from '../../constant'
const Typography = () => {
  return (
    <div>
      <Breadcrumb parent="Base" title="Typography" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{Headings}</h5>
                <span>
                  {"All HTML headings,"} <code>&lt;{"h1"}&gt;</code> {"through"}{" "}
                  <code>&lt;{"h6"}&gt;</code>{", are available."}
                  </span>
              </div>
              <div className="card-body typography">
                <div className="row">
                  <div className="col-sm-12 col-xl-6">
                    <h1>{"This is a Heading 1"}</h1>
                    <h2>{"This is a Heading 2"}</h2>
                    <h3>{"This is a Heading 3"}</h3>
                    <h4>{"This is a Heading 4"}</h4>
                    <h5>{"This is a Heading 5"}</h5>
                    <h6>{"This is a Heading 6"}</h6>
                  </div>
                  <div className="col-sm-12 col-xl-6">
                    <p className="h1 txt-primary">
                      {Heading1}<small>{SubHeading}</small>
                    </p>
                    <p className="h2 txt-secondary">
                      {Heading2}<small>{SubHeading}</small>
                    </p>
                    <p className="h3 txt-success">
                      {Heading3}<small>{SubHeading}</small>
                    </p>
                    <p className="h4 txt-info">
                      {Heading4}<small>{SubHeading}</small>
                    </p>
                    <p className="h5 txt-warning">
                      {Heading5}<small>{SubHeading}</small>
                    </p>
                    <p className="h6 txt-danger">
                      {Heading6}<small>{SubHeading}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5>{VeryThin100}</h5>
              </div>
              <div className="card-body typography">
                <h1 className="f-w-100">{Heading1}</h1>
                <h2 className="f-w-100">{Heading2}</h2>
                <h3 className="f-w-100">{Heading3}</h3>
                <h4 className="f-w-100">{Heading4}</h4>
                <h5 className="f-w-100">{Heading5}</h5>
                <h6 className="f-w-100">{Heading6}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5>{Thin300}</h5>
              </div>
              <div className="card-body typography">
                <h1 className="f-w-300">{Heading1}</h1>
                <h2 className="f-w-300">{Heading2}</h2>
                <h3 className="f-w-300">{Heading3}</h3>
                <h4 className="f-w-300">{Heading4}</h4>
                <h5 className="f-w-300">{Heading5}</h5>
                <h6 className="f-w-300">{Heading6}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5>{Normal400}</h5>
              </div>
              <div className="card-body typography">
                <h1 className="f-w-400">{Heading1}</h1>
                <h2 className="f-w-400">{Heading2}</h2>
                <h3 className="f-w-400">{Heading3}</h3>
                <h4 className="f-w-400">{Heading4}</h4>
                <h5 className="f-w-400">{Heading5}</h5>
                <h6 className="f-w-400">{Heading6}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5>{LightNormal600}</h5>
              </div>
              <div className="card-body typography">
                <h1 className="f-w-600">{Heading1}</h1>
                <h2 className="f-w-600">{Heading2}</h2>
                <h3 className="f-w-600">{Heading3}</h3>
                <h4 className="f-w-600">{Heading4}</h4>
                <h5 className="f-w-600">{Heading5}</h5>
                <h6 className="f-w-600">{Heading6}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5>{Bold700}</h5>
              </div>
              <div className="card-body typography">
                <h1 className="f-w-700">{Heading1}</h1>
                <h2 className="f-w-700">{Heading2}</h2>
                <h3 className="f-w-700">{Heading3}</h3>
                <h4 className="f-w-700">{Heading4}</h4>
                <h5 className="f-w-700">{Heading5}</h5>
                <h6 className="f-w-700">{Heading6}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5>{ExtraBold900}</h5>
              </div>
              <div className="card-body typography">
                <h1 className="f-w-900">{Heading1}</h1>
                <h2 className="f-w-900">{Heading2}</h2>
                <h3 className="f-w-900">{Heading3}</h3>
                <h4 className="f-w-900">{Heading4}</h4>
                <h5 className="f-w-900">{Heading5}</h5>
                <h6 className="f-w-900">{Heading6}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{Headings}</h5>
                <span>
                 {" Use the included utility classes to recreate the small secondary heading text."}{" "}
                </span>
              </div>
              <div className="card-body typography">
                <h3>
                    {"Fancy display heading"}
                    <small className="text-muted">
                    {"With faded secondary text"}
                    </small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{DisplayHeadings}</h5>
                <span>
                 {" Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a"} <strong>{DisplayHeadings}</strong>
                 {" —a larger, slightly more opinionated heading style."}
                  </span>
              </div>
              <div className="card-body typography">
                <h1 className="display-1">{"Display 1"}</h1>
                <h1 className="display-2">{"Display 2"}</h1>
                <h1 className="display-3">{"Display 3"}</h1>
                <h1 className="display-4">{"Display 4"}</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{Lead}</h5>
                <span>
                  {"Make a paragraph stand out by adding"} <code>{".lead"}</code>.
                  </span>
              </div>
              <div className="card-body">
                <p className="lead">
                  {"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus."}
                  </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{"Inline text elements"}</h5>
                <span>{"Styling for common inline HTML5 elements."}</span>
              </div>
              <div className="card-body">
                <p>
                  {"You can use the mark tag to"}
                    <mark>{"highlight"}</mark> {"text."}
                  </p>
                <p>
                  <del>
                    {"This line of text is meant to be treated as deleted text."}
                    </del>
                </p>
                <p>
                  <s>
                    {'This line of text is meant to be treated as no longer accurate.'}
                    </s>
                </p>
                <p>
                  <ins>
                    {"This line of text is meant to be treated as an addition to the document."}
                    </ins>
                </p>
                <p>
                  <u>{"This line of text will render as underlined"}</u>
                </p>
                <p>
                  <small>
                    {"This line of text is meant to be treated as fine print."}
                    </small>
                </p>
                <p>
                  <strong>{"This line rendered as bold text."}</strong>
                </p>
                <p>
                  <em>{"This line rendered as italicized text."}</em>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>{TextColor}</h5>
                <span>{"You can Give text color by using txt-* class"}</span>
              </div>
              <div className="card-body">
                <p className="txt-primary">
                  {"This is Primary text You can archive this adding"}{" "}
                  <code>{".txt-primary"}</code> {"class"}
                  </p>
                <p className="txt-secondary">
                  {"This is Secondary text You can archive this adding"}{" "}
                  <code>{".txt-secondary"}</code> {"class"}
                  </p>
                <p className="txt-success">
                  {"This is Success text You can archive this adding"}{" "}
                  <code>{".txt-success"}</code> {"class"}
                  </p>
                <p className="txt-info">
                  {"This is Info text You can archive this adding"}{" "}
                  <code>{".txt-info"}</code> {"class"}
                  </p>
                <p className="txt-warning">
                  {"This is Warning text You can archive this adding"}{" "}
                  <code>{".txt-warning"}</code> {"class"}
                  </p>
                <p className="txt-danger">
                  {"This is Danger text You can archive this adding"}{" "}
                  <code>{".txt-danger"}</code> {"class"}
                  </p>
                <p className="txt-dark">
                  {"This is Dark text You can archive this adding"}{" "}
                  <code>{".txt-dark"}</code> {"class"}
                  </p>
                <p className="txt-primary">
                  {"This is Primary text You can archive this adding"}{" "}
                  <code>{".txt-primary"}</code> {"class"}
                  </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 listing">
            <div className="card">
              <div className="card-header">
                <h5>{ListingTypography}</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-xl-4">
                    <h6 className="sub-title">{UnorderList}</h6>
                    <ul>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <h6 className="sub-title">{OrderList}</h6>
                    <ol className="d-block">
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>
                        <ol className="d-block">
                          <li>{"Lorem ipsum dolor sit amet"}</li>
                          <li>{"Lorem ipsum dolor sit amet"}</li>
                          <li>{"Lorem ipsum dolor sit amet"}</li>
                          <li>{"Lorem ipsum dolor sit amet"}</li>
                          <li>{"Lorem ipsum dolor sit amet"}</li>
                        </ol>
                      </li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                      <li>{"Lorem ipsum dolor sit amet"}</li>
                    </ol>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <h6 className="sub-title">{OrderList}</h6>
                    <dl>
                      <dt>{"Lorem ipsum dolor sit amet"}</dt>
                      <dd>{"- ipsum dolor sit amet"}</dd>
                      <dt>{"Lorem ipsum dolor sit amet"}</dt>
                      <dd>{"- ipsum dolor sit amet"}</dd>
                      <dt>{"Lorem ipsum dolor sit amet"}</dt>
                      <dd>{"- ipsum dolor sit amet"}</dd>
                      <dt>{"Lorem ipsum dolor sit amet"}</dt>
                      <dd>{"- ipsum dolor sit amet"}</dd>
                      <dt>{"Lorem ipsum dolor sit amet"}</dt>
                      <dd>{"- ipsum dolor sit amet"}</dd>
                    </dl>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <h6 className="sub-title">{FontawesomeList}</h6>
                    <ul>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-angle-double-right txt-primary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <h6 className="sub-title">{ICOIconList}</h6>
                    <ul>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="fa fa-caret-right txt-secondary m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <h6 className="sub-title">{ThemfyList}</h6>
                    <ul>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                      <li>
                        <i className="icofont icofont-ui-rate-add txt-success m-r-10"></i>
                        {"Lorem ipsum dolor sit amet"}
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{Blockquotes}</h5>
                <span>
                  {"Add a"}{" "}
                  <code>&lt;{"footer className='blockquote-footer'"}&gt;</code>{" "}
                  {"for identifying the source. Wrap the name of the source work"}
                    {"in"} <code>&lt;{"cite"}&gt;</code>.
                  </span>
              </div>
              <div className="card-body">
                <p className="sub-title">{"Naming a source"}</p>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante."}
                    </p>
                  <footer className="blockquote-footer">
                    {"Someone famous in"}
                      <cite title="Source Title">{SourceTitle}</cite>
                  </footer>
                </blockquote>
                <p className="sub-title">{AlignmentsCenter}</p>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante."}
                    </p>
                  <footer className="blockquote-footer">
                    {"Someone famous in"}
                      <cite title="Source Title">{SourceTitle}</cite>
                  </footer>
                </blockquote>
                <p className="sub-title">{AlignmentRight}</p>
                <blockquote className="blockquote text-right mb-0">
                  <p className="mb-0">
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante."}
                    </p>
                  <footer className="blockquote-footer">
                    {"Someone famous in"}
                      <cite title="Source Title">{SourceTitle}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Typography;
