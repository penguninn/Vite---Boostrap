<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { categories, products } from '../data';

const route = useRoute();

const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched;
    const breadcrumbList = matchedRoutes.map((route) => {
        return {
            name: route.meta.breadcrumb || route.name,
            path: route.path
        };
    });
    if (route.params.categoryId) {
        const category = categories.find(cat => cat.id === parseInt(route.params.categoryId));
        if (category) {
            breadcrumbList.push({ name: category.name, path: route.path });
        }
    }
    if (route.params.productId) {
        const product = products.find(prod => prod.id === parseInt(route.params.productId));
        if (product) {
            breadcrumbList.push({ name: product.name, path: route.path });
        }
    }
    return breadcrumbList;
});
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
            </li>
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
                <router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
            </li>
        </ol>
    </nav>
</template>
