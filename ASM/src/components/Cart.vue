<script setup>
import { ref, computed, watch } from 'vue';
import Breadcrumb from './Breadcrumb.vue';

const listCarts = ref([
    {
        'name': 'Product1',
        'image': 'linkimage1',
        'quantity': 1,
        'price': 7.99,
        'selected': false
    },
    {
        'name': 'Product1',
        'image': 'linkimage1',
        'quantity': 1,
        'price': 8.99,
        'selected': false
    },
    {
        'name': 'Product1',
        'image': 'linkimage1',
        'quantity': 1,
        'price': 1.99,
        'selected': false
    }
]);

const bill = ref({
    subtotal: 0,
    shipping: 0,
    discount: 0,
    total: 0
});

const updateBill = () => {
    bill.value.subtotal = listCarts.value.filter(prod => prod.selected).reduce((total, prod) => total + prod.price * prod.quantity, 0);
    bill.value.total = bill.value.subtotal + bill.value.shipping - bill.value.discount;
};

watch(listCarts, updateBill, { deep: true });

const selectedIndex = ref(null);

const removeProduct = (index) => {
    selectedIndex.value = index;
    const modal = new bootstrap.Modal(document.getElementById("confirmDeleteModal"));
    modal.show();
};

const confirmRemove = () => {
    if (selectedIndex.value !== null) {
        listCarts.value.splice(selectedIndex.value, 1);
        selectedIndex.value = null;
    }
    const modal = bootstrap.Modal.getInstance(document.getElementById("confirmDeleteModal"));
    modal.hide();
};
</script>
<template>
    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Xác nhận xóa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa sản phẩm này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" @click="confirmRemove()">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <Breadcrumb />
            </div>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-12">
                    <h2>Shopping Cart</h2>
                    <table class="table table-striped table-hover align-middle mt-">
                        <thead class="table-light">
                            <tr>
                                <th class="col-1"><input type="checkbox" class="form-check-input" /> </th>
                                <th class="col-4">Product</th>
                                <th class="col-2">Image</th>
                                <th class="col-3">Quantity</th>
                                <th class="col-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(prod, index) in listCarts">
                                <td class="col-1">
                                    <input v-model="prod.selected" type="checkbox" class="form-check-input" />
                                </td>
                                <td class="col-4">
                                    <div>Sunglasses for Cats</div>
                                    <small class="text-muted">Type: Type 1</small>
                                </td>
                                <td class="col-2">
                                    <img src="https://placehold.co/80" alt="Sunglasses for Cats"
                                        class="img-fluid rounded" style="width: 80px; height: 80px;">
                                </td>
                                <td class="col-3">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <button @click="prod.quantity > 1 ? prod.quantity-- : removeProduct(index)"
                                            class="btn btn-light btn-sm d-flex justify-content-center align-items-centere">
                                            <ion-icon name="remove"></ion-icon>
                                        </button>
                                        <input type="number" v-model.number="prod.quantity" min="1"
                                            class="form-control form-control-sm mx-2" style="width: 60px;">
                                        <button @click="prod.quantity++"
                                            class="btn btn-light btn-sm d-flex justify-content-center align-items-center">
                                            <ion-icon name="add"></ion-icon>
                                        </button>
                                    </div>
                                </td>
                                <td class="col-2">
                                    <div>${{ prod.price }}</div>
                                    <small class="text-muted">${{ prod.price * prod.quantity }}</small>
                                </td>
                                <!-- <td>
                                    <button
                                        class="btn btn-danger btn-sm d-flex justify-content-center align-items-center">
                                        <ion-icon name="trash" class="fs-5 py-1"></ion-icon>
                                    </button>
                                </td> -->
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="col-12">
                    <div class="cart-summary">
                        <div>
                            <div class="d-flex justify-content-between">
                                <div>Subtotal</div>
                                <div>${{ bill.subtotal }}</div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>Shipping</div>
                                <div>{{ bill.shipping === 0 ? 'Free' : '$' + bill.shipping }}</div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>Discount</div>
                                <div>{{ bill.discount === 0 ? '$' + bill.discount : '- $' + bill.discount }}</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <div>Total</div>
                            <div>{{ '$' + bill.total }}</div>
                        </div>
                        <button class="btn-checkout mt-3">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>
<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.cart-header,
.cart-item,
.cart-summary {
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.cart-item {
    display: flex;
    align-items: center;
}

.cart-item img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
}

.cart-item .item-details {
    flex-grow: 1;
    margin-left: 15px;
}

.cart-item .item-quantity {
    display: flex;
    align-items: center;
}

.cart-item .item-quantity button {
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-item .item-quantity input {
    width: 50px;
    text-align: center;
    border: none;
    margin: 0 5px;
}

.cart-summary .btn-checkout {
    background-color: #004d40;
    color: #fff;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

.cart-summary .btn-checkout:hover {
    background-color: #00332e;
}

.cart-summary .text-muted {
    text-decoration: line-through;
}
</style>