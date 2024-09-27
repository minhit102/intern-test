import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context";
import "./ProductList.css";
import ProductItem from "../Components/ProductItem";
import Toppings from "./Toppings";

function ProductList() {
  const { products, nowStore, storeProducts } = useContext(UserContext);
  const [sortProduct, setSortProduct] = useState("NameAsc");
  const [productsStoreNow, setProductStoreNow] = useState([]);
  const [productStore, setProductStore] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [checked, setChecked] = useState({
    Pearl: false,
    "Milk foam": false,
    Aloe: false,
    "Red bean": false,
    "Whipped cream": false,
    "Chocolate syrup": false,
  });

  const getProductsFromStore = (shopProducts, allProducts) => {
    return shopProducts.reduce((acc, shopProduct) => {
      const matchedProducts = allProducts.filter(
        (product) => shopProduct?.id === product?.id
      );
      return acc.concat(matchedProducts);
    }, []);
  };

  const sortProducts = (products, sortBy) => {
    const sorted = [...products];
    switch (sortBy) {
      case "PriceAsc":
        return sorted.sort((a, b) => a.price - b.price);
      case "PriceDsc":
        return sorted.sort((a, b) => b.price - a.price);
      case "NameAsc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "NameDsc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  };

  useEffect(() => {
    const shopProducts = storeProducts.filter(
      (shopProduct) => shopProduct?.shop === nowStore?.id
    );
    const productInStore = getProductsFromStore(shopProducts, products);
    setProductStore(productInStore);
  }, [nowStore, products, storeProducts]);

  useEffect(() => {
    let filteredProducts = productStore;

    if (showFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.toppings.some((topping) => checked[topping])
      );
    }

    const sortedProducts = sortProducts(filteredProducts, sortProduct);

    setProductStoreNow(sortedProducts);
  }, [sortProduct, productStore, checked, showFilter]);

  const handClickFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleSort = (e) => {
    setSortProduct(e.target.value);
  };

  const handleCheckboxChange = (topping) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [topping]: !prevChecked[topping],
    }));
  };

  return (
    <div className="container-list-product">
      <div className="container-store-product">{nowStore?.name} Menu </div>
      <div className="filter-sort">
        <button className="button-filter" onClick={handClickFilter}>
          Filter
        </button>
        <div className="container-sort">
          <label>Sort By </label>
          <select id="selectSort" className="selectSort" onChange={handleSort}>
            <option value="NameAsc">Sort A-Z</option>
            <option value="NameDsc">Sort Z-A</option>
            <option value="PriceAsc">Price: Low to High</option>
            <option value="PriceDsc">Price: High to Low</option>
          </select>
        </div>
      </div>
      {showFilter && (
        <Toppings
          checked={checked}
          setChecked={setChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
      <div className="list-product">
        <ul className="ul-list-product">
          {productsStoreNow.map((product, index) => (
            <li key={product.id} className="li-product">
              <ProductItem product={product} mt={index + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
