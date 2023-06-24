<template>
  <div id="app">
    <h1>Problema de monty hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <input
          type="text"
          id="portsAmount"
          v-model.number="portsAmount"
          size="3"
        />
      </div>
      <div v-if="!started">
        <label for="selectedDoor">Qual porta possui presente?</label>
        <input
          for="selectedDoor"
          id="selectedDoor"
          size="3"
          v-model.number="selectedDoor"
        />
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" v-bind:key="i">
        <DoorVue :number="i" :hasGift="i == selectedDoor" />
      </div>
    </div>
  </div>
</template>

<script>
import DoorVue from "./components/Door.vue";

export default {
  name: "AppComponent",
  components: { DoorVue },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedDoor: null,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: white;
  background: linear-gradient(to right, rgb(117, 3, 117), rgb(74, 13, 242));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid black;
  background-color: black;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors {
    align-self: stretch;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
}
</style>