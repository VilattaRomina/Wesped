import React, { useEffect, useState, useRef } from 'react';
import { SelectStyled, OptionStyled, ContainerStyled } from './DropdownListStyled';
import url from "../../data/cities.json"

function DropdownList({icon, picCity}){
    const [dataCities, setDataCities] = useState([]);
    const [displayList, setDisplayList] = useState('none');
    const refCities = useRef();
    const [city, setCity] = useState("¿A dónde vamos?");

/*get cities from (json?)*/
    useEffect(() => {
    const getCities = async () => {
      let response = await fetch(url);
      response = await response.json();
      setDataCities(response);
    };
    getCities();

/*Collapse list*/
    const collapseDropdown = (e) => {
        if (e.path[0] !== refCities.current) {
          setDisplayList('none');
        }
      };
      document.body.addEventListener("click", collapseDropdown);
      return () => document.body.removeEventListener("click", collapseDropdown);
  }, []);

    const toggleList = () => {
        displayList === 'none' ? setDisplayList([]) : setDisplayList('none');
    };

    const handleSelect = (i) => {
        setCity(i.target.textContent);
        picCity(i.target.textContent);
      };


  return (
    <div>
    <SelectStyled onClick={() => toggleList()}>
        <p ref={refCities}>{city}</p>
    </SelectStyled>

    <ContainerStyled displayList={displayList}>

        {dataCities.map((city, i) => (

          <div key={i} onClick={handleSelect}>
            <OptionStyled className='option' key={i}>
              <div className="icon">{icon}</div>

              <div className="cities-container">
              <h4>{city.name + " " }</h4>
                <p>{ + city.country}</p>
              </div>

            </OptionStyled>
          </div>
        ))}
      </ContainerStyled>
    
</div>
);
};
export default DropdownList;