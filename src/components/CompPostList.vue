<template>
    <div class="ass1-section__list">
        <comp-post-item 
        v-for="item in getListPosts"
        v-bind:key="item.PID" 
        v-bind:post="item"
        />
        <button 
        v-on:click="handleLoadMore"
        v-if="getListPosts && getListPosts.length" class="load-more ass1-btn"><span>Xem thêm</span></button>
        <h3 v-else>Danh Sách Rỗng</h3>
    </div>
</template>

<script>
import CompPostItem from './CompPostItem'
import { PAGESIZE, CURRENT_PAGE } from '../constant'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'comp-post-list',
    data() {
        return {
            pagesize: PAGESIZE,
            currPage: CURRENT_PAGE,
            tagIndex: parseInt(this.$route.query.tagIndex)
        }
    },
    components: {
        CompPostItem
    },
    computed: {
        ...mapGetters(['getListPosts']),
    },
    methods: {
        ...mapActions(['getListPostHasPaging']),
        handleLoadMore() {
            this.currPage = this.currPage + 1;
            let obj = {
                pagesize: this.pagesize,
                currPage: this.currPage,
                tagIndex: this.tagIndex
            }
            this.getListPostHasPaging( obj )
        }
    },
    watch: {
		$route(to, from) {
            this.tagIndex = to.query.tagIndex;
            this.currPage = 1;
		}
	}
}
</script>

<style>

</style>