<template>
  <div id="app">
    <comp-header />
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
  }
}
</script>

<style>

</style>
