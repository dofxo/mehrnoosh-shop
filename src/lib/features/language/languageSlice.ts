import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  languageData: Record<string, string>;
  currentLanguage: string;
}

// Helper to read a cookie by name
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

const initialState: LanguageState = {
  languageData: {},
  currentLanguage:
    typeof document !== "undefined" ? getCookie("language") || "fa" : "fa",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    initializeLanguage: (state, action: PayloadAction<LanguageState>) => {
      state.languageData = action.payload.languageData;
      state.currentLanguage = action.payload.currentLanguage;
    },
    changeCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { initializeLanguage, changeCurrentLanguage } =
  languageSlice.actions;

export default languageSlice.reducer;
