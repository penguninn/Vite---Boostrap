<script setup>
import { ref, reactive, onMounted } from 'vue';
import { RouterView } from 'vue-router';

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
  <div class="container-md my-4 min-vh-100">
    <div class="row">
      <div class="sidebar p-3 col-3">
        <h5 class="mb-4">Trang Chủ</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center justify-content-start gap-3" to="/dashboard/info" active-class="active">
              <i class="fas fa-info-circle"></i> Thông Tin Cá Nhân
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center justify-content-start gap-3"
              to="/dashboard/change-password" active-class="active">
              <i class="fas fa-key"></i> Thay đổi mật khẩu
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center justify-content-start gap-3"
              to="/dashboard/manage-post">
              <i class="fa fa-file-invoice"></i> Bài đăng của tôi
            </router-link>
          </li>
        </ul>
      </div>

      <div class="content p-4 col-9">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link.active,
.router-link-active {
  font-weight: bold;
  background-color: #cfcfcf;
}

.sidebar {
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #dee2e6;
}

.sidebar .nav-link {
  color: #495057;
}

.content {
  padding: 20px;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-img-container {
  position: relative;
  display: inline-block;
}

.profile-img-container .change-img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 0 0 50% 50%;
}
</style>