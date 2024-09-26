import "./StoreItem.css";
import React from "react";
import { UserContext } from "../Context";
import { useContext } from "react";

function StoreItem(props) {
  const { setNowStore, nowStore } = useContext(UserContext);
  return (
    <div
      className={
        props.store === nowStore ? "store-item-selected" : "store-item"
      }
      onClick={() => {
        setNowStore(props.store);
      }}
    >
      {props.store.name}
    </div>
  );
}

export default StoreItem;
