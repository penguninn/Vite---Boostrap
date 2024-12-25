<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();

const login = (event) => {
    const form = event.target;
    if (form.checkValidity() === false) {
        event.preventDefault(); 
        event.stopPropagation(); 
    } else {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => (user.userName === username.value || user.email === username.value) && user.password === password.value);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            alert("Dang nhap thanh cong");
            window.location.reload();
        } else {
            alert("Sai mat khau hoac tai khoan");
        }
    }

    form.classList.add("was-validated");
};
</script>

<template>
    <div class="modal fade blur-custom" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel"
        aria-hidden="true" style="background-color: rgba(0, 0, 0, .75)">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Xin chào, chào mừng trở lại !</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="login" class="needs-validation" novalidate>
                        <div class="mb-4">
                            <input v-model="username" type="text" class="form-control" id="username"
                                placeholder="Nhập tên đăng nhập hoặc email" required>
                            <div class="invalid-feedback">
                                Nhap email hoac username
                            </div>
                        </div>
                        <div class="mb-4">
                            <input v-model="password" type="password" class="form-control" id="password"
                                placeholder="Nhập mật khẩu" required>
                            <div class="invalid-feedback">
                                Khong duoc de trong
                            </div>
                        </div>
                        <div class="mb-4 d-flex justify-content-between">
                            <RouterLink to="/forgot-password" class="link-primary link-opacity-75-hover">Quên mật khẩu ?
                            </RouterLink>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
                    </form>
                    <hr>
                    <div class="my-4 w-100 d-flex justify-content-center">
                        <span class="">Chưa có tài khoản ?
                            <a href="#" class="link-primary text-decoration-none" data-bs-toggle="modal"
                                data-bs-target="#registerModal" data-bs-dismiss="modal">Đăng ký ngay</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
