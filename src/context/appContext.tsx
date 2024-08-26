import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { product } from "../data";

type cartItem = {
  product: product;
  size?: string;
  quantity: number;
};

type AppContextType = {
  cart: cartItem[];
  favorites: product[];
  addToCart: (cartItem: cartItem) => void;
  deleteFromCart: (cartItem: cartItem) => void;
  updateItemInCart: (cartItem: cartItem) => void;
  addToFavorites: (product: product) => void;
  deleteFromFavorites: (product: product) => void;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

type Props = { children: ReactNode };

export const AppProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<cartItem[]>([]);
  const [favorites, setFavorites] = useState<product[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem("cartECommerceApp");
    const favorites = localStorage.getItem("favoritesECommerceApp");
    if (cart) {
      setCart(JSON.parse(cart));
    }
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
    setIsReady(true);
  }, []);

  const addToCart = async (cartItem: cartItem) => {
    const isInCart = cart.find((item) => item.product.id === cartItem.product.id && item.size === cartItem.size);

    if (!isInCart) {
      setCart((prev) => [...prev, cartItem]);
      localStorage.setItem("cartECommerceApp", JSON.stringify([...cart, cartItem]));
    }
  };

  const updateItemInCart = async (cartItem: cartItem) => {
    const index = cart.findIndex((item) => item.product.id === cartItem.product.id);
    let updateCart = [...cart];
    updateCart[index] = cartItem;
    setCart(updateCart);
    localStorage.setItem("cartECommerceApp", JSON.stringify(updateCart));
  };

  const deleteFromCart = (cartItem: cartItem) => {
    const cartFilter = cart.filter((item) => {
      return item.product.id !== cartItem.product.id ? true : cartItem.product.sizes ? item.size !== cartItem.size : false;
    });
    setCart(cartFilter);

    localStorage.setItem("cartECommerceApp", JSON.stringify(cartFilter));
  };

  const addToFavorites = async (product: product) => {
    const isInFavorites = favorites.find((item) => item.id === product.id);

    if (!isInFavorites) {
      setFavorites((prev) => [...prev, product]);
      localStorage.setItem("favoritesECommerceApp", JSON.stringify([...favorites, product]));
    }
  };

  const deleteFromFavorites = (product: product) => {
    const favoritesFilter = favorites.filter((item) => {
      return item.id !== product.id;
    });
    setFavorites(favoritesFilter);

    localStorage.setItem("favoritesECommerceApp", JSON.stringify(favoritesFilter));
  };

  return <AppContext.Provider value={{ cart, favorites, addToCart, deleteFromCart, addToFavorites, deleteFromFavorites, updateItemInCart }}>{isReady ? children : null}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
