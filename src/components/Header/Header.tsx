import React from 'react';
// import {} from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo/iomechs-logo.png';
import star from '../../assets/img/star.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo_container">
          <img className="logo" src={logo} alt="IOMechs Logo" />
        </div>
        <div className="title header_text">
          <p>Pure CSS Loaders</p>
        </div>
        <div className="repo_link_container header_text">
          <p>
            Like Pure CSS Loaders?&nbsp;
            <span> </span>
            <a className="anchor" href="/">
              Give our repo a star.
              <span> </span>
              <button className="btn">
                <img className="star" src={star} alt="Star" />
                <p>Star</p>
              </button>
              <span> </span>
              <span>&#62;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
