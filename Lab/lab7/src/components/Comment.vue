<template>
    <div class="col-sm-4 m-5">
        <h2>Bình luận bài viết</h2>
        <div class="card">
            <img src="https://katatech.net/uploaded/tin-tuc/rau-cu-qua-nao-co-nhieu-chat-xo-1.webp" alt="Hình ảnh" />
            <div class="card-body">
                <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
                <p class="card-text">Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung
                    canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...</p>
            </div>
        </div>
        <form @submit.prevent="submitComment">
            <div class="mt-3">
                <textarea id="commentText" cols="60" v-model="commentText"
                    placeholder="Nhập bình luận của bạn"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Gửi bình luận</button>
        </form>
        <div v-if="comments.length" class="mt-3">
            <h5>Danh sách các bình luận:</h5>
            <ul style="list-style-type: circle;">
                <li v-for="(comment, index) in comments" :key="index">
                    <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps(['username']);
const commentText = ref('');
// Mảng chứa các bình luận đã gửi  
const comments = ref([]);
// xử lý gửi bình luận  
function submitComment() {
    if (commentText.value) {
        // Thêm bình luận mới vào mảng comments  
        comments.value.push({
            name: props.username, // sử dụng tên từ props  
            text: commentText.value
        });
        // xóa dữ liệu trong form sau khi gửi  
        commentText.value = '';
    }
}  
</script>