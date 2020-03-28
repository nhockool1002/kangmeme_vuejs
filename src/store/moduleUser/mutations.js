import Vue from 'vue';
import { updateLocale } from 'moment';
export default {
    SET_USER_INFO(state, user) {
        Vue.set(state.users, user.USERID, user)
    },
    SET_LOGIN_INFO(state, { user = null, token = ''}) {
        localStorage.setItem('ACCESS_TOKEN', token)
        state.currentUser = user;
        state.ACCESS_TOKEN = token;
    }
}