<script>
export default {
    props: {
        item: {
            type : Object
        }
    }
}
</script>

<template>
<h1>{{ item.title }}</h1>
<h2>{{ item.original_title }}</h2>
<h3>{{ item.original_language }}</h3>
<h5>{{ item.vote_average }}</h5>
</template>

<style>
</style>