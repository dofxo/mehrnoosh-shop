import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProductData {
  productData: IProduct | null;
}

const initialState: IProductData = {
  productData: null,
};

const productSingleSlice = createSlice({
  name: "productSingle",
  initialState,
  reducers: {
    initializeProductData: (state, action: PayloadAction<IProduct>) => {
      state.productData = action.payload;
    },
  },
});

export const { initializeProductData } = productSingleSlice.actions;

export default productSingleSlice.reducer;
