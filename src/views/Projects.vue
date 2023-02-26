<template>
    <div :class="[ {'dark': darkMode} , 'main-container-top']" >

        <div class="titleCont">
            <h1 class="font-bold " v-if="langg === 'es'" >Mis proyectos</h1>
            <h1 class="font-bold " v-if="langg === 'en'" >My projects</h1>
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