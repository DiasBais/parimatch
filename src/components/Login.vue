<template>
  <div class="Login bg-black full-height d-flex" :style="'background-image: url(\'' + BGLink + '\'); background-size: 100% 100%;'">
    <div class="w-35 d-flex" style="padding: 50px;">
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
      </div>
    </div>
    <div class="w-65" style="padding-top: 50px;padding-left: 50px;padding-right: 50px;">
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
      ImageCristianoRonaldo: 'https://i.ibb.co/p2mVR41/77-778425-cristiano-ronaldo-png-juventus-transparent-png-removebg-preview.png'
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
        console.log(error.response.data.message)
      });
    }
  }
}
</script>

<style>

.Login {
  font-size: 15px;
  font-family: LUCIDA SANS UNICODE;
}

.title {
  font-size: 50px;
  margin: 10px;
  text-shadow: 0px 0px 4px #ff0;
}

.title span {
  font-weight: bold;
}

.email {
  ;
}

.password {
  ;
}

input {
  border: 0;
  background-color: rgba(86, 86, 86, 0.6);
  color: #fff;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  font-family: 'LUCIDA SANS UNICODE';
}

input::placeholder {
  color: #fff;
}

.submit {
  background: linear-gradient(to right, #ffff7f, #ff0);
  padding-left: 50px;
  padding-right: 50px;
  font-family: 'LUCIDA SANS UNICODE';
  font-size: 13px;
  font-weight: 600;
  color: #000;
  box-shadow: 0px 0px 2px #ffff7f;
}

</style>
