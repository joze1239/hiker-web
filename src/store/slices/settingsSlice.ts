import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  showVisited: boolean;
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    showVisited: false,
  } as SettingsState,
  reducers: {
    setShowVisited: (state, action: PayloadAction<boolean>) => {
      state.showVisited = action.payload;
    },
  },
});

export const { setShowVisited } = settingsSlice.actions;

export default settingsSlice.reducer;
