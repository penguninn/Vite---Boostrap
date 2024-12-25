<template>
    <div>
        <h1>Login</h1>
        <button @click="login">Login</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function login() {
    localStorage.setItem("isAuthenticated", "true");
    router.push({ name: "Dashboard" });
}
</script>

<style scoped>
button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>