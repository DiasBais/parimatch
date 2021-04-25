<template>
  <div></div>
</template>

<script>
export default {
  name: "Logout",
  created() {
    this.$session.destroy('user');
    location.href = '/login';
  }
}
</script>

<style scoped>

</style>
