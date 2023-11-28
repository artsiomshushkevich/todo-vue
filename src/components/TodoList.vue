<script setup lang="ts">
import { type Todo } from '../models/todo';

const { todos, onRemove, onUpdate } = defineProps<{
    todos: Todo[];
    onRemove: (todo: Todo) => void;
    onUpdate: (updatedTodo: Todo) => void;
}>();

const handleRemove = (todo: Todo) => {
    console.log('todo');

    onRemove(todo);
};

const handleUpdate = (updatedTodo: Todo) => {
    onUpdate(updatedTodo);
};
</script>

<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
            {{ `${index + 1}.` }}&nbsp; {{ todo.todo }}&nbsp;
            <button @click="onRemove(todo)">Remove</button>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    border: 1px solid black;
    border-radius: 3px;
    padding: 16px;
}

li:not(:first-child) {
    margin-top: 8px;
}
</style>
