import React from "react";

const Cart = ({ items }) => {
  return (
    <div className="cart">
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Cart;
