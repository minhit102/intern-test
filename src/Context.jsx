import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [storeProducts, setStoreProducts] = useState([]);
  const [nowStore, setNowStore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsRes = await fetch("/data/products.json");
        if (!productsRes.ok)
          throw new Error(`Error! status: ${productsRes.status}`);
        const productsData = await productsRes.json();
        setProducts(productsData.products);

        // Fetch stores
        const storesRes = await fetch("/data/stores.json");
        if (!storesRes.ok)
          throw new Error(`Error! status: ${storesRes.status}`);
        const storesData = await storesRes.json();
        setStores(storesData.stores);

        // Fetch storeProducts
        const storeProductsRes = await fetch("/data/storeProducts.json");
        if (!storeProductsRes.ok)
          throw new Error(`Error! status: ${storeProductsRes.status}`);
        const storeProductsData = await storeProductsRes.json();
        setStoreProducts(storeProductsData.shopProducts);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setNowStore(stores[0]);
  }, [stores]);

  return (
    <UserContext.Provider
      value={{ products, stores, storeProducts, nowStore, setNowStore }}
    >
      {children}
    </UserContext.Provider>
  );
}
