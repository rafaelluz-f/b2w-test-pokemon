import React from "react";
import styled from "styled-components";

const SearchBarInput = styled.input`
  dborder: 2px solid #bebebe;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;
export default (props) => {
  return (
    <SearchBarInput
      className="searchBarInput"
      onChange={props.function}
      type="text"
      placeholder="Procurar Pokemon..."
    />
  );
};
