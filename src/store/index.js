import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// import moduleName from './modules/{moduleName}/store.js'
import test from './modules/test/store.js'

export default new Vuex.Store({
  modules: {
    // add your modules here
    test
  }
})
