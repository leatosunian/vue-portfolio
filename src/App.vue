<template>
<div> 
  <!-- dark mode background -->
  <template  v-if="darkMode">
    <div class="wrapper" >
      <Header @getMode="setMode" @getLang="setLang"  />
      <router-view :langg="lang" :class="{'dark': darkMode} " />
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
  </template> -->
  
  <!-- light mode background -->
  <template  v-if="!darkMode">
    <div class="whitewrapper" >
      <Header @getMode="setMode" @getLang="setLang" />
      <router-view :langg="lang" :class="{'dark': darkMode} "  />
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

  <!-- <Header @getMode="setMode" />
  <router-view :darkMode="darkMode"  /> -->
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
        darkMode: true,
        lang: ''
      }
    },
    methods:{
      setMode(mode){
        this.darkMode = mode
        console.log(this.darkMode);
        localStorage.setItem('port_darkmode', JSON.stringify(this.darkMode))
      
      },
      setLang(lang){
        this.lang = lang
        console.log(this.lang)
        localStorage.setItem('port_lang', this.lang)
      },
      changeBg(){
        const background = document.querySelector('#htmlbg')

            if(background.classList.contains('dark')){
              background.classList.remove('dark')
              return
            }

            background.classList.toggle('dark')
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
      const modeLocalS = JSON.parse(localStorage.getItem('port_darkmode'))
      if(modeLocalS){
        this.darkMode = modeLocalS 
      } else {
        this.darkMode = true
      }
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
