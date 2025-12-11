import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    addToCard: [],
  },
  reducers: {
    setProduct: (state, { payload }) => {
      state.products = payload;
    },
    setAddToCard: (state, { payload }) => {
      const findProduct = state.addToCard.find((prod) => {
        if (prod.id == payload.id) {
          return true;
        }
      });

      if (!findProduct) {
        state.addToCard.push(payload);
      }
    },
  },
});

const { reducer, actions } = productSlice;

export const productReducer = reducer;
export const { setProduct, setAddToCard } = actions;
