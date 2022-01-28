import { createApp } from 'vue'
import App from './components/code.vue'
import code from 'vue3-highlight-code'
import 'vue3-highlight-code/dist/vue3-highlight-code.css'
import 'highlight.js/styles/atom-one-dark.css'
const app = createApp(App)
app.use(code)
app.mount('#app')