<template>
    <div class="container p-4">
        <h3>Đổi mật khẩu</h3>
        <p>Thay đổi mật khẩu cho tài khoản của bạn. Bạn nên đặt mật khẩu mạnh để chặn những truy cập trái phép vào tài
            khoản của mình.</p>
        <form @submit.prevent="handleSubmit">
            <!-- Current Password -->
            <div class="mb-3">
                <label for="currentPassword" class="form-label">* Mật khẩu hiện tại</label>
                <input type="password" class="form-control" id="currentPassword" v-model="currentPassword"
                    :class="{ 'is-invalid': errors.currentPassword }" />
                <div class="form-text" v-if="errors.currentPassword">{{ errors.currentPassword }}</div>
            </div>
            <!-- New Password -->
            <div class="mb-3">
                <label for="newPassword" class="form-label">* Mật khẩu mới</label>
                <input type="password" class="form-control" id="newPassword" v-model="newPassword"
                    :class="{ 'is-invalid': errors.newPassword }" />
                <div class="form-text" v-if="errors.newPassword">{{ errors.newPassword }}</div>
            </div>
            <!-- Confirm New Password -->
            <div class="mb-3">
                <label for="confirmNewPassword" class="form-label">* Xác nhận mật khẩu mới</label>
                <input type="password" class="form-control" id="confirmNewPassword" v-model="confirmNewPassword"
                    :class="{ 'is-invalid': errors.confirmNewPassword }" />
                <div class="form-text" v-if="errors.confirmNewPassword">{{ errors.confirmNewPassword }}</div>
            </div>
            <!-- Buttons -->
            <div class="d-flex justify-content-end gap-3">
                <button type="button" class="btn btn-secondary" @click="handleCancel">Hủy bỏ</button>
                <button type="submit" class="btn btn-primary">Đổi mật khẩu</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Lấy dữ liệu người dùng từ localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];
const username = localStorage.getItem('username');
const foundUser = users.find(user => user.username === username) || {};

// Các giá trị cho mật khẩu và lỗi
const currentPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

const errors = ref({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
});

// Xử lý sự kiện khi người dùng gửi form
const handleSubmit = () => {
    // Reset lỗi
    errors.value = {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    };

    let isValid = true;

    // Kiểm tra mật khẩu hiện tại
    if (!currentPassword.value) {
        errors.value.currentPassword = 'Mật khẩu hiện tại là bắt buộc';
        isValid = false;
    } else if (currentPassword.value !== foundUser.password) {
        errors.value.currentPassword = 'Mật khẩu hiện tại không đúng';
        isValid = false;
    }

    // Kiểm tra mật khẩu mới
    if (!newPassword.value) {
        errors.value.newPassword = 'Mật khẩu mới là bắt buộc';
        isValid = false;
    } else if (newPassword.value.length < 6) {
        errors.value.newPassword = 'Mật khẩu mới phải có ít nhất 6 ký tự';
        isValid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (confirmNewPassword.value !== newPassword.value) {
        errors.value.confirmNewPassword = 'Mật khẩu xác nhận không khớp';
        isValid = false;
    }

    // Nếu tất cả hợp lệ, cập nhật mật khẩu
    if (isValid) {
        // Cập nhật mật khẩu trong dữ liệu người dùng
        foundUser.password = newPassword.value;

        // Lưu lại dữ liệu mới vào localStorage
        const index = users.findIndex(user => user.username === username);
        users[index] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));

        // Hiển thị thông báo thành công
        alert('Mật khẩu đã được thay đổi thành công!');

        // Reset form
        handleCancel();
    }
};

// Xử lý khi nhấn hủy bỏ
const handleCancel = () => {
    currentPassword.value = '';
    newPassword.value = '';
    confirmNewPassword.value = '';
    errors.value = {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    };
};
</script>

<style scoped>
body {
    background-color: #f8f9fa;
}

.container {
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
    font-weight: bold;
}

.form-text {
    color: red;
}

.btn-primary {
    background-color: #1a73e8;
    border-color: #1a73e8;
}

.btn-primary:hover {
    background-color: #155ab6;
    border-color: #155ab6;
}
</style>