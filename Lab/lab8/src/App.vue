<template>
    <div id="app">
        <header>
            <h1>MyBlog</h1>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/profile">Profile</router-link>
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/login">Login</router-link>
            </nav>
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <p>&copy; 2024 MyBlog. All rights reserved.</p>
        </footer>
    </div>
</template>

<script setup>
</script>

<style scoped>
#app {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #007bff;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    margin: 0;
}

nav {
    display: flex;
    gap: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}

main {
    padding: 2rem;
}

footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>