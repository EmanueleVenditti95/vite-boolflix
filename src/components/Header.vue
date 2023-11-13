<script>
import { store } from '../store'

export default {
    components:{
    store,
  },
  data(){
    return {
      store,
    }
  },
}
</script>

<template>
<button @click="$emit('search')">Cerca</button>
<input type="text" v-model="store.query" @keyup.enter="$emit('search')" placeholder="Cerca...">
</template>

<style>
</style>