import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductData {
  productData: IProduct | null;
  productsData: IProduct[] | null;
}

const initialState: IProductData = {
  productData: null,
  productsData: null,
};

const productSingleSlice = createSlice({
  name: "productSingle",
  initialState,
  reducers: {
    initializeProductData: (state, action: PayloadAction<IProduct>) => {
      state.productData = action.payload;
    },
    initializeProductsData: (state, action: PayloadAction<IProduct[]>) => {
      state.productsData = action.payload;
    },
  },
});

export const { initializeProductData, initializeProductsData } =
  productSingleSlice.actions;

export default productSingleSlice.reducer;
