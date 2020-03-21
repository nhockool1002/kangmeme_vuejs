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

export default {
	name: 'comp-home-page',
	components: {
		CompPostList,
		CompSidebar
	}
}
</script>

<style>

</style>