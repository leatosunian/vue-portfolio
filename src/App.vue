<template>
<div> 
  <!-- dark mode background -->
  <template  v-if="darkMode">
    <div class="wrapper" >
      <Header @getMode="setMode" @getLang="setLang"  />
      <router-view :langg="lang" :class="{'dark': darkMode} " v-slot="{Component}" >
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <Footer></Footer>
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

      <router-view :langg="lang" :class="{'dark': darkMode} " v-slot="{Component}" >
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>

      <Footer></Footer>
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
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    },
    data(){
      return {
        darkMode: false,
        lang: 'en'
      }
    },
    methods:{
      setMode(mode){
        this.darkMode = mode
        localStorage.setItem('port_darkmode', JSON.stringify(this.darkMode))      
      },
      setLang(lang){
        this.lang = lang
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
      if(modeLocalS != null){
        return this.darkMode = modeLocalS 
      } 
      if(modeLocalS == null) {
        this.darkMode = false
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

/* animations */

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -ms-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.router-leave-active {
  transition: all .3s ease-in;
  -webkit-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
  -ms-transition: all .3s ease-in;
  -o-transition: all .3s ease-in;
}


</style>
