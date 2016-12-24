<template>
	<div id="load">
		<button 
		  class="btn" 
		  @click="fetch" 
		  :disabled="isLoad"
		  :style="{color: color}"
		  :class = "{unClick: isLoad}">
		  <span class="load-span" v-show="isLoad">
		  	<i></i>
		  	<i></i>
		  	<i></i>
		  	<i></i>
		  	<i></i>
		  	<i></i>
		  	<i></i>
		  	<i></i>
		  </span>
		  {{loadMsg}}
		</button>
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
@-webkit-keyframes loading{
	50%{opacity:0.3;}
	100%{opacity:1;}
}
#load {
	padding: rem(20);
}
.btn {
	width: rem(700);
	height: rem(100);
	-webkit-tap-highlight-color:transparent;
	background: #fff;
	border: 1px solid rgba(0,0,0,.2);
	border-radius: 10px;
	-webkit-appearance: none;
	outline-style: none;
	line-height: rem(80);
	letter-spacing: rem(5);
	@include font-dpr2(35px);
	span {
		position: relative;
		display: inline-block;
		width: rem(40);
		height: rem(40);
		vertical-align: middle;
		i {
			position: absolute;
			width: rem(6);
			height: rem(6);
			border-radius: 50%;
			background: #000;
			&:nth-child(1){
				top: rem(17.5);
				left: rem(0);
				background: rgba(0,0,0,1);
				-webkit-animation:loading 1s ease 0s infinite;
			};
			&:nth-child(2){
				top: rem(7.5);
				left: rem(7.5);
				-webkit-animation:loading 1s ease 0.125s infinite;
			};
			&:nth-child(3){
				top: rem(37.5);
				left: rem(17.5);
				-webkit-animation:loading 1s ease 0.25s infinite;
			};
			&:nth-child(4){
				top: rem(32.5);
				left: rem(7.5);
				-webkit-animation:loading 1s ease 0.375s infinite;
			};
			&:nth-child(5){
				top: rem(17.5);
				left: rem(37.5);
				-webkit-animation:loading 1s ease 0.5s infinite;
			};
			&:nth-child(6){
				top: rem(32.5);
				left: rem(32.5);
				-webkit-animation:loading 1s ease .625s infinite;
			};
			&:nth-child(7){
				top: rem(7.5);
				left: rem(32.5);
				-webkit-animation:loading 1s ease 0.75s infinite;
			};
		}
	}
}
.unClick {
	background: #e5e5e5
} 
</style>
<script>
	export default {
		data() {
			return {
				loadMsg: '加载更多',
				isLoad: false,
				color: '',
				initWord: '加载更多',
				loadWord: '加载中'
			}
		},
		methods: {
			fetch () {
				// ajax
				this.isLoad = true
				setTimeout(() => {
					this.isLoad = false
				},1500)
			}
		},
		watch: {
			isLoad(n) {
				n === true ? this.loadMsg = this.loadWord: this.loadMsg = this.initWord
			}
		},
		props: ["load"],
		mounted() {
			
			if(!this.load)
				return
			this.color = this.load.color || '#000'
			this.loadMsg = this.initWord = this.load.initWord || '加载更多'
			this.loadWord = this.load.loadWord || '加载中'

			
		}
	}
</script>