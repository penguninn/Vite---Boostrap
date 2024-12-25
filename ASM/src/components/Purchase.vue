<script setup>
import { ref } from 'vue';

const purchases = ref([
    { product: 'Sản phẩm 1', quantity: 2, price: 50000 },
    { product: 'Sản phẩm 2', quantity: 1, price: 30000 },
    { product: 'Sản phẩm 3', quantity: 3, price: 70000 }
]);

</script>

<template>
    <div>
        <h3>Sản phẩm đã mua</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Tổng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p, index) in purchases" :key="index">
                    <td>{{ p.product }}</td>
                    <td>{{ p.quantity }}</td>
                    <td>{{ p.price | currency }}</td>
                    <td>{{ p.quantity * p.price | currency }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table {
    margin-top: 20px;
}
</style>
