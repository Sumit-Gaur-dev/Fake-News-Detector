import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Assume apiCall is imported from a shared file
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

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const data = await apiCall("/signup", { email, username, password });
      // Note: This thunk does not log the user in automatically.
      // It just creates the user.
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const signupSlice = createSlice({
  name: "signup", // This name defines the state key: state.signup
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default signupSlice.reducer;
