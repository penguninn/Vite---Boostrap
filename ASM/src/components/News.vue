<script setup>
import { computed, ref } from 'vue';
import { news } from '../data';
import Breadcrumb from './Breadcrumb.vue';

const blogs = ref(news);

const groupedNews = computed(() => {
  const groupSize = 3;
  let groups = [];
  for (let i = 0; i < blogs.value.length; i += groupSize) {
    groups.push(blogs.value.slice(i, i + groupSize));
  }
  return groups;
});
</script>

<template>
  <div class="container-md bg-body-secondary px-5 pt-2 pb-5">
    <div class="w-100 d-flex flex-column gap-3 justify-content-center align-items-start">
      <breadcrumb />
      <div class="w-100 row">
        <div class="col-3 d-flex flex-column justify-content-start align-content-start">
          <div class="recent">
            <h6 class="mt-3">Recent Post</h6>
            <div v-for="(blog, index) in blogs.slice(0, 3)" :key="'recent-' + index" class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="blog.image" class="img-fluid rounded-start" alt="blog.title">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ blog.title }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="most-like-post mt-4">
            <h6 class="mt-3">Most Like Post</h6>
            <div v-for="(blog, index) in blogs.slice(3, 6)" :key="'like-' + index" class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="blog.image" class="img-fluid rounded-start" alt="blog.title">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ blog.title }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 news">
          <router-view />
        </div>
      </div>

      <div class="d-flex flex-column mt-5 pb-5" style="width: 100%;">
        <h6>Related</h6>
        <div id="carousel-blogs" class="carousel slide w-100">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel-blogs" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel-blogs" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-blogs" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div v-for="(group, index) in groupedNews" :key="index" class="carousel-item"
              :class="{ 'active': index === 0 }">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div class="col" v-for="(blog, idx) in group" :key="idx">
                  <div class="card h-100">
                    <img :src="blog.image" class="card-img-top" :alt="blog.title">
                    <div class="card-body">
                      <h5 class="card-title">{{ blog.title }}</h5>
                      <p class="card-text">{{ blog.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-indicators {
  bottom: -50px;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #8a8a8a;
  border: none;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.carousel-indicators button.active {
  background-color: #ff2b2b;
  opacity: 1;
}

.carousel-indicators button:hover {
  opacity: 0.8;
}

.carousel-inner {
  overflow: hidden;
}

.card-img-top {
  object-fit: cover;
  height: 100%;
}

.card-body {
  padding: 0.5rem;
}

.card-body .card-title {
  font-size: 1rem;
}
</style>
