import React from 'react';
import Nav from './Nav'

const Header = (props) => (
  <header className="header">
    <Nav />
    <div className="hero">
      <div className="content">
        <h1>Plates</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque mattis lectus feugiat vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</div>
      </div>
    </div>
  </header>
)

export default Header;
