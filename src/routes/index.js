import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import HeaderComponent from '../components/HeaderComponent.vue'
import SwitchComponent from '../components/SwitchComponent.vue'

export default new vueRouter({
	routes: [
		{
			path: '/',
			components: {
				app: HeaderComponent
			}
		},
		{
			path: '/switch',
			component: SwitchComponent
		}
	]
})