import Vue from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfo, faCloud, faMapSigns, faBook, faUtensils, faBus, faQuestionCircle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

library.add(faInfo, faCloud, faMapSigns, faBook, faUtensils, faBus, faQuestionCircle, faGlobeAmericas);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
