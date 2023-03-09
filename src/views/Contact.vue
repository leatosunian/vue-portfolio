<template>

    <div :class="[ {'dark': darkMode} , 'main-container-top']" >
        <div class="titleCont">
            <span v-if="langg === 'en'" class="font-semibold" style="margin-bottom:16px;">Let's get in</span>
            <span v-if="langg === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Pongámonos en </span>
            <h1 v-if="langg === 'en'" class="font-bold ">Contact!</h1>
            <h1 v-if="langg === 'es'" class="font-bold ">Contacto!</h1>
            <span class="font-semibold reverse-text" v-if="langg === 'en'" >drop a DM on any of my social media:</span>
            <span class="font-semibold reverse-text" v-if="langg === 'es'" >escribime en mis redes sociales:</span>
            
            <a href="https://www.linkedin.com/in/leandrotosunian/" target="_blank" style="margin-bottom:18px; cursor:pointer; margin-top:40px">
                <div class="linkCont">
                    <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                        <font-awesome-icon icon="fa-brands fa-linkedin" style="height: 22px; margin: 0!important;" />
                    </div>
                    <span class="linkSpan" >linkedin.com/in/leandrotosunian</span>
                </div>
            </a>

            <a href="#" style="margin-bottom:18px; cursor:pointer;">
                <div class="linkCont">
                    <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                        <font-awesome-icon icon="fa-solid fa-envelope" style="height: 20px; margin: 0!important;"/>
                    </div>
                    <span class="linkSpan" >leandrotosunian@hotmail.com</span>
                </div>
            </a>

            <a href="https://github.com/leatosunian" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                <div class="linkCont">
                    <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                        <font-awesome-icon icon="fa-brands fa-square-github" style="height: 22px; margin: 0!important;"/>
                    </div>
                    <span class="linkSpan" >github.com/leatosunian</span>
                </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=5492235423025" target="_blank" style="margin-bottom:18px; cursor:pointer;">
                <div class="linkCont">
                    <div class="w-10 h-full" style="display:flex!important;justify-content:center!important;align-items:center!important;">
                        <font-awesome-icon icon="fa-brands fa-square-whatsapp" style="height: 22px; margin: 0!important;"/>
                    </div>
                    <span class="linkSpan" >+54 0223-5423025</span>
                </div>
            </a>
        </div>
        <div class="router-nav">
            <div class="flex align-items-center h-fit router-nav-link">
                <font-awesome-icon style="width:12px; margin: 0 !important; margin-right:8px!important;" icon="fa-solid fa-arrow-left" />
                <router-link v-if="langg=== 'es'" to="/projects" >Proyectos</router-link>
                <router-link v-if="langg=== 'en'" to="/projects" >Projects</router-link>
            </div>
            <div class="flex gap-2 align-items-center h-fit router-nav-link">
                <font-awesome-icon icon="fa-solid fa-house-chimney" style="width:12px; margin: 0 !important; "/>
                <router-link v-if="langg=== 'en'" to="/" >Home</router-link>
                <router-link v-if="langg=== 'es'" to="/" >Inicio</router-link>
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
    border: 1px solid rgba(255, 255, 255, 0.01);
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

.main-container-top{
    height: 80vh;    
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.main-container{
    height: 100vh;    
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.titleCont{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: fit-content;
    height: fit-content;
}
.titleCont span {
    font-size: 27px;
}

.reverse-text{
    align-self: end!important; 
    margin-top:20px;
}

.linkSpan{
    font-size:21px!important; 
    font-weight:500;
}



@media (max-width: 768px){

    .linkSpan{
        font-size:18px!important; 
        font-weight:500;
    }
    .main-container{
        height: 100vh;    
        padding: 0 10%;
        padding-top: 10%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:flex-start;
    }
    .main-container-top{
        height: fit-content;    
        padding: 40px 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .titleCont span {
        font-size: 22px;
    }
    .titleCont{
        padding: 10px 6%;
    }
    .reverse-text{
        align-self: flex-start!important; 
        margin-top:20px;
    }
    .linkCont{
        height: 42px;
        border-radius: 50px;
        width: fit-content;
        padding: 0 5px;
        padding-right: 15px;
        display: flex;
        gap: 5px;
        align-items: center;
        backdrop-filter: blur(4px);
        border: 1px solid transparent;
        transition: all .2 ease-in-out;
        -webkit-transition: all ease-in-out .2s;
        -moz-transition: all ease-in-out .2s;
        -ms-transition: all ease-in-out .2s;
        -o-transition: all ease-in-out .2s;
    }
}
</style>

<script>
export default {
    name: "Contact",
    components: {

    },
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
        console.log(this.lang);
    },
    methods: {

    }
}
</script>