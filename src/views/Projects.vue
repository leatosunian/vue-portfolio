<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top']" >
        <div class="titleCont">
            <span v-if="langg === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="langg === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="langg === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="langg === 'es'" >soy desarrollador web Full Stack</span>
            <div class="flex justify-between w-full">
                <router-link v-if="langg=== 'en'" to="/aboutme" class="mt-10 reverse-text pbarlink">About me</router-link>
                <router-link v-if="langg=== 'es'" to="/aboutme" class="mt-10 reverse-text pbarlink">Sobre mi</router-link>    
                <router-link v-if="langg=== 'en'" to="/contact" class="mt-10 reverse-text pbarlink">Contact</router-link>
                <router-link v-if="langg=== 'es'" to="/contact" class="mt-10 reverse-text pbarlink">Contacto</router-link>      
            </div>
        </div>
    </div>
</template>

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