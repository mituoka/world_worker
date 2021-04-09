<template>
  <div id="app">
    <HeaderView></HeaderView>
    <Home></Home>
  </div>
</template>

<script>
import HeaderView from './components/Header'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    HeaderView,
    Home,
  }
}
</script>

<style>

</style>
