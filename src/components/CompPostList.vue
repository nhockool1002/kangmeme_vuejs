<template>
    <div class="ass1-section__list">
        <comp-post-item />
        <comp-post-item />
        <comp-post-item />
        <comp-post-item />
        <comp-post-item />
        <comp-post-item />
        <button class="load-more ass1-btn"><span>Xem thêm</span></button>
    </div>
</template>

<script>
import CompPostItem from './CompPostItem'
export default {
    name: 'comp-post-list',
    components: {
        CompPostItem
    }
}
</script>

<style>

</style>