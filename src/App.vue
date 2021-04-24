<template>
  <div id="app">
    <Menu></Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
  name: 'App',
  components: {
    Menu
  },
  created() {
    this.$session.start()
  }
}
</script>

<style>
@import './assets/style.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css';
</style>
