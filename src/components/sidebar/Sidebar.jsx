import React from 'react';
import Menu from './Menu';
import './sidebar.css';

export default function Sidebar() {
    const closeSidebar = () => {
        if (window.innerWidth <= 800) {
            document.getElementById('sidebar').style.left = '-130%';
            console.log('clicked');
        }
    };
    return (
        <div>
            <aside className="sidebar" id="sidebar">
                <div className="brand2 flex space-between center-y">
                    <div className="l flex center-y gap-1">
                        <img className="box10" src="./public/logo.svg" alt="" />
                        <span className="title block f10">
                            <a href="#https://demo.avtheme.com/musik/" rel="home" data-pjax-state="">
                                Musik
                            </a>
                        </span>
                    </div>
                    <div className="closeButton my-1">
                        <button onClick={closeSidebar}>menu</button>
                    </div>
                </div>
                <Menu />
            </aside>
        </div>
    );
}
