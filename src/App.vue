<template>
  <div id="app">
    <!-- <comp-header /> -->
    <!-- <comp-home-page /> -->
    <!-- <comp-post-detail /> -->
    <!-- <comp-upload-meme /> -->
    <!-- <comp-history-meme /> -->
    <!-- <comp-profile /> -->
    <comp-login />
    <!-- <comp-footer /> -->
  </div>
</template>

<script>

import CompHeader from './components/CompHeader';
import CompFooter from './components/CompFooter';
import CompHomePage from './pages/CompHomePage'
import CompPostDetail from './pages/CompPostDetail'
import CompUploadMeme from './pages/CompUploadMeme'
import CompHistoryMeme from './pages/CompHistoryMeme'
import CompProfile from './pages/CompProfile'
import CompResetPassword from './pages/CompResetPassword'
import CompRegister from './pages/CompRegister'
import CompLogin from './pages/CompLogin'

export default {
  name: 'app',
  components: {
    CompHeader,
    CompPostDetail,
    CompHomePage,
    CompUploadMeme,
    CompHistoryMeme,
    CompProfile,
    CompResetPassword,
    CompRegister,
    CompLogin,
    CompFooter
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
