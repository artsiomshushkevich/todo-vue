<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeading from './components/AppHeading.vue';
</script>

<template>
    <AppHeading />

    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
