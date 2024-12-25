<script setup>
import Home from './components/Home.vue';
import Footers from './components/Footer.vue';
import Headers from './components/Header.vue';
import FormLogin from './components/FormLogin.vue';
import FormRegister from './components/FormRegister.vue';
import { RouterView } from 'vue-router';

if (!localStorage.getItem("isFirstRun")) {
  localStorage.clear();
  const users = [
    {
      firstName: "admin",
      lastName: "admin",
      userName: "admin",
      email: "admin@gmail.com",
      password: "123",
      role: "admin"
    }
  ];
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("isFirstRun", "false");
}

</script>

<template>
  <FormLogin />
  <FormRegister />
  <Headers />
  <RouterView />
  <Footers />
</template>
