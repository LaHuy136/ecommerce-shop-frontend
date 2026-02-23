import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

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

  // Load cart from API
  const fetchCartProducts = async () => {
    const localCart = getLocalCart();

    if (localCart.length === 0) {
      setProducts([]);
      setCartCount(0);
      setTotal(0);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/products", {
        items: localCart,
      });

      const data = response.data;

      setProducts(data.products);
      setTotal(data.total);
      setCartCount(getCartCount(data.products));
    } catch (error) {
      console.log("Fetch cart error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, [fetchCartProducts]);

  const getCartCount = (products) => {
    return products.reduce((sum, p) => sum + p.quantity, 0);
  };

  const addToCart = (product) => {
    const exist = products.find((p) => p.id === product.id);

    let newProducts;

    if (exist) {
      newProducts = products.map((p) =>
        p.id === product.id
          ? {
              ...p,
              quantity: p.quantity + 1,
            }
          : p,
      );
    } else {
      newProducts = [
        ...products,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    setProducts(newProducts);
    saveLocalCart(newProducts);
    setTotal(calcTotal(newProducts));
    setCartCount(getCartCount(newProducts));

    toast.success("Added product to your cart");
  };

  //   Actions
  const increase = (id) => {
    const newProducts = products.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
    );

    setProducts(newProducts);
    saveLocalCart(newProducts);
    setTotal(calcTotal(newProducts));
    setCartCount(getCartCount(newProducts));
  };

  const decrease = (id) => {
    const newProducts = products.map((p) => {
      if (p.id === id && p.quantity > 1) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setProducts(newProducts);
    saveLocalCart(newProducts);
    setTotal(calcTotal(newProducts));
    setCartCount(getCartCount(newProducts));
  };

  const remove = (id) => {
    const newProducts = products.filter((p) => p.id !== id);

    setProducts(newProducts);
    saveLocalCart(newProducts);
    setTotal(calcTotal(newProducts));
    setCartCount(getCartCount(newProducts));

    toast.success("Removed product from your cart");
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setProducts([]);
    setTotal(0);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        cartCount,
        loading,
        addToCart,
        increase,
        decrease,
        remove,
        clearCart,
        reloadCart: fetchCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
