(this.webpackJsonpaccent=this.webpackJsonpaccent||[]).push([[0],{46:function(e,t){e.exports={backURL:"https://www.accentagencia.com/test"}},57:function(e,t,s){},59:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(10),n=s.n(l),i=(s(57),s(15)),o=s(16),r=s(18),d=s(17),j=(s(26),s(27),s(50)),h=s(3),m=s(21),b=s(12),x=s(9),O=(s(59),s(60),s(44)),p=(s(68),s(98)),u=s(45),g=s.n(u),f=(s(69),s(46)),N=s.n(f),v=s(47),S=s.n(v),C=s(13),y=s.n(C),A=s(48),E=s.p+"static/media/logo.334e49c8.svg",k=s.p+"static/media/web.110dfc60.png",w=s.p+"static/media/redessociales.bee71537.png",F=s.p+"static/media/disenografico.537f5c54.png",I=s.p+"static/media/fotografia.b6b3dbc3.png",L=s.p+"static/media/gif.7cbf0e71.gif",R=s(0),T=S.a.create({baseURL:N.a.backURL}),M=RegExp(/^(([^<>(),;:\s@]+(\.[^<>();:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i),P=RegExp(/^[04|02]{2}([\d]{2}[-]*){3}[\d]{3}$/),D=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={button:"inline-block",form:"none",display:"none",select:0,imageStatus:"loading",loaded:!1,open:!1,errors:{name:"",email:"",phone:""}},a.handleForm=a.handleForm.bind(Object(x.a)(a)),a.handleClose=a.handleClose.bind(Object(x.a)(a)),a.handleClose2=a.handleClose.bind(Object(x.a)(a)),a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.hanldeSendForm=a.hanldeSendForm.bind(Object(x.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a.handleSelect=a.handleSelect.bind(Object(x.a)(a)),a.handleMenu=a.handleMenu.bind(Object(x.a)(a)),a}return Object(o.a)(s,[{key:"hanldeSendForm",value:function(){this.setState({open:!0})}},{key:"handleSelect",value:function(e){var t=e.target,s=e.target.value,a=t.name;this.setState(Object(b.a)({},a,s))}},{key:"handleForm",value:function(){this.setState({button:"none",form:"block"})}},{key:"handleClose",value:function(){this.setState({button:"inline-block",form:"none"})}},{key:"handleMenu",value:function(e){switch(e){case"web":this.setState({select:0});break;case"diseno":this.setState({select:1});break;case"redes":this.setState({select:2});break;case"foto":this.setState({select:3});break;default:this.setState({select:0})}}},{key:"handleClose2",value:function(){this.setState({open:!1})}},{key:"handleChange",value:function(e){var t=e.target,s=t.value,a=t.name;this.setState(Object(b.a)({},a,s));var c=this.state.errors;switch(a){case"name":c.name=0===s.length?"Favor ingresar un nombre v\xe1lido.":"";break;case"email":c.email=M.test(s)?"":"Correo electr\xf3nico inv\xe1lido.";break;case"phone":c.phone=P.test(s)?"":"Ingrese un n\xfamero de telef\xf3no v\xe1lido."}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var s="";s="P\xe1gina Web"===this.state.form?"Web":"Redes Sociales"===this.state.form?"Social":"P\xe1gina de Ecommerce"===this.state.form?"Ecommerce":"Embajador"===this.state.form?"Embajador":"Fotograf\xeda"===this.state.form?"Fotografia":"Todos",this.state.name&&this.state.email&&this.state.phone?!function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t}(this.state.errors)?(this.setState({display:"none"}),y()("Formulario Incompleto","Verifique que no exista campo de advertencia antes de enviar su solicitud","warning")):(this.setState({display:"flex"}),T.post("/sendLanding"+s,{name:this.state.name,email:this.state.email,phone:this.state.phone}).then((function(e){t.setState({display:"none"}),y()("\xa1Gracias por elegir Accent!","Pronto nos estaremos comunicando contigo","success"),t.setState(Object(m.a)(Object(m.a)({},t.state.open),{},{open:!1}));var s={from_name:t.state.name,servicio:t.state.form,phone:t.state.phone,email:t.state.email};A.send("service_iqpr47s","template_lxhgbgh",s,"user_POUyNgSUrDp594hHzu7XQ"),t.resetForm()})).catch((function(e){t.setState({display:"none"}),y()("Ha ocurrido un error","Favor intente nuevamente","warning")}))):y()("Formulario Incompleto","Favor rellene los datos indicados para enviar su solicitud","warning")}},{key:"handleImageLoaded",value:function(){this.setState({imageStatus:"loaded"})}},{key:"handleImageErrored",value:function(){this.setState({imageStatus:"failed to load"})}},{key:"handleImageLoaded2",value:function(){this.setState({imageStatus:"loaded"})}},{key:"handleImageErrored2",value:function(){this.setState({imageStatus:"failed to load"})}},{key:"resetForm",value:function(){this.setState({name:"",email:"",phone:"",tipoForm:""})}},{key:"render",value:function(){var e=this;console.log(this.state.imageStatus),g.a.init();var t=this.state.errors;return this.state.loaded?Object(R.jsx)("div",{className:"centrado",children:Object(R.jsx)("img",{src:L,alt:"cargando"})}):Object(R.jsxs)("div",{className:"",children:[Object(R.jsx)("div",{className:"loader-page",style:{display:this.state.display},children:Object(R.jsxs)("div",{className:"lds-ripple",children:[Object(R.jsx)("div",{}),Object(R.jsx)("div",{})]})}),Object(R.jsx)(p.a,{open:this.state.open,onClose:this.handleClose2,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description","data-aos":"fade-down","data-aos-delay":"100",children:Object(R.jsx)("div",{style:{position:"absolute",width:"400",backgroundColor:"white"},className:"modal-main",children:Object(R.jsxs)("div",{className:"contenedor-formulario formulario",children:[Object(R.jsx)("h4",{children:"\xa1Estamos listos para ayudarte!"}),Object(R.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{name:"name",maxLength:"20",type:"text",className:"formControl",placeholder:"Nombre y Apellido",value:this.state.name,onChange:this.handleChange}),t.name.length>0&&Object(R.jsx)("span",{className:"error",children:t.name})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{name:"email",maxLength:"35",type:"email",className:"formControl",placeholder:"E-mail",value:this.state.email,onChange:this.handleChange}),t.email.length>0&&Object(R.jsx)("span",{className:"error",children:t.email})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{name:"phone",maxLength:"11",type:"phone",className:"formControl",placeholder:"N\xfamero de Telefono",value:this.state.phone,onChange:this.handleChange}),t.phone.length>0&&Object(R.jsx)("span",{className:"error",children:t.phone})]}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsxs)("select",{name:"form",className:"formControl",value:this.state.form,onChange:this.handleSelect,children:[Object(R.jsx)("option",{children:"Seleccione servicio interesado"}),Object(R.jsx)("option",{children:"P\xe1gina Web"}),Object(R.jsx)("option",{children:"Redes Sociales"}),Object(R.jsx)("option",{children:"P\xe1gina de Ecommerce"}),Object(R.jsx)("option",{children:"Embajador"}),Object(R.jsx)("option",{children:"Fotograf\xeda"}),Object(R.jsx)("option",{children:"Todos los servicios"})]})}),Object(R.jsx)("button",{className:"btn_form",children:"ENVIAR"})]})]})})}),Object(R.jsx)("header",{id:"header",className:"col-sm-12 static-header d-flex align-items-center header-transparent",children:Object(R.jsxs)("div",{id:"barra_menu",className:"container d-flex justify-content-between",children:[Object(R.jsx)("div",{id:"logo",children:Object(R.jsx)("a",{href:"/",children:Object(R.jsx)("img",{className:"logoAccent",src:E,alt:"logo"})})}),Object(R.jsx)("nav",{id:"navbar",className:"navbar",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{onClick:this.handleMenu.bind(this,"web"),children:"WEB Y APP"}),Object(R.jsx)("li",{onClick:this.handleMenu.bind(this,"diseno"),children:"DISE\xd1O"}),Object(R.jsx)("li",{onClick:this.handleMenu.bind(this,"redes"),children:"MARKETING"}),Object(R.jsx)("li",{onClick:this.handleMenu.bind(this,"foto"),children:"FOTOGRAF\xcdA"})]})})]})}),Object(R.jsxs)("div",{id:"contenido",className:"content",children:[Object(R.jsx)("div",{className:"forma"}),Object(R.jsx)("div",{id:"carousel",className:"",children:Object(R.jsxs)("div",{className:"",children:[Object(R.jsxs)("div",{className:"contenedor",children:[Object(R.jsxs)(O.Carousel,{showArrows:!1,showStatus:!1,showThumbs:!1,selectedItem:this.state.select,children:[Object(R.jsxs)("div",{className:"slider1 col-md-12 col-lg-12",children:[Object(R.jsxs)("div",{className:"content-text col-xs-12 col-md-6 col-lg-6",children:[Object(R.jsxs)("h1",{children:[Object(R.jsx)("span",{className:"morado",children:"TU P\xc1GINA WEB EN"})," ",Object(R.jsx)("span",{className:"amarillo",children:"72 HORAS"})]}),Object(R.jsx)("div",{className:"text-parrafo txt-web",children:Object(R.jsx)("p",{children:"Mu\xe9strale a tus clientes la informaci\xf3n que necesitan de una forma m\xe1s profesional."})}),Object(R.jsxs)("div",{className:"contenedor-button txt-web",children:[Object(R.jsxs)("button",{className:"btn_info",onClick:this.hanldeSendForm,children:["\xa1SOLIC\xcdTALA ",Object(R.jsx)("span",{className:"bolder amarillo",children:" YA!"})]}),Object(R.jsx)("p",{className:"more-information",children:"M\xc1S INFORMACI\xd3N"})]})]}),Object(R.jsx)("div",{className:"content-image col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("img",{className:"img-responsive",src:k,alt:"Creamos pagina web",onLoad:function(){return e.setState({loaded:!0})}})}),Object(R.jsx)("div",{id:"text-context",className:"content-text col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("div",{className:"text-parrafo",children:Object(R.jsx)("p",{children:"Mu\xe9strale a tus clientes la informaci\xf3n que necesitan de una forma m\xe1s profesional."})})})]}),Object(R.jsxs)("div",{id:"RedesSociales",className:"slider2 col-md-12 col-lg-12",children:[Object(R.jsxs)("div",{className:"content-text col-xs-12 col-md-6 col-lg-6",children:[Object(R.jsxs)("h1",{children:[Object(R.jsx)("span",{className:"morado",children:"CRECE EN"})," ",Object(R.jsx)("span",{className:"amarillo",children:"REDES SOCIALES"})]}),Object(R.jsx)("div",{className:"text-parrafo txt-web",children:Object(R.jsx)("p",{children:"Dise\xf1amos objetivos y estrategias funcionales para tu negocio"})}),Object(R.jsxs)("div",{className:"contenedor-button txt-web",children:[Object(R.jsxs)("button",{className:"btn_info",children:["\xa1SOLIC\xcdTALA ",Object(R.jsx)("span",{className:"bolder amarillo",children:" YA!"})]}),Object(R.jsx)("p",{className:"more-information",children:"M\xc1S INFORMACI\xd3N"})]})]}),Object(R.jsx)("div",{className:"content-image col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("img",{className:"img-responsive",src:w,alt:"Manejo de redes sociales"})}),Object(R.jsx)("div",{id:"text-context",className:"content-text col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("div",{className:"text-parrafo",children:Object(R.jsx)("p",{children:"Mu\xe9strale a tus clientes la informaci\xf3n que necesitan de una forma m\xe1s profesional."})})})]}),Object(R.jsxs)("div",{className:"slider3 col-md-12 col-lg-12",children:[Object(R.jsxs)("div",{className:"content-text col-xs-12 col-md-6 col-lg-6",children:[Object(R.jsxs)("h1",{children:[Object(R.jsx)("span",{className:"morado",children:"CRECE EN"})," ",Object(R.jsx)("span",{className:"amarillo",children:"REDES SOCIALES"})]}),Object(R.jsx)("div",{className:"text-parrafo txt-web",children:Object(R.jsx)("p",{children:"Dise\xf1amos objetivos y estrategias funcionales para tu negocio"})}),Object(R.jsxs)("div",{className:"contenedor-button txt-web",children:[Object(R.jsxs)("button",{className:"btn_info",children:["\xa1SOLIC\xcdTALA ",Object(R.jsx)("span",{className:"bolder amarillo",children:" YA!"})]}),Object(R.jsx)("p",{className:"more-information",children:"M\xc1S INFORMACI\xd3N"})]})]}),Object(R.jsx)("div",{className:"content-image col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("img",{className:"img-responsive",src:F,alt:"dise\xf1o grafico",onLoad:this.handleImageLoaded2.bind(this),onError:this.handleImageErrored2.bind(this)})}),Object(R.jsx)("div",{id:"text-context",className:"content-text col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("div",{className:"text-parrafo",children:Object(R.jsx)("p",{children:"Mu\xe9strale a tus clientes la informaci\xf3n que necesitan de una forma m\xe1s profesional."})})})]}),Object(R.jsxs)("div",{className:"slider4 col-md-12 col-lg-12",children:[Object(R.jsxs)("div",{className:"content-text col-xs-12 col-md-6 col-lg-6",children:[Object(R.jsxs)("h1",{children:[Object(R.jsx)("span",{className:"morado",children:"CRECE EN"})," ",Object(R.jsx)("span",{className:"amarillo",children:"REDES SOCIALES"})]}),Object(R.jsx)("div",{className:"text-parrafo txt-web",children:Object(R.jsx)("p",{children:"Dise\xf1amos objetivos y estrategias funcionales para tu negocio"})}),Object(R.jsxs)("div",{className:"contenedor-button txt-web",children:[Object(R.jsxs)("button",{className:"btn_info",children:["\xa1SOLIC\xcdTALA ",Object(R.jsx)("span",{className:"bolder amarillo",children:" YA!"})]}),Object(R.jsx)("p",{className:"more-information",children:"M\xc1S INFORMACI\xd3N"})]})]}),Object(R.jsx)("div",{className:"content-image col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("img",{className:"img-responsive",src:I,alt:"fotografia"})}),Object(R.jsx)("div",{id:"text-context",className:"content-text col-xs-12 col-md-6 col-lg-6",children:Object(R.jsx)("div",{className:"text-parrafo",children:Object(R.jsx)("p",{children:"Mu\xe9strale a tus clientes la informaci\xf3n que necesitan de una forma m\xe1s profesional."})})})]})]}),Object(R.jsxs)("footer",{className:"page-footer",children:[Object(R.jsx)("div",{className:"col-md-12",style:{display:this.state.button},children:Object(R.jsx)("p",{children:"CLICK AQUI"})}),Object(R.jsx)("div",{className:"col-md-12 center",style:{display:this.state.button},children:Object(R.jsxs)("button",{className:"btn_info",onClick:this.handleForm,children:["\xa1SOLIC\xcdTALA ",Object(R.jsx)("span",{className:"bolder amarillo",children:" YA!"})]})}),Object(R.jsxs)("div",{className:"contenedor-formulario padding-cont",style:{display:this.state.form},children:[Object(R.jsx)("div",{className:"close",onClick:this.handleClose,children:Object(R.jsx)("i",{className:"fa fa-close"})}),Object(R.jsx)("h4",{children:"\xa1Estamos listos para ayudarte!"}),Object(R.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{name:"name",maxLength:"20",type:"text",className:"formControl",placeholder:"Nombre y Apellido",value:this.state.name,onChange:this.handleChange}),t.name.length>0&&Object(R.jsx)("span",{className:"error",children:t.name})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{name:"email",maxLength:"35",type:"email",className:"formControl",placeholder:"E-mail",value:this.state.email,onChange:this.handleChange}),t.email.length>0&&Object(R.jsx)("span",{className:"error",children:t.email})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{name:"phone",maxLength:"11",type:"phone",className:"formControl",placeholder:"N\xfamero de Telefono",value:this.state.phone,onChange:this.handleChange}),t.phone.length>0&&Object(R.jsx)("span",{className:"error",children:t.phone})]}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsxs)("select",{name:"form",className:"formControl",value:this.state.form,onChange:this.handleSelect,children:[Object(R.jsx)("option",{children:"Seleccione servicio interesado"}),Object(R.jsx)("option",{children:"P\xe1gina Web"}),Object(R.jsx)("option",{children:"Redes Sociales"}),Object(R.jsx)("option",{children:"P\xe1gina de Ecommerce"}),Object(R.jsx)("option",{children:"Embajador"}),Object(R.jsx)("option",{children:"Fotograf\xeda"}),Object(R.jsx)("option",{children:"Todos los servicios"})]})}),Object(R.jsx)("button",{className:"btn_form",children:"ENVIAR"})]})]})]}),Object(R.jsxs)("footer",{className:"footer-mobile",children:[Object(R.jsx)("h3",{children:"Accent Digital Agency"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Valencia."}),"Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral."]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-6 col-lg-6",children:[Object(R.jsx)("h5",{children:"DISE\xd1O GR\xc1FICO"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"Logos",children:"Logos"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Branding",children:"Branding"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Flyers",children:"Flyers"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Gigantograf\xeda",children:"Gigantograf\xeda"})})]})]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-6 col-lg-6 aling-left",children:[Object(R.jsx)("h5",{children:"REDES SOCIALES"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"Instagram",children:"Instagram"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Facebook",children:"Facebook"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Twitter",children:"Twitter"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"TikTok",children:"TikTok"})})]})]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-6 col-lg-6 aling-left margin-top",children:[Object(R.jsx)("h5",{children:"PROGRAMACI\xd3N"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"E-Commerce",children:"E-Commerce"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Landing Page",children:"Landing Page"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"App M\xf3viles",children:"App M\xf3viles"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"App Web",children:"Aplicaciones Web"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Software",children:"Software"})})]})]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-6 col-lg-6 aling-left margin-top",children:[Object(R.jsx)("h5",{children:"FOTOGRAF\xcdA"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"Foto Producto",children:"Foto Producto"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Gastronom\xeda",children:"Gastronom\xeda"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Retratos",children:"Retratos"})})]})]})]})]}),Object(R.jsxs)("footer",{id:"footer",className:"footer color-bg",children:[Object(R.jsx)("div",{className:"footer-bottom",children:Object(R.jsxs)("div",{className:"container",children:[Object(R.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-8 col-lg-8",children:[Object(R.jsx)("h3",{children:"Accent Digital Agency"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Valencia."}),"Av 4Av. CC P Reda Building Torre A Nivel 3 Ofic.13 Urb El Parral."]})]}),Object(R.jsxs)("div",{id:"footer-det",className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(R.jsxs)("div",{className:"col-xs-12 col-md-3 col-lg-3",children:[Object(R.jsx)("h5",{className:"bolder",children:"REDES SOCIALES"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"Instagram",children:"Instagram"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Facebook",children:"Facebook"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Twitter",children:"Twitter"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"TikTok",children:"TikTok"})})]})]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-3 col-lg-3",children:[Object(R.jsx)("h5",{className:"bolder",children:"DISE\xd1O GR\xc1FICO"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"Logos",children:"Logos"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Branding",children:"Branding"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Flyers",children:"Flyers"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Gigantograf\xeda",children:"Gigantograf\xeda"})})]})]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-3 col-lg-3",children:[Object(R.jsx)("h5",{className:"bolder",children:"PROGRAMACI\xd3N"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"P\xe1ginas Web",children:"P\xe1ginas Web"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"E-Commerce",children:"E-Commerce"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Landing Page",children:"Landing Page"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"App M\xf3viles",children:"App M\xf3viles"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"App Web",children:"Aplicaciones Web"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Software",children:"Software"})})]})]}),Object(R.jsxs)("div",{className:"col-xs-12 col-md-3 col-lg-3",children:[Object(R.jsx)("h5",{className:"bolder",children:"FOTOGRAF\xcdA"}),Object(R.jsxs)("ul",{className:"list-unstyled",children:[Object(R.jsx)("li",{className:"first",children:Object(R.jsx)("span",{title:"Foto Producto",children:"Foto Producto"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Gastronom\xeda",children:"Gastronom\xeda"})}),Object(R.jsx)("li",{children:Object(R.jsx)("span",{title:"Retratos",children:"Retratos"})})]})]})]})]})}),Object(R.jsx)("div",{className:"copyright-bar",children:Object(R.jsx)("div",{className:"col-xs-12 col-sm-12 no-padding copyright",children:"\xa9 Copyright 2021 Accent. "})})]})]})})]})]})}}]),s}(a.Component),G=s(24),W=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).componentDidUpdate=function(){return G.a.pageview(window.location.pathname+window.location.search)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){G.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return Object(R.jsx)(j.a,{children:Object(R.jsx)(h.a,{path:"/",component:D})})}}]),s}(a.Component),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,99)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),l(e),n(e)}))};n.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(W,{})}),document.getElementById("root")),_()}},[[93,1,2]]]);
//# sourceMappingURL=main.828d296a.chunk.js.map