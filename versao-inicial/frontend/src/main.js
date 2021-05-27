import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
import store from './config/store'
import router from './config/router'

import './config/bootstrap'

Vue.config.productionTip = false

//Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6IkpvYW8iLCJlbWFpbCI6ImpvYW9AaG90bWFpbC5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYyMjEyNDYwOCwiZXhwIjoxNjIyMzgzODA4fQ.LOCB0mGdzF8v_fz7TgDUbQp066IdZCUGIh4e5kvKkLk'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')