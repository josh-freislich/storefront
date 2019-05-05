import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <div className="header-layout">
    <div className="breadcrumbs">
      {props.crumbs.map(crumb => (
          crumb.href ? (<Link to={crumb.href}>{crumb.text}</Link>) :
                       (<div className="crumb">{crumb.text}</div>)
      ))}
    </div>
  </div>
)

export default Header;
