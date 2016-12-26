<template>
	<item-header :content="msg">
		<div slot="default">
		 	<h1 @click="demo1">打开实例1</h1>
			<dialog-module :dialog="config"></dialog-module>
		</div>
		<div slot="custom">
		 	<!-- <h1>打开实例2</h1>
			<dialog-module :dialog="config2"></dialog-module> -->
			<p class="msg">
				props:["dialog"] <br>
				必选参数<br>
				status: false 初始状态为隐藏<br>
				content: 弹框内容<br>
				可选参数<br>
				title:弹框标题<br>
				type:'prompt' 弹框类型（默认不填，可选择弹框）<br>
				shadow:是否有边框阴影
			</p>
			
		</div>
	</item-header>
</template>
<style lang="scss" scoped>
@function rem($px, $base-font-size:75){
	@return ($px / $base-font-size ) * 1rem;
}
@mixin font-dpr2($font-size){
	font-size: $font-size / 2;
	[data-dpr="2"] & {
		font-size: $font-size ;
	}
	[data-dpr="3"] & {
		font-size: $font-size / 2 * 3;
	}
}
h1 {
	@include font-dpr2(30px);
	padding: rem(20) rem(40)
}
.msg {
	@include font-dpr2(25px);
	padding: rem(40)
}
</style>
<script>
import ItemHeader from './ItemHeader.vue'
import DialogModule from './DialogModule.vue'

	export default {
		data () {
			return {
				msg: {
					title: 'Dialog',
					cn: '弹出框',
					default: '弹出框默认样式',
					custom: ''
				},
				config: {
					status: false,
					// type: 'prompt',
					shadow: false,
					title: '这是一个提示框',
					content: '这是弹框内容，可自定义'
				}
			}
		},
		components: {
			ItemHeader,
			DialogModule
		},
		methods: {
			demo1() {
				// this.config.status = !this.config.status
				this.config.status = true
			}
		}
	}
</script>