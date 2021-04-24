<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    this.$session.start()
  }
}
</script>

<style>
@import './assets/style.css';
</style>
