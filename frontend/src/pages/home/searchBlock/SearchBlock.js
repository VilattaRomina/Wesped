import React, { useState } from "react";
import {
  ContainerSearchBlock,
  BoxStyle,
  SearchBlockTitle,
  SearchBar,
  ButtonStyle
} from "./SearchBlockStyled";
import DropdownList from "./dropdownList/DropdownList";
import Schedule from "../../../components/schedule/Schedule";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import Button from "../../../components/button/Button";
import SearchInput from "../searchBlock/SearchInput"
import { AxiosInstance } from "../../../helpers/AxiosHelper";
import '../../home/searchBlock/dropdownList/SearchBlockStyle.css'

const SearchBlock = (props) => {
  const [selectedCityID, setSelectedCityId] = useState(0);
  const [selectedDates, setSelectedDates] = useState(null);

  const filterProducts = () => {
    props.setLoaded(false)
    let URL;
    let recommendationsTitle;

    const toJavaDateString = (date) => date.toISOString().slice(0, 10);
    const toUserReadableDateString = (dateString) => dateString.toLocaleDateString('es-US')

    if (!selectedCityID && !selectedDates) return;
    if (selectedCityID && !selectedDates) URL = `products/city/${selectedCityID}`
    if (!selectedCityID && selectedDates) URL = `products/booking/${toJavaDateString(selectedDates.checkin)}/${toJavaDateString(selectedDates.checkout)}`
    if (selectedCityID && selectedDates)  URL = `products/booking/${toJavaDateString(selectedDates.checkin)}/${toJavaDateString(selectedDates.checkout)}/${selectedCityID}`

    try {
      AxiosInstance.get(URL)
        .then(products => {
          props.setProductsToDisplayByCity(products.data)
          if (selectedCityID && !selectedDates) recommendationsTitle = products.data[0].city.name;
          if (!selectedCityID && selectedDates) recommendationsTitle = `fechas entre ${toUserReadableDateString(selectedDates.checkin)} - ${toUserReadableDateString(selectedDates.checkout)}`;
          if (selectedCityID && selectedDates) recommendationsTitle = `${products.data[0].city.name} y fechas entre ${toUserReadableDateString(selectedDates.checkin)} - ${toUserReadableDateString(selectedDates.checkout)}`;
          props.setRecommendationsTitle(recommendationsTitle)
        })
        .catch(err => console.warn(err))
        .then(() => props.setLoaded(true))
    } catch (error) {
      console.log(error);
    }
  }

  // Metodo para setear "selectedCityID" state capturado en el componente DropdownList
  const getAndSetSelectedCityID = (selectedCityID) => setSelectedCityId(selectedCityID)

  // Al realizar submit del form de buscador, se llama al endpoint de buscar productos por Id de Ciudad
  // y mediante props seteo la lista de productos a mostrar (productsToDisplay)
  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts();
  }

  return (
    <ContainerSearchBlock className="container-serch-block">
      <BoxStyle>
      <SearchBlockTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBlockTitle>
      <form onSubmit={handleSubmit}>
        <SearchBar>
          <SearchInput
            input={<DropdownList city={props.city} icon={<FaMapMarkerAlt />} getAndSetSelectedCityID={getAndSetSelectedCityID} />}
            icon={<FaMapMarkerAlt />}
          />
          <SearchInput
            input={<Schedule setSelectedDates={setSelectedDates} icon={<FaRegCalendarAlt />} picDate={props.picDate} monthsShown={props.isMobile ? 1 : 2} />}
            icon={<FaRegCalendarAlt />}
          />
          <ButtonStyle>
            <Button type="submit" width="100%" theme="secondary">Buscar</Button>
          </ButtonStyle>
        </SearchBar>
      </form>
      </BoxStyle>
     
    </ContainerSearchBlock>
  );
}

export default SearchBlock;
