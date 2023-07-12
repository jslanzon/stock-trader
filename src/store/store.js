// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stocks
    }    
})
