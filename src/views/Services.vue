<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top-projects']" >

        <div class="textHeader">
            <span class="font-bold " style="line-height: 51px!important; font-weight:600; " v-if="langg === 'es'" >Servicios</span>
            <span class="font-bold " style="line-height: 51px!important ;font-weight:600;" v-if="langg === 'en'" >Services</span>
        </div>

        <div class="cardsContainer">
            <div class="card">
            
                <div class="detailsCont">
                    <span style="align-self:center; margin-top: 20px;">Tienda online - Plataforma E-Mart</span>
                    <p style="align-self:center; margin-bottom: 20px; text-align:center;">Expandí tu marca y tus ventas con una tienda online creada a tu gusto</p>
                    <!-- <p>Caracteristicas</p> -->
                    <div class="details">
                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon style="width:32px; height:28px; margin: 0 !important; " icon="fa-solid fa-display" />
                                <span class="detailSpan" >Panel de administración</span>
                            </div>
                            <p>Administrá <b>tus productos</b> y <b>tus ventas</b> desde el panel de tu tienda.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon style="width:32px; height:28px; margin: 0 !important; " icon="fa-solid fa-paintbrush" />
                                <span class="detailSpan" >Diseño personalizado</span>
                            </div>
                            <p>Personalizamos tu tienda <b>acorde a tu gusto</b> y a tu marca.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon style="width:32px; height:28px; margin: 0 !important; "  icon="fa-solid fa-hand-holding-dollar" />
                                <span class="detailSpan" >Integración con Mercado Pago</span>
                            </div>
                            <p>Tus clientes <b>comprarán seguros</b> pagando mediante Mercado Pago.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon icon="fa-solid fa-infinity" style="width:32px; height:28px; margin: 0!important;" />
                                <span class="detailSpan" >Productos ilimitados</span>
                            </div>
                            <p>Cargá <b>todos</b> los productos que quieras y comenzá a vender.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon icon="fa-solid fa-rocket" style="width:32px; height:28px; margin: 0!important;" />
                                <span class="detailSpan" >Vendé sin comisiones</span>
                            </div>
                            <p><b>No tocamos</b> tu <b>dinero</b>. Las ganancias de cada venta <b>son tuyas</b>.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon icon="fa-solid fa-globe" style="width:32px; height:28px; margin: 0!important;" />
                                <span class="detailSpan" >Dominio | SSL</span>
                            </div>
                            <p>Gestionamos tu dominio <b>.com</b> o <b>.com.ar</b> con certificación SSL.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon icon="fa-solid fa-headset" style="width:32px; height:28px; margin: 0!important;" />
                                <span class="detailSpan" >Soporte 24/7</span>
                            </div>
                            <p>Estamos para <b>ayudarte</b> con cualquier duda o inconveniente.
                            </p>                        
                        </div>

                        <div class="mt-4 detailCont" style="margin-bottom:18px; cursor:pointer;">
                            <div class="h-full w-fit" style="display:flex!important;flex-direction:row;justify-content:center!important;align-items:center!important;gap:10px;">
                                <font-awesome-icon icon="fa-solid fa-mobile-screen-button" style="width:32px; height:28px; margin: 0!important;" />
                                <span class="detailSpan" >Diseño responsive</span>
                            </div>
                            <p>Administrá tu tienda desde tu PC, notebook, tablet o <b>celular</b>.
                            </p>                        
                        </div>

                    </div>
                    
                    <div class="buttonsCont">
                        <a href="https://e-mart.com.ar" target="_blank"  class="linkCont" >
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >Tienda de prueba</span>
                        </a>
                        <a href="https://drive.google.com/file/d/1bOxYGOCueVaOBgoG8suBMAkHaM5OoAW2/view?usp=sharing" target="_blank" class="linkCont" >
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-arrow-right" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >Ver más</span>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5492235423025" target="_blank" class=" linkCont" >
                            <div class="w-6 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-cart-shopping" style="height: 12px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >Contratar servicio</span>
                        </a>
                    </div>

                </div>
            </div>
        
        </div>

        <div class="router-nav">
            <div class="flex align-items-center h-fit router-nav-link">
                <font-awesome-icon style="width:12px; margin: 0 !important; margin-right:8px!important;" icon="fa-solid fa-arrow-left" />
                <router-link v-if="langg=== 'es'" to="/projects" >Proyectos</router-link>
                <router-link v-if="langg=== 'en'" to="/projects" >Projects</router-link>
            </div>
            <div class="flex gap-2 align-items-center h-fit router-nav-link">
                <router-link v-if="langg=== 'en'" to="/contact" >Contact</router-link>
                <router-link v-if="langg=== 'es'" to="/contact" >Contacto</router-link>
                <font-awesome-icon style="width:12px; margin: 0 !important; " icon="fa-solid fa-arrow-right" />
                
            </div>
        </div>
    </div>
</template>

<style>
.buttonsCont{
    display:flex; 
    justify-content:center; 
    gap: 10px;
    margin: 20px 0;
}
.details{
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    gap: 25px;
    padding: 0 10% ;
    flex-wrap: wrap;
}

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

.detailCont{
    height: fit-content;
    border-radius: 14px;
    width: 220px;
    padding: 20px 20px;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: left;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 8px 8px 15px rgba(94, 18, 182, 0.13);
    transition: all .2 ease-in-out;
    -webkit-transition: all ease-in-out .2s;
    -moz-transition: all ease-in-out .2s;
    -ms-transition: all ease-in-out .2s;
    -o-transition: all ease-in-out .2s;
    
}
.detailCont:hover{
    box-shadow: 0px 0px 0px rgba(94, 18, 182, 0.25);
    border-color: rgba(94, 18, 182, .6);
    transition: all .2 ease-in-out;
    -webkit-transition: all ease-in-out .2s;
    -moz-transition: all ease-in-out .2s;
    -ms-transition: all ease-in-out .2s;
    -o-transition: all ease-in-out .2s;
}
.detailCont .detailSpan{
    font-size: 17px !important; 
    font-weight:500;
    line-height: 21px;

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
    width: 100%;
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
    font-size: 1.6em !important;
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 10px 20px;
    margin-top:5px;
}
.detailsCont span{
    font-weight: 500;
    font-size: 26px;
}
.detailsCont p {
    margin-top: 10px;
    font-size: 14px;
}


@media (max-width:1560px){
    .details{
        padding: 0 ;
    }
    
}

@media (max-width:768px){
    .buttonsCont{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: end;
        gap: 0px;
    }
    .linkCont{
        height: 38px;
        border-radius: 50px;    
        margin: 5px 0; 
        position: relative;
        z-index: 9999;
    }
    .linkCont .linkSpan{
        font-size: 14px !important; 
        font-weight:500;
        line-height: 13px;
    }

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

    .details{
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        align-items: center;
        gap:0;
    }

    .cardsContainer{
        margin-top:20px;
        width: 100%;
        height: 67vh;
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
        font-size: 20px;
    }
    .detailsCont p {
        margin-top: 10px;
        font-size: 12px;
    }

    .detailCont{
        height: fit-content;
        width: 100%;
        border-radius: 14px; 
        margin: 5px 0; 
        position: relative;
        z-index: 9999;
    }
    .detailCont .linkSpan{
        font-size: 13px !important; 
        font-weight:500;
        line-height: 13px;
    }
    
}
</style>

<script>

export default {
    name: "Projects",
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