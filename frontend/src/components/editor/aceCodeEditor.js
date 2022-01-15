import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb'
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-monokai";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { JavascriptMode,HtmlMode,CssMode,PhpMode } from "../../constant";
const AceCodeEditor = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Editor" title="ACE Code Editor" />
      <Container fluid={true}>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>{JavascriptMode}</h5>
              </CardHeader>
              <CardBody>
                <div className="ace-editor" id="editor">
                  <AceEditor
                    mode="javascript"
                    theme="monokai"
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    height="100%"
                    width="100%"
                    value={`  
/* Sample JavaScript edit source */
// Define a module
var app = angular.module('app', ['ui.bootstrap']);
// Define a conroller.
app.controller('GrokController', ['$scope', '$filter',
function($scope, $filter) {
$scope.today = function() {
$scope.dt = new Date();
};
$scope.today();
$scope.isOpened = false;
$scope.open = function($event) {
$event.preventDefault();
$event.stopPropagation();
$scope.isOpened = true;
};
}]);
/* End of sample edit source */`}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      showLineNumbers: true,
                      tabSize: 1,
                    }} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>{HtmlMode}</h5>
              </CardHeader>
              <CardBody>
                <div className="ace-editor" id="editor">
                  <AceEditor
                    mode="html"
                    theme="monokai"
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    height="100%"
                    width="100%"
                    value={`  
<!--Page header start-->;
<div class="page-header">
<div class="row">
<div class="col-xl-6">
<h3>Ace Text editor</h3>
<small>Xolo Admin panel</small>
</div>
<div class="col-xl-6">
<ol class="breadcrumb pull-right">
<li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i></a></li>
            <li class="breadcrumb-item">Editor </li>
            <li class="breadcrumb-item active">Ace Text editor</li>
          </ol>
        </div>
    </div>
</div>
<!--Page header end-->;`}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      showLineNumbers: true,
                      tabSize: 1,
                    }} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>{CssMode}</h5>
              </CardHeader>
              <CardBody>
                <div className="ace-editor" id="editor">
                  <AceEditor
                    mode="css"
                    theme="monokai"
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    height="100%"
                    width="100%"
                    value={`  
.text-layer
{
font: 12px Monaco, "Courier New", monospace;
font-size: 3vmin;
cursor: text;
}
.blinker {
animation: blink 1s linear infinite alternate;
}
@keyframes blink {
0%, 40% {
opacity: 1
}
40.5%, 100% {
opacity: 1
}
}
@document url(http://c9.io/), url-prefix(http://ace.c9.io/build/),
domain(c9.io), regexp("https:.*") /**/
{
/**/
img[title]:before
{
content: attr(title) "/A Image / retrieved from" attr(src); /**/
white-space: pre;
display: block;
background: url(asdasd); "err
}
}
@viewport {
min-zoom: 1;
max-zoom: 200%;
user-zoom: fixed;
}
`}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      showLineNumbers: true,
                      tabSize: 1,
                    }} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>{PhpMode}</h5>
              </CardHeader>
              <CardBody>
                <div className="ace-editor" id="editor">
                  <AceEditor
                    mode="php"
                    theme="monokai"
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    height="100%"
                    width="100%"
                    value={`  
<?php
  function nfact($n) {
  if ($n == 0) {
  return 1;
  }
  else {
  return $n * nfact($n - 1);
  }
  }
  echo "Please enter a whole number ... ";
  $num = trim(fgets(STDIN));
  // ===== PROCESS - Determing the factorial of the input number =====
  $output = "Factorial " . $num . " = " . nfact($num) . "";
  echo $output;
  ?>
                `}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      showLineNumbers: true,
                      tabSize: 1,
                    }} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>

  );
}

export default AceCodeEditor;