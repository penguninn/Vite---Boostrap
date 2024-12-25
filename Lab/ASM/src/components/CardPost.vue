<script setup>
defineProps({
    post: {
        type: Object,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true
    }
});
</script>
<template>
    <router-link :to="{ name: 'DetailsPost', query: { post: JSON.stringify({ ...post, index }) } }"
        class="text-decoration-none text-reset">
        <div class="post">
            <div class="w-100">
                <img :src="post.image" alt="" class="object-fit-cover" width="100%" height="300px">
            </div>
            <div class="post-header d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2 justify-content-between align-items-center">
                    <img :src="user.avatar" alt="User avatar" height="20" width="20" />
                    <a href="#">{{ user.displayName || post.author }}</a>
                </div>
                <span>Ngày đăng : {{ post.date }}</span>
            </div>
            <div class="post-title">
                {{ post.title }}
                <i class="fas fa-rocket" v-if="post.icon"></i>
            </div>
            <div class="post-tags">
                <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="post-footer">
                <span>
                    <i class="fas fa-eye"></i> {{ post.views }}
                </span>
                <span>
                    <i class="fas fa-comment"></i> {{ post.comments }}
                </span>
                <span>
                    <i class="fas fa-heart"></i> {{ post.likes }}
                </span>
            </div>
        </div>
    </router-link>

</template>



<style scoped>
.post {
    background-color: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
}

.post-header {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.post-header img {
    border-radius: 50%;
    margin-right: 10px;
}

.post-header a {
    font-weight: bold;
    color: #1b85ff;
    text-decoration: none;
}

.post-header span {
    color: #586069;
    font-size: 12px;
}

.post-title {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
}

.post-tags span {
    background-color: #e1e4e8;
    border-radius: 3px;
    padding: 2px 5px;
    font-size: 12px;
    margin-right: 5px;
}

.post-footer {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #586069;
}

.post-footer i {
    margin-right: 5px;
}

.post-footer span {
    margin-right: 15px;
}
</style>