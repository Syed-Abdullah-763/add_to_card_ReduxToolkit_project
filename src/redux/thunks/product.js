import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductThunk = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  }
);
