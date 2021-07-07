
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(Element, { locale })
import axios from './axios'
Vue.prototype.$axios = axios
