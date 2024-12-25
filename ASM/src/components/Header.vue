<script setup>
import { reactive, ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { categories as initialCategories } from '../data';
const currentCategories = ref([...initialCategories]);
const languages = {
    en: { flag: "https://flagcdn.com/w40/us.png", name: "English" },
    vn: { flag: "https://flagcdn.com/w40/vn.png", name: "Vietnamese" },
};

const currentLanguage = reactive({
    flag: "https://flagcdn.com/w40/vn.png",
    name: "Vietnamese",
});

function changeLanguage(code) {
    currentLanguage.flag = languages[code].flag;
    currentLanguage.name = languages[code].name;
}

</script>

<template>
    <nav class="container-md navbar d-flex flex-column sticky-top navbar-expand blur-custom border-bottom border-light p-0"
        style="background-color: rgba(255, 255, 255, 0.8);">
        <div
            class="container-md d-flex justify-content-center align-items-center text-uppercase text-light bg-danger py-1">
            Capybara Shop
        </div>
        <div class="container-md px-sm-5">
            <router-link to="/" class="navbar-brand d-flex align-items-center justify-content-center" href="#">
                <img src="../assets/logo.png" alt="" width="100px">
            </router-link>
            <div class="d-flex justify-content-between align-items-center w-75">
                <form class="d-flex col-6" role="search">
                    <input class="form-control me-2 rounded-5" type="search" placeholder="Tìm kiếm ..."
                        aria-label="Search">
                </form>
                <ul class="navbar-nav gap-2 gap-sm-3 align-items-center">
                    <li class="nav-item">
                        <div class="dropdown">
                            <button class="btn btn-light rounded-5 dropdown-toggle d-flex align-items-center"
                                type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img :src="currentLanguage.flag" class="me-2" style="width: 20px; height: auto;">
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#"
                                        @click="changeLanguage('vn')"> Vietnamese
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#"
                                        @click="changeLanguage('en')"> English
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/profile">
                            <ion-icon class="fs-6 icon" name="person"></ion-icon>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart">
                            <ion-icon class="fs-6 icon" name="cart"></ion-icon>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-md px-sm-5 pb-2">
            <ul class="w-100 navbar-nav d-flex justify-content-between align-items-center">
                <li class="nav-item">
                    <router-link to="/products" class="text-uppercase text-decoration-none text-reset">
                        all products
                    </router-link>
                </li>

                <li v-for="cat in currentCategories" :key="cat.id" class="nav-item">
                    <router-link :to="{ name: 'Products', params: { categoryId: cat.id } }"
                        class="text-uppercase text-decoration-none text-reset">
                        {{ cat.name }}
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/news" class="text-uppercase text-decoration-none text-reset">
                        news
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<style>
.icon {
    color: black;
    transition: color 0.1s ease, transform 0.1s ease;
}

.icon:hover {
    color: #ff5656;
    transform: scale(1.2);
}

.nav-item .text-uppercase {
    font-size: smaller;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.nav-item .text-uppercase::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #ff5656;
    transition: width 0.3s ease;
}

.nav-item .text-uppercase:hover::after {
    width: 100%;
}


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
