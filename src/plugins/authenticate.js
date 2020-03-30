import store from '../store'

const ifNotAuthenticate = (to, from, next) => {
    if (store.getters.isLogin === false) {
        next();
    } else {
        next({ name: 'home-page', query: {redirect: to.name} })
    }
}

const ifAuthenticate = (to, from, next) => {
    if (store.getters.isLogin === true) {
        next();
    } else {
        next({ name: 'login', query: {redirect: to.name} })
    }
}

export {
    ifNotAuthenticate, ifAuthenticate
}