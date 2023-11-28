<script setup lang="ts">
import { ref } from 'vue';
import { type Todo } from '../models/todo';
import TodoListItem from './TodoListItem.vue';

const { todos, onRemove, onUpdate } = defineProps<{
    todos: Todo[];
    onRemove: (todo: Todo) => void;
    onUpdate: (updatedTodo: Todo) => void;
}>();

const isLoading = ref(false);

const handleRemove = async (todo: Todo) => {
    isLoading.value = true;

    onRemove(todo);

    isLoading.value = false;
};

const handleUpdate = (updatedTodo: Todo) => {
    onUpdate(updatedTodo);
};
</script>

<template>
    <ul>
        <TodoListItem
            v-for="(todo, index) in todos"
            :key="todo.id"
            class="todo"
            :index="index"
            :todo="todo"
            :on-remove="handleRemove"
            :on-update="handleUpdate"
        />
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

.todo:not(:first-child) {
    margin-top: 8px;
}
</style>
