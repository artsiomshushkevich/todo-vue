<script setup lang="ts">
import { ref } from 'vue';
import { type Todo, deleteById, update } from '../models/todo';

const { todo, onRemove, onUpdate } = defineProps<{
    index: number;
    todo: Todo;
    onRemove: (todo: Todo) => void;
    onUpdate: (updatedTodo: Todo) => void;
}>();

const isLoading = ref(false);
const isChecked = ref(todo.isChecked);

const handleRemove = async (todo: Todo) => {
    isLoading.value = true;

    await deleteById(todo.id);
    onRemove(todo);

    isLoading.value = false;
};

const handleUpdate = async (checked: boolean) => {
    isLoading.value = true;
    isChecked.value = checked;

    const updatedTodo: Todo = {
        ...todo,
        isChecked: checked
    };

    await update(updatedTodo);
    onUpdate(updatedTodo);

    isLoading.value = false;
};
</script>

<template>
    <li :class="{ 'li-is-loading': isLoading }">
        <input
            type="checkbox"
            :id="`todo-${todo.id}`"
            :disabled="isLoading"
            v-model="isChecked"
            @change="(e) => handleUpdate((e.target as HTMLInputElement).checked)"
        />&nbsp; <label :for="`todo-${todo.id}`">{{ `${index + 1}.` }}&nbsp; {{ todo.todo }}</label
        >&nbsp;
        <button @click="handleRemove(todo)" :disabled="isLoading">Remove</button>
    </li>
</template>

<style scoped>
li {
    border: 1px solid black;
    border-radius: 3px;
    padding: 16px;
}

.li-is-loading {
    background-color: darkgrey;
}
</style>
