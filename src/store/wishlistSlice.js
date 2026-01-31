import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const getLocalWishList = () => {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
};

const saveLocalWishList = (products) => {
  const wishListLocal = products.map((p) => ({
    product_id: p.id,
    quantity: p.quantity,
  }));

  localStorage.setItem("wishlist", JSON.stringify(wishListLocal));
};

const getWishListCount = (products) => {
  return products.reduce((sum, p) => sum + p.quantity, 0);
};

export const fetchWishListProducts = createAsyncThunk(
  "wishlist/fetchProducts",
  async () => {
    const localWishList = getLocalWishList();

    if (localWishList.length === 0) {
      return {
        products: [],
        wishListCount: 0,
      };
    }

    const response = await axios.post("http://127.0.0.1:8000/api/products", {
      items: localWishList,
    });

    return {
      products: response.data.products,
      wishListCount: getWishListCount(response.data.products),
    };
  },
);

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    wishListCount: 0,
    loading: false,
  },
  reducers: {
    addToWishList: (state, action) => {
      const product = action.payload;
      const exist = state.products.find((p) => p.id === product.id);

      if (exist) {
        toast.info("Product have already in your wishlist");
        return;
      } else {
        state.products.push({
          ...product,
          quantity: 1,
        });
      }

      saveLocalWishList(state.products);
      state.wishListCount = getWishListCount(state.products);

      toast.success("Added product to your wishlist");
    },

    remove: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);

      saveLocalWishList(state.products);
      state.wishListCount = getWishListCount(state.products);

      toast.success("Removed product from your wishlist");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWishListProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishListProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.wishListCount = action.payload.wishListCount;
        state.loading = false;
      })
      .addCase(fetchWishListProducts.rejected, (state) => {
        state.loading = false;
        toast.error("Failed to load wishlist");
      });
  },
});

export const { addToWishList, remove } = wishListSlice.actions;

export default wishListSlice.reducer;
