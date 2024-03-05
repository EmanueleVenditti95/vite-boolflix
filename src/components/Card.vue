<script>
import { store } from "../store"

export default {
    store,
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            store,
            active : false,
        }
    },
    mounted() {
    },
    methods : {
        mouseOver() {
            this.active = true; 
        },
        mouseLeave() {
            this.active = false;
        }
    },
    computed: {
        rating() {
            return Math.ceil((this.item.vote_average) / 2);
        }
    }
}
</script>

<template>
    <ul class="card__list">
        <li><span class="title">Titolo :</span> {{ item.title ?? item.name }}</li>

        <li><span class="title">Titolo originale :</span> {{ item.original_title ?? item.original_name }}</li>

        <li class="language" v-if="this.store.flags[item.original_language]">
            <span class="title">Lingua :</span>
            <img class="flag" :src="this.store.flags[item.original_language]" alt="">
        </li>
        <li v-else>
            <span class="title">Lingua :</span>
            {{ item.original_language }}
        </li>

        <li class="rating"><span class="title">Voto </span>
            <div v-for="(star, i) in 5">
                <font-awesome-icon icon="fa-solid fa-star" :class="i <= (rating - 1) ? 'star' : 'empty-star'" />
            </div>
        </li>
    </ul>
    <h1 v-if="!item.poster_path" @mouseover="mouseOver" class="warning"> Nessuna immagine disponibile</h1>
    <img v-else @mouseover="mouseOver" class="card__img" :src="this.store.postersUrl + item.poster_path" alt="">

</template>

<style lang="scss">
@use '../src/style/general.scss';

.rating {
    display: flex;
    gap: 3px;

    .star {
        color: yellow;
    }

    .empty-star {
        color: white;
    }
}

.card__img {
    width: 100%;
    aspect-ratio: 6 / 9;
}

.card__list {
    opacity: 0;
    transition: opacity 0.3s linear;
    background-color: rgb(0, 0, 0, 0.7);
    position: absolute;
    inset: 0;
    margin: 5px;
    margin-bottom: 10px;
    padding: 5px;

    &:hover {
        opacity: 1;
        transition: opacity 0.3s linear;
    }

    li {
        margin: 20px 0;
        font-size: 18px;
    }

    .title {
        font-weight: bold;
        color: #FF0000;
    }

    .language {
        display: flex;
        align-items: center;

        .flag {
            width: 25px;
            margin: 0 5px;
        }
    }
}

.warning {
    background-color: white;
    color: black;
    width: 100%;
    aspect-ratio: 6 / 9;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 20px;
}

</style>