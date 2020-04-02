<template>
	<!-- HEADER -->
	<header>
		<div class="ass1-header">
			<div class="container">
				<router-link to="/" tag="a" class="ass1-logo">
					Kang Meme
				</router-link>
				<nav>
					<ul class="ass1-header__menu">
						<li>
							<a href="#">Danh mục</a>
							<div class="ass1-header__nav" style="display: none;">
								<div class="container">
									<ul>
										<li v-for="item in getCategories" v-bind:key="item.id"><router-link v-bind:to="getLinkCategory(item)">{{ item.text }}</router-link></li>
									</ul>
								</div>
								<div class="ass1-header__menu-transition"></div>
							</div>
						</li>
						<li class="active">
							<a href="index.html">Hot</a>
							<div class="ass1-header__nav" style="display: none;">
								<div class="container">
									<ul>
										<li><a href="index.html">Funny</a></li>
									</ul>
								</div>
								<div class="ass1-header__menu-transition"></div>
							</div>
						</li>
					</ul>
				</nav>
				<div class="ass1-header__search">
					<form action="#">
						<label>
							<input type="search" name="search-text" class="form-control" placeholder="Nhập từ khóa ...">
							<i class="icon-Search"></i>
						</label>
					</form>
				</div>
				<router-link to="/upload-meme" class="ass1-header__btn-upload ass1-btn">
					<i class="icon-Upvote"></i> Upload
				</router-link>
				<router-link v-if="!isLogin" to="/login" class="ass1-header__btn-upload ass1-btn">
					Login
				</router-link>

				<!-- If Already Login -->
				<div v-else-if="currentUser" class="wrapper-user">
					<router-link 
						to="/"
						class="user-header">
						<span class="avatar">
							<img v-bind:src='getAvatar' alt="avatar">
						</span>
						<span class="email">{{ currentUser.email }}</span>
					</router-link>
					<div v-on:click="handleLogOut" class="logout">Logout</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import $ from "jquery";
import { removeVietnameseFromString } from '../helpers'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'comp-header',
	mounted() {
		$(".ass1-header__menu li > a").click(function(e) {
            // $(".ass1-header__nav").hide();
            $(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
		});
		
		$(".ass1-header__nav ul li > a").click(function(e) {
			$(this).parents('.ass1-header__nav').slideUp(300, 'swing')
		})
	},
	computed: {
		...mapGetters(['isLogin', 'currentUser']),
		getCategories() {
			return this.$store.state.post.categories;
		},
		getAvatar() {
			if (this.currentUser.profilepicture) {
				return this.currentUser.profilepicture
			}
			return 'https://image.freepik.com/free-icon/man-dark-avatar_318-9118.jpg'
		}
	},
	methods: {
		...mapActions(['logout']),
		handleLogOut() {
			this.logout().then(res => {
				this.$router.push('/login');
			});
		},
		getLinkCategory(category) {
			return {
				name: 'home-page',
				query: {
					text: removeVietnameseFromString(category.text),
					tagIndex: category.id
				}
			}
		}
	}
}
</script>

<style scoped>
	.user-header {
		position: relative;
		color: #1e1633;
		transition: all .2s ease;
		display: inline-block;
	}
	.user-header:hover {
		color: #3482e2;
	}
	.user-header > span {
		display: inline-block;
		vertical-align: middle;
	}
	.user-header .avatar {
		width: 35px;
		height: 35px;
		margin-right: 4px;
		border-radius: 100%;
		overflow: hidden;
	}
	.user-header .avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.wrapper-user {
		position: relative;
	}
	.logout {
		right: 0;
		top: 100%;
		position: absolute;
		background-color: #fff;
		padding: 10px 30px;
		min-width: 150px;
		text-align: right;
		border-radius: 3px;
		box-shadow: 0 0 5px 0px rgba(0,0,0,0.1);
		z-index: 0;
		transition: all .3s ease;
		opacity: 0;
		pointer-events: none;
		cursor: pointer;
	}
	.wrapper-user .logout:hover,
	.wrapper-user .user-header:hover + .logout {
		opacity: 1;
		z-index: 2;
		pointer-events: auto;
	}
	.ass1-header__nav > .container ul{
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.ass1-header__nav > .container ul li {
		width: 25%;
	}
	.ass1-header__nav > .container ul li:first-child {
        margin-top: 8px;
    }
</style>