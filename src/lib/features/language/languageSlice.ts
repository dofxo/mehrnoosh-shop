import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  languageData: Record<string, any>;
}

const initialState: LanguageState = {
  languageData: {},
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    initializeLanguage: (state, action: PayloadAction<Record<string, any>>) => {
      state.languageData = action.payload;
    },
  },
});

export const { initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
