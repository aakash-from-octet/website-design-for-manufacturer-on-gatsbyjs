import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/global.css";
import "../styles/responsive.css";


// import { useLocation } from '@reach/router';
const scrollToSection = () => {
  const { hash } = window.location;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default function Layout({ background, children, color }) {
  const layoutStyle = {
    background: background.startsWith('#') ? background : `url(${background})`,
    backgroundSize: 'cover',
    minHeight: '900px',
    color: color
  }
  useEffect(() => {
    scrollToSection();
  }, []);

  return (
    <div className="layout md:pt-8" style={layoutStyle}>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
