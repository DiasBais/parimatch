<template>
  <div class="Home">
    <div class="justify-content-center m-5">

      <userProgress class="mb-5" v-if="user"/>

      <Levels />

      <table class="mt-5 table table-striped table-dark" style="color: #ff0; background: #2d2d2d;" v-if="bets.length > 0">
        <thead style="background: #1c1c1c;">
          <tr>
            <th>#</th>
            <th>Team A</th>
            <th>Team B</th>
            <th>Коэффициент</th>
            <th>Ставка</th>
            <th>Выигрыш</th>
            <th>Статус</th>
            <th>Кэшбек</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bet, index) in bets" :key="index">
            <td>{{index + 1}}</td>
            <td><img class="fteam" src="https://i.ibb.co/hsqq4db/476524-200-2.png">{{bet.match.first_player}}</td>
            <td><img class="fteam" src="https://i.ibb.co/hsqq4db/476524-200-2.png">{{bet.match.second_player}}</td>
            <td><img class="coefficient" src="https://i.ibb.co/g49jFNM/icon-generate.png">{{bet.coefficient}}</td>
            <td><img class="amount" src="https://i.ibb.co/7XHBB8y/734456-cards-512x512-2.png">{{bet.amount}} тг</td>
            <td><img class="fteam" src="https://i.ibb.co/M9s4yBD/money-icon-1320184267002448371-2.png">
              <span style="color: #29ff29; font-weight: bold;" v-if="bet.status === 'win'">
                {{ (bet.coefficient * bet.amount).toFixed(2) }} тг
              </span>
              <span style="color: #ff1a1a; font-weight: bold;" v-if="bet.status === 'loss'">
                {{ (bet.coefficient * bet.amount).toFixed(2) }} тг
              </span>
              <span style="color: #ffcc00; font-weight: bold;" v-if="bet.status === 'in_progress'">
                {{ (bet.coefficient * bet.amount).toFixed(2) }} тг
              </span>
            </td>
            <td>
              {{bet.status}}
            </td>
            <td>
              <div>
                <div v-if="bet.lossCount % 5 === 0 && bet.status === 'loss'">
                  <span v-if="user.level < 51">+{{bet.amount * 0.01}} тг</span>
                  <span v-else-if="user.level < 201">+{{bet.amount * 0.05}} тг</span>
                  <span v-else-if="user.level < 501">+{{bet.amount * 0.1}} тг</span>
                </div>
                <span v-if="((bet.lossCount % 5 === 0 && bet.status === 'loss') ||
                (bet.winCount % 5 === 0 && bet.status === 'win')) && user.level > 500">
                  +{{bet.amount * 0.15}} тг
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Rating/>

    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating.vue';
import Levels from '@/components/Levels.vue';
import userProgress from '@/components/userProgress.vue';

  export default {
    data() {
      return {
        bets: [],
        user: null,
      }
    },
    components: {
      Rating,
      Levels,
      userProgress,
    },
    mounted() {
      let user = this.$session.get('user');
      user.level = (user.experience / 1000);

      this.user = user;
      this.fetchBets();
    },
    methods: {
      fetchBets() {
        let userId = this.$session.get('user').id;

        this.$http.get("user/bets?user_id="+userId).then((response) => {
          this.bets = response.data;
          this.calcCashback(response.data);
        }).catch(function (error) {
          console.log(error.response.data.message)
        });
      },
      calcCashback(bets) {
        let lossCount = 0;
        let winCount = 0;

        bets.forEach((bet) => {
          if (bet.status === 'loss') ++lossCount;
          else if (bet.status === 'win') ++winCount;

          bet.lossCount = lossCount;
          bet.winCount = winCount;

          return bet;
        });

        this.bets = bets;
      }
    }
  }
</script>

<style>
@import '../assets/home.css';
</style>
