<template>
	<div class="navbar">
		<hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

		<breadcrumb class="breadcrumb-container" />

		<div class="right-menu">
			<el-link type="primary" style="margin-bottom: 28px; margin-right: 20px;">{{name}}<i class="el-icon-view el-icon--right"></i></el-link>
			<el-dropdown class="avatar-container" trigger="click">
				<div class="avatar-wrapper">
					<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
					<i class="el-icon-caret-bottom" />
				</div>
				<el-dropdown-menu slot="dropdown" class="user-dropdown">
					<router-link to="/">
						<el-dropdown-item>
							首页
						</el-dropdown-item>
					</router-link>
					<a target="_blank" @click="goUserInfo">
						<el-dropdown-item>个人信息</el-dropdown-item>
					</a>
					<el-dropdown-item divided @click.native="logout">
						<span style="display:block;">退出登录</span>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import Breadcrumb from '@/components/Breadcrumb'
	import Hamburger from '@/components/Hamburger'
	import {Message } from 'element-ui'
	export default {
		components: {
			Breadcrumb,
			Hamburger
		},
		computed: {
			...mapGetters([
				'sidebar',
				'avatar',
				'name'
			])
		},
		methods: {
			toggleSideBar() {
				this.$store.dispatch('app/toggleSideBar')
			},
			async logout() {
				await this.$store.dispatch('user/logout') 
				Message({
					message:'退出成功',
					type: 'success',
					duration: 2000
				})
				this.$router.push(`/login?redirect=${this.$route.fullPath}`)
			},
			goUserInfo(){
				this.$router.push(`/userInfo/index`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navbar {
		height: 50px;
		overflow: hidden;
		position: relative;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
		.hamburger-container {
			line-height: 46px;
			height: 100%;
			float: left;
			cursor: pointer;
			transition: background .3s;
			-webkit-tap-highlight-color: transparent;

			&:hover {
				background: rgba(0, 0, 0, .025)
			}
		}

		.breadcrumb-container {
			float: left;
		}

		.right-menu {
			float: right;
			height: 100%;
			line-height: 50px;

			&:focus {
				outline: none;
			}

			.right-menu-item {
				display: inline-block;
				padding: 0 8px;
				height: 100%;
				font-size: 18px;
				color: #5a5e66;
				vertical-align: text-bottom;

				&.hover-effect {
					cursor: pointer;
					transition: background .3s;

					&:hover {
						background: rgba(0, 0, 0, .025)
					}
				}
			}

			.avatar-container {
				margin-right: 30px;

				.avatar-wrapper {
					margin-top: 5px;
					position: relative;

					.user-avatar {
						cursor: pointer;
						width: 40px;
						height: 40px;
						border-radius: 10px;
					}

					.el-icon-caret-bottom {
						cursor: pointer;
						position: absolute;
						right: -20px;
						top: 25px;
						font-size: 12px;
					}
				}
			}
		}

	}

	>>>.el-popper {
		margin-top: 0 !important;
	}
</style>
