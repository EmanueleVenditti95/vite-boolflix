<script>
import FilmCard from './FilmCard.vue';
import { store } from '../store';

export default {
    components: {
        FilmCard,
        store
    },
    data(){
        return {
            FilmCard,
            store
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div v-for="film in this.store.films" :key="film.id">
        <FilmCard :item="film"/>
    </div>

    <h1>{{ this.store.warnMessage }}</h1>
</template>

<style>
</style>