import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import '../../res/css/style.css';

import logo from '../../res/img/logo2.png';
import userPhoto from "../../res/img/user.png";
import sprite from "../../res/img/sprite.svg";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null: 
            return ;
            case false:
                return (<li><a href="/auth/google">continue with Google</a></li>);
            default:
                return [<li key="1"><Payments /></li>, <li key="2">Credits: {this.props.auth.credits}</li>,<li key="3"><a href="/api/logout">Log out</a></li>];
        }
    }

// which makes this reusable component for other views

    render() {
        // console.log(this.props.auth);
        // console.log(this.props);
        return (
          
            <div className="header">
              <img src={logo} alt="trillo logo" className="logo" />
              <form action="#" className="search">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Search Here"
                />
                <button className="search__button">
                  <svg className="search__icon">
                    <use
                      href={sprite + "#icon-magnifying-glass"}
                      className="search__icon"
                    />
                  </svg>
                </button>
              </form>
              <nav className="user-nav">
                <div className="user-nav__icon-box">
                  <svg className="user-nav__icon">
                    <use href={sprite + "#icon-bookmark"} />
                  </svg>
                  <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                  <svg className="user-nav__icon">
                    <use href={sprite + "#icon-chat"} />
                  </svg>
                  <span className="user-nav__notification">5</span>
                </div>
                <div className="user-nav__user">
                  <img
                    src={userPhoto}
                    alt="user photo"
                    className="user-nav__user-photo"
                  />
                  <span className="user-nav__user-name">Aftofl</span>
                </div>
              </nav>
            </div>

        );
    }
}

// receiving all states from Redux store.
function mapStateToProps({ auth }) {
    /* ES17 version - when key and value are the same */ 
    return { auth };
    // vanilla version :: return { auth: auth };
}

export default connect(mapStateToProps)(Header);

{/* <ul className="right"></ul> */ }

{/* <a href="/auth/google">Login with Google</a> */ }
{/* {this.renderContent()} */ }