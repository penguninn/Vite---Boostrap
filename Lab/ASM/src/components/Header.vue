<script setup>
import { ref, reactive, onMounted } from "vue";
import {  useRouter } from "vue-router";

const router = useRouter();
const currentUser = reactive({
    username: '',
    avatar: '',
    isLoggedIn: false
});

const checkLoginStatus = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    currentUser.isLoggedIn = isLoggedIn;

    if (isLoggedIn) {
        currentUser.username = localStorage.getItem('username');
        currentUser.avatar = localStorage.getItem('avatar');
    }
}

const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
    currentUser.isLoggedIn = false;
    currentUser.username = '';
    currentUser.avatar = '';
    router.push('/');
}

onMounted(() => {
    checkLoginStatus();
});
</script>

<template>
    <nav class="navbar sticky-top navbar-expand blur-custom border-bottom border-light"
        style="max-height: 50px; background-color: rgba(255, 255, 255, 0.8);">
        <div class="container-md">
            <router-link to="/" class="navbar-brand d-flex align-items-center justify-content-center">
                <div class="position-relative overflow-hidden logo-container mx-auto">
                    <img src="../assets/logo.png"
                        class="w-100 h-auto position-absolute top-50 start-50 translate-middle" alt="Example image">
                </div>
            </router-link>
            <div class="d-flex justify-content-between align-items-center w-75">
                <form class="d-flex col-6" role="search">
                    <input class="form-control me-2" type="search" placeholder="Tìm kiếm bài viết ..."
                        aria-label="Search">
                </form>
                <ul class="navbar-nav gap-2 gap-sm-3 align-items-center">
                    <li v-if="currentUser.isLoggedIn" class="nav-item">
                        <RouterLink to="/createPost">
                            <button class="btn btn-danger rounded-5">
                                <span class="d-none d-lg-block">Tạo bài viết</span>
                                <ion-icon class="d-block d-lg-none" name="add-outline"></ion-icon>
                            </button>
                        </RouterLink>
                    </li>
                    
                    <li v-if="currentUser.isLoggedIn" class="nav-item dropdown">
                        <button class="btn btn-light rounded-5 dropdown-toggle d-flex align-items-center" type="button"
                            id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <img :src="currentUser.avatar || 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1731918955~exp=1731922555~hmac=11119e0404747f13c9e6e393fac7368a5bd93fb64a0689eb0cc1fc8fc9440da8&w=826'"
                                class="me-2" style="width: 20px; height: auto;">
                            <span class="d-none d-md-flex">{{ currentUser.username }}</span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                            <li>
                                <RouterLink to="/dashboard" class="dropdown-item">Bảng điều khiển</RouterLink>
                            </li>
                            <li><a class="dropdown-item" href="#" @click="logout">Đăng xuất</a></li>
                        </ul>
                    </li>
                    <li v-else class="nav-item">
                        <button type="button" class="btn btn-primary rounded-5" data-bs-toggle="modal"
                            data-bs-target="#loginModal">
                            Đăng nhập
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
@media (min-width: 374px) {
    .logo-container {
        width: 100px;
        height: 25px;
    }
}

@media (min-width: 576px) {
    .logo-container {
        width: 150px;
        height: 25px;
    }
}

@media (min-width: 768px) {
    .logo-container {
        width: 190px;
        height: 30px;
    }
}
</style>
