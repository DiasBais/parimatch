<template>
  <div class="Menu d-flex justify-content-between">
    <div class="logotype d-flex align-items-center">
      <img src="https://parimatch.kz/logos/pm-logo.svg" @click="$router.push('/')">
    </div>
    <div class="list pt-3">
      <ul class="d-flex" v-if="user">
        <li class="itemList">
          <img src="@/assets/score/level.png">
          <span>{{ parseInt(user.experience / 1000) }} уровень</span>
        </li>
        <li class="itemList">
          <img src="@/assets/score/xp.png">
          <span>{{ user.experience % 1000 }} exp</span>
        </li>
        <li class="itemList">
          <img src="@/assets/score/money.png">
          <span>{{ user.money }} тг</span>
        </li>
        <li class="itemList">
          <img src="@/assets/score/bonus.png">
          <span>{{ user.bonus }} бонус</span>
        </li>
        <li class="nav-item dropdown itemList">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{user.name}}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" @click="logout()">
            <router-link class="dropdown-item" to="#" style="color: #7d7c7c;">Выйти</router-link>
          </div>
        </li>
      </ul>
      <ul v-if="!user">
        <li class="itemList">
          <router-link class="dropdown-item" to="/login">
            <img src="@/assets/user.png">
            Войти
          </router-link>
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
      menuList: [ 'Login', 'Logout' ],
      user: null,
    }
  },
  mounted() {
    this.user = (this.$session.get('user'))
  },
  methods: {
    logout() {
      this.$session.destroy('user');
      this.user = null;

      this.$router.push('/login');
    }
  }
}
</script>

<style>
@import '../assets/Menu.css';

</style>
