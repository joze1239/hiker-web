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
      latitude: 46.1203,
      longitude: 14.8156,
      zoom: 6,
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
