<script>
import FilmCard from './FilmCard.vue';
import SeriesCard from './SeriesCard.vue';
import { store } from '../store';

export default {
    components: {
        FilmCard,
        SeriesCard,
        store
    },
    data(){
        return {
            FilmCard,
            SeriesCard,
            store
        }
    },
    mounted() {
    }
}
</script>

<template>
    <section>
        <h1>Movies :</h1>
        <div v-for="film in this.store.films" :key="film.id">
            <FilmCard :item="film"/>
        </div>

        <h1>{{ this.store.warnMessageFilm }}</h1>
    </section>

    <section>
        <h1>Series :</h1>
        <div v-for="serie in this.store.series" :key="serie.id">
            <SeriesCard :item="serie"/>
        </div>

        <h1>{{ this.store.warnMessageSeries }}</h1>
    </section>
    
</template>

<style>
</style>