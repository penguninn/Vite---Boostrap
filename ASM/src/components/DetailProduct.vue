<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { products } from '../data.js';
import Breadcrumb from "./Breadcrumb.vue";

const route = useRoute();
const productId = parseInt(route.params.productId);
const product = ref(null);

onMounted(() => {
    product.value = products.find(p => p.id === productId);
    if (product.value) {
        product.value.quantity = 1;
    }
});

const addToCart = () => {
    console.log('Product added to cart:', product.value);
};

const buyNow = () => {
    console.log('Proceeding to buy now:', product.value);
};
</script>

<template>
    <div v-if="product" class="container mt-4">
        <Breadcrumb :product="product" />
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center">
                <div class="d-flex flex-row-reverse gap-3 align-items-center">
                    <img :src="product.image" alt="Product Image" class="product-image mb-2" width="100%" height="300px" />
                    <div class="d-flex flex-column">
                        <img :src="product.image" alt="Product Image" class="product-image mb-2" width="80%"/>
                        <img :src="product.image" alt="Product Image" class="product-image mb-2" width="80%"/>
                        <img :src="product.image" alt="Product Image" class="product-image mb-2" width="80%"/>
                        
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <h1 class="product-title mb-3">{{ product.name }}</h1>
                <p class="mb-1">
                    <span class="price fs-4 fw-bold">${{ new Intl.NumberFormat().format(product.price) }}</span>
                </p>

                <div class="d-flex gap-3 justify-content-start align-items-center">
                    <span>Quantity:</span>
                    <div class="d-flex align-items-center justify-content-start">
                        <button @click="product.quantity > 1 ? product.quantity-- : ''"
                            class="btn btn-light btn-sm d-flex justify-content-center align-items-center">
                            <ion-icon name="remove"></ion-icon>
                        </button>
                        <input type="number" v-model.number="product.quantity" min="1"
                            class="form-control form-control-sm mx-2" style="width: 60px;">
                        <button @click="product.quantity++"
                            class="btn btn-light btn-sm d-flex justify-content-center align-items-center">
                            <ion-icon name="add"></ion-icon>
                        </button>
                    </div>
                </div>

                <div class="d-flex flex-column gap-3 justify-content-center align-items-start mt-3">
                    <button @click="addToCart" class="btn btn-primary w-50">Add to Cart</button>
                    <button @click="buyNow" class="btn btn-primary w-50">Buy Now</button>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <p>Product not found! <router-link to="/">Go back to home page</router-link></p>
    </div>
</template>

<style>
.product-image {
    border-radius: 10px;
}

.product-title {
    font-size: 2.5rem;
    color: #333;
    font-weight: bold;
}

.price {
    font-size: 1.5rem;
    color: #28a745;
}

.btn-custom {
    background-color: #007bff;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
}

.btn-custom:hover {
    background-color: #0056b3;
}
</style>