<template>
	<div id="wrap">
		<label
		  :class = "{active: checked, large: large, small: small}" 
		  @click="checked = !checked">
			<div 
			  v-if = "checked"
			  :class = "{large: large, small: small}"
			  class="before"
			  :style = "{ background: this.color}"></div>
			<div 
			  v-else
			  :class = "{large: large, small: small}"
			  class="before"></div>  
			<div 
			  :class="{large: large, small: small}"
			  class="circle"
			  ></div>
		</label>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/css/yui.scss';

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
	#wrap {
		padding: rem(20);
	}
	label {
		position:relative;
		display: inline-block;
		padding: 1px;
		border-radius: rem(50);
		height: rem(50);
		width: rem(130);
		margin-bottom: 15px;
		background-color: #eee;
		cursor: pointer;
		vertical-align: top;
		-webkit-user-select: none;
		-webkit-tap-highlight-color:transparent;
		&.large {
			border-radius: rem(70);
			height: rem(70);
			width: rem(180);
		}
		&.small {
			border-radius: rem(30);
			height: rem(30);
			width: rem(80);
		}
		.before {
			border-radius: rem(50);
			height: rem(50);
			background-color: #e5e5e5;
			-webkit-transform: scale(1, 1);
			-webkit-transition: backgroundColor .5s ease;
			&.large {
				border-radius: rem(70);
				height: rem(70);
			}
			&.small {
				border-radius: rem(30);
				height: rem(30);
			}
		}
		.circle {
			position: absolute;
			top: 50%;  
			margin-top: rem(-25);  
			width: rem(50);
			height: rem(50);
			border-radius: 50%;
			background-color: white;
			-webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
			-webkit-transition: transform 0.3s ease;
			&.small {
				margin-top: rem(-15);  
				width: rem(30);
				height: rem(30);
			}
		}
	}
	.active {
		.circle {
			-webkit-transform: translateX(rem(80));
			&.large {
				-webkit-transform: translateX(rem(127));
			}
			&.small {
				-webkit-transform: translateX(rem(45));
			}
		}
		.before {
			 background-color:#5cb85c;
		}
	}
</style>
<script>
	export default {
		data () {
			return {
				checked: false,
				large: false,
				small: false,
				color: '#5cb85c'
			}
		},
		methods: {		},
		props: ["switch"],
		mounted() {
			if(!this.switch)
				return
			let { size, checked, color} = this.switch
			color && (this.color = color)
			checked && (this.checked = checked)
			size === undefined ? size = undefined : size === 'large' ? this.large = true :
			this.small = true
		},
		computed: {

		}
	}
</script>