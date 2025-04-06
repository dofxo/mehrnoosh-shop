import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProductData {
  productsData: IProduct[] | null;
}

const initialState: IProductData = {
  productsData: null,
};

const productsDataSlice = createSlice({
  name: "productSingle",
  initialState,
  reducers: {
    initializeProductsData: (state, action: PayloadAction<IProduct[]>) => {
      state.productsData = action.payload;
    },
  },
});

export const { initializeProductsData } = productsDataSlice.actions;

export default productsDataSlice.reducer;
