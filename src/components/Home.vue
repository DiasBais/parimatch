<template>
  <div class="Home">
    <div class="d-flex justify-content-center m-5">
      <table class="table table-striped table-dark" style="color: #ff0; background: #2d2d2d;">
        <thead style="background: #1c1c1c;">
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
            <td><img class="fteam" src="https://i.ibb.co/hsqq4db/476524-200-2.png">{{bet.match.first_player}}</td>
            <td><img class="fteam" src="https://i.ibb.co/hsqq4db/476524-200-2.png">{{bet.match.second_player}}</td>
            <td><img class="coefficient" src="https://i.ibb.co/g49jFNM/icon-generate.png">{{bet.coefficient}}</td>
            <td><img class="amount" src="https://i.ibb.co/7XHBB8y/734456-cards-512x512-2.png">{{bet.amount}} тг</td>
            <td><img class="fteam" src="https://i.ibb.co/M9s4yBD/money-icon-1320184267002448371-2.png">{{bet.coefficient * bet.amount}} тг</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--  -->
<!--  <div class="bg-black">-->
<!--    <table class="table">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>#</th>-->
<!--        <th>Team A</th>-->
<!--        <th>Team B</th>-->
<!--        <th>Коэффициент</th>-->
<!--        <th>Ставка</th>-->
<!--        <th>Возможный выигрыш</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="(bet, index) in bets" :key="index">-->
<!--        <td>{{index}}</td>-->
<!--        <td>{{bet.match.first_player}}</td>-->
<!--        <td>{{bet.match.second_player}}</td>-->
<!--        <td>{{bet.coefficient}}</td>-->
<!--        <td>{{bet.amount}} тг</td>-->
<!--        <td>{{bet.coefficient * bet.amount}} тг</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
</template>

<script>
  export default {
    data() {
      return {
        sdgfs: 'sdfhgnf'
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

<style>

body {
  background: #000;
}

.Home {
  font-family: 'LUCIDA SANS UNICODE';
}

.Home th {
  padding: 10px;
  color: #3660f1;
}

.Home td {
  padding: 10px;
}

.Home img {
  width: 15px;
  margin-right: 5px;
}

.Home .fteam {
  width: 20px;
  margin-right: 5px;
}

.Home .amount {
  width: 25px;
  margin-right: 5px;
}

</style>
