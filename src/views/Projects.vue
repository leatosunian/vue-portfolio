<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top-projects']" >

        <div class="textHeader">
            <h1 class="font-bold " style="line-height: 50px!important;" v-if="langg === 'es'" >Mis proyectos</h1>
            <h1 class="font-bold " style="line-height: 50px!important;" v-if="langg === 'en'" >My projects</h1>
        </div>

        <div class="cardsContainer">

            <div class="card">
                <div class="card-img-cont">
                    <img src="@/assets/emartscreen1.png" alt="">
                </div>
                <div class="detailsCont">
                    <span>eMart - Plataforma de E-commerce</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, pariatur accusamus sapiente facere reprehenderit ipsa explicabo ipsum quo eum architecto? Voluptas nulla vero labore doloremque accusantium ab architecto iusto dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus unde deleniti illum earum, delectus quis nisi magni cumque necessitatibus dolorum aliquid! Saepe doloremque accusantium quod officia dolor hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea reiciendis incidunt animi, recusandae consectetur maiores.</p>
                    <a href="https://www.e-mart.com.ar/" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                        <div class="linkCont">
                            <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 17px; margin: 0!important;" />
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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, pariatur accusamus sapiente facere reprehenderit ipsa explicabo ipsum quo eum architecto? Voluptas nulla vero labore doloremque accusantium ab architecto iusto dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus unde deleniti illum earum, delectus quis nisi magni cumque necessitatibus dolorum aliquid! Saepe doloremque accusantium quod officia dolor hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea reiciendis incidunt animi, recusandae consectetur maiores.</p>
                    <a href="https://www.panel.e-mart.com.ar/" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                        <div class="linkCont">
                            <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 17px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >panel.e-mart.com.ar</span>
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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, pariatur accusamus sapiente facere reprehenderit ipsa explicabo ipsum quo eum architecto? Voluptas nulla vero labore doloremque accusantium ab architecto iusto dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus unde deleniti illum earum, delectus quis nisi magni cumque necessitatibus dolorum aliquid! Saepe doloremque accusantium quod officia dolor hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea reiciendis incidunt animi, recusandae consectetur maiores.</p>
                    <a href="https://www.panel.e-mart.com.ar/" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                        <div class="linkCont">
                            <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                                <font-awesome-icon icon="fa-solid fa-link" style="height: 17px; margin: 0!important;" />
                            </div>
                            <span class="linkSpan" >panel.e-mart.com.ar</span>
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
                <router-link v-if="langg=== 'en'" to="/contact" >Contact</router-link>
                <router-link v-if="langg=== 'es'" to="/contact" >Contacto</router-link>
                <font-awesome-icon style="width:12px; margin: 0 !important; " icon="fa-solid fa-arrow-right" />
            </div>
        </div>
    </div>
</template>

<style>
.linkCont{
    height: 42px;
    border-radius: 50px;
    width: fit-content;
    padding: 0 5px;
    padding-right: 15px;
    display: flex;
    gap: 5px;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
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
    font-size: 17px !important; 
    font-weight:500;
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.card{
    width: 40%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.247);
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
.textHeader h1 {
    font-size: 2em !important;
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
    .textHeader h1 {
        font-size: 1.5em !important;
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
        height: 50vh;
        min-height: 60vh;
        padding: 30px;
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
        min-height: 50vh;
        border: 1px solid rgba(110, 24, 160, 0.2);
    }
    .cardsContainer{
        padding: 0px
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
    }
    .linkCont .linkSpan{
        font-size: 14px !important; 
        font-weight:500;
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