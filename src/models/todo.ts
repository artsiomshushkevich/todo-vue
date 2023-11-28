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
