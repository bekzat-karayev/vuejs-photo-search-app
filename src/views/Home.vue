<template>
    <pre>{{ photos }}</pre>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';


const photos = computed(() => store.state.photos)

</script>
