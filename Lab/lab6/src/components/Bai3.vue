<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">

            <div v-for="(post, index) in items" class="col-sm-4" :key="index">
                <div class="card">
                    <img :src="post.image" alt="Hình ảnh" height="200px"/>
                    <div class="card-body">
                        <h3 class="card-title">{{ post.title }}</h3>
                        <p class="card-text">{{ post.content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
</template>
<script setup>
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
const items = ([
    {
        title: '8 loại rau củ quả giàu canxi', content: 'Canxi là...', image: img1
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại...',
        image: img2
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng...', image:
            img3
    },
]);
</script>