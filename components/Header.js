import React from 'react';
import {Link} from 'react-router-dom';
import {IconButton} from "@material-ui/core";
import logo from './icons-ws.png';
import menu from './icons-меню.png';


const Header = ({leftIcon}) => {

    return (
        <div style={{
            backgroundColor: "white",
            height: "60px",
            width: "100%",
            position: "fixed",
            display: "flex",
            flexDirection: 'row',
            zIndex: 1
        }}>
            <IconButton
                style={{marginLeft: "20px"}}
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => leftIcon()}
            >
            <img style={{height: "30px", width: "30px"}} src={menu} alt=""/>
            </IconButton>

            <img style={{paddingLeft: "100px"}} src={logo} alt=""/>

            <Link to="/" style={{textDecoration: 'none', color: '#50E4A6', fontSize: "30px"}}>
                <div style={{paddingTop: "10px"}}>
                    ord
                </div>
            </Link>

            <div style={{paddingLeft: "950px", paddingTop: "30px", color: "#9b59b6"}}>
                Информационая система слов
            </div>
        </div>

    );
};

export default Header;