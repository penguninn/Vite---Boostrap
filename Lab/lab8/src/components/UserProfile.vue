<template>
    <div>
        <h1>User Profile</h1>
        <nav>
            <router-link to="/profile/info">Info</router-link>
            <router-link to="/profile/settings">Settings</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script setup>
</script>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 20px;
}

nav a {
    text-decoration: none;
    color: #007bff;
}

nav a:hover {
    text-decoration: underline;
}
</style>