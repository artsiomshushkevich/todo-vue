<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { clearToken } from '../utils/token';

const router = useRouter();
const route = useRoute();

const handleSignOut = () => {
    clearToken();
    router.replace({ name: 'auth' });
};
</script>

<template>
    <header>
        <h1 class="heading">Awesome Todos</h1>

        <button v-if="route.name === 'todos'" @click="handleSignOut">Sign out</button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.heading {
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 1;
}
</style>
