import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Location } from 'types/Location';

type LocationState = {
  filters: {
    search: string;
  };
  selectedLocation: Location | null;
};

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    filters: { search: '' },
    selectedLocation: null,
  } as LocationState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<Location | null>) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setSearch, setSelectedLocation } = locationSlice.actions;

export default locationSlice.reducer;

export const selectSelectedLocation = (state: RootState) =>
  state.location.selectedLocation;
