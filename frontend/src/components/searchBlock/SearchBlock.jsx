import React from "react";
import {
  ContainerSearchBlock,
  SearchBlockTitle,
  SearchBar,
} from "./SearchBlockStyled";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

function SearchBlock() {
  return (
    <ContainerSearchBlock>
      <SearchBlockTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBlockTitle>

      <SearchBar>
      
        <SearchInput
          input={<p>Ciudades</p>}
          icon={<FaMapMarkerAlt />}
        />

        <SearchInput
          input={
             <p>"Chech in - Check out"</p>
          }
          icon={<FaRegCalendarAlt />}
        />

        <SearchButton />
      </SearchBar>
    </ContainerSearchBlock>
  );
}

export default SearchBlock;
