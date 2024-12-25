<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const loginUsername = ref('');
const loginPassword = ref('');
const users = JSON.parse(localStorage.getItem('users')) || [];
const router = useRouter();

const loginUser = (event) => {
  event.preventDefault();
  const foundUser = users.find(user => user.username === loginUsername.value);

  if (!foundUser) {
    alert('Tên đăng nhập không tồn tại');
    return;
  }
  if (foundUser.password !== loginPassword.value) {
    alert('Mật khẩu sai');
    return;
  }
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('username', foundUser.username);
  window.location.reload();
};
</script>

<template>
  <div class="modal fade blur-custom" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true"
    style="background-color: rgba(0, 0, 0, .75)">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Xin chào, chào mừng trở lại !</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="loginUser" class="needs-validation" novalidate>
            <div class="mb-4">
              <input v-model="loginUsername" type="text" class="form-control" id="username"
                placeholder="Nhập tên đăng nhập" required>
              <div class="invalid-feedback">
                Vui lòng nhập username hoặc email
              </div>
            </div>
            <div class="mb-4">
              <input v-model="loginPassword" type="password" class="form-control" id="password"
                placeholder="Nhập mật khẩu" required>
              <div class="invalid-feedback">
                Vui lòng nhập mật khẩu
              </div>
            </div>
            <div class="mb-4 d-flex justify-content-between">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-login">
                <label for="save-login" class="form-check-label">Lưu đăng nhập</label>
              </div>
              <a href="#" class="link-primary link-opacity-75-hover">Quên mật khẩu ?</a>
            </div>
            <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
          </form>
          <hr>
          <div class="my-4 w-100 d-flex justify-content-center">
            <span>Chưa có tài khoản ?
              <a href="#" class="link-primary text-decoration-none" data-bs-toggle="modal"
                data-bs-target="#registerModal" data-bs-dismiss="modal">Đăng ký ngay</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
