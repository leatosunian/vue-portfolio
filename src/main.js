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
import { faAngleRight, faArrowLeft, faArrowRight, faCartShopping, faCopy, faDisplay, faDownload, faEnvelope, faGlobe, faHandHoldingDollar, faHeadset, faHome, faHouse, faHouseChimney, faInfinity, faLink, faMessage, faMobileScreenButton, faMoon, faPaintbrush, faRocket, faSun,  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faSun, faMoon, faArrowLeft, faArrowRight, faSquareGithub, faSquareWhatsapp, faLinkedin, faEnvelope, faHouseChimney, faLink, faDownload, faMessage, faAngleRight, faCopy, faPaintbrush, faDisplay, faHandHoldingDollar, faInfinity, faRocket, faHeadset, faMobileScreenButton, faGlobe, faArrowRight, faCartShopping)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
