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
export default {
	name: 'comp-post-detail',
	components: {
		CompPostItem,
		CompPostReaction,
		CompPostCommentAdd,
		CompPostComments,
		CompSidebar
	}
}
</script>

<style>

</style>