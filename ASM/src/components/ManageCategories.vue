<script setup>
import { ref, computed } from 'vue';
import { categories, addCategory, deleteCategory, updateCategory } from '../data';

const form = ref({
    id: null,
    name: ''
});

const formTitle = computed(() => (form.value.id ? 'Edit Category' : 'Add Category'));
const formButtonText = computed(() => (form.value.id ? 'Update Category' : 'Add Category'));

const handleFormSubmit = () => {
    if (form.value.id) {
        updateCategory(form.value.id, form.value);
    } else {
        form.value.id = categories[categories.length - 1].id + 1;
        addCategory(form.value);
    }
    resetForm();
}

const editCategory = (category) => {
    form.value = { ...category };
}

const handleDelete = (id) => {
    deleteCategory(id);
    resetForm();
}

const resetForm = () => {
    form.value = {
        id: null,
        name: ''
    };
}
</script>

<template>
    <div class="container">
        <h2>Category Management</h2>
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">{{ formTitle }}</h5>
                <form @submit.prevent="handleFormSubmit">
                    <div class="mb-3">
                        <label for="name" class="form-label">Category Name</label>
                        <input v-model="form.name" type="text" class="form-control" id="name"
                            placeholder="Enter category name" required />
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                        <td>{{ category.id }}</td>
                        <td>{{ category.name }}</td>
                        <td>
                            <button class="btn btn-info btn-sm" @click="editCategory(category)">Details</button>
                            <button class="btn btn-danger btn-sm" @click="handleDelete(category.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
</style>
