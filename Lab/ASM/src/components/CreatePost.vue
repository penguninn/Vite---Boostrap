<script setup>
import { ref } from 'vue';

const form = ref({
    title: '',
    content: '',
    image: ''
});

const username = localStorage.getItem('username');

const createPost = () => {
    if (form.value.title && form.value.content) {
        const newPost = {
            title: form.value.title,
            content: form.value.content,
            date: new Date().toLocaleString(),
            author: username,
            image: form.value.image
        };
        
        const userPosts = JSON.parse(localStorage.getItem('posts')) || {};
        if (!userPosts[username]) {
            userPosts[username] = [];
        }
        userPosts[username].push(newPost);
        localStorage.setItem('posts', JSON.stringify(userPosts));

        const allPosts = JSON.parse(localStorage.getItem('allPosts')) || [];
        allPosts.push(newPost);
        localStorage.setItem('allPosts', JSON.stringify(allPosts));

        form.value.title = '';
        form.value.content = '';
        form.value.image = '';
    } else {
        alert("Vui lòng điền đầy đủ tiêu đề và nội dung.");
    }
};
</script>

<template>
    <div class="container-md my-4 min-vh-100">
        <h2>Tạo Bài Viết</h2>
        <div class="my-3">
            <label for="title" class="form-label required">Tiêu đề</label>
            <input type="text" class="form-control" id="title" v-model="form.title"
                placeholder="Nhập tiêu đề bài viết" />
        </div>

        <div class="my-3">
            <label for="image" class="form-label required">Hình ảnh</label>
            <input type="text" class="form-control" id="image" v-model="form.image"
                placeholder="Link ảnh ... " />
        </div>

        <div class="mb-3">
            <label for="content" class="form-label required">Nội dung</label>
            <div class="border p-2">
                <textarea class="form-control" id="content" rows="10" v-model="form.content"></textarea>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" @click="createPost">Tạo bài viết</button>
    </div>
</template>



<style scoped>
.form-label.required::after {
    content: " *";
    color: red;
}

.btn-primary {
    background-color: #ff4500;
    border-color: #ff4500;
}

.btn-primary:hover {
    background-color: #e03e00;
    border-color: #e03e00;
}
</style>