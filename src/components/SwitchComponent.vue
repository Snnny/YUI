<template>
	<div id="item">
		<item-header :content = msg>
			<div slot="default">
				<switch-module ></switch-module>
			</div>
			<div slot="custom">
				<switch-module :switch="switchConfig"></switch-module>
				<h1 class="argu">说明：</h1>
				<p class="msg">
					props:["switch"] <br>
					可选参数<br>
					size:large,small<br>
					color:背景<br>
					checked:默认选中
				</p>
			</div>
		</item-header>

	</div>
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

	#item {
		height: 100%;
		.argu {
			padding: rem(20);
			@include font-dpr2(35px)
		}
		p.msg {
			padding: rem(20);
			@include font-dpr2(30px)
		}
	}
</style>
<script>
import ItemHeader from './ItemHeader.vue'
import SwitchModule from './SwitchModule.vue'

	export default {
		data() {
			return {
				msg: {
					title: 'Switch',
					default: '1、switch 默认样式',
					custom: '2、switch 自定义样式',
					cn: '切换'
				},
				switchConfig: {
					checked: false,
					size: 'large',
					color: 'skyblue'
				}
			}
		},
		components: {
			ItemHeader,
			SwitchModule
		}
	}
</script>