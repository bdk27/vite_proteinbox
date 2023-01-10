import { createApp } from 'vue'
import App from './App.vue'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark, faUtensils } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faXmark, faUtensils)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
