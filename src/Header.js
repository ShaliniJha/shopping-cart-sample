import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header"> 
            <ul className="header-bar">
              <li className="header-item">
                <a className="header-link" href="#">Home</a>
              </li>
              <li className="header-item">
                <a className="header-link" href="#">Link</a>
              </li>
              <li className="header-item">
                <a className="header-link disabled" href="#">Disabled</a>
              </li>
              <li className=" cart-info">
                <a className="header-link" href="#">{this.props.cartitem} items in cart</a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
