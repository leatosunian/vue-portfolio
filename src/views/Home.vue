<template>

    <div :class="[ {'dark': darkMode} , 'main-container-top']" >
        <div class="titleCont">
            <span v-if="lang === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="lang === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="lang === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="lang === 'es'" >soy desarrollador web Full Stack</span>
            <span>{{ langg }} </span>
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
        font-size: 20px;
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
        langg: ''
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