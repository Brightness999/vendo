import React, { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Landing = () => {
  const [subMenu, setSubMenu] = useState({});

  return (
    <>
      <Header setSubMenu={(submenu => setSubMenu(submenu))} subMenu={subMenu} />
      <Content subMenu={subMenu} />
      <Footer />
    </>
  );
}

export default Landing;