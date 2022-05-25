import React, { useRef, Fragment } from 'react';
import ReactToPrint from 'react-to-print';

const ComponentToPrintWrapper = (props) => {
  const componentRef = useRef();

  return (
    <Fragment>
      <ReactToPrint
        trigger={() => <i className="fa fa-print text-primary" title="Imprimir"></i>}
        content={() => componentRef.current}
      />
      <div style={{ display: 'none' }}>
        {React.cloneElement(props.children, { ref: componentRef })}
      </div>
    </Fragment>
  );
};

export default ComponentToPrintWrapper;
