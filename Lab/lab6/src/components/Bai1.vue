<template>
    <div class="d-flex flex-column gap-2">
        <h3>Nhập điểm của bạn</h3>
        <input type="number" min="0" max="10" v-model="grade">
        <span>{{ message }}</span>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const grade = ref(0);
const message = ref('');
watch(grade, (newGrade) => {
    if(newGrade >= 9.0) {
        message.value = "Xuất sắc";
    } else if(newGrade >= 8.0) {
        message.value = "Giỏi";
    } else if(newGrade >= 6.5) {
        message.value = "Khá";
    } else if(newGrade >= 5.0) {
        message.value = "Trung bình";
    } else {
        message.value = "Yếu";
    }
});
</script>