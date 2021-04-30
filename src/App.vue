<template>
   <div id="app">
    <Menu></Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: 'App',
  components: {
    Menu
  },
  async mounted() {
    await this.importJquery();
    await this.importPopper();
    await this.importBootstrap();
  },
  created() {
    this.$session.start()
  },
  methods: {
    importBootstrap() {
      var bootstrap = document.createElement("script");
      bootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js";
      bootstrap.integrity = "sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF";
      bootstrap.crossOrigin = "anonymous";
      bootstrap.id = "bootstrap";
      document.getElementsByTagName('head')[0].appendChild(bootstrap);
    },
    importPopper() {
      var popper = document.createElement("script");
      popper.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js";
      popper.integrity = "sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4";
      popper.crossOrigin = "anonymous";
      popper.id = "popper";
      document.getElementsByTagName('head')[0].appendChild(popper);
    },
    importJquery() {
      var jquery = document.createElement("script");
      jquery.src = "https://code.jquery.com/jquery-3.6.0.js";
      jquery.integrity = "sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=";
      jquery.crossOrigin = "anonymous";
      jquery.id = "jquery";
      document.getElementsByTagName('head')[0].appendChild(jquery);
    },
  }
}
</script>

<style>
@import './assets/style.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css';
</style>
