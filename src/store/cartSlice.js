import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const getLocalCart = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

const saveLocalCart = (products) => {
  const cartLocal = products.map((p) => ({
    product_id: p.id,
    quantity: p.quantity,
  }));

  localStorage.setItem("cart", JSON.stringify(cartLocal));
};

const calcTotal = (products) => {
  return products.reduce((sum, p) => sum + p.price * p.quantity, 0);
};

const getCartCount = (products) => {
  return products.reduce((sum, p) => sum + p.quantity, 0);
};

// Fetch cart from API
export const fetchCartProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const localCart = getLocalCart();

    if (localCart.length === 0) {
      return {
        products: [],
        total: 0,
        cartCount: 0,
      };
    }
    const response = await axios.post("http://127.0.0.1:8000/api/products", {
      items: localCart,
    });

    return {
      products: response.data.products,
      total: response.data.total,
      cartCount: getCartCount(response.data.products),
    };
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartCount: 0,
    total: 0,
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.products.find((p) => p.id === product.id);

      if (exist) {
        exist.quantiy += 1;
      } else {
        state.products.push({
          ...product,
          quantity: 1,
        });
      }

      saveLocalCart(state.products);
      state.total = calcTotal(state.products);
      state.cartCount = getCartCount(state.products);

      toast.success("Added product to your cart");
    },

    increase: (state, action) => {
      const product = action.payload;
      const item = state.products.find((p) => p.id === product);

      if (item) item.quantity += 1;

      saveLocalCart(state.products);
      state.total = calcTotal(state.products);
      state.cartCount = getCartCount(state.products);
    },

    decrease: (state, action) => {
      const product = action.payload;
      const item = state.products.find((p) => p.id === product);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        toast.error("Product quantity not less than 1");
      }

      saveLocalCart(state.products);
      state.total = calcTotal(state.products);
      state.cartCount = getCartCount(state.products);
    },

    remove: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);

      saveLocalCart(state.products);
      state.total = calcTotal(state.products);
      state.cartCount = getCartCount(state.products);

      toast.success("Removed product from your cart");
    },

    clearCart: (state) => {
      localStorage.removeItem("cart");
      state.products = [];
      state.total = 0;
      state.cartCount = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.cartCount = action.payload.cartCount;
        state.loading = false;
      })
      .addCase(fetchCartProducts.rejected, (state) => {
        state.loading = false;
        toast.error("Failed to load cart");
      });
  },
});

export const { addToCart, increase, decrease, remove, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
