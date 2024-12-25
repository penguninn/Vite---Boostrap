<script setup>
import { ref, computed } from 'vue';
import { products, categories, brands, addProduct, deleteProduct, updateProduct } from '../data';

const form = ref({
    id: null,
    name: '',
    price: '',
    brand: '',
    category: null,
    image: ''
});

const dataProd = ref();

const formTitle = computed(() => (form.value.id ? 'Edit Product' : 'Add Product'));
const formButtonText = computed(() => (form.value.id ? 'Update Product' : 'Add Product'));

const handleFormSubmit = () => {
    if (form.value.id) {
        updateProduct(form.value.id, form.value);
    } else {
        form.value.id = products[products.length - 1].id + 1;
        addProduct(form.value);
    }
    resetForm();
}

const editProduct = (product) => {
    form.value = { ...product };
}

const handleDelete = (id) => {
    deleteProduct(id);
    resetForm();
}

const resetForm = () => {
    form.value = {
        id: null,
        name: '',
        price: '',
        brand: '',
        category: null,
        image: ''
    };
}
</script>
<template>
    <div class="container">
        <h2>Product Management</h2>
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">{{ formTitle }}</h5>
                <form @submit.prevent="handleFormSubmit">
                    <div class="mb-3">
                        <label for="name" class="form-label">Product Name</label>
                        <input v-model="form.name" type="text" class="form-control" id="name"
                            placeholder="Enter product name" required />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input v-model="form.price" type="number" class="form-control" id="price"
                            placeholder="Enter product price" required />
                    </div>
                    
                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <select v-model="form.brand" class="form-select" id="brand" required>
                            <option value="" disabled selected>Select Brand</option>
                            <option v-for="brand in brands" :key="brand.id" :value="brand.name">{{ brand.name }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="category" class="form-label">Category</label>
                        <select v-model="form.category" class="form-select" id="category" required>
                            <option value="" disabled selected>Select Category</option>
                            <option v-for="category in categories" :key="category.id" :value="category">{{
                                category.name }}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Product Image URL</label>
                        <input v-model="form.image" type="text" class="form-control" id="image"
                            placeholder="Enter image URL" required />
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">{{ formButtonText }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="mt-4">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.brand }}</td>
                        <td>{{ product.category.name }}</td>
                        <td>
                            <button class="btn btn-info btn-sm" @click="editProduct(product)">Details</button>
                            <button class="btn btn-danger btn-sm" @click="handleDelete(product.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<style scoped></style>