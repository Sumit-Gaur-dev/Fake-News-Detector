import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "aiData/fetchData",
  async (requestBody, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: requestBody }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  summary: "",
  score: 0,
  graphScore: [],
  sources: [],
  status: "idle",
  error: null,
};

export const homeDataSlice = createSlice({
  name: "aiData",
  initialState,

  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "received";
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

export const { resetState } = homeDataSlice.actions;

export default homeDataSlice.reducer;
