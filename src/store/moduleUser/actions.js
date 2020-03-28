import axiosIntance from '../../plugins/axios'

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
    async login({commit}, { email = null, password = ''}) {
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
                return {
                    ok: true,
                    error: null,
                    data: rs.data.user
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
    } 
}