<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue';
</script>

<template>
    <section>
        <h2>Sign in or register</h2>
        <AuthForm class="auth-form" />
    </section>
</template>

<style scoped>
.auth-form {
    margin-top: 16px;
}
</style>
