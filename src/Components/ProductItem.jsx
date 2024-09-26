import "./ProductIem.css";
function ProductItem(props) {
  function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
  }
  return (
    <div className="product-item">
      <div className="mt-product">MT-{formatNumber(props.mt)}</div>
      <div className="name-product">{props.product.name}</div>
      <hr className="hr-product" />
      <div className="title-topping">Topping :</div>
      <div className="container-toppings">{props.product.toppings}</div>
      <div className="price-product">{"$" + props.product.price} </div>
    </div>
  );
}

export default ProductItem;
