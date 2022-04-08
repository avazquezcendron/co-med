import React, { Fragment, useState, useEffect } from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
import RightSidebar from './common/right-sidebar';
import Footer from './common/footer';
import ThemeCustomizer from './common/theme-customizer';
import { ToastContainer } from 'react-toastify';
import Loader from './common/loader';

const AppLayout = (props) => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
        setShowLoader(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
    
  return (
    <Fragment>
      <Loader show={showLoader} />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <RightSidebar />
          <div className="page-body">{props.children}</div>
          <Footer />
          <ThemeCustomizer />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AppLayout;
