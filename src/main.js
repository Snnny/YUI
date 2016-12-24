import Vue from 'vue'
import App from './components/App.vue'
import router from './routes'


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
