<template>
	<div id="pull">
		<div class="bg" v-show="active" @click="hidden"></div>
		<div class="pull-body" 
		  :class='classList'>
			<ul class="pull-list">
				<li v-for="item in pullData">
					<router-link :to=item.url>{{item.title}}</router-link>	
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				direction: null,
				pullData: '',
				active: '',
				classList: null
			}
		},
		methods: {
			hidden (e) {
				if([...e.target.classList].includes('bg'))
					this.pull[0].active = this.active = false
			}
		},
		computed: {
			classList() {
				return {
					active: this.active,
					previous: !this.active,
					right: this.direction === 'right',
					left: this.direction === 'left',
					up: this.direction === 'up',
					down: this.direction === 'down',
				}
			}
		},
		mounted() {
			let data = this.pull[0]
			 this.direction = data.direction
			 this.pullData = data.message
			 this.active = data.active || false
			 console.log(this.direction)
		},
		props: ['pull'],
		watch: {
			pull: {
				handler: function (val) {
					this.active = val[0].active
				},
				deep: true
			}
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
%lAndR{
	top: rem(-460);
	height: 2500px;
	width: rem(300);
	-webkit-transform:translateX(rem(-300));
};
%uAndD {
	width: 100%;
	-webkit-transform:translateY(rem(-460));
}
#pull {
	position: relative;
	height: 100%;
	.bg {
		position: absolute;
		top: rem(-460);
		height: 2500px;
		width: 100%;
		z-index: 2;
		background: rgba(0,0,0,.2);

	}
	h1 {
		margin: rem(40);
		@include font-dpr2(40px)
	}
	.pull-body {
		position: absolute;
		z-index: 3;
		background: #fff;
		&.right{
			@extend %lAndR;
			right:rem(-300);
			&.previous{
				-webkit-transform:translateX(rem(0));
			}
			&.active {
				-webkit-transform:translateX(rem(-300));
			}
		};
		&.left {
			@extend %lAndR;
			&.previous{
				-webkit-transform:translateX(rem(-300));
			}
			&.active {
				-webkit-transform:translateX(0);
			}
		}
		&.up {
			top: rem(-460);
			@extend %uAndD;
			&.previous{
				-webkit-transform:translateY(rem(-460));
			}
			&.active {
				-webkit-transform:translateY(rem(0));
			}
		}
		&.down {
			bottom: rem(-1340);
			@extend %uAndD;
			&.previous{
				-webkit-transform:translateY(rem(0));
			}
			&.active {
				-webkit-transform:translateY(rem(-460));
			}
		}
		/*-webkit-transform:translateX(rem(-300));*/
		-webkit-transition: all 1s ;
		.pull-list {
			li {
				width: 100%;
				border-top: 1px solid #ccc;
				height: rem(100);
				line-height: rem(100);
				&:first-child{
					margin-top:rem(100);
				}
				a {
					display: block;
					width: 100%;
					height: 100%;
					@include font-dpr2(35px)
					padding-left: rem(40);
					color: #2384e8;
					font-size: 18px;
				}
			}
		}
	}

}

</style>