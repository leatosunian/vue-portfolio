import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faArrowRight, faEnvelope, faMoon, faSun,  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faSun, faMoon, faArrowLeft, faArrowRight, faSquareGithub, faSquareWhatsapp, faLinkedin, faEnvelope)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
