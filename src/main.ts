import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Translate from './plugins/Translate'
import { languages } from './languages'
import './assets/theme.scss';

createApp(App)
    .use(Translate, languages)
    .use(store)
    .use(router)
    .mount('#app')
