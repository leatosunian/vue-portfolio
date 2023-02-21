<template>
<div> 
  <!-- dark mode background -->
  <template  v-if="darkMode">
    <div class="wrapper" style="z-index:0">
      <Header @getMode="setMode" style="z-index: 1000" />
      <router-view :class="{'dark': darkMode} " style="z-index: 2000" />
      <div class="box" style="z-index:0;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </template>
  
  <!-- light mode background -->
  <template  v-if="!darkMode">
    <div class="whitewrapper" style="z-index:0">
      <Header @getMode="setMode" style="z-index: 1000" />
      <router-view :class="{'dark': darkMode} " style="z-index: 2000" />
      <div class="whitebox" style="z-index:0;">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </template>

</div>
  
</template>

<script>

  import Header from '@/components/Header.vue'
  
  export default {
    components: {
      Header
    },
    data(){
      return {
        darkMode: true
      }
    },
    methods:{
      setMode(mode){
        this.darkMode = mode
        console.log(this.darkMode);
        localStorage.setItem('port_darkmode', JSON.stringify(this.darkMode))
      }
    },
    watch:{
      darkMode: function() {
        if(this.darkMode == undefined){
          localStorage.setItem('port_darkmode', 'false')
          return
        }
        localStorage.setItem('port_darkmode', JSON.stringify(this.darkMode))
      }
    },
    beforeMount(){
      this.darkMode = JSON.parse(localStorage.getItem('port_darkmode')) 
    },
  }

</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
}





</style>
