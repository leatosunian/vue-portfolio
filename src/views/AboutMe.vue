<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top-about']" >
        <div class="aboutCont">

            <div class="w-fit h-fit picCont">
                <img src="@/assets/mypic.jpg" alt="">
            </div>

            <div>
                <h3 class="titles" v-if="langg === 'es'">Sobre mi</h3>
                <h3 class="titles" v-if="langg === 'en'">About me</h3>
                <p class="mb-4"><img src="@/assets/mypic.jpg" alt="" class="picContMobile">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla asperiores beatae animi magnam voluptatibus enim iusto ipsa deserunt ducimus itaque accusamus in quod explicabo nihil voluptatum atque, magni, dolore reiciendis obcaecati qui, inventore eligendi provident. Ex, sunt repellat. Iste.
                </p>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum, repellendus velit et magni quos cumque? Perferendis provident tempora, fugiat ex quasi, nihil rerum tempore eaque illo ea repellat sit!
                </p>
                <h3 class="titles" v-if="langg === 'es'">Mis conocimientos</h3>
                <h3 class="titles" v-if="langg === 'en'">Knowledge</h3>
                <p class="mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla asperiores beatae animi magnam voluptatibus enim iusto ipsa deserunt ducimus itaque accusamus in quod explicabo nihil voluptatum atque, magni, dolore reiciendis obcaecati qui, inventore eligendi provident. Ex, sunt repellat. Iste.
                </p>
            </div>

            <!-- <span v-if="langg === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="langg === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="langg === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="langg === 'es'" >soy desarrollador web Full Stack</span> -->

        </div>
        <div class="router-nav">
            <div class="flex align-items-center h-fit router-nav-link">
                <font-awesome-icon style="width:12px; margin: 0 !important; margin-right:8px!important;" icon="fa-solid fa-arrow-left" />
                <router-link v-if="langg=== 'es'" to="/" >Inicio</router-link>
                <router-link v-if="langg=== 'en'" to="/" >Home</router-link>
                

            </div>
            <div class="flex gap-2 align-items-center h-fit router-nav-link">
                <router-link v-if="langg=== 'en'" to="/projects" >My proyects</router-link>
                <router-link v-if="langg=== 'es'" to="/projects" >Mis proyectos</router-link>
                <font-awesome-icon style="width:12px; margin: 0 !important; " icon="fa-solid fa-arrow-right" />
 
            </div>
   
        </div>
    </div>
</template>

<style>

h3{
    font-size: 27px!important;
    font-weight: 600!important;
    margin-bottom: 10px!important;
}
.main-container-top-about{
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
.aboutCont{
    display: flex;
    box-shadow: 8px 8px 15px rgba(40, 40, 40, 0.2);
    flex-direction: row;
    padding: 3%;
    gap: 50px;
    align-items: center;
    max-width: 70vw;
    width: fit-content;
    height: fit-content;
    border: 1px solid rgba(129, 129, 129, 0) ;
    border-radius: 10px;
    backdrop-filter: blur(6px);
    z-index: 10000;
}
.aboutCont span {
    font-size: 27px;
}

.aboutCont p {
    font-size: 15px;
}

.titles{
    font-size: 24px;
}

.picCont img{
    position: relative;
    width: 500px;
    z-index: 10000;
    border-radius: 10px;
    min-width: 200px;
}

.reverse-text{
    align-self: end!important; 
    margin-top:20px;
}
.picContMobile{
    display: none;
}

@media (max-width: 768px){

    .titles{
        font-size: 24px !important;
    }
    .aboutCont p {
        font-size: 14px;
    }
    .picContMobile{
        display: block;
        width:100px;
        float:right;
        margin-left: 12px;
        margin-bottom: 4px;
        border-radius: 10px;
    }
    .aboutCont{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        padding: 10px 6%;
        gap: 50px;
        align-items: center;
        max-width: 100vw;
        max-height: 70vh;
        box-shadow: 0px 0px 0px rgb(40 40 40 / 20%)!important;
        width: fit-content;
        height: fit-content;
        border: 1px solid rgba(129, 129, 129, 0) ;
        border-radius: 10px;
        backdrop-filter: blur(6px);
        z-index: 10000;
    }
    .main-container{
        height: 100vh;    
        padding: 0 5%;
        padding-top: 10%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:flex-start;
    }
    .main-container-top-about{
        height: fit-content;    
        padding: 10px 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .aboutCont span {
        font-size: 20px;
    }
    .reverse-text{
        align-self: flex-start!important; 
        margin-top:20px;
    }
    .picCont {
        display: none;
    }
    .picCont img{
        position: relative;
        width: 100px;
        z-index: 10000;
        border-radius: 10px;
        min-width: 100px;
    }
        
}
</style>

<script>

export default {
    name: "AboutMe",
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
    mounted() {
        console.log(this.name);
    },
    methods: {

    }
}
</script>