<script>
import { store } from '../store';
import Header from './components/Header.vue';
import axios from 'axios';

export default {
  components:{
    store,
    Header
  },
  data(){
    return {
      store,
    }
  },
  methods: {
    searchFilm() {
      console.log('cerca film')
    }
  }
}
</script>

<template>
<Header @search="searchFilm" />
</template>

<style scoped>

</style>
