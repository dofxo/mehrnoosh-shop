import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  languageData: Record<string, any>;
  currentLanguage: string;
}

interface InitializeLanguagePayload {
  languageData: Record<string, any>;
  currentLanguage: string;
}

const initialState: LanguageState = {
  languageData: {},
  currentLanguage: "fa",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    initializeLanguage: (
      state,
      action: PayloadAction<InitializeLanguagePayload>,
    ) => {
      state.languageData = action.payload.languageData;
      state.currentLanguage = action.payload.currentLanguage;
    },
    changeCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
