<template>

    <div class="main-container" >
        <div class="titleCont">
            <span v-if="lang === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="lang === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="lang === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="lang === 'es'" >desarrollador web Full Stack freelancer</span>
        </div>


    </div>
    
</template>
<style>
.main-container{
    height: 80vh;    
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
        height: 80vh;    
        padding: 0 5%;
        padding-top: 10%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:flex-start;
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
import {useDark, useToggle} from '@vueuse/core'

export default {
    name: "Home",
    components: {

    },
    data(){
        return {
            lang: 'en'
        }
    },
    beforeMount(){

    },
    methods: {

    }
}
</script>