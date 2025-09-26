import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// You can place this helper in a shared file, e.g., 'utils/api.js'
const apiCall = async (url, body) => {
  const response = await fetch(`/api/auth${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  return response.json();
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await apiCall("/login", { email, password });
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  top3ChatIds: [],
  isAuthenticated: !!localStorage.getItem("token"),
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const loginSlice = createSlice({
  name: "auth", // This name defines the state key: state.auth
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.top3ChatIds = [];
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = {
          username: action.payload.username,
          email: action.payload.email,
        };
        state.top3ChatIds = action.payload.top3ChatIds;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
