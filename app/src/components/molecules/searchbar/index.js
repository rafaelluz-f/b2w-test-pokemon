import React from "react";
import styled from "styled-components";
import imageSample from "../../../assets/images/productImageSample.png";

const SearchBar = styled.div`
  text-align: center;
  padding: 15px;

  input {
    border: 2px solid #bebebe;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
  }
`;

export default (props) => {
  return (
    <SearchBar className="searchBar">
      <input type="text" placeholder="Search" />
    </SearchBar>
  );
};
