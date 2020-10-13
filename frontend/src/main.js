/*
 * main.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/10/11 14:23:37
 *
 * Copyright (c) 2020 Shuriken
 */

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueScrollTo)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
