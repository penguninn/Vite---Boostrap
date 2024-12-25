<script setup>
import FormLogin from './components/FormLogin.vue';
import FormRegister from './components/FormRegister.vue';
import Headers from './components/Header.vue';
import Footers from './components/Footer.vue';
import { ref } from 'vue';

const users = ref(JSON.parse(localStorage.getItem('users')) || []);
console.log(users.value);
const handleRegister = (newUser) => {
  const existingUser = users.value.find(user => user.username === newUser.username);
  if (existingUser) {
    alert('Tên đăng nhập đã tồn tại.');
    return;
  }
  users.value.push(newUser);
  localStorage.setItem('users', JSON.stringify(users.value));
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('username', newUser.username);
};
</script>

<template>
  <div id="app">
    <Headers />
    <FormLogin />
    <FormRegister @register="handleRegister" />
    <router-view />
    <Footers />
  </div>
</template>
