import React from "react";

const Details = ({ match, goods, onAddToCart }) => {
  const good = goods.find(good => good.id === match.params.id);
  return (
    <div>
      <div>{good.price}</div>
      <button className="add" onClick={() => onAddToCart(good)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Details;
