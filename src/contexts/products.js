import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json';

// as the actual value you want to access
export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
