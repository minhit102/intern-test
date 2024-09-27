import "./ProductIem.css";
function ProductItem(props) {
  function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
  }
  const arrayToString = (arr) => {
    if (Array.isArray(arr)) {
      return arr.join(", "); // hoặc dấu phân cách khác nếu bạn muốn
    }
    console.error("Expected an array but got:", arr);
    return ""; // Hoặc giá trị mặc định khác
  };

  return (
    <div className="product-item">
      <div className="mt-product">MT-{formatNumber(props.mt)}</div>
      <div className="name-product">{props.product.name}</div>
      <hr className="hr-product" />
      <div className="title-topping">Topping :</div>
      <div className="container-toppings">
        {arrayToString(props.product.toppings)}
      </div>
      <div className="price-product">{"$" + props.product.price} </div>
    </div>
  );
}

export default ProductItem;
