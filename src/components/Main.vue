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

        <p>{{ this.store.warnMessageFilm }}</p>
    </section>

    <section>
        <h1>Series :</h1>
        <div v-for="serie in this.store.series" :key="serie.id">
            <SeriesCard :item="serie"/>
        </div>

        <p>{{ this.store.warnMessageSeries }}</p>
    </section>
    
</template>

<style>
</style>