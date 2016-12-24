<template>
	<div id="item-template">
		<div id="item-head">
			<router-link to="/" class="back">
				<--返回
			</router-link>	
			<h2>{{content.title}} 组件</h2>
			<small>切换组件，支持自定义属性</small>
		</div>
		<div id="default" class="title">
			{{content.default}}
		</div>
		<slot name="default"></slot>	
		<div id="custom" class="title">
			{{content.custom}}
		</div>
		<slot name="custom"></slot>	
	</div>
</template>

<style lang="scss" scoped>
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
#item-template {
	height: 100%;
	background: #f5f5f5;
	#item-head {
		height: rem(250);
		text-align: center;
		.back {
			display: block;
			width: rem(160);
			height: rem(80);
			background: $light-green2;
			line-height: rem(80);
			@include font-dpr2(30px)
		}
		h2 {
			@include font-dpr2(60px);
			color: $light-green2;
			line-height: 1.5
		}
		small {
			color: #666;
			@include font-dpr2(30px)
		}
	}
	.title {
		padding-left: rem(40);
		height: rem(80);
		background: #f0f0f0;
		line-height: rem(80);
		@include font-dpr2(35px)
	}
}

</style>
<script>
	export default {
		props: ['content']
	}
</script>