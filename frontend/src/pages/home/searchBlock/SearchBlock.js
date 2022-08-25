import React from "react";
import {
  ContainerSearchBlock,
  SearchBlockTitle,
  SearchBar,
  ButtonStyle
} from "./SearchBlockStyled";


import DropdownList from "./dropdownList/DropdownList";
import Schedule  from "../searchBlock/schedule/Schedule";
import { FaMapMarkerAlt, FaRegCalendarAlt} from "react-icons/fa";
import Button from "../../../components/button/Button";
import SearchInput from "../searchBlock/SearchInput"

function SearchBlock(picDate, city, ) {
  return (
    <ContainerSearchBlock>
      <SearchBlockTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBlockTitle>

      <SearchBar>
        <SearchInput
          input={<DropdownList  city={city} icon={ <FaMapMarkerAlt />} />}
          icon={<FaMapMarkerAlt />}
        />
        <SearchInput
          input={<Schedule icon={ <FaRegCalendarAlt />} picDate={picDate} />}
          icon={<FaRegCalendarAlt />}
        />

        <ButtonStyle>
          <Button width="100%" theme="secondary">Buscar</Button>
        </ButtonStyle>

      </SearchBar>
    </ContainerSearchBlock>
  );
}

export default SearchBlock;
