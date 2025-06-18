// Component: redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import todosReducer from "./todosSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});

export default store;
