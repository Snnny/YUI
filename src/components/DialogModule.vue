<template>
	<div id="dialog" v-show="dialogShow" @click="hidden" >
		<div class="bg" v-if="shadow"></div>
		<div class="bgHidden" v-else></div>
		<div class="dialog" :class='{shadow: !shadow}'>
			<h1>{{title}}</h1>
			<div v-if="type === 'prompt'">
				<div class="prompt">
					<p>{{dialog.content}}</p>
				</div>
			</div>
			<div v-else>
				<div class="content">
					<p>{{dialog.content}}</p>
				</div>
				<div class="footer clearfix">
					<div class="foot footer-left" @click="cancel">取消</div>
					<div class="foot footer-right" @click="config">确定</div>
				</div>
			</div>
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
	#dialog {
		%bg {
			top: -500px;
			width: 100%;
			position: fixed;
			height: 2000px;
			z-index: 2
		}
		.bg {
			@extend %bg;
			background: rgba(0,0,0,.3);
		};
		.bgHidden {
			@extend %bg;
			background: rgba(0,0,0,0);
		};
		.shadow {
			-webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.1);
		}
		.dialog {
			position: absolute;
			width: rem(600);
			background: #fff;
			z-index: 3;
			top: 50%;
			left:50%;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			border-radius: rem(10);
			/*dialog标题*/
			h1 {
				margin: rem(10) 0;
				text-align: center;
				line-height: 2;
				@include font-dpr2(40px);
			}
			%style {
				display: flex;
				justify-content:center;
				align-items: center;
				padding: rem(25); 
				min-height: rem(150);
				p {
					@include font-dpr2(35px);
				}
			}
			.prompt {
				@extend %style 
			}
			.content {
				@extend %style ;
				margin-bottom: rem(100);
			}
			
			.footer {
				position: absolute;
				bottom: 0;
				width: 100%;
				height: rem(100);
				line-height: rem(100);
				border-radius: rem(10);
				.foot {
					float: left;
					width: 50%;
					height: 100%;
					text-align: center;
					@include font-dpr2(30px);
					border-top: 1px solid rgba(0,0,0,.3);
					&:first-child{
						border-right: 1px solid rgba(0,0,0,.3);
					};
				}
			}
		}
	}
</style>

<script>
export default {
	data () {
		return {
			dialogShow: false,
			type: null,
			title: null,
			shadow: null
		}
	},
	methods: {
		config () {
			this.dialogShow = this.dialog.status = false
			// 其他逻辑处理
		},
		cancel () {
			this.dialogShow = this.dialog.status = false
		},
		hidden (e) {
			if(this.type && [...e.target.classList].includes('bg')) {
				this.dialogShow = this.dialog.status = false
			}
		}
	},
	mounted() {
		let dialog = this.dialog
		if(!dialog)
			return
		this.type = dialog.type || undefined
		this.title = dialog.title || null
		dialog.shadow === undefined ? this.shadow = true : this.shadow = dialog.shadow
	},
	props: ['dialog'],
	watch: {
		dialog: {
			handler: function (val) {
				this.dialogShow = val.status
			},
			deep: true
		}
	} 
}
</script>