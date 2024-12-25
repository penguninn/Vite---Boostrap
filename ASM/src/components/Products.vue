<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import Breadcrumb from "./Breadcrumb.vue";

import { products, news, brands, categories, prices, sorts } from '../data.js';

const route = useRoute();
const categoryId = ref(parseInt(route.params.categoryId) || null);

watch(() => route.params.categoryId, (newCategoryId) => {
    categoryId.value = parseInt(newCategoryId) || null;
});

const categoryName = computed(() => {
    const category = categories.find(cat => cat.id === categoryId.value);
    return category?.name || 'All Products';
});

const selectedBrands = ref([]);
const selectedPrices = ref([]);
const selectedSorted = ref('newest');

const currentPage = ref(1);
const itemsPerPage = ref(12);

const filteredProducts = computed(() => {
    return products.filter(product => {
        const matchesCategory = categoryId.value === null || product.category.id === categoryId.value;
        const matchesBrand = selectedBrands.value.length === 0 || selectedBrands.value.includes(product.brand);
        const matchesPrice = selectedPrices.value.length === 0 || selectedPrices.value.some(priceRange => {
            switch (priceRange) {
                case 1: return product.price < 50;
                case 2: return product.price >= 50 && product.price <= 100;
                case 3: return product.price > 100 && product.price <= 200;
                case 4: return product.price > 200;
                default: return false;
            }
        });
        return matchesCategory && matchesBrand && matchesPrice;
    });
});

const sortedProducts = computed(() => {
    const sorted = [...filteredProducts.value];
    if (selectedSorted.value === "price-asc") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (selectedSorted.value === "price-desc") {
        sorted.sort((a, b) => b.price - a.price);
    } else if (selectedSorted.value === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSorted.value === "best-selling") {
        sorted.sort((a, b) => b.sold - a.sold);
    } else if (selectedSorted.value === "newest") {
        sorted.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    }
    return sorted;
});

const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    return sortedProducts.value.slice(startIndex, startIndex + itemsPerPage.value);
});

const totalPages = computed(() => {
    return Math.ceil(sortedProducts.value.length / itemsPerPage.value);
});

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
</script>



<template>
    <div class="container-md bg-body-secondary px-5 pt-2 pb-5">
        <div class="w-100 d-flex flex-column gap-3 justify-content-center align-items-start">
            <Breadcrumb />
            <div class="w-100 d-flex flex-column">
                <div class="w-100 d-flex justify-content-between align-items-center">
                    <h2 class="col-9">{{ categoryName }}</h2>
                    <select class="form-select" v-model="selectedSorted">
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name">Name</option>
                        <option value="best-selling">Best Selling</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
            <div class="w-100 row">
                <div class="col-2 d-flex flex-column justify-content-start align-content-start">
                    <h5>Filter</h5>
                    <div class="brands">
                        <h6 class="mt-3">BRAND</h6>
                        <div class="form-check" v-for="item in brands" :key="item.id">
                            <input class="form-check-input" type="checkbox" :id="'checkbox-' + item.id"
                                :value="item.name" v-model="selectedBrands" />
                            <label class="form-check-label" :for="'checkbox-' + item.id">
                                {{ item.name }}
                            </label>
                        </div>
                    </div>
                    <div class="prices">
                        <h6 class="mt-3">PRICE</h6>
                        <div class="form-check" v-for="item in prices" :key="item.id">
                            <input class="form-check-input" type="checkbox" :id="'checkbox-price-' + item.id"
                                :value="item.id" v-model="selectedPrices" />
                            <label class="form-check-label" :for="'checkbox-price-' + item.id">
                                {{ item.range }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-10">
                    <div class="row g-3">
                        <div class="col-lg-3 col-md-4 col-sm-6" v-for="product in paginatedProducts" :key="product.id">
                            <router-link :to="{ name: 'DetailProduct', params: { productId: product.id } }"
                                class="text-reset text-decoration-none">
                                <div class="card h-100">
                                    <img :src="product.image" class="card-img-top" alt="Product image" />
                                    <div class="card-body">
                                        <h5 class="card-title">{{ product.name }}</h5>
                                        <div class="info d-flex flex-column gap-1">
                                            <span class="card-text">Brand: {{ product.brand }}</span>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="card-text">Price: ${{ product.price }}</span>
                                                <span class="card-text text-muted">Sold: {{ product.sold }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>

                    <!-- Bootstrap pagination -->
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center mt-4">
                            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                                <button class="page-link" @click="goToPage(currentPage - 1)"
                                    :disabled="currentPage === 1">Previous</button>
                            </li>
                            <li class="page-item" v-for="page in totalPages" :key="page"
                                :class="{ 'active': currentPage === page }">
                                <button class="page-link" @click="goToPage(page)">{{ page }}</button>
                            </li>
                            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                                <button class="page-link" @click="goToPage(currentPage + 1)"
                                    :disabled="currentPage === totalPages">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card {
    display: flex;
    flex-direction: column;
}

.card-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card-body .d-flex {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

.card-body .info {
    margin-top: auto;
}
</style>