/*
  на странице Goods (Товары) карточки с товарами,
  можно перейти на страницу каждого товара
*/

import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

const Goods = ({ goods }) => {
  return (
    <React.Fragment>
      <div className="cards">
        {/*тут сразу достали нужные св-ва */}
        {goods.map(({ id, name }) => (
          <Link to={`/goods/${id}`} key={id}>
            {/* тут карточка с товаром*/}
            <div className="card">{name}</div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Goods;
