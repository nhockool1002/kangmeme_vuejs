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
				<router-link to="/upload-meme" tag="a" class="ass1-header__btn-upload ass1-btn">
					<i class="icon-Upvote"></i> Upload
				</router-link>
				<router-link to="/login" tag="a" class="ass1-header__btn-upload ass1-btn">
					Login
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import $ from "jquery";
import { removeVietnameseFromString } from '../helpers'
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
		getCategories() {
			return this.$store.state.post.categories;
		}
	},
	methods: {
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

<style>
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