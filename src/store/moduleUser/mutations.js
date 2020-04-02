import Vue from 'vue';
import { updateLocale } from 'moment';
import { CONFIG_TOKEN_CODE } from '../../constant'
export default {
    SET_USER_INFO(state, user) {
        Vue.set(state.users, user.USERID, user)
    },
    SET_USER_POSTS(state, {posts, userid }) {
        Vue.set(state.posts, userid, posts)
    },
    SET_LOGIN_INFO(state, { user = null, token = ''}) {
        localStorage.setItem(CONFIG_TOKEN_CODE, token)
        state.currentUser = user;
        state[CONFIG_TOKEN_CODE] = token;
    },
    SET_LOGOUT(state) {
        state[CONFIG_TOKEN_CODE] = '',
        state.currentUser = null,
        localStorage.removeItem(CONFIG_TOKEN_CODE)
    }
}