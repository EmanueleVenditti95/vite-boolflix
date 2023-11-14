<script>
import { store } from "../store"

export default {
    store,
    props: {
        item: {
            type : Object
        }
    },
    data() {
        return {
            store
        }
    },
    mounted(){
    },
    computed : {
        rating() {
            return Math.ceil((this.item.vote_average) / 2);
        }
    }
}
</script>

<template>
    <ul class="card">
        <li><img :src="this.store.postersUrl + item.poster_path" alt=""></li>
        <li>{{ item.title ?? item.name }}</li>
        <li>{{ item.original_title ?? item.original_name }}</li>
        <li v-if="this.store.flags[item.original_language]">
            <img :src="this.store.flags[item.original_language]" alt="">
        </li>
        <li v-else>{{ item.original_language }}</li>
        <li class="rating">
            <div v-for="(star,i) in 5">
                <font-awesome-icon icon="fa-solid fa-star" 
                :class="i <= (rating - 1) ? 'star' : 'empty-star'"/>
            </div>
        </li>
    </ul>
</template>

<style lang="scss">
.rating{
    display: flex;
    .star {
        color: yellow;
    }
    .empty-star {
        color: white;
    }
}
</style>