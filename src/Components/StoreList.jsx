import { useContext } from "react";
import { UserContext } from "../Context";
import StoreItem from "./StoreItem";
import "./StoreList.css";

function StoreList() {
  const { stores } = useContext(UserContext);
  console.log(stores);

  return (
    <div className="container-list-store">
      <h1>Milk Tea Store</h1>
      <div className="container-list-item">
        {stores.map((store) => (
          <StoreItem key={store?.id} store={store} />
        ))}
      </div>
    </div>
  );
}

export default StoreList;
