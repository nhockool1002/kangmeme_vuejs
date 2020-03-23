<template>
<div class="ass1-section__item" v-if="post">
            <div class="ass1-section">
                <comp-post-item-head v-bind:post="post" />
                <comp-post-item-content v-bind:post="post" />
                <comp-post-item-footer v-bind:post="post" />
            </div>
        </div>
</template>

<script>
import CompPostItemHead from './CompPostItemHead'
import CompPostItemContent from './CompPostItemContent'
import CompPostItemFooter from './CompPostItemFooter'

export default {
    name: 'comp-post-item',
    components: {
        CompPostItemHead,
        CompPostItemContent,
        CompPostItemFooter
    },
    props:{
        post: {type: Object, default: null}
    }
}
</script>

<style>

</style>