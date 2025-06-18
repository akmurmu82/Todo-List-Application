// Component: redux/todosSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  addNote,
} from "../services/api";

export const getTodos = createAsyncThunk("todos/getTodos", async (user) => {
  const res = await fetchTodos(user);
  return res.data;
});

export const createTodo = createAsyncThunk("todos/createTodo", async ({ user, todo }) => {
  const res = await addTodo(user, todo);
  return res.data;
});

export const editTodo = createAsyncThunk("todos/editTodo", async ({ id, todo }) => {
  const res = await updateTodo(id, todo);
  return res.data;
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  await deleteTodo(id);
  return id;
});

export const createNote = createAsyncThunk("todos/createNote", async ({ id, note }) => {
  const res = await addNote(id, note);
  return res.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.list.findIndex((todo) => todo._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo._id !== action.payload);
      })
      .addCase(createNote.fulfilled, (state, action) => {
        const index = state.list.findIndex((todo) => todo._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default todosSlice.reducer;