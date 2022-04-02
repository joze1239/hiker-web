import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LocationState = {
  filters: {
    search: string;
  };
};

const locationSlice = createSlice({
  name: 'location',
  initialState: { filters: { search: '' } } as LocationState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
  },
});

export const { setSearch } = locationSlice.actions;

export default locationSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user
