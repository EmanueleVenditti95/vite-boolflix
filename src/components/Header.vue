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
  <div class="bg-black">
    <nav class="container">
      <h1 class="logo">BOOLFLIX</h1>
      <input class="searchbar" type="text" v-model="store.query" @keyup.enter="$emit('search')" placeholder="Cerca...">
    </nav>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  height: 10vh;
  max-width: 1600px;
  margin: 0 auto;

  .logo {
    color: red;
    font-size: 40px;
  }

  .searchbar {
    height: 25px;
  }
}
</style>