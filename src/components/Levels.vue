<template>
  <div class="row justify-content-center">
    <div class="card col-md-4 m-2 bg-dark text-light">
      <div class="card-header text-center">
        Зритель
      </div>
      <div class="card-body">
        <h5 class="card-title">Уровень 1-50</h5>
        <hr>
        <p class="card-text">
          • С каждого пятого проигрыша <code>1% кэшбек</code>
        </p>
      </div>
    </div>

    <div class="card col-md-4 m-2 bg-dark text-light">
      <div class="card-header text-center">
        Болельщик
      </div>
      <div class="card-body">
        <h5 class="card-title">Уровень 51-200</h5>
        <hr>
        <p class="card-text">
          • С каждого пятого проигрыша <code>5% кэшбек</code>
        </p>
      </div>
    </div>

    <div class="card col-md-4 m-2 bg-dark text-light">
      <div class="card-header text-center">
        Поклонник
      </div>
      <div class="card-body">
        <h5 class="card-title">Уровень 201-500</h5>
        <hr>
        <p class="card-text">
          • С каждого пятого проигрыша <code>10% кэшбек</code>
        </p>
        <p class="card-text">
          • Бонусы <code>в рассрочку</code>
        </p>
      </div>
    </div>

    <div class="card col-md-4 m-2 bg-dark text-light">
      <div class="card-header text-center">
        Фанат
      </div>
      <div class="card-body">
        <h5 class="card-title">Уровень от 501</h5>
        <hr>
        <p class="card-text">
          • С каждого пятого проигрыша <code>15% кэшбек</code>
        </p>
        <p class="card-text">
          • С каждого пятого выйгрыша <code>15% кэшбек</code>
        </p>
        <p class="card-text">
          • Бонусы <code>в рассрочку</code>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Levels"
}
</script>

<style scoped>

</style>
