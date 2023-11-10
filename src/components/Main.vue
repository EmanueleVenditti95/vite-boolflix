<script>
import FilmCard from './FilmCard.vue';
import { store } from '/store';

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
    created() {
        console.log(this.store)
    }
}
</script>

<template>
    <div v-for="card,i in this.store.films" :key="i">
        <FilmCard :item="card"/>
    </div>
</template>

<style>
</style>