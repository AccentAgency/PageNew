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
                <header id="header" className="col-sm-12 static-header d-flex align-items-center header-transparent">
                    
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
                                <footer id="foot-bottom" className="footer color-bg footer-foot ">
                                    <div className="footer-bottom">
                                        <div className="container-accent">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-center">

                                                <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                                                    <h3>Accent Digital Agency</h3>
                                                    <p><strong>Valencia.</strong>Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral.</p>
                                                </div>


                                                <div id="footer-det" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                                        <div className="module-heading">
                                                            <h4 className="module-title">PROGRAMACIÓN</h4>
                                                        </div>
                                                        

                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Páginas Web">Páginas Web</span></li>
                                                                <li><span title="E-Commerce">E-Commerce</span></li>
                                                                <li><span title="Landing Page">Landing Page</span></li>
                                                                <li><span title="App Móviles">App Móviles</span></li>
                                                                <li><span title="App Web">Aplicaciones Web</span></li>
                                                                <li><span title="Software">Software</span></li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>

                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                                        <div className="module-heading">
                                                            <h4 className="module-title">REDES SOCIALES</h4>
                                                        </div>

                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Instagram">Instagram</span></li>
                                                                <li><span title="Facebook">Facebook</span></li>
                                                                <li><span title="Twitter">Twitter</span></li>
                                                                <li><span title="TikTok">TikTok</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                                        <div className="module-heading">
                                                            <h4 className="module-title">DISEÑO GRÁFICO</h4>
                                                        </div>


                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Logos">Logos</span></li>
                                                                <li><span title="Branding">Branding</span></li>
                                                                <li><span title="Flyers">Flyers</span></li>
                                                                <li><span title="Gigantografía">Gigantografía</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                        <div className="module-heading">
                                                            <h4 className="module-title">FOTOGRAFÍA</h4>
                                                        </div>

                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Foto Producto">Foto Producto</span></li>
                                                                <li><span title="Gastronomía">Gastronomía</span></li>
                                                                <li><span title="Retratos">Retratos</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="copyright-bar col-xs-12">
                                        <div className="container">
                                            <div className="col-xs-12 col-sm-12 no-padding copyright">&copy; Copyright 2021 Accent. </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                            <footer id="footer" className="footer color-bg">
                                    <div className="footer-bottom">
                                        <div className="container-accent">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-center">

                                                <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                                                    <h3>Accent Digital Agency</h3>
                                                    <p><strong>Valencia.</strong>Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral.</p>
                                                </div>


                                                <div id="footer-det" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                                        <div className="module-heading">
                                                            <h4 className="module-title">PROGRAMACIÓN</h4>
                                                        </div>
                                                        

                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Páginas Web">Páginas Web</span></li>
                                                                <li><span title="E-Commerce">E-Commerce</span></li>
                                                                <li><span title="Landing Page">Landing Page</span></li>
                                                                <li><span title="App Móviles">App Móviles</span></li>
                                                                <li><span title="App Web">Aplicaciones Web</span></li>
                                                                <li><span title="Software">Software</span></li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>

                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                                        <div className="module-heading">
                                                            <h4 className="module-title">REDES SOCIALES</h4>
                                                        </div>

                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Instagram">Instagram</span></li>
                                                                <li><span title="Facebook">Facebook</span></li>
                                                                <li><span title="Twitter">Twitter</span></li>
                                                                <li><span title="TikTok">TikTok</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                                        <div className="module-heading">
                                                            <h4 className="module-title">DISEÑO GRÁFICO</h4>
                                                        </div>


                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Logos">Logos</span></li>
                                                                <li><span title="Branding">Branding</span></li>
                                                                <li><span title="Flyers">Flyers</span></li>
                                                                <li><span title="Gigantografía">Gigantografía</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>


                                                    <div id="fila_footer" className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                        <div className="module-heading">
                                                            <h4 className="module-title">FOTOGRAFÍA</h4>
                                                        </div>

                                                        <div className="module-body">
                                                            <ul className='list-unstyled'>
                                                                <li className="first"><span title="Foto Producto">Foto Producto</span></li>
                                                                <li><span title="Gastronomía">Gastronomía</span></li>
                                                                <li><span title="Retratos">Retratos</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="copyright-bar">
                                      
                                        <div className="col-xs-12 col-sm-12 no-padding copyright">&copy; Copyright 2021 Accent. </div>
                                        
                                    </div>
                                </footer>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Inicio;