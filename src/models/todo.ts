import { fetchWithAuth } from '../utils/fetchWithAuth';

const BASE_URL = 'https://shushman.tech/api/v1/todos';

export type Todo = {
    id: number;
    todo: string;
    isChecked: boolean;
};

export const getAll = () =>
    fetchWithAuth(`${BASE_URL}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json() as unknown as Todo[]);

export const create = (todo: string) =>
    fetchWithAuth(`${BASE_URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo })
    }).then((response) => response.json() as unknown as Todo);

export const deleteById = (id: number) =>
    fetchWithAuth(`${BASE_URL}/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json() as unknown as boolean);

export const update = (updatedTodo: Todo) =>
    fetchWithAuth(`${BASE_URL}/${encodeURIComponent(updatedTodo.id)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: updatedTodo.todo, isChecked: updatedTodo.isChecked })
    }).then((response) => response.json() as unknown as Todo);
