<template>
    <div>
        <h1>Blog Post {{ id }}</h1>
        <p>This is the content of blog post {{ id }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = ref(route.params.id);
</script>

<style scoped>
h1 {
    color: #007bff;
}
</style>