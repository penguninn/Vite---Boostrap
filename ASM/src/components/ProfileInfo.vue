<script setup>
import { ref } from 'vue';

const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || {});
</script>

<template>
    <div class="profile-info">
        <h3>Thông tin cá nhân</h3>
        <p><strong>Họ tên:</strong> {{ currentUser.firstName }} {{ currentUser.lastName }}</p>
        <p><strong>Tên đăng nhập:</strong> {{ currentUser.userName }}</p>
        <p><strong>Email:</strong> {{ currentUser.email }}</p>
    </div>
</template>

<style scoped>
.profile-info {
    margin-top: 20px;
}
</style>
