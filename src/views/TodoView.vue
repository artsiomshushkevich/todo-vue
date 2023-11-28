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

const handleSuccess = (todo: Todo) => {
    todos.value.push(todo);
};

const handleRemove = (todo: Todo) => {
    const index = todos.value.findIndex((item) => item.id === todo.id);
    todos.value.splice(index, 1);
};

const handleUpdate = (todo: Todo) => {
    const index = todos.value.findIndex((item) => item.id === todo.id);
    todos.value[index] = {
        ...todo
    };
};

onMounted(async () => {
    getAllTodos();
});
</script>

<template>
    <section>
        <h2>My Todos</h2>
        <TodoForm class="todo-form" :on-success="handleSuccess" />

        <p class="loader" v-if="isLoading">Loading...</p>
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
.loader,
.todo-form,
.todo-list {
    margin-top: 16px;
}
</style>
