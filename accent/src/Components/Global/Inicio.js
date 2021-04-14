import React, { Component } from 'react';
import './css/Style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'font-awesome/css/font-awesome.min.css';
import Modal from '@material-ui/core/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import config from './config/config';
import axios from "axios";
import swal from 'sweetalert';
import * as emailjs from 'emailjs-com';
import $ from 'jquery';

//Imagenes
import logo from './images/logo.svg';
import web from './images/web.png';
import redes from './images/redessociales.png';
import disenograf from './images/disenografico.png';
import fotografia from './images/fotografia.png';
import gif from './images/gif.gif';

//Axios
const axiosInstance = axios.create({
    baseURL: config.backURL
});

//Validaciones REGEX
const validEmailRegex = RegExp(
    /^(([^<>(),;:\s@]+(\.[^<>();:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i
);

const validPhone = RegExp(
    /^[04|02]{2}([\d]{2}[-]*){3}[\d]{3}$/
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Inicio extends Component {
    
    constructor(props)
    {
        super(props);
        this.state={button:'inline-block', form:'none', display:'none', select:0,loader:true, gif:'block',
            open: false,
            errors: {
                name:'',
                email:'',
                phone:''
            }
        }
        this.handleForm = this.handleForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClose2 = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hanldeSendForm = this.hanldeSendForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }


    hanldeSendForm(){
        this.setState({open:true});
    }
    handleSelect(event){
        const target = event.target;
        const val = event.target.value;
        const name = target.name;
        this.setState({
            [name]: val
        });
    }
    handleForm(){
        this.setState({button:'none', form:'block'})
    }

    handleClose(){
        this.setState({button:'inline-block', form:'none'})
    }
    handleMenu(value){
        switch(value){
            case 'web':
                this.setState({select:0})
            break;
            case 'diseno':
                this.setState({select:1})
            break;
            case 'redes':
                this.setState({select:2})
            break;
            case 'foto':
                this.setState({select:3})
            break;
            default:
                this.setState({select:0})
            break;
        }
    }
    handleClose2(){
        this.setState({open:false});
    }
    handleChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
        [name]: value
        });

        //Validaciones
        let errors = this.state.errors;
    
        switch (name) {
        case 'name': 
            errors.name = 
            value.length === 0
                ? 'Favor ingresar un nombre válido.'
                : '';
            break;

            case 'email': 
            errors.email = 
                validEmailRegex.test(value)
                ? ''
                : 'Correo electrónico inválido.';
            break;

            case 'phone':
            errors.phone =
                validPhone.test(value)
                ? ''
                : 'Ingrese un número de telefóno válido.';
            break;

            default:
            break;
        }
    }
    handleSubmit(e){
        e.preventDefault();
        var servicio = '';

        if(this.state.form === "Página Web"){
            servicio = "Web";
        }
        else if(this.state.form === "Redes Sociales"){
            servicio = "Social";
        }
        else if(this.state.form === "Página de Ecommerce"){
            servicio = "Ecommerce";
        }
        else if (this.state.form === "Embajador"){
            servicio = "Embajador";
        }
        else if (this.state.form === "Fotografía"){
            servicio = "Fotografia";
        }
        else{
            servicio = "Todos";
        }

        if(!this.state.name || !this.state.email || !this.state.phone){
            swal('Formulario Incompleto', 'Favor rellene los datos indicados para enviar su solicitud', 'warning');
        }
        else{
            if(validateForm(this.state.errors)) {
                this.setState({display:'flex'});
                axiosInstance.post('/sendLanding'+servicio, {
                    'name' : this.state.name,
                    'email': this.state.email,
                    'phone': this.state.phone
                }).then(res => {
                    this.setState({display:'none'});
                    swal('¡Gracias por elegir Accent!', 'Pronto nos estaremos comunicando contigo', 'success');
                    this.setState({...this.state.open, open:false});
                    let templateParams = {
                        from_name: this.state.name,
                        servicio: this.state.form,
                        phone: this.state.phone,
                        email: this.state.email
                    }
                    emailjs.send("service_iqpr47s","template_lxhgbgh", templateParams, 'user_POUyNgSUrDp594hHzu7XQ');
                    this.resetForm();

                }).catch(error => {
                    this.setState({display:'none'});
                    swal('Ha ocurrido un error', 'Favor intente nuevamente', 'warning');
                })
            }
            else{
                this.setState({display:'none'});
                swal('Formulario Incompleto', 'Verifique que no exista campo de advertencia antes de enviar su solicitud', 'warning');
            }
        }
    }
    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
      }
    
    handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
    }
    handleImageLoaded2() {
        this.setState({ imageStatus: "loaded" });
      }
    
    handleImageErrored2() {
        this.setState({ imageStatus: "failed to load" });
    }
    resetForm(){
        this.setState({
            name:'',
            email:'',
            phone:'',
            tipoForm:''
        })
    }    
    componentDidMount=()=>{
        $(window).on("load", function() {
            setTimeout(function(){
                this.setState({loader:false});
            }.bind(this),1000)
        }.bind(this))
    }
    
    render(){
        AOS.init();
        const {errors} = this.state;
        console.log(this.state.loader);
        if (this.state.loader) return <div className="centrado"><img src={gif} alt="cargando"></img></div>;
        return(
            <div className="">
                <div className="loader-page" style={{display: this.state.display}}>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
                <Modal
                open={this.state.open}
                onClose={this.handleClose2}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                data-aos='fade-down' data-aos-delay="100">
                    <div style={{ position: 'absolute', width: '400', backgroundColor:'white'}} className="modal-main">
                        <div className="contenedor-formulario formulario">
                            <h4>¡Estamos listos para ayudarte!</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input name="name" maxLength="20" type="text" className="formControl" placeholder="Nombre y Apellido" value={this.state.name}
                                    onChange={this.handleChange}></input>
                                    {errors.name.length > 0 && 
                                    <span className='error'>{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <input name="email" maxLength="35" type="email" className="formControl" placeholder="E-mail" value={this.state.email}
                                    onChange={this.handleChange}></input>
                                    {errors.email.length > 0 && 
                                    <span className='error'>{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <input name="phone" maxLength="11" type="phone" className="formControl" placeholder="Número de Telefono" value={this.state.phone}
                                    onChange={this.handleChange}></input>
                                    {errors.phone.length > 0 && 
                                    <span className='error'>{errors.phone}</span>}
                                </div>

                                <div className="form-group">
                                    <select name="form" className="formControl" value={this.state.form} onChange={this.handleSelect}>
                                        <option>Seleccione servicio interesado</option>
                                        <option>Página Web</option>
                                        <option>Redes Sociales</option>
                                        <option>Página de Ecommerce</option>
                                        <option>Embajador</option>
                                        <option>Fotografía</option>
                                        <option>Todos los servicios</option>
                                    </select>

                                </div>

                                <button className="btn_form">ENVIAR</button>
                                
                            </form>
                        </div>
                    </div>

                </Modal>
                <header id="header" className="col-sm-12 static-header d-flex align-items-center header-transparent">
                    
                    <div id="barra_menu" className="container d-flex justify-content-between">

                        <div id="logo">
                            <a href="/"><img className="logoAccent" src={logo} alt="logo"/></a>
                        </div>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li onClick={this.handleMenu.bind(this,'web')}>WEB Y APP</li>
                                <li onClick={this.handleMenu.bind(this,'diseno')}>DISEÑO</li>
                                <li onClick={this.handleMenu.bind(this,'redes')}>MARKETING</li>
                                <li onClick={this.handleMenu.bind(this,'foto')}>FOTOGRAFÍA</li>
                            </ul>
                        </nav>
                    </div>
                    
                </header>
                <div id="contenido" className='content'>
                    <div className="forma"></div>
                    <div id="carousel" className="">
                        <div className="">
                            <div className='contenedor'>
                                <Carousel showArrows={true} showStatus={false} showThumbs={false} selectedItem={this.state.select}>
                                    <div className="slider1 col-md-12 col-lg-12">
                                        <div className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <h1><span className="morado">TU PÁGINA WEB EN</span> <span className="amarillo">72 HORAS</span></h1>

                                            <div className="text-parrafo txt-web">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>

                                            <div className="contenedor-button txt-web">
                                                <button className="btn_info" onClick={this.hanldeSendForm}>¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                                <p className="more-information">MÁS INFORMACIÓN</p>
                                            </div>
                                        </div>

                                        <div className="content-image col-xs-12 col-md-6 col-lg-6">
                                            <img className="img-responsive" src={web} alt="Creamos pagina web"></img>
                                        </div>

                                        <div id="text-context" className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <div className="text-parrafo">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="RedesSociales" className="slider2 col-md-12 col-lg-12">
                                        <div className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <h1><span className="morado">CRECE EN</span> <span className="amarillo">REDES SOCIALES</span></h1>

                                            <div className="text-parrafo txt-web">
                                                <p>Diseñamos objetivos y estrategias funcionales para tu negocio</p>
                                            </div>

                                            <div className="contenedor-button txt-web">
                                                <button className="btn_info" onClick={this.hanldeSendForm}>¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                                <p className="more-information">MÁS INFORMACIÓN</p>
                                            </div>
                                        </div>

                                        <div className="content-image col-xs-12 col-md-6 col-lg-6">
                                            <img className="img-responsive" src={redes} alt="Manejo de redes sociales"></img>
                                        </div>

                                        <div id="text-context" className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <div className="text-parrafo">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider3 col-md-12 col-lg-12">
                                        <div className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <h1><span className="morado">CRECE EN</span> <span className="amarillo">REDES SOCIALES</span></h1>

                                            <div className="text-parrafo txt-web">
                                                <p>Diseñamos objetivos y estrategias funcionales para tu negocio</p>
                                            </div>

                                            <div className="contenedor-button txt-web">
                                                <button className="btn_info" onClick={this.hanldeSendForm}>¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                                <p className="more-information">MÁS INFORMACIÓN</p>
                                            </div>
                                        </div>

                                        <div className="content-image col-xs-12 col-md-6 col-lg-6">
                                            <img className="img-responsive" src={disenograf} alt="diseño grafico"></img>
                                        </div>

                                        <div id="text-context" className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <div className="text-parrafo">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider4 col-md-12 col-lg-12">
                                        <div className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <h1><span className="morado">CRECE EN</span> <span className="amarillo">REDES SOCIALES</span></h1>

                                            <div className="text-parrafo txt-web">
                                                <p>Diseñamos objetivos y estrategias funcionales para tu negocio</p>
                                            </div>

                                            <div className="contenedor-button txt-web">
                                                <button className="btn_info" onClick={this.hanldeSendForm}>¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                                <p className="more-information">MÁS INFORMACIÓN</p>
                                            </div>
                                        </div>

                                        <div className="content-image col-xs-12 col-md-6 col-lg-6">
                                            <img className="img-responsive" src={fotografia} alt="fotografia"></img>
                                        </div>

                                        <div id="text-context" className="content-text col-xs-12 col-md-6 col-lg-6">
                                            <div className="text-parrafo">
                                                <p>Muéstrale a tus clientes la información que necesitan de una forma más profesional.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                                
                                <footer className="page-footer">
                                    <div className="col-md-12" style={{display:this.state.button}}>
                                        <p>CLICK AQUI</p>
                                    </div>    
                                    <div className="col-md-12 center" style={{display:this.state.button}}>
                                        <button className="btn_info" onClick={this.handleForm}>¡SOLICÍTALA <span className="bolder amarillo"> YA!</span></button>
                                    </div>

                                    <div className="contenedor-formulario padding-cont" style={{display:this.state.form}}>
                                        <div className="close" onClick={this.handleClose}><i className="fa fa-close"></i></div>
                                        <h4>¡Estamos listos para ayudarte!</h4>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input name="name" maxLength="20" type="text" className="formControl" placeholder="Nombre y Apellido" value={this.state.name}
                                                onChange={this.handleChange}></input>
                                                {errors.name.length > 0 && 
                                                <span className='error'>{errors.name}</span>}
                                            </div>

                                            <div className="form-group">
                                                <input name="email" maxLength="35" type="email" className="formControl" placeholder="E-mail" value={this.state.email}
                                                onChange={this.handleChange}></input>
                                                {errors.email.length > 0 && 
                                                <span className='error'>{errors.email}</span>}
                                            </div>

                                            <div className="form-group">
                                                <input name="phone" maxLength="11" type="phone" className="formControl" placeholder="Número de Telefono" value={this.state.phone}
                                                onChange={this.handleChange}></input>
                                                {errors.phone.length > 0 && 
                                                <span className='error'>{errors.phone}</span>}
                                            </div>

                                            <div className="form-group">
                                                <select name="form" className="formControl" value={this.state.form} onChange={this.handleSelect}>
                                                    <option>Seleccione servicio interesado</option>
                                                    <option>Página Web</option>
                                                    <option>Redes Sociales</option>
                                                    <option>Página de Ecommerce</option>
                                                    <option>Embajador</option>
                                                    <option>Fotografía</option>
                                                    <option>Todos los servicios</option>
                                                </select>

                                            </div>

                                            <button className="btn_form">ENVIAR</button>
                                            
                                        </form>
                                    </div>
                                </footer>
                                <footer className="footer-mobile">
                                    <h3>Accent Digital Agency</h3>
                                    <p><strong>Valencia.</strong>Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral.</p>

                                    <div className="col-xs-12 col-md-6 col-lg-6">
                                        <h5>DISEÑO GRÁFICO</h5>
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Logos">Logos</span></li>
                                            <li><span title="Branding">Branding</span></li>
                                            <li><span title="Flyers">Flyers</span></li>
                                            <li><span title="Gigantografía">Gigantografía</span></li>
                                        </ul>
                                    </div>

                                    <div className="col-xs-12 col-md-6 col-lg-6 aling-left">
                                        <h5>REDES SOCIALES</h5>
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Instagram">Instagram</span></li>
                                            <li><span title="Facebook">Facebook</span></li>
                                            <li><span title="Twitter">Twitter</span></li>
                                            <li><span title="TikTok">TikTok</span></li>
                                        </ul>
                                    </div>

                                    <div className="col-xs-12 col-md-6 col-lg-6 aling-left margin-top">
                                        <h5>PROGRAMACIÓN</h5>
                                        <ul className='list-unstyled'>
                                            <li><span title="E-Commerce">E-Commerce</span></li>
                                            <li><span title="Landing Page">Landing Page</span></li>
                                            <li><span title="App Móviles">App Móviles</span></li>
                                            <li><span title="App Web">Aplicaciones Web</span></li>
                                            <li><span title="Software">Software</span></li>
                                        </ul>
                                    </div>

                                    <div className="col-xs-12 col-md-6 col-lg-6 aling-left margin-top">
                                        <h5>FOTOGRAFÍA</h5>
                                        <ul className='list-unstyled'>
                                            <li className="first"><span title="Foto Producto">Foto Producto</span></li>
                                            <li><span title="Gastronomía">Gastronomía</span></li>
                                            <li><span title="Retratos">Retratos</span></li>
                                        </ul>
                                    </div>
                                </footer>
                            </div>
                            <footer id="footer" className="footer color-bg">
                                <div className="footer-bottom">
                                    <div className="container">
                                            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                                                <h3>Accent Digital Agency</h3>
                                                <p><strong>Valencia.</strong>Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral.</p>
                                            </div>


                                            <div id="footer-det" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="col-xs-12 col-md-3 col-lg-3">
                                                    <h5 className="bolder">REDES SOCIALES</h5>
                                                    <ul className='list-unstyled'>
                                                        <li className="first"><span title="Instagram">Instagram</span></li>
                                                        <li><span title="Facebook">Facebook</span></li>
                                                        <li><span title="Twitter">Twitter</span></li>
                                                        <li><span title="TikTok">TikTok</span></li>
                                                    </ul>
                                                </div>

                                                <div className="col-xs-12 col-md-3 col-lg-3">
                                                    <h5 className="bolder">DISEÑO GRÁFICO</h5>
                                                    <ul className='list-unstyled'>
                                                        <li className="first"><span title="Logos">Logos</span></li>
                                                        <li><span title="Branding">Branding</span></li>
                                                        <li><span title="Flyers">Flyers</span></li>
                                                        <li><span title="Gigantografía">Gigantografía</span></li>
                                                    </ul>
                                                </div>


                                                <div className="col-xs-12 col-md-3 col-lg-3">
                                                    <h5 className="bolder">PROGRAMACIÓN</h5>
                                                    <ul className='list-unstyled'>
                                                        <li className="first"><span title="Páginas Web">Páginas Web</span></li>
                                                        <li><span title="E-Commerce">E-Commerce</span></li>
                                                        <li><span title="Landing Page">Landing Page</span></li>
                                                        <li><span title="App Móviles">App Móviles</span></li>
                                                        <li><span title="App Web">Aplicaciones Web</span></li>
                                                        <li><span title="Software">Software</span></li>
                                                    </ul>
                                                </div>


                                                <div className="col-xs-12 col-md-3 col-lg-3">
                                                    <h5 className="bolder">FOTOGRAFÍA</h5>
                                                    <ul className='list-unstyled'>
                                                        <li className="first"><span title="Foto Producto">Foto Producto</span></li>
                                                        <li><span title="Gastronomía">Gastronomía</span></li>
                                                        <li><span title="Retratos">Retratos</span></li>
                                                    </ul>
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