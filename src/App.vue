<template>
  <div id="home">
    <div id="nav"></div>
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="buttons">
      <!-- mutation의 함수이용은  $store.commit('decrease')"-->
      <!-- action(비동기 등)은 지금처럼 사용-->
      <button @click="$store.dispatch('decrease')">-</button>
      <button @click="$store.dispatch('increase')">+</button>
    </div>
    <!-- v-model로 인풋상태값 저장 -->
    <input v-model="inputTest" type="text" placeholder="dataKip" />
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {
      counter: 0,
      inputTest: "hihi",
    };
  },

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
