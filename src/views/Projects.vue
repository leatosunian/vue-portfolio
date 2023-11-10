<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top-projects']" >

        <div class="textHeader">
            <span class="font-bold " style="line-height: 51px!important; font-weight:600; " v-if="langg === 'es'" >Mis proyectos</span>
            <span class="font-bold " style="line-height: 51px!important ;font-weight:600;" v-if="langg === 'en'" >My projects</span>
        </div>

        <div class="cardsContainer">
            <div class="card">
                <div class="card-img-cont">
                    <img src="@/assets/21.png" alt="">
                </div>
                <div class="detailsCont">
                    <span>UNC - Tienda online</span>
                    <p>Este trabajo consiste en una tienda online con mi plataforma eMart, la cual fue desarrollada para la marca de stickers Unique Nifty Crafts. El servicio cuenta con una tienda online donde sus clientes realizan sus pedidos y con un panel de administración para el vendedor, donde allí gestiona sus productos, su stock, sus pedidos de la tienda, entre otras funcionalidades. </p>
                    <div style="display:flex; align-items:end; gap:5px;" class="mt-2">
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'en'">Made with: </p>
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'es'">Desarrollado con: </p>
                        <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
                        <img src="@/assets/mongodblogo.png" title="MongoDB" style="width:23px; border-radius:6px;" alt="">
                        <img src="@/assets/express.png" title="Express JS" style="width:23px" alt="">
                        <img src="@/assets/vue.png" title="Vue" style="width:24px" alt="">
                        <img src="@/assets/nodejs.png" title="Node.js" style="width:19px" alt="">
                    </div>
                    <a href="https://www.uncshop.com.ar/" target="_blank" style="margin-bottom:18px;  cursor:pointer;">
                        <div class="mt-4 linkCont">
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >uncshop.com.ar</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card-img-cont">
                    <img src="@/assets/emartscreen1.png" alt="">
                </div>
                <div class="detailsCont">
                    <span>eMart - Tienda online</span>
                    <p>Esta es la tienda online del proyecto eMart, la cual tiene: un <b>listado de los productos</b> y <b>filtros</b> para clasificarlos: por categoría y/o subcategoría, por las <b>variantes del producto</b>(ej. color, talle, modelo, etc.), de mayor a menor precio y viceversa) y un <b>carrito de compras</b> donde se agregan los productos que el cliente quiera comprar. El <b>pago</b> se realiza de manera <b>segura</b> mediante <b>Mercado Pago</b>. El cliente tiene en su perfil el <b>historial de sus compras</b> y los datos de cada una, donde se le enviará el <b>código de seguimiento</b> del correo y podrá consultar el estado del envío. Cada cliente se crea su propio perfil y <b>solamente</b> se podrá comprar si sos un <b>cliente registrado</b></p>
                    <div style="display:flex; align-items:end; gap:5px;" class="mt-2">
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'en'">Made with: </p>
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'es'">Desarrollado con: </p>
                        <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
                        <img src="@/assets/mongodblogo.png" title="MongoDB" style="width:23px; border-radius:6px;" alt="">
                        <img src="@/assets/express.png" title="Express JS" style="width:23px" alt="">
                        <img src="@/assets/vue.png" title="Vue" style="width:24px" alt="">
                        <img src="@/assets/nodejs.png" title="Node.js" style="width:19px" alt="">
                    </div>
                    <a href="https://www.e-mart.com.ar/" target="_blank" style="margin-bottom:18px;  cursor:pointer;">
                        <div class="mt-4 linkCont">
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >e-mart.com.ar</span>
                        </div>
                    </a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-img-cont">
                    <img src="@/assets/emartscreen2.png" alt="">
                </div>
                <div class="detailsCont">
                    <span>eMart - Panel de administración</span>
                    <p>Este es el panel de administración de la tienda, donde podrás: <b>agregar, modificar, desactivar o borrar los productos</b> y sus respectivas <b>fotos</b> que se muestran en la tienda; modificar los <b>costos de envío</b> y el monto a partir del cual el <b>envío es gratis</b>; personalizar las <b>categorias y las subcategorias</b> en las que se clasifican los productos; <b>visualizar los pedidos</b> realizados en la tienda con los datos del cliente, del envio y de los productos de la compra. Al despachar los productos en el correo, se le envia el <b>código de seguimiento</b> al cliente para que pueda hacer el tracking de su pedido. En el <b>historial de pedidos</b> podés filtrar por dia, por período o buscar por número de orden.</p>
                    <div style="display:flex; align-items:end; gap:5px;" class="mt-2">
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'en'">Made with: </p>
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'es'">Desarrollado con: </p>
                        <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
                        <img src="@/assets/mongodblogo.png" title="MongoDB" style="width:23px; border-radius:6px;" alt="">
                        <img src="@/assets/express.png" title="Express JS" style="width:23px" alt="">
                        <img src="@/assets/vue.png" title="Vue" style="width:23px" alt="">
                        <img src="@/assets/nodejs.png" title="Node.js" style="width:20px" alt="">
                    </div>
                    <a href="https://www.panel.e-mart.com.ar/" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                        <div class="mt-4 linkCont">
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >panel.e-mart.com.ar</span>
                        </div>
                    </a>
                </div>
            </div>

            <div class="card">

                <div class="card-img-cont">
                    <img src="@/assets/culturascreen.png" alt="">
                </div>
                <div class="detailsCont">
                    <span>Cultura Sativa Growshop - Catálogo</span>
                    <p>Esta página web, la cual fue mi primer proyecto, es un catálogo de productos creada para una tienda de cultivo. A pedido del cliente, se realizó el catálogo dividido en cuatro categorías y una sección de contacto donde se encuentran accesos directos a las redes sociales, ubicación y mas información sobre la tienda fisica. El diseño de la página es responsivo, se adapta tanto a celular, como a tablets y PC. </p>
                    <div style="display:flex; align-items:end; gap:5px;" class="mt-2">
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'en'">Made with: </p>
                        <p style="font-weight:500; font-size:14px; line-height:14px; margin-right:3px;" v-if="langg === 'es'">Desarrollado con: </p>
                        <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
                        <img src="@/assets/html.png" title="HTML5" style="width:20px; border-radius:6px;" alt="">
                        <img src="@/assets/css.png" title="CSS3" style="width:20px" alt="">
                        <img src="@/assets/js.png" title="JavaScript" style="width:20px" alt="">
                    </div>  
                    <a href="https://culturasativa.com.ar/" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                        <div class="mt-4 linkCont">
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >culturasativa.com.ar</span>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>

        <div class="router-nav">
            <div class="flex align-items-center h-fit router-nav-link">
                <font-awesome-icon style="width:12px; margin: 0 !important; margin-right:8px!important;" icon="fa-solid fa-arrow-left" />
                <router-link v-if="langg=== 'es'" to="/aboutme" >Sobre mi</router-link>
                <router-link v-if="langg=== 'en'" to="/aboutme" >About me</router-link>
            </div>
            <div class="flex gap-2 align-items-center h-fit router-nav-link">
                <router-link v-if="langg=== 'en'" to="/services" >Services</router-link>
                <router-link v-if="langg=== 'es'" to="/services" >Servicios</router-link>
                <font-awesome-icon style="width:12px; margin: 0 !important; " icon="fa-solid fa-arrow-right" />
            </div>
        </div>
    </div>
</template>

<style>

.cardsContainer::-webkit-scrollbar {
    margin-left: 4px;
    width: 11px;
    color: red;
    transition: .3s all ease-in-out;
}
  
.cardsContainer::-webkit-scrollbar-track {
    background: rgba(73, 73, 73, 0.168);
    transition: .3s all ease-in-out;
    border-radius: 100vw; 
    -webkit-border-radius: 100vw;
    -moz-border-radius: 100vw;
    -ms-border-radius: 100vw;
    -o-border-radius: 100vw;
}
  
.cardsContainer::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6e13b985, #7b43977e);
    height: 50px;
    border-radius: 100vw;
    transition: .3s all ease-in-out;
    border: 4px solid linear-gradient(to bottom, #6e13b9, #7b4397);
    -webkit-transition: .3s all ease-in-out;
    -moz-transition: .3s all ease-in-out;
    -ms-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    -webkit-border-radius: 100vw;
    -moz-border-radius: 100vw;
    -ms-border-radius: 100vw;
    -o-border-radius: 100vw;
}
  
.cardsContainer::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #6e13b9, #7b4397);
    transition: .3s all ease-in-out;
}

.linkCont{
    height: 34px!important;
    border-radius: 50px;
    width: fit-content;
    padding: 0 5px;
    padding-right: 15px;
    display: flex;
    gap: 5px;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 8px 8px 15px rgba(94, 18, 182, 0.13);
    transition: all .2 ease-in-out;
    -webkit-transition: all ease-in-out .2s;
    -moz-transition: all ease-in-out .2s;
    -ms-transition: all ease-in-out .2s;
    -o-transition: all ease-in-out .2s;
    
}
.linkCont:hover{
    box-shadow: 0px 0px 0px rgba(94, 18, 182, 0.25);
    border-color: rgba(94, 18, 182, .6);
    transition: all .2 ease-in-out;
    -webkit-transition: all ease-in-out .2s;
    -moz-transition: all ease-in-out .2s;
    -ms-transition: all ease-in-out .2s;
    -o-transition: all ease-in-out .2s;
}
.linkCont .linkSpan{
    font-size: 14px !important; 
    font-weight:500;
    line-height: 14px;

}

.main-container-top-projects{
    height: 80vh;    
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cardsContainer{
    margin-top: 30px;
    width: 100%;
    height: 70vh;
    padding: 0px;
    gap: 45px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.card{
    width: 48%;
    height: fit-content;
    padding-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(5px);
    background: transparent;
    z-index: 4000;
}
.textHeader{
    height: fit-content;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
}
.textHeader span {
    font-size: 1.3em !important;
}

.card-img-cont{
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}
.card-img-cont img{
    border-top-left-radius: 12px;            
    border-top-right-radius: 12px;

}

.detailsCont{
    width: 100%;
    height: fit-content;
    padding: 10px 20px;
    margin-top:5px;
}
.detailsCont span{
    font-weight: 500;
    font-size: 24px;
}
.detailsCont p {
    margin-top: 10px;
    font-size: 14px;
}

@media (max-width:768px){

    .cardsContainer::-webkit-scrollbar {
        width: 4px;
        color: red;
        transition: .3s all ease-in-out;
      }
    .textHeader h1 {
        font-size: 1.3em !important;
    }

    .main-container-top-projects{
        height: fit-content;    
        padding: 40px 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cardsContainer{
        margin-top:20px;
        width: 100%;
        height: 58vh;
        min-height: 60vh;
        gap: 30px;
        overflow-y: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border: none;
    }
    .card{
        position:inherit ;
        width: 100%;
        height: fit-content;
        padding: 0px;
        padding-bottom: 10px;
        min-height: 50vh;
        border: 1px solid rgba(197, 197, 197, 0.1);
    }
    .cardsContainer{
        padding: 0 4px;
    }

    .detailsCont span{
        font-weight: 500;
        font-size: 18px;
    }
    .detailsCont p {
        margin-top: 10px;
        font-size: 12px;
    }

    .linkCont{
        height: 38px;
        border-radius: 50px;    
        margin: 5px 0; 
        position: relative;
        z-index: 9999;
    }
    .linkCont .linkSpan{
        font-size: 13px !important; 
        font-weight:500;
        line-height: 13px;
    }
    
}
</style>

<script>

export default {
    name: "AboutMe",
    props:{
        darkMode: null,
        langg: 'en'
    },
    data(){
        return {
            lang: 'en'
        }
    },
    beforeMount(){
        this.lang = localStorage.getItem('port_lang')
    },
}
</script>