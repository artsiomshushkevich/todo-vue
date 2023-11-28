<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';
import { getAll, type Todo } from '../models/todo';

const todos = ref<Todo[]>([]);
const isLoading = ref(false);

const getAllTodos = async () => {
    isLoading.value = true;
    todos.value = await getAll();
    isLoading.value = false;
};

const handleSuccess = () => {
    getAllTodos();
};

const handleRemove = (todo: Todo) => {
    console.log(todo);
};

const handleUpdate = (updatedTodo: Todo) => {
    console.log(updatedTodo);
};

onMounted(async () => {
    getAllTodos();
});
</script>

<template>
    <section>
        <h2>My Todos</h2>
        <TodoForm class="todo-form" :on-success="handleSuccess" />

        <p v-if="isLoading">Loading...</p>
        <TodoList
            v-else
            class="todo-list"
            :todos="todos"
            :on-remove="handleRemove"
            :on-update="handleUpdate"
        />
    </section>
</template>

<style scoped>
section,
.todo-form,
.todo-list {
    margin-top: 16px;
}
</style>
