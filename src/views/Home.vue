<template>

    <div :class="[ {'dark': darkMode} , 'main-container-top']" >
        <div class="titleCont">
            <span v-if="langg === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="langg === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="langg === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="langg === 'es'" >soy desarrollador web Full Stack</span>
            <router-link v-if="langg === 'es'" to="/aboutme" class="mt-10 reverse-text pbarlink">Sobre mi</router-link>
            <router-link v-if="langg === 'en'" to="/aboutme" class="mt-10 reverse-text pbarlink">About me</router-link>
        </div>
    </div>



</template>

<style>
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

@media (max-width: 768px){
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
        padding: 40px 6%;
    }
    .reverse-text{
        align-self: flex-start!important; 
        margin-top:20px;
    }
    
}
</style>

<script>

export default {
    name: "Home",
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