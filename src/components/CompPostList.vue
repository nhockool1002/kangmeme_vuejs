<template>
    <div class="ass1-section__list">
        <comp-post-item 
        v-for="item in getListPosts"
        v-bind:key="item.PID" 
        v-bind:post="item"
        />
        <button v-if="getListPosts && getListPosts.length" class="load-more ass1-btn"><span>Xem thêm</span></button>
        <h3 v-else>Danh Sách Rỗng</h3>
    </div>
</template>

<script>
import CompPostItem from './CompPostItem'
import { mapGetters } from 'vuex'
export default {
    name: 'comp-post-list',
    components: {
        CompPostItem
    },
    computed: {
        ...mapGetters(['getListPosts']),
    }
}
</script>

<style>

</style>