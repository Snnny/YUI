<template>
	<item-header :content="msg">
		<div id="default" slot="default">
			<h1 @click="open">点击打开</h1>
			<pull-module :pull="config"></pull-module>
		</div>
		<div slot="custom">
			<p class="msg">
			props:["pull"] <br>
				必选参数<br>
				direction:位置<br>
				title:内容 <br>
				url:连接 <br>
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
	margin: rem(40);
	@include font-dpr2(40px)
}
</style>

<script>
import ItemHeader from './ItemHeader.vue'
import PullModule from './PullModule.vue'

export default {
	data () {
		return {
			msg: {
				title: 'Pull',
				cn: '抽屉',
				default: '默认样式',
				custom: '参数说明' 
			},
			config: [
				{
					// direction: 'left', 
					// direction: 'right', 
					// direction: 'up', 
					direction: 'down', 
					active: false, 
					message:[
						{ title: '往期作品', url: '/'},
						{ title: '热门话题', url: '/'},
						{ title: '最新动态', url: '/'},
					]
				}
			]
		}
	},
	components: {
		ItemHeader,
		PullModule
	},
	methods: {
		open () {
			this.config[0].active = !this.config[0].active
		}
	}
}

</script>