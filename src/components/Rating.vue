<template>
  <div class="Home">
    <div class="d-flex justify-content-center m-5">
      <table class="table table-striped table-dark" style="color: #ff0; background: #2d2d2d;" v-if="users.length > 0">
        <thead style="background: #1c1c1c;">
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Уровень</th>
            <th>Коэффициент</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{index + 1}}</td>
            <td><img class="fteam" src="@/assets/person.png">{{user.user.name}}</td>
            <td><img class="fteam" src="@/assets/score/level.png">{{parseInt(user.user.experience /
                1000)
              }} уровень</td>
            <td><img class="fteam" src="https://i.ibb.co/g49jFNM/icon-generate.png">{{ (user.coefficient).toFixed(2)
              }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [],
      }
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        this.$http.get("bets/rating").then((response) => {
          this.users = response.data;
          console.log(response.data)
        }).catch(function (error) {
          console.log(error.response.data.message)
        });
      },
    }
  }
</script>

<style>
@import '../assets/home.css';
</style>
