<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top']" >
        <div class="aboutCont">

            <div class="w-fit h-fit picCont">
                <img src="@/assets/mypic.jpg" alt="">
            </div>

            <div>
                <h3 v-if="langg === 'es'">Sobre mi</h3>
                <h3 v-if="langg === 'en'">About me</h3>
                <p class="mb-5"><img src="@/assets/mypic.jpg" alt="" class="picContMobile">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla asperiores beatae animi magnam voluptatibus enim iusto ipsa deserunt ducimus itaque accusamus in quod explicabo nihil voluptatum atque, magni, dolore reiciendis obcaecati qui, inventore eligendi provident. Ex, sunt repellat. Iste.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum, repellendus velit et magni quos cumque? Perferendis provident tempora, fugiat ex quasi, nihil rerum tempore eaque illo ea repellat sit!
                </p>
            </div>

            <!-- <span v-if="langg === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="langg === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="langg === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="langg === 'es'" >soy desarrollador web Full Stack</span> -->

        </div>
        <div class="flex justify-between w-full">
            <router-link v-if="langg=== 'es'" to="/" class="mt-10 pbarlink">Inicio</router-link>
            <router-link v-if="langg=== 'en'" to="/" class="mt-10 pbarlink">Home</router-link>
            <router-link v-if="langg=== 'en'" to="/projects" class="mt-10 reverse-text pbarlink">My proyects</router-link>
            <router-link v-if="langg=== 'es'" to="/projects" class="mt-10 reverse-text pbarlink">Mis proyectos</router-link>    
        </div>
    </div>
</template>

<style>

h3{
    font-size: 27px!important;
    font-weight: 600!important;
    margin-bottom: 10px!important;
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
.aboutCont{
    display: flex;
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
    .picContMobile{
        display: block;
        width:100px;
        float:right;
        margin-left: 8px;
        margin-bottom: 4px;
        border-radius: 10px;
    }
    .aboutCont{
        display: flex;
        flex-direction: column;
        padding: 0 6%;
        gap: 50px;
        align-items: center;
        max-width: 100vw;
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
    .main-container-top{
        height: fit-content;    
        padding: 20px 0%;
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