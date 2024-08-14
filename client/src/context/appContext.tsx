import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { product } from "../data";

type cartItem = {
  product: product;
  size?: string;
  quantity: number;
};

type AppContextType = {
  cart: cartItem[] | null;
  favorites: product[] | null;
  addToCart: (product: product, quantity: number, size?: string) => void;
  deleteFromCart: (product: cartItem) => void;
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
    const cart = localStorage.getItem("cart");
    const favorites = localStorage.getItem("favorites");
    if (cart) {
      setCart(JSON.parse(cart));
    }
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
    setIsReady(true);
  }, []);

  const addToCart = async (product: product, quantity: number, size?: string) => {
    const isInCart = cart.find((item) => item.product.id === product.id && item.size === size);

    const cartProduct: cartItem = {
      product,
      size,
      quantity,
    };

    if (!isInCart) {
      setCart((prev) => [...prev, cartProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, cartProduct]));
    }
  };

  const deleteFromCart = (product: cartItem) => {
    const cartFilter = cart.filter((item) => {
      return item.product.id !== product.product.id ? true : product.product.sizes ? item.size !== product.size : false;
    });
    setCart(cartFilter);

    localStorage.setItem("cart", JSON.stringify(cartFilter));
  };

  const addToFavorites = async (product: product) => {
    const isInFavorites = favorites.find((item) => item.id === product.id);

    if (!isInFavorites) {
      setFavorites((prev) => [...prev, product]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, product]));
    }
  };

  const deleteFromFavorites = (product: product) => {
    const favoritesFilter = favorites.filter((item) => {
      return item.id !== product.id;
    });
    setFavorites(favoritesFilter);

    localStorage.setItem("favorites", JSON.stringify(favoritesFilter));
  };

  return <AppContext.Provider value={{ cart, favorites, addToCart, deleteFromCart, addToFavorites, deleteFromFavorites }}>{isReady ? children : null}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
