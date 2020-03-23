<template>
	<div id="app">
		<comp-header v-if="isRenderHeader" />
		<router-view></router-view>
		<comp-footer />
		<loading v-bind:class="{ showLoading: isLoading}" />
	</div>
</template>

<script>

import CompHeader from './components/CompHeader';
import CompFooter from './components/CompFooter';
import CompHomePage from './pages/CompHomePage'
import Loading from './components/Loading'
import { mapState } from 'vuex'

export default {
	name: 'app',
	components: {
		CompHeader,
		CompHomePage,
		CompFooter,
		Loading
	},
	data () {
		return {
			
		}
	},
	computed: {
		...mapState(['isLoading']),
		isRenderHeader() {
			var arrNotRender = ['login', 'register'];
			var routeName = this.$route.name;
			if (arrNotRender.indexOf(routeName) !== -1) return false;
			return true;
		}
	},
	created() {
		this.$store.dispatch('getListPostHasPaging', { })
	}
}
</script>

<style>

</style>
