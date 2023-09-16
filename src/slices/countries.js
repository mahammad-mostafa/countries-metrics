import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const states = {
  list: [], regions: [], selection: 'All', loading: true, error: null,
};

export const fetcher = createAsyncThunk('countries/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,timezones,region');
    if (response.ok) {
      const result = await response.json();
      return result.map((item) => {
        const {
          name, flags, capital, region, population, timezones,
        } = item;
        return {
          region,
          timezones,
          population,
          flag: flags.png,
          name: name.common,
          id: name.common.replace(/ /g, '-').toLowerCase(),
          capital: capital[0] === undefined ? 'N/A' : capital[0],
        };
      });
    }
    return rejectWithValue('not found');
  } catch (error) {
    return rejectWithValue(error);
  }
});

const slice = createSlice({
  name: 'countries',
  initialState: states,
  reducers: {
    select: (state, { payload }) => ({ ...state, selection: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetcher.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetcher.fulfilled, (state, { payload }) => (
      {
        ...state,
        list: payload,
        regions: [...new Set(payload.map((item) => item.region))],
        loading: false,
        error: null,
      }));
    builder.addCase(fetcher.rejected, (state, { error }) => (
      { ...state, loading: false, error: error.name }));
  },
});

export const { select } = slice.actions;

export default slice.reducer;
