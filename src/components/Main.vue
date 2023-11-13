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
    <main class="container">
        <section>
            <h1>Movies :</h1>
            <div class="container-flex">
                <div v-for="film in this.store.films" :key="film.id">
                    <FilmCard :item="film"/>
                </div>
            </div>


            <p>{{ this.store.warnMessageFilm }}</p>
        </section>

        <section>
            <h1>Series :</h1>
            <div
            v-for="serie in this.store.series" :key="serie.id">
                <SeriesCard :item="serie"/>
            </div>

            <p>{{ this.store.warnMessageSeries }}</p>
        </section>
    </main>    
</template>

<style lang="scss" scoped>
@use '../src/style/general.scss';
.container {
    background-color: rgb(158, 152, 152);
    height: 90vh;
    overflow: auto;
    h1 {
        padding: 20px;
        color: rgb(255, 255, 255);
    }
    .container-flex {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    }
}
</style>