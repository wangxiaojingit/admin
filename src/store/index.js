import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {state} from "./state"
import * as getters from "./getters"
import {mutations} from "./mutations"

import * as actions from "./actions"

import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: debug ? [createLogger()] : []
    
  })

  export default store