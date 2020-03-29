<template>
    <aside class="ass1-aside">
        <div class="ass1-content-head__t">
            <div>Bài viết gần đây của bạn.</div>
        </div>
        <div v-if="!isLogin">Vui lòng đăng nhập để xem nội dung này 
            <router-link to="/login">Đăng nhập</router-link>
        </div>
        <div>
            <comp-post-item 
                v-for="item in getPostOfCurrentUser"
                v-bind:key="item.PID" 
                v-bind:post="item"
            />
        </div>
    </aside>
</template>

<script>
import CompPostItem from './CompPostItem'
import { mapGetters } from 'vuex';
export default {
    name: 'comp-sidebar',
    components: {
        CompPostItem
    },
    computed: {
        ...mapGetters(['isLogin', 'getPostOfCurrentUser']),
    }
}
</script>

<style>

</style>