import Vue from 'vue'
import Vuex from 'vuex'

import moduleEx from './moduleExample'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {

    },
    modules: {
        moduleEx
    }
})

export default store;