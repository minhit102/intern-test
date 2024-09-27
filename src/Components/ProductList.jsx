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

  // lấy sản phẩm từ cửa hàng
  const getProductsFromStore = (shopProducts, allProducts) => {
    return shopProducts.reduce((acc, shopProduct) => {
      const matchedProducts = allProducts.filter(
        (product) => shopProduct?.id === product?.id
      );
      return acc.concat(matchedProducts);
    }, []);
  };

  //sắp xếp sản phẩm
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

  // Cập nhật danh sách sản phẩm trong cửa hàng tương ứng
  useEffect(() => {
    const shopProducts = storeProducts.filter(
      (shopProduct) => shopProduct?.shop === nowStore?.id
    );
    const productInStore = getProductsFromStore(shopProducts, products);
    setProductStore(productInStore);
  }, [nowStore, products, storeProducts, showFilter, checked]);

  // Sắp xếp  sản phẩm hiện tại
  useEffect(() => {
    const sortedProducts = sortProducts(productStore, sortProduct);
    setProductStoreNow(sortedProducts);
  }, [sortProduct, productStore]);

  // Hàm xử lý sự kiện lọc sản phẩm
  const handClickFilter = () => {
    setShowFilter(!showFilter);
  };

  // Hàm xử lý sự kiện sắp xếp
  const handleSort = (e) => {
    setSortProduct(e.target.value);
  };

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
