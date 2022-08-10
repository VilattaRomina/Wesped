import React from "react";
import {
  ContainerSearchBlock,
  SearchBlockTitle,
  SearchBar,
} from "./SearchBlockStyled";
import SearchInput from "./SearchInput";
import Button from "../button/Button";
import DropdownList from "../dropdownList/DropdownList";
import Schedule  from "../schedule/Schedule";
import { FaMapMarkerAlt, FaRegCalendarAlt} from "react-icons/fa";


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
          input={<Schedule icon={ <FaRegCalendarAlt />} picDate={picDate} placeHolderText="Chech in - Check out"/>}
          icon={<FaRegCalendarAlt />}
        />
        <div>
          <Button text="Buscar" color="#FFFFFF" backgroundColor="#1DBEB4" />
        </div>

      </SearchBar>
    </ContainerSearchBlock>
  );
}

export default SearchBlock;
