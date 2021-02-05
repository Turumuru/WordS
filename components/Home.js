import LayoutComponent from "./layout";
import logo from './icons-ws.png';
import React from "react";

function Home() {

    return (
        <LayoutComponent>
            <div style={{display: 'flex', paddingLeft: "300px", paddingTop: "200px"}}>
                <div>
                    <h3>WordS - это информационная система Слов и их характеристик.</h3>
                    <h3>Она раcсчитана исключительно на АНГЛИЙСКИЕ слова.</h3>
                    <h3>Надеюсь, здесь вы найдёте то, что ищите.</h3>
                    <h3>Желаю удачи!</h3>
                </div>
                <img style={{height: "150px", width: "150px", paddingLeft: "20px"}} src={logo} alt=""/>
            </div>
        </LayoutComponent>
    )
}

export default Home;