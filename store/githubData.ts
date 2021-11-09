import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
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
    if (resp.length) {
      return resp as Repository[];
    }
  }
);

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://api.github.com/',
//   prepareHeaders: (headers) => {
//     const token = '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';

//     if (token) {
//       headers.set('Authorization', `token ${token}`);
//     }

//     return headers;
//   },
// });

// export const repositoryApi = createApi({
//   baseQuery,
//   endpoints: (builder) => ({
//     getUserRepos: builder.query({
//       query: (user: string) => ({
//         url: `users/${user}/repos`,
//         responseHandler: (response) => response.json(),
//       }),

//     }),
//   }),
// });

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
      state.repositories = action.payload!;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchGithubData.rejected, (state) => {
      state.repositories = [];
      state.loading = false;
      state.error = 'This User does not Exist.';
    });
  },
});

export default repositoriesSlice.reducer;
