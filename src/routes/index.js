import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import HeaderComponent from '../components/HeaderComponent.vue'
import SwitchComponent from '../components/SwitchComponent.vue'
import LoadComponent from '../components/LoadComponent.vue'
import TabComponent from '../components/TabComponent.vue'
import DialogComponent from '../components/DialogComponent.vue'
import PullComponent from '../components/PullComponent.vue'

import Tab1Component from '../components/Tab1Component.vue'
import Tab2Component from '../components/Tab2Component.vue'
import Tab3Component from '../components/Tab3Component.vue'

// console.log($route.query.id)
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
		},
		{
			path: '/loading',
			component: LoadComponent
		},
		{
			name: 'tab',
			path: '/tab',
			component: TabComponent,
			children: [
				{
					name: 'baidu',
					path: 'baidu',
					component: Tab1Component
				},
				{
					name: 'wangyi',
					path: 'wangyi',
					component: Tab2Component
				},
				{
					name: 'header',
					path: 'header',
					component: Tab3Component
				},
				{
					path: '/',
					redirect: 'baidu'
				}
			]
		},
		{
			path: '/dialog',
			component: DialogComponent
		},
		{
			path: '/pull',
			component: PullComponent
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
