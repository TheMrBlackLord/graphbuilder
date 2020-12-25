import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// custom js files
//import {Point} './assets/js/Point'

import './assets/js/CanvasHandler'

createApp(App).mount('#app')

// global css styles
require('@/assets/styles/main.css')