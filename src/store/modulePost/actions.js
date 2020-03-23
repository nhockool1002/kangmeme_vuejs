import axiosIntance from '../../plugins/axios'
export default {
    async getListPostHasPaging({ commit }, { pagesize = 6, currPage = 1, tagIndex = null }) {
        commit('SET_LOADING', true)
        try {
            var config = {
                params : {
                    pagesize,
                    currPage
                }
            }
            if (tagIndex) {
                config.params.tagIndex = tagIndex;
                var rs = await axiosIntance.get('/post/getListByCategory.php', config)
            } else {
                var rs = await axiosIntance.get('/post/getListPagination.php', config)
            }
            commit('SET_LOADING', false)
            if (rs.data.status == 200) {
                commit('SET_LIST_POSTS', rs.data.posts)
            }
        } catch (error) {
            console.log('error :', error)
        }
    }
}