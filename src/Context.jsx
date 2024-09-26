import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [storeProducts, setStoreProducts] = useState([]);
  const [error, setError] = useState(null); // Error state
  const [nowStore, setNowStore] = useState(null);

  /*const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json(); // Await JSON response
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      setError(error.message); // Set error message
    }
  };*/

  useEffect(() => {
    /*const fetchAllData = async () => {
      try {
        const productsData = await fetchData("/data/products.json");
        const storeProductsData = await fetchData("/data/storeProducts.json");
        const storesData = await fetchData("/data/stores.json");

        if (productsData) setProducts(productsData.products);
        if (storeProductsData) setStoreProducts(storeProductsData.shopProducts);
        if (storesData) setStores(storesData.stores);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchAllData();*/

    const fetData = async () => {
      await setStores([
        {
          id: 1,
          name: "Ding Tea",
        },
        {
          id: 2,
          name: "Tocotoco",
        },
        {
          id: 3,
          name: "Gongcha",
        },
        {
          id: 4,
          name: "LeeTee",
        },
      ]);
      await setStoreProducts([
        {
          id: 1,
          shop: 1,
          product: 1,
        },
        {
          id: 2,
          shop: 1,
          product: 2,
        },
        {
          id: 3,
          shop: 2,
          product: 2,
        },
        {
          id: 4,
          shop: 1,
          product: 3,
        },
        {
          id: 5,
          shop: 3,
          product: 3,
        },
        {
          id: 6,
          shop: 1,
          product: 1,
        },
        {
          id: 7,
          shop: 3,
          product: 1,
        },
        {
          id: 8,
          shop: 3,
          product: 5,
        },
        {
          id: 9,
          shop: 1,
          product: 4,
        },
        {
          id: 10,
          shop: 2,
          product: 5,
        },
      ]);
      await setProducts([
        {
          id: 1,
          name: "Royal Milk Tea",
          price: 4.8,
          toppings: "Milk foam,white pearl",
        },
        {
          id: 2,
          name: "Green Milk Tea",
          price: 4.6,
          toppings: "pearl",
        },
        {
          id: 3,
          name: "Oolong Milk Tea",
          price: 5.1,
          toppings: "Pearl, milk foam",
        },
        {
          id: 4,
          name: "Blueberry Milk Tea",
          price: 5.1,
          toppings: "Pearl, milk foam",
        },
        {
          id: 5,
          name: "Mango Milk Tea",
          price: 5.1,
          toppings: "Aloe, Pearl",
        },
      ]);
    };
    fetData();
  }, []);
  return (
    <UserContext.Provider
      value={{ products, stores, storeProducts, error, nowStore, setNowStore }}
    >
      {children}
    </UserContext.Provider>
  );
}
