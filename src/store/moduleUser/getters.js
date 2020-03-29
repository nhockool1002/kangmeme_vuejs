import { parseJwt } from '../../helpers'
export default {
    isLogin: state => {
        let userObj = parseJwt(state.ACCESS_TOKEN);
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