import axiosIntance from '../../plugins/axios'
import { PAGESIZE, CURRENT_PAGE } from '../../constant'
export default {
    async getListPostHasPaging({ commit }, { pagesize = PAGESIZE, currPage = CURRENT_PAGE, tagIndex = null }) {
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
                if (currPage == 1) commit('SET_LIST_POSTS', rs.data.posts)
                else if (currPage > 1) commit('PUSH_DATA_LIST_POST', rs.data.posts)
            }
        } catch (error) {
            console.log('error :', error)
        }
    },
    async getPostDetailById({commit}, postID) {
        commit('SET_LOADING', true)
        try {
            var rs = await axiosIntance.get('/post/post.php?postid=' + postID);
            commit('SET_LOADING', false)
            if (rs.data.status == 200) {
                return {
                    ok: true,
                    error: null,
                    data: rs.data.data
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