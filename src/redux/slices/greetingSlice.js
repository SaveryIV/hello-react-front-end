import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchRandomGreeting = createAsyncThunk(
  'greetings/fetchRandomGreeting',
  async () => {
    try {
      const response = await api.get();
      return response.data.message;
    } catch (error) {
      console.error('Error :', error);
      throw error;
    }
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: { message: '', isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
