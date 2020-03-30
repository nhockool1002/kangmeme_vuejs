import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CompHomePage from './pages/CompHomePage'
import CompLogin from './pages/CompLogin'
import CompRegister from './pages/CompRegister'
import CompPostDetail from './pages/CompPostDetail'
import CompHistoryMeme from './pages/CompHistoryMeme'
import CompProfile from './pages/CompProfile'
import CompResetPassword from './pages/CompResetPassword'
import CompUploadMeme from './pages/CompUploadMeme'

import { ifNotAuthenticate, ifAuthenticate} from './plugins/authenticate'

const routes = [
	{
		path: '/',
		name: 'home-page',
		component: CompHomePage
	},
	{
		path: '/login',
		name: 'login',
		component: CompLogin,
		beforeEnter: ifNotAuthenticate
	},
	{
		path: '/register',
		name: 'register',
		component: CompRegister,
		beforeEnter: ifNotAuthenticate
	},
	{
		path: '/post-detail/:id',
		name: 'post-detail',
		component: CompPostDetail
	},
	{
		path: '/user/:id',
		name: 'history-meme',
		component: CompHistoryMeme,
		beforeEnter: ifAuthenticate
	},
	{
		path: '/user/:id/profile',
		name: 'profile',
		component: CompProfile
	},
	{
		path: '/reset-password',
		name: 'reset-password',
		component: CompResetPassword
	},
	{
		path: '/upload-meme',
		name: 'upload-meme',
		component: CompUploadMeme
	},
]

const router = new VueRouter({
	routes // short for `routes: routes`
})

export default router;