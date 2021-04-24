<template>
  <div class="Menu">
    <div class="logotype d-flex justify-content-start">
      <img src="https://parimatch.kz/logos/pm-logo.svg">
    </div>
    <div class="list d-flex justify-content-end">
      <ul class="d-flex">
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
      menuList: [ 'Login', 'User', 'Signup', 'Logout' ],
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
@import '../assets/style.css';

.Menu {
  background: #000;
}

.Menu .logotype img {
  width: 100px;
}

.itemList {
  list-style: none;
}

.itemList a {
  text-decoration: none;
}

</style>