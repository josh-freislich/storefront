import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header-layout">
    <div className="breadcrumbs">
      {props.crumbs.map( (crumb, index) => (
          crumb.href ? (<Link key={`crumb-${index}`} to={crumb.href}>{crumb.text}</Link>) :
                       (<div key={`crumb-${index}`} className="last crumb">{crumb.text}</div>)
      ))}
    </div>
  </div>
)

export default Header;
