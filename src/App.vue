<script>
import { store } from '../store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';

export default {
  components:{
    store,
    Header,
    Main
  },
  data(){
    return {
      store,
    }
  },
  methods: {
    searchFilm() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=fec66e332824c749357e56b0b5da4346&query=ritorno+al+futuro')
      .then(res => {
        this.store.films = res.data.results
        console.log(this.store.films)
      })
    }
  }
}
</script>

<template>
<Header @search="searchFilm" />
<Main />
</template>

<style scoped>

</style>
