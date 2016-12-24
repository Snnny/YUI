<template>
	<div class="body">
		<header>
			<h1>{{title}}</h1>
			<div>
				<small>一些常用的vue移动端组件</small>
				<small>github开源地址：https://github.com/Snnny/snnny.github.io</small>
			</div>
		</header>
		<section>
			<ul>
				<li class="item" v-for="one in data">
					<router-link :to = one.url>
						<i class="iconfont icon" :class = one.className>{{ one.unicode }}</i> 
						<span>{{ one.name }}</span>
					</router-link>
				</li>
			</ul>
		</section>
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
	header {
		height: rem(250);
		width: 100%;
		margin-top: rem(100);
		border-bottom: 2px solid #ccc;
		text-align: center;
		h1 {
			@include font-dpr2(80px);
			color: $light-green;
		}
		small {
			@include font-dpr2(25px);
			color: #ccc
		}
	}
	section {
		width: 100%;
		ul {
			width: 100%;
			li{

				float: left;
				width: 33.33333%;
				border: 1px solid rgba(0,0,0,.2);
				height: rem(200);
				text-align: center;
				a {
					padding: rem(40);
					display: block;
					height: 100%;
					i.icon {
						@include font-dpr2(40px);
						color: $light-green2;
					}
					span{
						color: #000;
						display: block;
						@include font-dpr2(30px);
						margin-top: rem(20)
					}
				}
			}
		}
  }
</style>

<script>
import conponentsInfo from '../assets/componentsinfo'
	export default {
		data() {
			return {
				title: 'YUI',
				data: conponentsInfo
			}
		}
	}
</script>