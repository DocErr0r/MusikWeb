import React from 'react';
import Menu from './Menu';
import CloseIcon from '@mui/icons-material/Close';
import './sidebar.css';
import { logo } from '../svgs/svgs';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    let sideopen;
    sideopen = {
        left: props.side ? '0' : '-150%',
    };
    return (
        <aside className="sidebar" style={sideopen}>
            <div className="brand2 flex space-between center-y">
                <div className="l flex center-y gap-1">
                    <img className="box10" src={logo} alt="" />
                    <span className="title block f10">
                        <Link href="/" rel="home" data-pjax-state="">
                            Musik
                        </Link>
                    </span>
                </div>
                <div className=" m-10">{props.visible && <CloseIcon className="closeButton" onClick={props.closeSidebar} />}</div>
            </div>
            <Menu />
        </aside>
    );
}
