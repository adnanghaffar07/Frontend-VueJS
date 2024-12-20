import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import store from './store';

createApp(App)
.use(BootstrapVue3)
.use(store)
.mount('#app');
