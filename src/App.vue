<script>
import { store } from './store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';

export default {
  components:{
    store,
    Header,
    Main,
  },
  data(){
    return {
      store,
      API_KEY:'fec66e332824c749357e56b0b5da4346',
      language: 'it-IT'
    }
  },
  methods: {
    searchFilm() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${this.store.query}&language=${this.language}`)
      .then(res => {
        this.store.films = res.data.results;
        console.log(this.store.films);
        if (!this.store.films.length) {
          this.store.warnMessage = 'Nessun film trovato'
        }
      })
    }
  },
  created() {
    console.log(this.store.query)
  }
}
</script>

<template>
<Header @search="searchFilm" />
<Main />
</template>

<style scoped>

</style>
