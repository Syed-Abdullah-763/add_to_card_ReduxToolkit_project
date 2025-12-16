import { createSlice } from "@reduxjs/toolkit";
import { fetchProductThunk } from "../thunks/product";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    addToCard: [],
    loading: false,
    error: null,
  },
  reducers: {
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
    deleteAddToCard: (state, { payload }) => {
      state.addToCard.find((prod) => {
        if (prod.id == payload.id) {
          const index = state.addToCard.indexOf(prod);
          state.addToCard.splice(index, 1);

          return true;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductThunk.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProductThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = productSlice;

export const productReducer = reducer;
export const { setProduct, setAddToCard, deleteAddToCard } = actions;
