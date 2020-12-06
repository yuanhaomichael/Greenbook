import React from 'react';

import Header from '../authentication/layout/Header';
import Main from '../authentication/layout/Main';
import Footer from '../authentication/layout/Footer';

const Layout = (props) => {
  return (
    <div className="body-wrap boxed-container">
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;
