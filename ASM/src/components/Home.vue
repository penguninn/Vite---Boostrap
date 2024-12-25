<script setup>
import { ref, computed } from 'vue';
import { products, news } from '../data.js'; 

const groupedProducts = computed(() => {
    const groupSize = 5;
    let groups = [];
    for (let i = 0; i < products.length; i += groupSize) {
        groups.push(products.slice(i, i + groupSize));
    }
    return groups;
});

const groupedNews = computed(() => {
    const groupSize = 3;
    let groups = [];
    for (let i = 0; i < news.length; i += groupSize) {
        groups.push(news.slice(i, i + groupSize));
    }
    return groups;
});
</script>


<template>
    <div class="container-md bg-body-secondary">
        <div class="d-flex flex-column justify-content-center align-items-center w-100 pb-5">
            <div class="poster w-100 d-flex flex-column justify-content-center align-items-center">
                <div class="image-wrapper p-2">
                    <img src="../assets/poster.jpg" class="img-fluid rounded-1" alt="">
                </div>
                <div class="overlay-text position-absolute text-white text-start">
                    <h3 class="text-uppercase">Dog suppliers</h3>
                    <h1 class="text-uppercase">Sale up to 50%</h1>
                    <button class="btn btn-danger rounded-5 mt-3">Explore Now -></button>
                </div>
            </div>

            <div class="w-100 p-2 d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex flex-column mt-5" style="width: 90%;">
                    <h3>Best Seller</h3>
                    <div id="best-selling" class="carousel slide w-100">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#best-selling" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#best-selling" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#best-selling" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div v-for="(group, index) in groupedProducts" :key="index" class="carousel-item"
                                :class="{ 'active': index === 0 }">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">
                                    <div class="col" v-for="(prod, idx) in group" :key="idx">
                                        <router-link :to="{ name: 'DetailProduct', params: { productId: prod.id } }" class="text-reset text-decoration-none">
                                            <div class="card h-100">
                                                <img :src="prod.image" class="card-img-top" :alt="prod.name">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{ prod.name }}</h5>
                                                    <div class="info d-flex flex-column gap-1">
                                                        <div
                                                            class="d-flex flex-column justify-content-center align-items-start">
                                                            <span class="card-text">Price: ${{ prod.price }}</span>
                                                            <span class="card-text text-muted">Sold: {{ prod.sold
                                                                }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column mt-5 " style="width: 90%;">
                    <h3>Newest</h3>
                    <div id="newest" class="carousel slide w-100">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#newest" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#newest" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#newest" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div v-for="(group, index) in groupedProducts" :key="index" class="carousel-item"
                                :class="{ 'active': index === 0 }">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">
                                    <div class="col" v-for="(prod, idx) in group" :key="idx">
                                        <router-link :to="{ name: 'DetailProduct', params: { productId: prod.id } }" class="text-reset text-decoration-none">
                                            <div class="card h-100">
                                                <img :src="prod.image" class="card-img-top" :alt="prod.name">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{ prod.name }}</h5>
                                                    <div class="info d-flex flex-column gap-1">
                                                        <div
                                                            class="d-flex flex-column justify-content-center align-items-start">
                                                            <span class="card-text">Price: ${{ prod.price }}</span>
                                                            <span class="card-text text-muted">Sold: {{ prod.sold
                                                                }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column mt-5 pb-5" style="width: 90%;">
                    <h3>News</h3>
                    <div id="carousel-blogs" class="carousel slide w-100">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-blogs" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-blogs" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-blogs" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div v-for="(group, index) in groupedNews" :key="index" class="carousel-item"
                                :class="{ 'active': index === 0 }">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                                    <div class="col" v-for="(blog, idx) in group" :key="idx">
                                        <div class="card h-100">
                                            <img :src="blog.image" class="card-img-top" :alt="blog.title">
                                            <div class="card-body">
                                                <h5 class="card-title">{{ blog.title }}</h5>
                                                <p class="card-text">{{ blog.content }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.carousel-indicators {
    bottom: -50px;
}

.carousel-indicators button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #8a8a8a;
    border: none;
    opacity: 0.5;
    transition: opacity 0.3s;
}

.carousel-indicators button.active {
    background-color: #ff2b2b;
    opacity: 1;
}

.carousel-indicators button:hover {
    opacity: 0.8;
}

.carousel-inner {
    overflow: hidden;
}

.image-wrapper {
    width: 90%;
    height: 500px;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay-text {
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}
</style>
