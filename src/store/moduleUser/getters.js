import { parseJwt } from '../../helpers'
import { CONFIG_TOKEN_CODE } from '../../constant'
export default {
    isLogin: state => {
        let userObj = parseJwt(state[CONFIG_TOKEN_CODE]);
        if (userObj) {
            return true;
        } else {
            return false;
        }
    },
    currentUser: state => {
        return state.currentUser
    },
    getPostOfCurrentUser: state => {
        if (state.currentUser) {
            let currentUserID = state.currentUser.USERID;
            return state.posts[currentUserID];
        }
        return null;
    }
}