<script setup>
import { ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits();
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const registerUser = (event) => {
    event.preventDefault();
    if (password.value !== confirmPassword.value) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
    }

    const newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        email: email.value,
        password: password.value,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBxJUGKvrsY3xP1I0IV2vdBp05iTa5g4phQ&s',
        displayName:  'anonymous',
        birthdate: '2000-01-01',
        gender: null,
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    emit('register', newUser);
    window.location.reload();
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
                    <form @submit="registerUser">
                        <div class="mb-4">
                            <input type="text" class="form-control" v-model="firstName" placeholder="Tên" required>
                        </div>
                        <div class="mb-4">
                            <input type="text" class="form-control" v-model="lastName" placeholder="Họ" required>
                        </div>
                        <div class="mb-4">
                            <input type="text" class="form-control" v-model="username" placeholder="Nhập tên đăng nhập"
                                required>
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control" v-model="email" placeholder="Nhập email" required>
                        </div>
                        <div class="mb-4">
                            <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu"
                                required>
                        </div>
                        <div class="mb-4">
                            <input type="password" class="form-control" v-model="confirmPassword"
                                placeholder="Xác nhận mật khẩu" required>
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
