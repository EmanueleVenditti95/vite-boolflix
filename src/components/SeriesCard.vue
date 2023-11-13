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
    }
}
</script>

<template>
    <ul>
        <li>{{ item.name }}</li>
        <li>{{ item.original_name }}</li>
        <li v-if="this.store.flags[item.original_language]">
            <img :src="this.store.flags[item.original_language]" alt="">
        </li>
        <li v-else>{{ item.original_language }}</li>
        <li>{{ item.vote_average }}</li>
    </ul>
</template>

<style>
</style>