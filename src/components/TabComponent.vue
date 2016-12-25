<template>
	<item-header :content="msg">
		<div slot="default">
			<tab-module :tab='config1'></tab-module>
		</div>
		<div slot="custom">
			<tab-module :tab='config2'></tab-module>
			<p class="msg">
			props:["tab"] <br>
				参数说明<br>
				title:tab名称<br>
				name:路径名称
			</p>
		</div>
	</item-header>
</template>

<script>
import ItemHeader from './ItemHeader.vue'
import TabModule from './TabModule.vue'

	export default {
		data () {
			return {
				msg: {
					title: 'Tab',
					default: 'tab自定义栏数',
					custom: 'tab带有动画样式',
					cn: '切换'
				},
				config1: [
					{title:'百度新闻', name:'baidu'},
					{title:'网易新闻', name:'wangyi'},
					{title:'今日事', name:'header'}
				],
				config2: [
					{title:'暴走大事件', name:'baidu'},
					{title:'情报局', name:'wangyi'}
				]
			}
		},
		components: {
			ItemHeader,
			TabModule
		}
	}
</script>
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

	.argu {
		padding: rem(20);
		@include font-dpr2(35px)
	}
	p.msg {
		padding: rem(20);
		@include font-dpr2(30px)
	}
</style>