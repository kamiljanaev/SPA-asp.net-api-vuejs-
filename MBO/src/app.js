import Vue from 'vue'
import App from './components/App'

import router from './utilities/router'
import store from './utilities/store'
import './utilities/datepicker/index.js'
import './utilities/axios'
import './utilities/vue-mixins'

import {
  sync
} from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export {
  app,
  router,
  store
}
