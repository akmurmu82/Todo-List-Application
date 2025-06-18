// Component: redux/usersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../services/api";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetchUsers();
  return res.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;
