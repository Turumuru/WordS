import React from 'react'
import logo from './icons-ws.png';


const NotFound = () => {
    return (
        <div style={{display: 'flex', paddingLeft: "300px", paddingTop: "200px"}}>
            <div>
                <h3>404</h3>
                <h3>Этой странички нет</h3>
            </div>
            <img style={{height: "150px", width: "150px", paddingLeft: "20px"}} src={logo} alt=""/>
        </div>
    );
};

export default NotFound;