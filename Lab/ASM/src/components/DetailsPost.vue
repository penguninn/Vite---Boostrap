<script setup>

import { ref } from 'vue';
import Comment from './Comment.vue';
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});
const postData = JSON.parse(props.post);

const comments = ref(
    JSON.parse(localStorage.getItem(`comments_${postData.id}`)) || []
);

const users = JSON.parse(localStorage.getItem('users')) || [];
const username = localStorage.getItem('username');
const getUser = () => {
    const users =  JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === username);
    return users[userIndex];
}


const saveComment = (commentText) => {
    if (!commentText.trim()) return;
    const user = getUser();
    const newComment = {
        user: user,
        date: new Date().toLocaleDateString(),
        text: commentText,
        likes: 0
    };
    comments.value.push(newComment);
    localStorage.setItem(`comments_${postData.id}`, JSON.stringify(comments.value));
};

const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentText = e.target.commentText.value;
    saveComment(commentText);
    e.target.reset();
};


</script>

<template>
    <div class="container-md my-5 d-flex flex-column">
        <div class="post-detail">
            <h1>{{ postData.title }}</h1>
            <p><strong>Author:</strong> {{ postData.author }}</p>
            <p><strong>Date:</strong> {{ postData.date }}</p>
            <div class="content">
                <img :src="postData.image" alt="" width="100%" height="600px" class="rounded rounded-1 my-3">
                <h2>Nội dung bài viết</h2>
                <p>{{ postData.content }}</p>
            </div>
        </div>
        <div class="container my-5">
            <h2 class="mb-4">Bình luận</h2>
            <div class="comments-list">
                <div v-for="(comment, index) in comments" :key="index">
                    <Comment :comment="comment" />
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5>Thêm bình luận mới</h5>
                    <form @submit="handleCommentSubmit">
                        <div class="mb-3">
                            <textarea name="commentText" class="form-control" rows="4"
                                placeholder="Nhập bình luận của bạn..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>