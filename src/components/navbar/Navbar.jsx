import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { cart, logo, searchl } from '../svgs/svgs';
import './navbar.css';
import SearchModal from '../Modal/SearchModal';

export default function Navbar(props) {
    const nevigate = useNavigate();
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);

    function onchange(e) {
        setSearch(e.target.value);
    }
    const searchHendler = async (e) => {
        e.preventDefault();
        nevigate('/browse?' + 'search=' + search);
    };
    return (
        <>
            <SearchModal isOpen={modal} search={search} searchHendler setSearch={setSearch} onClose={() => setModal(false)} />
            <div className="header">
                <div className="navbar flex space-between">
                    <div className="brand flex gap-1 center-y">
                        <div className="l flex center-y gap-1">
                            <img className="card10" src={logo} alt="" />
                            <span className="title f10">
                                <Link to="/" rel="home" data-pjax-state="">
                                    Musik
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="nav gap-10 flex center-y">
                        <div className="search">
                            <form
                                className="search-form flex center-y"
                                data-pjax-state=""
                                onSubmit={(e) => {
                                    searchHendler(e);
                                }}>
                                <input className="none" type="search" placeholder="Search..." value={search} name="serach" data-toggle="dropdown" onChange={onchange} />
                                <span className="center label" htmlFor="search-state" id="icon-search">
                                    <i className="icon-search center">
                                        <img src={searchl} alt="" className="smmax-hidden" onClick={() => setModal(true)} />
                                        <img src={searchl} alt="" className="sm-hidden" />
                                    </i>
                                </span>
                                <div className="dropdown-menu"></div>
                            </form>
                        </div>
                        {/* <div className="blank flex w-20"></div> */}
                        {/* <div className=" flex center-y">
                            <nav className="menu-before-login">
                                <div className="menu-login-container">
                                    <ul className="navMenu flex none center-y gap-1 my-1 h-100">
                                        <li className="relative">
                                            <Link className="none" to="#">
                                                <img className="cart" src={cart} alt="" /> <span className="bage text-center">0</span>
                                            </Link>
                                        </li>
                                        <div className="menu-before-login-container flex">
                                            <li>
                                                <button className="logbtn none btn">
                                                    <Link to="/login">user</Link>
                                                </button>
                                            </li>
                                            <li>
                                                <button className="btn">Nitin</button>
                                            </li>
                                        </div>
                                        <div className="menu-after-login-container">
                                            <li>
                                                <button className="btn">Nitin</button>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </nav>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
