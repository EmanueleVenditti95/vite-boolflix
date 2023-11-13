<script>
import { store } from '../store'

export default {
  components: {
    store,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <nav class="container">
    <h1 class="logo">BOOLFLIX</h1>
    <input class="searchbar" type="text" v-model="store.query" @keyup.enter="$emit('search')" placeholder="Cerca...">
  </nav>
</template>

<style scoped lang="scss">
.container {
  background-color: rgb(36, 33, 33);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  .logo {
    color: red;
    font-size: 40px;
  }

  .searchbar {
    height: 25px;
  }
}
</style>