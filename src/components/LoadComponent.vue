<template>
	<item-header :content = "msg">
		<div slot="default">
			<load-module></load-module>
		</div>
		<div slot="custom">
			<load-module :load = "config"></load-module>
			<h1 class="argu">说明：</h1>
			<p class="msg">
			props:["load"] <br>
				可选参数<br>
				color:字体<br>
				initWord:加载前字 <br>
				loadWord:加载后字 <br>
			</p>
		</div>
	</item-header>
</template>
<style lang="scss" scoped>
</style>
<script>
import ItemHeader from './ItemHeader.vue'
import LoadModule from './LoadModule.vue'

export default {
	data () {
		return {
			msg: {
				title: 'Loading',
				default: 'loading默认样式',
				custom: 'loading自定义样式',
				cn: '加载'
			},
			config: {
				color: '#f00',
				initWord: '点击加载更多',
				loadWord: '玩命加载中…'
			}
		}
	},
	components: {
		ItemHeader,
		LoadModule
	}
}
</script>