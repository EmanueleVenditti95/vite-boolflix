<script>
import Card from './Card.vue';
import { store } from '../store';

export default {
    components: {
        Card,
        store
    },
    data(){
        return {
            Card,
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
            <h1 class="container-flex">Movies :</h1>
            <div class="container-flex">
                <div class="card"
                 v-for="film in this.store.films" :key="film.id">
                    <Card :item="film"/>
                </div>
                <p class="no-element">{{ this.store.warnMessageFilm }}</p>
            </div>
        </section>

        <section>
            <h1 class="container-flex">Series :</h1>
            <div class="container-flex">
                <div class="card"
                 v-for="serie in this.store.series" :key="serie.id">
                    <Card :item="serie"/>
                </div>
                <p class="no-element">{{ this.store.warnMessageSeries }}</p>
            </div>
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
        max-width: 1200px;
        margin: 0 auto;
        .card {
        flex-basis: calc(100% / 3);
        color: white;
        position: relative;
        aspect-ratio: 6 / 9;
        padding: 20px;
        }
    }
    .no-element {
        margin: 20px;
        font-size: 18px;
    }
}
</style>