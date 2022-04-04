import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Location } from 'types/Location';
import { LocationFilters } from 'types/LocationFilters';

type LocationState = {
  filters: LocationFilters;
  selectedLocation: Location | null;
};

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    filters: { search: '', locationTypes: [] },
    selectedLocation: null,
  } as LocationState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<Location | null>) => {
      state.selectedLocation = action.payload;
    },
    toggleLocationType: (state, action: PayloadAction<number>) => {
      const locationTypeIndex = state.filters.locationTypes.indexOf(
        action.payload
      );
      if (locationTypeIndex === -1) {
        state.filters.locationTypes.push(action.payload);
      } else {
        state.filters.locationTypes.splice(locationTypeIndex, 1);
      }
    },
    clearLocationTypes: (state) => {
      state.filters.locationTypes = [];
    },
  },
});

export const {
  setSearch,
  setSelectedLocation,
  toggleLocationType,
  clearLocationTypes,
} = locationSlice.actions;

export default locationSlice.reducer;

export const selectSelectedLocation = (state: RootState) =>
  state.location.selectedLocation;
