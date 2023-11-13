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
        <li>{{ item.name }}</li>
        <li>{{ item.original_name }}</li>
        <li v-if="this.store.flags[item.original_language]">
            <img :src="this.store.flags[item.original_language]" alt="">
        </li>
        <li v-else>{{ item.original_language }}</li>
        <li class="rating">
            <div v-for="(star,i) in 5">
                <i class="fa-solid fa-star"
                :class="i <= (rating - 1) ? 'star' : 'empty-star'"></i> 
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../style/general.scss"
</style>