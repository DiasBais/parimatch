<template>
  <div class="bg-black">
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>Team A</th>
        <th>Team B</th>
        <th>Коэффициент</th>
        <th>Ставка</th>
        <th>Возможный выигрыш</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(bet, index) in bets" :key="index">
        <td>{{index}}</td>
        <td>{{bet.match.first_player}}</td>
        <td>{{bet.match.second_player}}</td>
        <td>{{bet.coefficient}}</td>
        <td>{{bet.amount}} тг</td>
        <td>{{bet.coefficient * bet.amount}} тг</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bets: [],
      }
    },
    mounted() {
      this.fetchBets();
    },
    methods: {
      fetchBets() {
        let userId = this.$session.get('user').id;

        this.$http.get("user/bets?user_id="+userId).then((response) => {
          this.bets = response.data;
        }).catch(function (error) {
          console.log(error.response.data.message)
        });
      }
    }
  }
</script>
