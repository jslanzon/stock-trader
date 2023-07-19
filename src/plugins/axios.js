import axios from "axios";
import Vue from "vue";

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-c8066-default-rtdb.firebaseio.com/'
        })
    }
})