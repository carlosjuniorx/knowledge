import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
import './config/msgs'
import store from './config/store'
import router from './config/router'

import './config/bootstrap'

Vue.config.productionTip = false

//Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikp1bmlvciIsImVtYWlsIjoid3d3Lmp1bmlvcnNvbG9AaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjIzMzIyNzUwLCJleHAiOjE2MjM1ODE5NTB9.D1PWS5eMu0H-3ykLH0MsTqOos3JraCkW9Uf8KdJ_DNg'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')