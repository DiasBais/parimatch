<template>
  <div class="Login bg-black full-height d-flex">
    <div class="left w-35 d-flex justify-content-center" style="padding: 50px;">
      <div class="text-center" style="background: rgba(0, 0, 0, 0.5);">
        <div class="title">
          Welcome to <span>Parimatch</span>
        </div>
        <form class="" action="#" @submit.prevent="login()">
          <div class="alert alert-warning" v-if="error">
            {{error}}
          </div>
          <div class="">
            <div class="">
              <input class="email btn w-75 border" type="email" placeholder="Email" v-model="form.email" required>
            </div>
            <div class="">
              <input class="password btn w-75 border" type="password" placeholder="Password" v-model="form.password" required>
            </div>
          </div>
          <div class="submit-btn">
            <input class="btn submit w-75" type="submit" value="Войти" style="font-size: 16px;">
          </div>
        </form>
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
      error: null
    }
  },
  mounted() {
    let user = (this.$session.get('user'))
    console.log(user.name)
  },
  methods: {
    login() {
      this.$http.post('auth/login' , this.form).then((response) => {
        this.$session.set('user', response.data);
        location.href = '/';
      }).catch(error => {
        this.error = (error.response.data.message)
      });
    }
  }
}
</script>

<style>
@import '../assets/Login.css';
</style>
