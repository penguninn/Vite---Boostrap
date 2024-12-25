<script setup>
import { ref, onMounted } from 'vue';
import CardPost from './CardPost.vue';

const posts = ref([]);
const top10Authors = ref([]);

const getAllPosts = () => {
    const allPosts = JSON.parse(localStorage.getItem('allPosts')) || [];
    return allPosts;
};

const getUser = (post) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === post.author);
    return users[userIndex];
}
onMounted(() => {
    posts.value = getAllPosts();
    console.log(posts.value);
    const authorCounts = posts.value.reduce((counts, post) => {
        counts[post.author] = (counts[post.author] || 0) + 1;
        return counts;
    }, {});

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const authorsWithDetails = Object.entries(authorCounts)
        .map(([author, count]) => {
            const user = users.find((u) => u.username === author);
            return {
                username: author,
                count,
                name: user ? `${user.firstName} ${user.lastName}` : 'Unknown',
                avatar: user ? user.avatar : 'https://via.placeholder.com/50',
            };
        })
        .sort((a, b) => b.count - a.count);
    top10Authors.value = authorsWithDetails.slice(0, 10);

    console.log(top10Authors.value);
});


</script>

<template>
    <div class="container-md my-4">
        <div class="row">
            <div class="col-8">
                <h4>Bài viết nổi bật</h4>
                <div class="container py-3">
                    <CardPost v-for="(post, index) in posts" :key="post.id" :post="post" :user="getUser(post)" :index="index"/>
                </div>
            </div>
            <div class="col-4">
                <h4 class="border-bottom pb-3">Đóng góp nhiều nhất</h4>
                <div class="top-authors">
                    <div v-for="(author, index) in top10Authors" :key="index"
                        class="author mb-4 d-flex gap-3 justify-content-start align-items-start">
                        <img :src="author.avatar" :alt="`Profle picture of ${author.name}`" width="40" height="40" />
                        <div class="author-info gap-4 d-flex justify-content-center align-items-start">
                            <div class="d-flex flex-column">
                                <span class="fw-bolder text-primary">{{ author.name }}</span>
                                <span>{{ `@${author.username}` }}</span>
                            </div>
                            <div class="stats d-flex justify-content-center align-items-center gap-3">
                                <span>
                                    <i class="fs-6 text-secondary fas fa-file"></i> {{ author.count }}
                                </span>
                                <span>
                                    <i class="fs-6 text-secondary fas fa-heart"></i> 100
                                </span>
                                <span>
                                    <i class="fs-6 text-secondary fas fa-user-friends"></i> 23
                                </span>
                                <span>
                                    <i class="fs-6 text-secondary fas fa-eye"></i> 230
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post {
    background-color: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
}

.post-header {
    display: flex;
    align-items: center;
}

.post-header img {
    border-radius: 50%;
    margin-right: 10px;
}

.post-header a {
    font-weight: bold;
    color: #0366d6;
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