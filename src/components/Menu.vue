<template>
  <div class="Menu d-flex justify-content-between">
    <div class="logotype d-flex align-items-center">
      <img src="https://parimatch.kz/logos/pm-logo.svg">
    </div>
    <div class="list">
      <ul class="d-flex">
        <li class="itemList">
          <img :src="level.image">
          <span>{{ level.value }}</span>
        </li>
        <li class="itemList">
          <img :src="experience.image">
          <span>{{ experience.value }} exp</span>
        </li>
        <li class="itemList">
          <img :src="money.image">
          <span>{{ money.value }}</span>
        </li>
        <li class="itemList">
          <img :src="bonus.image">
          <span>{{ bonus.value }}</span>
        </li>
        <li class="itemList">
          <span>{{ user.name }}</span>
        </li>
        <li class="itemList" v-for="item in menuList" :key="item">
          <router-link :to="'/'+item">{{ item }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      bonus: { value: 0, image: 'https://i.ibb.co/0tkkYym/images-removebg-preview.png' },
      money: { value: 0, image: 'https://cdn0.iconfinder.com/data/icons/business-finance-vol-8-7/512/11-512.png' },
      experience: { value: 0, image: 'https://i.ibb.co/QQGvw10/achievement-1296732-640.png' },
      level: { value: 0, image: 'https://i.ibb.co/hsnsj15/1469840.png' },
      menuList: [ 'Login', 'Logout' ],
      user: null,
    }
  },
  mounted() {
    let user = (this.$session.get('user'))
    this.user = user;
    this.initScore();
  },
  methods: {
    initScore() {
      let user = this.user;
      this.bonus.value = user.bonus;
      this.money.value = user.money;
      this.experience.value = user.experience;
      this.level.value = parseInt(user.experience / 1000);
    }
  }
}
</script>

<style>
@import '../assets/Menu.css';

</style>
