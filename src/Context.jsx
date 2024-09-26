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
      setStores([
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
      setStoreProducts([
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
        {
          id: 11,
          shop: 2,
          product: 6,
        },
        {
          id: 12,
          shop: 4,
          product: 7,
        },
        {
          id: 13,
          shop: 4,
          product: 8,
        },
        {
          id: 14,
          shop: 3,
          product: 9,
        },
        {
          id: 15,
          shop: 3,
          product: 10,
        },
        {
          id: 16,
          shop: 1,
          product: 11,
        },
        {
          id: 17,
          shop: 2,
          product: 12,
        },
        {
          id: 18,
          shop: 3,
          product: 13,
        },
        {
          id: 19,
          shop: 4,
          product: 14,
        },
        {
          id: 20,
          shop: 1,
          product: 15,
        },
      ]);
      setProducts([
        {
          id: 1,
          name: "Royal Milk Tea",
          price: 4.8,
          toppings: "Milk foam, white pearl",
        },
        {
          id: 2,
          name: "Green Milk Tea",
          price: 4.6,
          toppings: "Pearl",
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
          toppings: "Aloe, pearl",
        },
        {
          id: 6,
          name: "Matcha Milk Tea",
          price: 5.3,
          toppings: "Red bean, milk foam",
        },
        {
          id: 7,
          name: "Strawberry Milk Tea",
          price: 5.0,
          toppings: "Fruit bits, pearl",
        },
        {
          id: 8,
          name: "Chocolate Milk Tea",
          price: 5.5,
          toppings: "Chocolate syrup, whipped cream",
        },
        {
          id: 9,
          name: "Taro Milk Tea",
          price: 4.9,
          toppings: "Taro bits, pearl",
        },
        {
          id: 10,
          name: "Lychee Milk Tea",
          price: 5.2,
          toppings: "Lychee jelly, pearl",
        },
        {
          id: 11,
          name: "Peach Milk Tea",
          price: 5.4,
          toppings: "Peach slices, pearl",
        },
        {
          id: 12,
          name: "Caramel Milk Tea",
          price: 5.6,
          toppings: "Caramel drizzle, whipped cream",
        },
        {
          id: 13,
          name: "Honeydew Milk Tea",
          price: 4.7,
          toppings: "Honeydew bits, pearl",
        },
        {
          id: 14,
          name: "Coconut Milk Tea",
          price: 5.0,
          toppings: "Coconut shavings, pearl",
        },
        {
          id: 15,
          name: "Passion Fruit Milk Tea",
          price: 5.3,
          toppings: "Passion fruit pulp, pearl",
        },
        {
          id: 16,
          name: "Coffee Milk Tea",
          price: 5.4,
          toppings: "Coffee jelly, milk foam",
        },
        {
          id: 17,
          name: "Almond Milk Tea",
          price: 5.1,
          toppings: "Almond bits, pearl",
        },
        {
          id: 18,
          name: "Lychee Rose Milk Tea",
          price: 5.5,
          toppings: "Lychee, rose petals",
        },
        {
          id: 19,
          name: "Lavender Milk Tea",
          price: 5.0,
          toppings: "Lavender syrup, whipped cream",
        },
        {
          id: 20,
          name: "Nutella Milk Tea",
          price: 5.8,
          toppings: "Nutella drizzle, whipped cream",
        },
      ]);
      setNowStore({
        id: 1,
        name: "Ding Tea",
      });
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
