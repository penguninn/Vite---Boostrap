<template>
    <div>
        <h2>User Profile Settings</h2>
        <form @submit.prevent="updateSettings">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <button type="submit">Update</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("John Doe");
const email = ref("john.doe@example.com");

function updateSettings() {
    alert(`Updated settings: ${username.value}, ${email.value}`);
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label {
    font-weight: bold;
}

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