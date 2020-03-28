<template>
<main>
		<div class="container">
			<!--sections-->
			<div class="row">
				<div class="col-lg-8">
					<!--section-->
					<div class="ass1-section__list" v-if="getDataPostDetail && getDataPostDetail.post">
						<div class="ass1-section">
							<comp-post-item v-bind:post="getDataPostDetail.post"/>
							<!-- <comp-post-reaction /> -->
							<div class="tag-cat">
								<ul>
									<li v-for="item in getDataPostDetail.categories" v-bind:key="item.TAG_ID">
										<router-link v-bind:to="getLinkCategory(item)" class="li-cat">🌟 {{ item.tag_value }}</router-link>
									</li>
								</ul>
							</div>
						</div>
						<comp-post-comment-add />
						<comp-post-comments />
					</div>
				</div>
				<div class="col-lg-4">
					<comp-sidebar />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CompPostItem from '../components/CompPostItem'
import CompPostReaction from '../components/CompPostReaction'
import CompPostCommentAdd from '../components/CompPostCommentAdd'
import CompPostComments from '../components/CompPostComments'
import CompSidebar from '../components/CompSidebar'

import { removeVietnameseFromString } from '../helpers'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'comp-post-detail',
	data() {
		return {
			postID: this.$route.params.id
		}
	},
	components: {
		CompPostItem,
		CompPostReaction,
		CompPostCommentAdd,
		CompPostComments,
		CompSidebar
	},
	computed: {
		...mapGetters(['getDataPostDetail'])
	},
	watch: {
		$route(to, from) {
			this.postID = to.params.id;
			this.fetchPostDetailById();
		}
	},
	created() {
		this.fetchPostDetailById();
	},
	methods: {
		...mapActions(['getPostDetailById']),
		fetchPostDetailById() {
			this.getPostDetailById(this.postID).then(res => {
				if (!res.ok) { 
					this.$router.push('/') 
				}
			})
		},
		getLinkCategory(category) {
			return {
				name: 'home-page',
				query: {
					text: removeVietnameseFromString(category.tag_value),
					tagIndex: category.tag_index
				}
			}
		}
	}
}
</script>

<style>
	.tag-cat {
		padding: 2%;
		height: 90px;
	}
	a.li-cat {
		color: red;
		font-weight: bold;
	}
	.tag-cat li {
		border: 1px solid #dcd2d2;
		margin-left: 9px;
		border-radius: 10px;
		padding: 3px;
	}
	.tag-cat ul {
		display: inline-flex;
	}
	.tag-cat li:hover {
		background-color: #cccccc;
	}
</style>