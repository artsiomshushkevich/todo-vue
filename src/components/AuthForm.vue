<script setup lang="ts">
import { ref, computed } from 'vue';

import { logIn, signUp } from '../models/auth';
import { setToken } from '../utils/token';

const username = ref('');
const password = ref('');
const isSignUpForm = ref(false);
const isLoading = ref(false);
const isSubmissionEanbled = computed(
    () => !!(username.value.length > 0 && password.value.length >= 8) || isLoading.value
);

const handleSubmit = async () => {
    let token = '';

    if (isSignUpForm.value) {
        const signUpResponse = await signUp(username.value, password.value);
        token = signUpResponse.token;
    } else {
        const logInResponse = await logIn(username.value, password.value);
        token = logInResponse.token;
    }

    setToken(token);
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="input-wrapper">
            <label class="input-text-label" for="usernname">Email:</label>
            <input
                v-model="username"
                type="email"
                name="username"
                id="username"
                placeholder="Enter email"
            />
        </div>

        <div class="input-wrapper">
            <label class="input-text-label" for="password">Password:</label>
            <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password (more than 8 characters length)"
            />
        </div>

        <div class="input-wrapper">
            <input type="checkbox" id="isSignUpForm" v-model="isSignUpForm" />&nbsp;
            <label for="isSignUpForm">Should create new account?</label>
        </div>

        <button :disabled="!isSubmissionEanbled">{{ isLoading ? 'Loading' : 'Submit' }}</button>
    </form>
</template>

<style scoped>
form {
    padding: 24px 0;
}

.input-wrapper {
    margin-bottom: 16px;
}

.input-text-label {
    display: block;
    margin-bottom: 8px;
}
</style>
