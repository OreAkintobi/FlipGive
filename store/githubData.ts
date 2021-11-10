import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Repository } from '../types';

export const fetchGithubData = createAsyncThunk(
  'data/fetchData',
  async (user: string) => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`, {
      method: 'GET',
      headers: {
        Authorization: 'token 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',
      },
    });
    const resp = await response.json();
    return resp;
  }
);

const repositoriesSlice = createSlice({
  name: 'data',
  initialState: {
    repositories: [] as Repository[],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGithubData.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchGithubData.fulfilled, (state, action) => {
      if (action.payload?.length) {
        state.repositories = action.payload;
        state.loading = false;
        state.error = '';
      } else {
        state.repositories = [];
        state.loading = false;
        state.error = 'User Not Found';
      }
    });
    builder.addCase(fetchGithubData.rejected, (state) => {
      state.repositories = [];
      state.loading = false;
      state.error = 'User Not Found';
    });
  },
});

export default repositoriesSlice.reducer;
