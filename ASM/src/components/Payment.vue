<script setup>

</script>
<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li aria-current="page" class="breadcrumb-item active">Shopping Cart</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="cart-header d-flex align-items-center">
                    <div class="form-check">
                        <input checked="" class="form-check-input" type="checkbox" />
                    </div>
                    <div class="ms-3">Product</div>
                    <div class="ms-auto">Quantity</div>
                    <div class="ms-3">Total</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8">
                <!-- Cart Item 1 -->
                <div class="cart-item d-flex align-items-center">
                    <div class="form-check">
                        <input checked="" class="form-check-input" type="checkbox" />
                    </div>
                    <img alt="Sunglasses for Cats" height="100"
                        src="https://storage.googleapis.com/a1aa/image/nJNY8X9Du2ouCF7fSjiqt1D20sfFeiHenpAQqkQZLbYCGFVPB.jpg"
                        width="100" />
                    <div class="item-details ms-3">
                        <div>Sunglasses for Cats</div>
                        <div class="text-muted">Type: Type 1 <i class="fas fa-chevron-down"></i></div>
                    </div>
                    <div class="item-quantity ms-auto d-flex align-items-center">
                        <button class="btn">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <input type="number" value="1" min="1" />
                        <button class="btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="ms-3 text-end">
                        <div>$7.99</div>
                        <div class="text-muted">$16.00</div>
                        <div class="text-success">Sale ends in 12:00:00</div>
                    </div>
                </div>
                <!-- Cart Item 2 -->
                <div class="cart-item d-flex align-items-center">
                    <div class="form-check">
                        <input checked="" class="form-check-input" type="checkbox" />
                    </div>
                    <img alt="Multi-Angle Cat LED Laser Toy" height="100"
                        src="https://storage.googleapis.com/a1aa/image/wtYqRCD8xpJtBtYAF9MYdqHzdQb35O0XmfKtea9HIcsfiiqnA.jpg"
                        width="100" />
                    <div class="item-details ms-3">
                        <div>Multi-Angle Cat LED Laser Toy</div>
                    </div>
                    <div class="item-quantity ms-auto d-flex align-items-center">
                        <button class="btn">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <input type="number" value="1" min="1" />
                        <button class="btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="ms-3 text-end">
                        <div>$989.00</div>
                    </div>
                </div>
                <!-- Cart Item 3 -->
                <div class="cart-item d-flex align-items-center">
                    <div class="form-check">
                        <input checked="" class="form-check-input" type="checkbox" />
                    </div>
                    <img alt="Smart Cat Teaser Toy" height="100"
                        src="https://storage.googleapis.com/a1aa/image/3IS0M8cCx6IDBRxJlYQx9DG8d0PcalBeBvvQqIThBmVvoo6JA.jpg"
                        width="100" />
                    <div class="item-details ms-3">
                        <div>Smart Cat Teaser Toy</div>
                    </div>
                    <div class="item-quantity ms-auto d-flex align-items-center">
                        <button class="btn">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <input type="number" value="1" min="1" />
                        <button class="btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="ms-3 text-end">
                        <div>$29.99</div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="cart-summary">
                    <div>
                        <div class="d-flex justify-content-between">
                            <div>Subtotal</div>
                            <div>$1026.98</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>Shipping</div>
                            <div>Free</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>Discount</div>
                            <div>- $50.00</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div>Total</div>
                        <div>$976.98</div>
                    </div>
                    <button class="btn-checkout mt-3">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
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