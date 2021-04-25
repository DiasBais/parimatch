<template>
  <div class="userProgress mb-3">
    <div class="names d-flex justify-content-between">
      <div>Зритель</div>
      <div></div>
      <div>Болельщик</div>
      <div></div>
      <div>Поклонник</div>
      <div></div>
      <div>Фанат</div>
    </div>
    <div class="d-flex">
      <div class="viewer rounded-circle" :style="'border: 5px solid ' + colorLevel.viewer + '; background: ' + bgLevels.viewer + '; background-image: url(\'' + success.viewer + '\'); background-size: 85% 85%; background-position: center;'"></div>
      <hr class="liner">
      <div class="buff rounded-circle" :style="'border: 5px solid ' + colorLevel.buff + '; background: ' + bgLevels.buff + '; background-image: url(\'' + success.buff + '\'); background-size: 85% 85%; background-position: center;'"></div>
      <hr class="liner">
      <div class="fans rounded-circle" :style="'border: 5px solid ' + colorLevel.fans + '; background: ' + bgLevels.fans + '; background-image: url(\'' + success.fans + '\'); background-size: 85% 85%; background-position: center;'"></div>
      <hr class="liner">
      <div class="fan rounded-circle" :style="'border: 5px solid ' + colorLevel.fan + '; background: ' + bgLevels.fan + '; background-image: url(\'' + success.fan + '\'); background-size: 85% 85%; background-position: center;'"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgLevels: { 'viewer': this.levelNot, 'buff': this.levelNot, 'fans': this.levelNot, 'fan': this.levelNot },
      levelNot: '#ff0',
      levelYeah: '#ff7',
      success: { 'viewer': '', 'buff': '', 'fans': '', 'fan': '' },
      successImage: 'https://i.ibb.co/LgW8LNv/success-icon.png',
      colorLevel: { 'viewer': this.colorNot, 'buff': this.colorNot, 'fans': this.colorNot, 'fan': this.colorNot },
      colorNot: '#919191',
      colorBorder: '#0f0',
    }
  },
  components: {
  },
  mounted() {
    let level = parseInt(this.$session.get('user').experience / 1000);
    if (level < 51) {
      // this.bgLevels.viewer = this.levelYeah;
      this.success.viewer = this.successImage;
      this.colorLevel.viewer = this.colorBorder;
      console.log('viewer');
    }
    else if (level > 50 && level < 201) {
      this.success.viewer = this.successImage;
      this.success.buff = this.successImage;
      this.colorLevel.viewer = this.colorBorder;
      this.colorLevel.buff = this.colorBorder;
      console.log('buff');
    }
    else if (level > 200 && level < 501) {
      this.success.viewer = this.successImage;
      this.success.buff = this.successImage;
      this.success.fans = this.successImage;
      this.colorLevel.viewer = this.colorBorder;
      this.colorLevel.buff = this.colorBorder;
      this.colorLevel.fans = this.colorBorder;
      console.log('fans');
    }
    else if (level > 500) {
      this.success.viewer = this.successImage;
      this.success.buff = this.successImage;
      this.success.fans = this.successImage;
      this.success.fan = this.successImage;
      this.colorLevel.viewer = this.colorBorder;
      this.colorLevel.buff = this.colorBorder;
      this.colorLevel.fans = this.colorBorder;
      this.colorLevel.fan = this.colorBorder;
      console.log('fan');
    }
  },
  methods: {
    clickViewer() {
      //
    }
  }
}
</script>

<style>
.userProgress .names {
  color: #ff0;
  font-family: 'LUCIDA SANS UNICODE';
}

.userProgress .rounded-circle {
  border: 5px solid #919191;
  background: #e9e9e9;
  width: 50px;
  height: 50px;
}
.userProgress .liner {
  background: #fff;
  height: 5px;
  width: 20%;
}
</style>
