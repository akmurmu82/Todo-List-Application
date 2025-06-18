// Component: services/api.js
import axios from "axios";

const VITE_BACKEND_BASE_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}/api`;

export const fetchUsers = () => axios.get(`${VITE_BACKEND_BASE_URL}/users`);

export const fetchTodos = (user) =>
  axios.get(`${VITE_BACKEND_BASE_URL}/todos?user=${user}`);

export const addTodo = (user, todo) =>
  axios.post(`${VITE_BACKEND_BASE_URL}/todos?user=${user}`, todo);

export const updateTodo = (id, todo) =>
  axios.put(`${VITE_BACKEND_BASE_URL}/todos/${id}`, todo);

export const deleteTodo = (id) =>
  axios.delete(`${VITE_BACKEND_BASE_URL}/todos/${id}`);

export const addNote = (id, note) =>
  axios.post(`${VITE_BACKEND_BASE_URL}/todos/${id}/notes`, note);
