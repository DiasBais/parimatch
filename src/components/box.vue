<template>
  <div class="gifts d-flex justify-content-around py-5 my-5">
    <img v-on:click="selectGift()" src="https://i.ibb.co/LkqYrdg/ezgif-6-187369f41544.gif" :style="'display: '+notSelectionImage">
    <img v-on:click="selectGift()" src="https://i.ibb.co/LkqYrdg/ezgif-6-187369f41544.gif" :style="'display: '+notSelectionImage">
    <img v-on:click="selectGift()" src="https://i.ibb.co/LkqYrdg/ezgif-6-187369f41544.gif" :style="'display: '+notSelectionImage">
    <div class="win-gift col-md-6 text-center" :style="'display: '+selectionImage">
      <img src="https://i.ibb.co/yqNDpwY/depositphotos-9968145-stock-photo-open-gift-box-over-white-removebg-preview.png">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notSelectionImage: 'block',
      selectionImage: 'none',
      message: '',
    }
  },
  mounted() {
  },
  methods: {
    selectGift() {
      this.$http.post('/user/box', {
        user_id: '1'
      }).then((response) => {
            this.$session.set('user', response.data.user);
            this.notSelectionImage = 'none';
            this.selectionImage = 'block';
            this.message = response.data.message;
            setTimeout(() => location.href="/", 2000);
            console.log(response);
      }).catch((error) => {
        alert(error.response.data.message);
      });
    }
  }
}
</script>

<style>
.gifts img {
  width: 200px;
}
.gifts .win-gift span {
  font-size: 25px;
  color: #ff0;
  font-family: 'LUCIDA SANS UNICODE';
  font-weight: bold;
  display: flex;
  justify-content: center;
}
</style>

<!-- 5% кэшбек, 1500 тг, +75 exp -->
