<template>
<div class="ass1-comments">
        <div class="ass1-comments__head">
            <div class="ass1-comments__title">214 Bình luận</div>
            <div class="ass1-comments__options">
                <span>Sắp xếp theo:</span>
                <a href="#" class="ass1-comments__btn-upvote ass1-btn-icon"><i class="icon-Upvote"></i></a>
                <a href="#" class="ass1-comments__btn-down ass1-btn-icon"><i class="icon-Downvote"></i></a>
                <a href="#" class="ass1-comments__btn-expand ass1-btn-icon"><i class="icon-Expand_all"></i></a>
            </div>
        </div>
        <!--comment-->
        <comp-post-comment-item />
        <comp-post-comment-item />
        <comp-post-comment-item />
        <comp-post-comment-item />
    </div>
</template>

<script>
import CompPostCommentItem from './CompPostCommentItem'
export default {
    name: 'comp-post-comments',
    components: {
        CompPostCommentItem
    }
}
</script>

<style>

</style>