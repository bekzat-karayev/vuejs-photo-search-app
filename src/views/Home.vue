<template>
    <div class="search-container">
        <input type="text" class="search-bar" placeholder="Search">
    </div>
    <div class="random-gallery">
        <img v-for="(url, index) in randomImageUrls" :src="url" :alt="'Random Image ' + (index + 1)">
    </div>
    <pre>{{ randomImageUrls }}</pre>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const randomImageUrls = ref([]);

onMounted(async () => {
    const response = await axiosClient.get('/photos/random', {
        params: {count: 8}
    })

    randomImageUrls.value = response.data.map(image => image.urls.raw);
})
</script>

<style scoped>
.search-container {
    background-image: url(..\assets\search-background.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    padding: 20px;
}

.search-bar {
    padding: 21px 0 21px 4%;
    border: none;
    max-width: 866px;
    width: 100%;
    height: 70px;
}

.random-gallery {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    max-width: 1579px;
    margin: 10% auto;
    padding: 0 20px;
}

.random-gallery img {
    width: 100%;
    max-width: 473px;
    height: 100%;
    max-height: 440px;
    object-fit: none;
    border-radius: 8px;
}

</style>