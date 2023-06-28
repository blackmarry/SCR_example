import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/styles/main.scss'

import App from './App.vue'
import router from './router'

createApp(App)
	.use(createPinia())
	.use(router)
	.mount('#app')


import 'bootstrap/dist/js/bootstrap.js'
