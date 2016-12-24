<template>
	<div id="item">
		<item-header :content = msg>
			<div slot="default">
				<switch-module ></switch-module>
			</div>
			<div slot="custom">
				<switch-module :switch="switchConfig"></switch-module>
			</div>
		</item-header>
	</div>
</template>

<style lang="scss">
	@function rem($px, $base-font-size:75){
		@return ($px / $base-font-size ) * 1rem;
	}

	$light-green:  #31c27c;
	$light-green2:  #3cc51c;

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
		height: 100%
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
					custom: '2、switch 自定义样式'
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