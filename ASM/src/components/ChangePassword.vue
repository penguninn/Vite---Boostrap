<script setup>
import { ref } from 'vue';

const oldPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

const changePassword = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    if (oldPassword.value !== currentUser.password) {
        alert('Mật khẩu cũ không chính xác');
        return;
    }
    if (newPassword.value !== confirmNewPassword.value) {
        alert('Mật khẩu mới và xác nhận mật khẩu không khớp');
        return;
    }

    currentUser.password = newPassword.value;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Mật khẩu đã được thay đổi thành công!');
};

</script>

<template>
    <div class="container-md my-5">
        <h3>Đổi mật khẩu</h3>
        <form @submit.prevent="changePassword">
            <div class="mb-3">
                <label for="oldPassword" class="form-label">Mật khẩu cũ</label>
                <input type="password" class="form-control" id="oldPassword" v-model="oldPassword" required />
            </div>
            <div class="mb-3">
                <label for="newPassword" class="form-label">Mật khẩu mới</label>
                <input type="password" class="form-control" id="newPassword" v-model="newPassword" required />
            </div>
            <div class="mb-3">
                <label for="confirmNewPassword" class="form-label">Xác nhận mật khẩu mới</label>
                <input type="password" class="form-control" id="confirmNewPassword" v-model="confirmNewPassword"
                    required />
            </div>
            <button type="submit" class="btn btn-primary">Đổi mật khẩu</button>
        </form>
    </div>
</template>
