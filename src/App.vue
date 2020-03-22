<template>
  <div id="app">
    <comp-header v-if="isRenderHeader" />
    <router-view></router-view>
    <comp-footer />
  </div>
</template>

<script>

import CompHeader from './components/CompHeader';
import CompFooter from './components/CompFooter';
import CompHomePage from './pages/CompHomePage'

export default {
  name: 'app',
  components: {
    CompHeader,
    CompHomePage,
    CompFooter
  },
  data () {
    return {
      
    }
  },
  computed: {
    isRenderHeader() {
      var arrNotRender = ['login', 'register'];
      var routeName = this.$route.name;
      if (arrNotRender.indexOf(routeName) !== -1) return false;
      return true;
    }
  }
}
</script>

<style>

</style>
