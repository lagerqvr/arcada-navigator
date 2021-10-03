import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfo, faCloud, faMapSigns, faBook, faUtensils, faBus, faQuestionCircle, faGlobeAmericas, faChevronRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import "animate.css";
import axios from 'axios';
Vue.prototype.$http = axios;

library.add(faInfo, faCloud, faMapSigns, faBook, faUtensils, faBus, faQuestionCircle, faGlobeAmericas, faChevronRight, faLongArrowAltLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
