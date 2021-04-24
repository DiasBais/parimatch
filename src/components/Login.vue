<template>
  <div class="Login bg-black full-height d-flex">
    <div class="left w-35 d-flex justify-content-center" style="padding: 50px;">
      <div class="text-center" style="background: rgba(0, 0, 0, 0.5);">
        <div class="title">
          Welcome to <span>Parimatch</span>
        </div>
        <form class="" action="#" @submit.prevent="login()">
          <div class="">
            <div class="">
              <input class="email btn w-50" type="text" placeholder="Email" v-model="form.email">
            </div>
            <div class="">
              <input class="password btn w-50" type="text" placeholder="Password" v-model="form.password">
            </div>
          </div>
          <div class="submit-btn">
            <input class="btn submit" type="submit" value="Sign Up">
          </div>
        </form>
        <div id="alert">
          {{ alert }}
        </div>
      </div>
    </div>
    <div class="right w-65" style="padding-top: 50px;padding-left: 50px;padding-right: 50px;" :style="'background-image: url(' + BGLink + '); background-size: 100% 100%;'">
      <img :src="ImageCristianoRonaldo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      BGLink: 'https://i.ibb.co/PxTjMHB/smoke-2982431.jpg',
      ImageCristianoRonaldo: 'https://i.ibb.co/p2mVR41/77-778425-cristiano-ronaldo-png-juventus-transparent-png-removebg-preview.png',
      alert: '',
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
@import '../assets/Login.css';
</style>
