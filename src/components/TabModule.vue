<template>
	<div id="tab">
		<ul class="clearfix">
			 <li v-for="item in tab">
			   <router-link :to="{name: item.name}">
			     {{item.title}}
			   </router-link>
			   <span class=line v-show="item.name ===title"></span>
			 </li>
		</ul>
		<div v-show="loading">
			<load-module></load-module>
		</div>
		<div v-show="post">
			<router-view></router-view>	
		</div>
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
$light-green2:  #3cc51c;
$light-green1:  #31c27c;;
#tab {
	padding: rem(20);
	ul {
		display: flex;
		li {
			flex: 1;
			text-align: center;
			.line {
				width: 100%;
				display: block;
				border: 2px solid $light-green2;				
			},
			a {
				display: block;
				width: 100%;
				line-height: rem(50);
				color: #666;
				@include font-dpr2(30px);
				&.router-link-active{
					color: $light-green2;
				}
			}
		}
	}
}
</style>
<script>
import LoadModule from './LoadModule.vue'
	export default {
		data() {
			return {
				loading: false,
				post : null,
				title: ''
			}
		},
		components: {
			LoadModule
		},
		props: ['tab'],
		created () {
			this.fetchData()
		},
		watch: {
			 '$route': 'fetchData'
		},
		methods: {
			fetchData () {
				this.post = null
				this.loading = true
				this.title = this.$route.name
				console.log(this.$route)
				// 获取数据
				setTimeout(() => {
					this.loading = false
					this.post = true
				},1000)
				
			}
		}
	}
</script>