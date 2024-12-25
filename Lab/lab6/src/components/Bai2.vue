<template>
    <div class="d-flex flex-column gap-2">
        <h3>Nhập tháng của bạn</h3>
        <input type="number" min="1" max="12" v-model="month">
        <span>{{ message }}</span>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const month = ref(1);
const message = ref('');
watch(month, (newMonth) => {
    if (newMonth < 1 || newMonth > 12) {
        message.value = "Tháng không hợp lệ!";
        return;
    }
    
    switch (true) {
        case newMonth >= 1 && newMonth <= 3:
            message.value = "Mùa xuân";
            break;
        case newMonth >= 4 && newMonth <= 6:
            message.value = "Mùa hạ";
            break;
        case newMonth >= 7 && newMonth <= 9:
            message.value = "Mùa thu";
            break;
        case newMonth >= 10 && newMonth <= 12:
            message.value = "Mùa đông";
            break;
        default:
            message.value = "";
    }
});
</script>
