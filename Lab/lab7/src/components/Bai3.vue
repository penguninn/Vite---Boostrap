<script setup>
    import { ref } from 'vue';
    const hoTen = ref(''); 
    const email = ref(''); 
    const matKhau = ref(''); 
    const ngaySinh = ref(''); 
    const gioiTinh = ref('true'); 
    const ngonNgu = ref([]); 

    const submit = () => {

    };

</script>

<template>
    <div class="container-sm row">
        <div class="d-flex flex-column col-6">
            <H2>Form Đăng Kí</H2>
            <form @submit.prevent="submit">
                <div class="row mb-3">
                    <label for="hoTen" class="col-sm-2 col-form-label">Họ tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="hoTen" v-model="hoTen">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" v-model="email">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="matKhau" class="col-sm-2 col-form-label">Mật khẩu</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="matKhau">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="ngaySinh" class="col-sm-2 col-form-label">Ngày sinh</label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" id="ngaySinh" v-model="ngaySinh">
                    </div>
                </div>
                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Giới tính</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gioiTinh" id="rd2" value="true" v-model="gioiTinh" checked>
                            <label class="form-check-label" for="rd2">Nam</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gioiTinh" id="rd2" value="false" v-model="gioiTinh">
                            <label class="form-check-label" for="rd2">Nữ</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Ngôn ngữ</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Tiếng Việt" id="lg1" v-model="ngonNgu">
                            <label class="form-check-label" for="lg1">
                                Tiếng Việt
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Tiếng Anh" id="lg2" v-model="ngonNgu">
                            <label class="form-check-label" for="lg2">
                                Tiếng Anh
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Tiếng Nhật" id="lg3" v-model="ngonNgu">
                            <label class="form-check-label" for="lg3">
                                Tiếng Nhật
                            </label>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
        <div class="d-flex flex-column col-6">
            <h2>Thông tin đã đăng ký</h2>
            <div class="d-flex flex-column gap-3">
                <div class="col-sm-10">
                    <span class="fw-bolder">Họ tên: </span>
                    <span>{{ hoTen }}</span>
                </div>
                <div class="col-sm-10">
                    <span class="fw-bolder">Email: </span>
                    <span>{{  email }}</span>
                </div>
                <div class="col-sm-10">
                    <span class="fw-bolder">Ngày sinh: </span>
                    <span>{{ ngaySinh}}</span>
                </div>
                <div class="col-sm-10">
                    <span class="fw-bolder">Giới tính: </span>
                    <span>{{ gioiTinh === "true" ? "Nam" : "Nữ" }}</span>
                </div>
                <div class="col-sm-10">
                    <span class="fw-bolder">Ngôn ngữ: </span>
                    <span>{{ ngonNgu.join(', ') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
