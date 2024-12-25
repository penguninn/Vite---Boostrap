<script setup>
import CardPost from './CardPost.vue';
import { ref, onMounted } from 'vue';

const username = localStorage.getItem('username');
const posts = ref([]);  

const getUser = () => {
    const users =  JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === username);
    return users[userIndex];
}

onMounted(() => {
    const userPosts = JSON.parse(localStorage.getItem('posts')) || {};
    posts.value = userPosts[username] || [];
    console.log(userPosts) 
});
</script>
<template>

    <h2 class="mb-4">Bài viết của bạn</h2>
    <div v-if="posts.length === 0">
        <p>Chưa có bài viết nào. Hãy tạo bài viết mới!</p>
    </div>
    <CardPost v-else v-for="post in posts" :key="post.id" :post="post" :user="getUser()"/>
</template>