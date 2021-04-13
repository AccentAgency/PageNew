import React, { Component } from 'react';
import './css/Style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



//Imagenes
import logo from './images/logo.svg';
import web from './images/web.png';


class Inicio extends Component {
    componentDidMount=()=>{
        console.log(window.innerWidth);
    }
    render(){
        return(
            <div className="">
                <header id="header" className="col-sm-12 fixed-top d-flex align-items-center header-transparent">
                    
                    <div id="barra_menu" className="container d-flex justify-content-between">

                        <div id="logo">
                            <a href="/"><img className="logoAccent" src={logo} alt="logo"/></a>
                        </div>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a>WEB Y APP</a></li>
                                <li><a>DISEÑO</a></li>
                                <li><a>MARKETING</a></li>
                                <li><a>FOTOGRAFÍA</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                </header>
                <div id="contenido" className='content'>
                    <div className="forma"></div>
                    <div id="carousel" className="">
                        <div className="">
                            <div className='contenedor'>
                                <Carousel showArrows={false} showStatus={false}>
                                    <div className="slider1 col-md-12 col-lg-12">
                                        <div className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <h1><span className="morado">TU PÁGINA WEB EN</span> <span className="amarillo">72 HORAS</span></h1>

                                            <div className="text-parrafo txt-web">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>

                                            <div className="contenedor-button txt-web">
                                                <button className="btn_info">¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                                <p className="more-information">MÁS INFORMACIÓN</p>
                                            </div>
                                        </div>

                                        <div className="content-image col-xs-12 col-md-6 col-lg-6">
                                            <img className="img-responsive" src={web}></img>
                                        </div>

                                        <div id="text-context" className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <div className="text-parrafo">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider1 col-md-12 col-lg-12">
                                        <div className="content-image col-xs-12 col-md-6 col-lg-6">
                                            <img className="img-responsive" src={web}></img>
                                        </div>
                                        <div className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <h1>PARTE 2</h1>
                                        </div>
                                    </div>
                                </Carousel>
                                <footer class="page-footer">
                                    <div className="col-md-12">
                                        <p>CLICK AQUI</p>
                                    </div>    
                                    <div className="col-md-12 center">
                                        <button className="btn_info">¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                    </div>
                                </footer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Inicio;