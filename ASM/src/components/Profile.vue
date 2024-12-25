<!-- src/views/Profile.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Breadcrumb from './Breadcrumb.vue';

const router = useRouter();
const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || {});

const logout = () => {
    localStorage.removeItem('currentUser');
    router.push('/');
};

</script>

<template>
    <div class="container-md profile-page">
        <Breadcrumb />
        <div class="row">
            <div class="col-md-3">
                <div class="list-group list-group-flush gap-3">
                    <router-link to="/profile" class="list-group-item list-group-item-action">My infomation</router-link>
                    <router-link to="/profile/change-password" class="list-group-item list-group-item-action">Change password</router-link>
                    <router-link to="/profile/purchase" class="list-group-item list-group-item-action">My purchase</router-link>
                    <router-link v-if="currentUser.role" to="/profile/manage-products" class="list-group-item list-group-item-action">Manage products</router-link>
                    <router-link v-if="currentUser.role" to="/profile/manage-categories" class="list-group-item list-group-item-action">Manage categories</router-link>
                    <div class="list-group-item list-group-item-action" @click="logout">Logout</div>
                </div>
            </div>

            <div class="col-md-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-page {
    padding: 20px;
}

button {
    margin-top: 20px;
}

.list-group-item {
    cursor: pointer;
}
</style>
