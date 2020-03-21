<template>
<div class="ass1-section__item">
            <div class="ass1-section">
                <comp-post-item-head />
                <comp-post-item-content />
                <comp-post-item-footer />
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
    }
}
</script>

<style>

</style>