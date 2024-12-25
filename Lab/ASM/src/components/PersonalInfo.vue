<script setup>
import { ref, reactive, onMounted } from 'vue';

const users = JSON.parse(localStorage.getItem('users')) || [];
const username = localStorage.getItem('username');
const foundUser = users.find(user => user.username === username) || {};

const user = ref({
  username: foundUser.username,
  displayName: foundUser.displayName || 'anonymous',
  birthdate: foundUser.birthdate || '2000-01-01',
  gender: foundUser.gender || null,
});

const updateUser = () => {
  const userIndex = users.findIndex(u => u.username === user.value.username);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...user.value };
  } else {
    users.push(user.value);
  }
  localStorage.setItem('users', JSON.stringify(users));
  alert('Cập nhật thành công!');
};
</script>

<template>
  <h3>Thông Tin Cá Nhân</h3>
  <p>Quản lý thông tin cá nhân của bạn.</p>
  <form @submit.prevent="updateUser">
    <div class="mb-3">
      <label for="username" class="form-label">Tên tài khoản</label>
      <input class="form-control" id="username" type="text" v-model="user.username" disabled />
    </div>
    <div class="mb-3">
      <label for="displayName" class="form-label">* Tên hiển thị</label>
      <input class="form-control" id="displayName" type="text" v-model="user.displayName" />
    </div>
    <div class="mb-3">
      <label for="birthdate" class="form-label">* Ngày sinh</label>
      <input class="form-control" id="birthdate" type="date" v-model="user.birthdate" />
    </div>
    <div class="mb-3">
      <label for="gender" class="form-label">* Giới tính</label>
      <select class="form-select" id="gender" v-model="user.gender">
        <option value=null>Chọn</option>
        <option value="male">Nam</option>
        <option value="female">Nữ</option>
        <option value="other">Khác</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
  </form>
</template>