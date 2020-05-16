import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductCardList from "../organinsms/productCardList";
import SearchBar from "../molecules/searchbar";
import Header from "../organinsms/header";
import Cart from "../organinsms/cart";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;

function Home() {
  const reduxPokemonTheme = useSelector((state) => state);

  return (
    <div>
      <Header />
      <SearchBar />
      <Container>
        <ProductCardList />
        <Cart />
      </Container>
    </div>
  );
}

export default Home;
