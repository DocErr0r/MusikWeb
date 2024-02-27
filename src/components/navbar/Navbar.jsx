import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cart, logo, searchl } from '../svgs/svgs';
import './navbar.css';

export default function Navbar() {
    const [search, setSearch] = useState('');

    const opensidebar = () => {
        if (window.innerWidth <= 800) {
            console.log('sidebaropen');
        }
    };

    function onchange(e) {
        setSearch(e.target.value);
    }
    return (
        <>
            <div className="header">
                <div className="navbar flex space-between">
                    <div className="brand flex gap-1 center-y">
                        <div className="menuButton my-1">
                            <button id="menuButton" onClick={opensidebar}>
                                menu{' '}
                            </button>
                        </div>
                        <div className="l flex center-y gap-1">
                            <img className="card10" src={logo} alt="" />
                            <span className="title f10">
                                <Link to="/" rel="home" data-pjax-state="">
                                    Musik
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="nav flex">
                        <div className="search">
                            <form className="search-form flex" method="get" action="https://demo.avtheme.com/musik" data-pjax-state="">
                                <input className="none" type="search" placeholder="Search..." value={search} name="s" data-toggle="dropdown" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={onchange} />
                                <label className="center" htmlFor="search-state" id="icon-search">
                                    <i className="icon-search">
                                        <img src={searchl} alt="" />
                                    </i>
                                </label>
                                <div className="dropdown-menu"></div>
                            </form>
                        </div>
                        {/* <div className="blank flex w-20"></div> */}
                        <div className=" flex">
                            <nav className="menu-before-login">
                                <div className="menu-before-login-container">
                                    <ul className="navMenu flex none center-y end-x my-1 gap-1 h-100">
                                        <li className="relative">
                                            <Link className="none" to="#">
                                                <img className="cart" src={cart} alt="" /> <span className="bage text-center">0</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="logbtn none btn">
                                                <Link to="/login"> Login</Link>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="btn">Sign up</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menu-after-login-container">
                                    <ul className="navMenu flex none center-y end-x my-1 gap-1 h-100">
                                        <li className="relative">
                                            <Link className="none" to="#">
                                                <img className="cart" src="./public/cart.svg" alt="" /> <span className="bage text-center">0</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="btn">Sign out</button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
