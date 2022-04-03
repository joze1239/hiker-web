import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { MapPosition } from 'types/MapPosition';

type MapState = {
  position: MapPosition;
};

const mapSlice = createSlice({
  name: 'location',
  initialState: {
    position: {
      longitude: 14.11,
      latitude: 46.36,
      zoom: 9,
    },
  } as MapState,
  reducers: {
    setPosition: (state, action: PayloadAction<MapPosition>) => {
      state.position = action.payload;
    },
  },
});

export const { setPosition } = mapSlice.actions;

export default mapSlice.reducer;

export const selectMapPosition = (state: RootState) => state.map.position;
