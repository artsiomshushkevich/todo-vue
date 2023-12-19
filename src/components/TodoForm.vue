<script setup lang="ts">
import { ref, computed } from 'vue';
import { create, type Todo } from '../models/todo';

const props = defineProps<{ onSuccess: (newTodo: Todo) => void }>();

const todo = ref('');
const isLoading = ref(false);
const isSubmissionEanbled = computed(() => todo.value.length > 0 && !isLoading.value);

const handleSubmit = async () => {
    isLoading.value = true;

    const newTodo = await create(todo.value);

    props.onSuccess(newTodo);

    todo.value = '';
    isLoading.value = false;
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="input-wrapper">
            <label class="input-text-label" for="newTodo">New todo:</label>
            <input
                :disabled="isLoading"
                v-model="todo"
                type="text"
                name="newTodo"
                id="newTodo"
                placeholder="Enter todo"
            />
            &nbsp;
            <button :disabled="!isSubmissionEanbled">{{ isLoading ? 'Loading' : 'Add' }}</button>
        </div>
    </form>
</template>

<style scoped>
form {
    padding: 16px 16px;
    border: 1px solid black;
    border-radius: 3px;
}

.input-wrapper {
    margin-bottom: 16px;
}

.input-text-label {
    display: block;
    margin-bottom: 8px;
}
</style>
