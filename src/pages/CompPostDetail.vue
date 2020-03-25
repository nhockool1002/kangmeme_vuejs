<template>
<main>
		<div class="container">
			<!--sections-->
			<div class="row">
				<div class="col-lg-8">
					<!--section-->
					<div class="ass1-section__list">
						<div class="ass1-section">
							<comp-post-item />
							<comp-post-reaction />
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

import { mapActions } from 'vuex'
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
	methods: {
		...mapActions(['getPostDetailById'])
	},
	watch: {
		$route(to, from) {
			this.postID = to.params.id;
			this.getPostDetailById(this.postID).then(res => {
				if (!res.ok) { this.$router.push('/') }
			})
		}
	},
	created() {
		this.postID = this.$route.params.id;
		this.getPostDetailById(this.postID).then(res => {
			if (!res.ok) { this.$router.push('/') }
		})

	}
}
</script>

<style>

</style>