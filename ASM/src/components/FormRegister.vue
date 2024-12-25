<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const userName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const formErrors = ref({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
};

const validateForm = () => {
    let isValid = true;
    formErrors.value = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    if (!firstName.value) {
        formErrors.value.firstName = 'Khong duoc de trong';
        isValid = false;
    }
    if (!lastName.value) {
        formErrors.value.lastName = 'Khong duoc de trong';
        isValid = false;
    }
    if (!userName.value) {
        formErrors.value.userName = 'Khong duoc de trong';
        isValid = false;
    }
    if (!email.value || !isEmailValid(email.value)) {
        formErrors.value.email = 'Email khong hop le!';
        isValid = false;
    }
    if (!password.value) {
        formErrors.value.password = 'Khong duoc de trong';
        isValid = false;
    }
    if (password.value !== confirmPassword.value) {
        formErrors.value.confirmPassword = 'Mat khau xac nhan khong khop';
        isValid = false;
    }

    return isValid;
};

const register = () => {
    if (!validateForm()) {
        return;
    }

    const newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUsernameExists = users.some((user) => user.userName === userName.value);
    if (isUsernameExists) {
        alert("Da ton tai");
        return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    alert("Dang ky thanh cong");
    window.location.reload();

    firstName.value = "";
    lastName.value = "";
    userName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
};
</script>

<template>
    <div class="modal fade blur-custom" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel"
        aria-hidden="true" style="background-color: rgba(0, 0, 0, .75)">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="registerModalLabel">Tạo tài khoản mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="register" novalidate>
                        <div class="mb-4">
                            <input v-model="firstName" type="text" class="form-control" id="first-name"
                                placeholder="Tên" :class="{ 'is-invalid': formErrors.firstName }" required>
                            <div v-if="formErrors.firstName" class="invalid-feedback">
                                {{ formErrors.firstName }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <input v-model="lastName" type="text" class="form-control" id="last-name" placeholder="Họ"
                                :class="{ 'is-invalid': formErrors.lastName }" required>
                            <div v-if="formErrors.lastName" class="invalid-feedback">
                                {{ formErrors.lastName }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <input v-model="userName" type="text" class="form-control" id="register-username"
                                placeholder="Nhập tên đăng nhập" :class="{ 'is-invalid': formErrors.userName }" required>
                            <div v-if="formErrors.userName" class="invalid-feedback">
                                {{ formErrors.userName }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <input v-model="email" type="email" class="form-control" id="register-email"
                                placeholder="Nhập email" :class="{ 'is-invalid': formErrors.email }" required>
                            <div v-if="formErrors.email" class="invalid-feedback">
                                {{ formErrors.email }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <input v-model="password" type="password" class="form-control" id="register-password"
                                placeholder="Nhập mật khẩu" :class="{ 'is-invalid': formErrors.password }" required>
                            <div v-if="formErrors.password" class="invalid-feedback">
                                {{ formErrors.password }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <input v-model="confirmPassword" type="password" class="form-control"
                                id="register-confirm-password" placeholder="Xác nhận mật khẩu"
                                :class="{ 'is-invalid': formErrors.confirmPassword }" required>
                            <div v-if="formErrors.confirmPassword" class="invalid-feedback">
                                {{ formErrors.confirmPassword }}
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
                    </form>
                    <hr>
                    <div class="my-4 w-100 d-flex justify-content-center">
                        <span class="">Đã có tài khoản ? <a href="#" id="backToLogin"
                                class="link-primary text-decoration-none" data-bs-toggle="modal"
                                data-bs-target="#loginModal" data-bs-dismiss="modal">Đăng nhập ngay</a> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
