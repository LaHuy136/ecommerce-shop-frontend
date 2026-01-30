import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishListCount, setWishListCount] = useState(0);
  const [loading, setLoading] = useState(true);

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

  //   Load all products
  const fetchAllProducts = async () => {
    const wishListLocal = getLocalWishList();

    if (wishListLocal.length === 0) {
      setProducts([]);
      setWishListCount(0);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/cart/products",
        {
          items: wishListLocal,
        },
      );

      const fetchedProducts = response.data.products;

      setProducts(fetchedProducts);
      setWishListCount(getWishListCount(fetchedProducts));
    } catch (error) {
      console.log("Fetch wishlist error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const getWishListCount = (products) => {
    return products.reduce((sum, p) => sum + p.quantity, 0);
  };

  const addToWishList = (product) => {
    const exist = products.find((p) => p.id === product.id);

    let newProducts;

    if (exist) {
      toast.info("Product have already in your wishlist");
      return;
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
    saveLocalWishList(newProducts);
    setWishListCount(getWishListCount(newProducts));

    toast.success("Added to your wishlist");
  };

  const remove = (id) => {
    const newProducts = products.filter((p) => p.id !== id);

    setProducts(newProducts);
    saveLocalWishList(newProducts);
    setWishListCount(getWishListCount(newProducts));

    toast.success("Removed product from your wishlist");
  };

  const clearWishList = () => {
    localStorage.removeItem("wishlist");
    setProducts([]);
    setWishListCount(0);
  };

  return (
    <WishListContext.Provider
      value={{
        products,
        wishListCount,
        loading,
        addToWishList,
        remove,
        clearWishList,
        reloadWishList: fetchAllProducts,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
