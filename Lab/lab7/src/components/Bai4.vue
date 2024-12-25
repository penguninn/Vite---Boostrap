<template>
    <div class="container-fluid">
        <LoginComponent v-if="!isloggedIn" @loggedIn="handleLoginSuccess" />
        <CommentComponent v-else :username="loggedInUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './Login.vue';
import CommentComponent from './Comment.vue';

// Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập  
const isloggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý khi người dùng đăng nhập thành công  
function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isloggedIn.value = true;
}
</script>