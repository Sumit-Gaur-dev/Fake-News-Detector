import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk
export const fetchData = createAsyncThunk(
  "aiData/fetchData",
  async (requestBody, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: requestBody }), // wrap as { query: "..." } if backend expects that
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const data = await response.json();
      return data; // This is already shaped like initialState
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  summary: "",
  score: 0,
  graphScore: [],
  sources: [],
  status: "idle",
  error: null,
};

// Slice
export const homeDataSlice = createSlice({
  name: "aiData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Replace state with server response
        state.summary = action.payload.summary;
        state.score = action.payload.score;
        state.graphScore = action.payload.graphScore;
        state.sources = action.payload.sources;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default homeDataSlice.reducer;
