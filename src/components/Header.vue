<template>
    <div>
        <nav id="nav" :class="{'darkbar': darkMode} " style="z-index:999999;">
            <div class="container flex">
              <img v-on:click="toHome()" style="cursor:pointer;" v-if="!darkMode" src="@/assets/lt1b.png" />
              <img v-on:click="toHome()" style="cursor:pointer;" v-if="darkMode" src="@/assets/lt1w.png" />
              <template v-if="lang === 'es'">
                <div class="links">
                  <router-link to="/aboutme">Sobre mi</router-link>
                  <router-link to="/projects">Proyectos</router-link>
                  <router-link to="/contact">Contacto</router-link>
                </div>
              </template>
              <template v-if="lang === 'en'">
                <div class="links">
                  <router-link to="/aboutme">About me</router-link>
                  <router-link to="/projects">Projects</router-link>
                  <router-link to="/contact">Contact</router-link>
                </div>
              </template>

              <!-- <font-awesome-icon v-if="darkMode" icon="fa-solid fa-sun" style="color:orange" @click="darkMode = darkmode" />
              <font-awesome-icon v-else icon="fa-solid fa-moon" v-on:click="darkMode = !darkmode" /> -->
              <div class="flex gap-7 w-fit h-fit">
                <span v-if="lang === 'en'" class="text-xs cursor-pointer" style="font-weight:600;" @click="toggleLang()" >EN</span>
                <span v-if="lang === 'es'" class="text-xs cursor-pointer" style="font-weight:600;" @click="toggleLang()" >ES</span>
                <font-awesome-icon v-if="darkMode" icon="fa-solid fa-sun" style="color:orange" class="cursor-pointer" @click="toggleMode()" />
                <font-awesome-icon v-else icon="fa-solid fa-moon" class="cursor-pointer" @click="toggleMode()" />
              </div>

            </div>
      
            <!-- <div v-if="!darkMode" v-on:click="toggleNav()" class="hamburguer">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>

            <div v-if="darkMode" v-on:click="toggleNav()" class="hamburguer">
              <span class="barwhite"></span>
              <span class="barwhite"></span>
              <span class="barwhite"></span>
            </div>
            
            <template v-if="lang == 'en'">
              <div class="nav-menu">
                <a class="nav-link" href="">
                  About me
                </a>
    
                <a class="nav-link" href="">
                  Projects
                </a>
    
                <a class="nav-link" href="">
                  Contact
                </a>
              </div>
            </template>

            <template v-if="lang == 'es'">
              <div class="nav-menu">
                <a class="nav-link" href="">
                  Sobre mi
                </a>
    
                <a class="nav-link" href="">
                  Proyectos
                </a>
    
                <a class="nav-link" href="">
                  Contacto
                </a>
              </div>
            </template> -->


        </nav>
    </div>
</template>
<style>
.darkbar{
  background-color: #0e1013;
  color: rgb(255, 255, 255);
  transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
}
svg {
  margin-right: 0px;
  margin-top: 0px;
}
@media(max-width: 768px){
  svg {
    margin-right: 25px;
    margin-top: 2px;
  }
}
</style>
<script>

export default {
    name: "Header",
    components: {

    },
    data(){
        return {
          darkMode: true,
          lang: ''
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
      this.lang = 'en'
    },
    methods: {
      toHome(){
        this.$router.push({path: '/'})
      },
      toggleLang(){
        if(this.lang === 'en'){
          this.lang = 'es'
          return this.$emit('getLang', this.lang)
        }
        if(this.lang === 'es'){
          this.lang = 'en'
          return this.$emit('getLang', this.lang)
        }
      },
        toggleMode(){
          if(this.darkMode == true){
            this.darkMode = false
            return this.$emit('getMode', this.darkMode)
            
          } 
          if(!this.darkMode) {
            this.darkMode = true
            return this.$emit('getMode', this.darkMode)
            
          }
        },
        toggleNav(){
            const hamburguer = document.querySelector('.hamburguer')
            const navMenu = document.querySelector('.nav-menu')

            if(hamburguer.classList.contains('active')){
                hamburguer.classList.remove('active')
                navMenu.classList.remove('active')
                return
            }

            hamburguer.classList.toggle('active')
            navMenu.classList.toggle('active')
        }
    }
}
</script>


