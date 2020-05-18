import React from "react";
import styled from "styled-components";
import ProductName from "../../molecules/productName";
import ProductImage from "../../molecules/productImage";
import ProductPrice from "../../molecules/productPrice";
import ProductButton from "../../molecules/productButton";
import Divider from "../../atoms/divider";

const CardProduct = styled.div`
  width: 100%;
  flex-basis: 100%;
  margin: 30px 5px;
  border-radius: 10px;
  background: #ffffff;
  background: -moz-linear-gradient(top, #ffffff 1%, #999999 100%);
  background: -webkit-linear-gradient(top, #ffffff 1%, #999999 100%);
  background: linear-gradient(to bottom, #ffffff 1%, #999999 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#999999',GradientType=0 );

  @media (min-width: 768px) {
    flex: 1;
    width: 30%;
    flex-basis: 30%;
  }
`;

export default (props) => {
  const { name, imageID, price } = props;
  return (
    <CardProduct className="cardProduct">
      <ProductImage imageID={imageID} />
      <ProductName name={name} />
      <Divider />
      <ProductPrice price={price} />
      <ProductButton name={name} price={price} imageID={imageID} />
    </CardProduct>
  );
};
