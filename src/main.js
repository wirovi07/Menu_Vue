import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faFire, faHomeUser, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBars)
library.add(faHomeUser)
library.add(faFire)

library.add(faScrewdriverWrench)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app")
