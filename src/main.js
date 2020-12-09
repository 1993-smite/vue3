import { createApp } from 'vue'

import router from './routes/index'
//import store from './store/index'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import App from './App.vue'

const app = createApp(App).use(router).mount('#app')

console.log(app);