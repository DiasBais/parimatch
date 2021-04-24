<template>
  <div class="Menu d-flex justify-content-between">
    <div class="logotype d-flex align-items-center">
      <img src="https://parimatch.kz/logos/pm-logo.svg">
    </div>
    <div class="list">
      <ul class="d-flex">
        <li class="user itemList">
          <select>
            <option>User</option>
            <option disabled>Bonus: {{ bonus[0] }}</option>
            <option disabled>Money: {{ money[0] }}</option>
            <option disabled>Level: {{ level[0] }}</option>
          </select>
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
      bonus: [ 0, 'https://i.ibb.co/QQGvw10/achievement-1296732-640.png' ],
      money: [ 0, 'https://i.ibb.co/bRk3tP5/coins-3344603-640.png' ],
      level: [ 0, 'https://i.ibb.co/hsnsj15/1469840.png' ],
      menuList: [ 'Login', 'Logout' ],
    }
  },
  mounted() {
    let user = (this.$session.get('user'))
    console.log(user.name)
  },
  methods: {
    login() {
      this.$http.post('auth/login' , this.form).then((response) => {
        console.log(response.data)
        this.$session.set('user', response.data)
      }).catch(function (error) {
        console.log(error.message);
      });
    }
  }
}
</script>

<style>
@import '../assets/Menu.css';

</style>
