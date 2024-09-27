import React from "react";
import "./Topping.css";

function Topping(props) {
  const checked = props.checked;
  const setChecked = props.setChecked;

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const toppings = [
    "Pearl",
    "Milk foam",
    "Aloe",
    "Red bean",
    "Whipped cream",
    "Chocolate syrup",
  ];

  return (
    <div className="container-topping">
      <div className="label-topping">Toppings : </div>
      <div className="container-item">
        {toppings.map((topping) => (
          <div className="item-checkbox" key={topping}>
            <input
              type="checkbox"
              id={topping}
              checked={checked[topping]}
              onChange={handleChange}
              name={topping}
            />
            <label htmlFor={topping}>{topping}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topping;
