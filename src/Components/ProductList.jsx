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

  const handClickFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleSort = (e) => {
    setSortProduct(e.target.value);
  };
  const shopProduct = storeProducts.filter(
    (shopProduct) => shopProduct?.shop === nowStore?.id
  );
  // Cap nhat tat ca san pham trong Store tuong ung
  useEffect(() => {
    const getProduct = () => {
      const productInStore = [];
      shopProduct.map((shopProduct) => {
        products.map((product) => {
          if (shopProduct?.id === product?.id) {
            productInStore.push(product);
          }
        });
      });
      return productInStore;
    };
    setProductStore(getProduct());
  }, [nowStore, products, storeProducts, showFilter, checked]);

  useEffect(() => {
    const sortedProducts = [...productStore];
    if (sortProduct === "PriceAsc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortProduct === "PriceDsc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return sortProduct === "NameAsc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    }
    setProductStoreNow(sortedProducts);
  }, [sortProduct, productStore, checked, showFilter]);

  return (
    <div className="container-list-product">
      <div className="container-store-product">{nowStore?.name} Menu </div>
      <div className="filter-sort">
        <button
          className="button-filter"
          onClick={() => {
            handClickFilter();
          }}
        >
          Filter
        </button>
        <div className="container-sort">
          <label>Sort By </label>
          <select id="selectSort" className="selectSort" onChange={handleSort}>
            <option key="1" value="NameAsc">
              Sort A-Z
            </option>
            <option key="2" value="NameDsc">
              Sort Z-A
            </option>
            <option key="3" value="PriceAsc">
              Price: Low to High
            </option>
            <option key="4" value="PriceDsc">
              Price: High to Low
            </option>
          </select>
        </div>
      </div>
      {showFilter && <Toppings checked={checked} setChecked={setChecked} />}
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
