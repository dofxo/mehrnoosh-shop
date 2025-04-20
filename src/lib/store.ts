import languageReducer from "./features/language/languageSlice";
import productSingleReducer from "./features/productSingle/productSingleSlice";
import productsSlice from "./features/productsData/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      language: languageReducer,
      productSingle: productSingleReducer,
      productsData: productsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
