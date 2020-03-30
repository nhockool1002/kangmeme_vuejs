import axiosIntance from '../../plugins/axios'
import { parseJwt } from '../../helpers'
import { CONFIG_TOKEN_CODE } from '../../constant'

export default {
    async getUserById({ commit }, userid) {
        try {
            var rs = await axiosIntance.get('/member/member.php?userid=' + userid);
            if (rs.data.status == 200) {
                commit('SET_USER_INFO', rs.data.user)
                return {
                    ok: true,
                    error: rs.message,
                    data:rs.data.user
                }
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async login({commit, dispatch}, { email = '', password = ''}) {
        commit('SET_LOADING', true)
        try {
            var data = {
                email: email,
                password: password
            }
            var rs = await axiosIntance.post('/member/login.php', data);
            commit('SET_LOADING', false)
            if (rs.data.status == 200) {
                commit('SET_USER_INFO', rs.data.user);
                commit('SET_LOGIN_INFO', rs.data);
                let resultPostUser = await dispatch('getPostByUserId', rs.data.user.USERID);
                return {
                    ok: true,
                    error: null,
                    data: rs.data
                }
            } else {
                return {
                    ok: false,
                    error: rs.data.error
                }
            }
        } catch (error) {
            commit('SET_LOADING', false)
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
    },
    async checkLogin({ commit, dispatch }) {
        try {
            var tokenLocal = localStorage.getItem(CONFIG_TOKEN_CODE);
            var userObj = parseJwt(tokenLocal);
            if (userObj) {
                let promiseUser = dispatch('getUserById', userObj.id);
                let promisPostUser = dispatch('getPostByUserId', userObj.id);
                let [resultUser, resultPostUserById] = await Promise.all([promiseUser, promisPostUser]);

                if (resultUser.ok) {
                    let data = {
                        user : resultUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data)
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async getPostByUserId( {commit}, userid ) {
        try {
            let config = {
                params: {
                    userid : userid
                },
                headers: {
                    'Accept' : 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem(CONFIG_TOKEN_CODE)
                }
            }
            var result = await axiosIntance.get('/post/getListPostUserID.php', config)
            console.log('result GetlistPostUserbyID', result.data);
            if (result.data.status === 200) {
                let ObjData = {
                    posts : result.data.posts,
                    userid : userid
                }
                commit('SET_USER_POSTS', ObjData)
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    }
}