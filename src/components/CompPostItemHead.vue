<template>
    <div class="ass1-section__head">
        <router-link v-bind:to="{name: 'history-meme', params: {id:post.USERID} }" class="ass1-section__avatar ass1-avatar"><img
                :src="getUserAvatar" alt=""></router-link>
        <div>
            <router-link v-bind:to="{name: 'history-meme', params: {id:post.USERID} }" class="ass1-section__name">{{ post.fullname }}</router-link>
            <span class="ass1-section__passed">{{ getTimeAdded }}</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'comp-post-item-head',
    props:{
        post: {type: Object, default: null}
    },
    computed: {
        getUserAvatar() {
            if (this.post.profilepicture == '') {
                return '/dist/images/avatar-02.png';
            } else {
                return this.post.profilepicture
            }
        },
        getTimeAdded() {
            moment.locale('vi');
            return moment(this.post.time_added).fromNow();
        }
    }
}
</script>

<style>

</style>