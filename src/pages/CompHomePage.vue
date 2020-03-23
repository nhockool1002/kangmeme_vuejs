<template>
	<!-- MAIN -->
	<main>
		<div class="container">
			
			<!--sections-->
			<div class="row">
				<div class="col-lg-8">
					<comp-post-list />
				</div>
				<div class="col-lg-4">
					<comp-sidebar />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CompPostList from '../components/CompPostList'
import CompSidebar from '../components/CompSidebar'
import { mapActions } from 'vuex';
export default {
	name: 'comp-home-page',
	components: {
		CompPostList,
		CompSidebar,
	},
	methods:{
		...mapActions(['getListPostHasPaging', 'getListPostHasCategory'])
	},
	watch: {
		$route(to, from) {
			var tagIndex = to.query.tagIndex;
			if (tagIndex) {
				this.getListPostHasPaging({ tagIndex: tagIndex})
			} else {
				this.getListPostHasPaging({})
			}
		}
	}
}
</script>

<style>

</style>