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
    search() {
      this.store.warnMessageSeries = '';
      this.store.warnMessageFilm = '';
      
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${this.store.query}&language=${this.language}`)
      .then(res => {
        this.store.films = res.data.results;
        if (!this.store.films.length) {
        this.store.warnMessageFilm = 'Nessun elemento trovato';
      }
      this.store.query = '';
      })

      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.API_KEY}&query=${this.store.query}&language=${this.language}`)
      .then(res => {
        this.store.series = res.data.results;
        if (!this.store.series.length) {
        this.store.warnMessageSeries = 'Nessun elemento trovato';
      }
      })
    },
  }
}
</script>

<template>
<Header @search="search" />
<Main />
</template>

<style lang="scss">
@use '../src/style/general.scss'
</style>
