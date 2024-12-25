<script setup>
defineProps({
    comment: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="card mb-4">
        <div class="card-body">
            <div class="d-flex align-items-center mb-3">
                <img :src="comment.user.avatar || 'https://via.placeholder.com/30'" alt="Avatar" class="rounded-circle me-3" width="30px" height="30px">
                <div>
                    <strong>{{ comment.user.displayName || "Anonymous" }}</strong>
                    <div class="text-muted" style="font-size: 0.9rem;">Ngày đăng: {{ comment.date }}</div>
                </div>
            </div>
            <p class="mb-3">
                {{ comment.text }}
            </p>
            <div class="d-flex justify-content-between">
                <span class="badge bg-light text-dark">{{ comment.likes }} lượt thích</span>
            </div>
        </div>
    </div>
</template>
