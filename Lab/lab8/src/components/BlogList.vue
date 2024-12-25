<template>
    <div>
        <h1>Blog List</h1>
        <ul>
            <li v-for="id in blogIds" :key="id">
                <router-link :to="`/blog/${id}`">Blog Post {{ id }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";

const blogIds = ref([1, 2, 3]);
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}
</style>