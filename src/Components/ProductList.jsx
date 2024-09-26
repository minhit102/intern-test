import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context";
import "./ProductList.css";
import ProductItem from "../Components/ProductItem";

function ProductList() {
  const { products, nowStore } = useContext(UserContext);
  const [sortProduct, setSortProduct] = useState("NameAsc");

  const handleSort = (e) => {
    setSortProduct(e.target.value);
  };

  return (
    <div className="container-list-product">
      <div className="container-store-product">{nowStore?.name} Menu </div>
      <div className="filter-sort">
        <button className="button-filter">Filter</button>
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
      <div className="list-product">
        <ul className="ul-list-product">
          {products.map((product) => (
            <li key={product.id} className="li-product">
              {" "}
              {/* Thêm key để tối ưu hóa */}
              <ProductItem product={product} mt={product.id + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
