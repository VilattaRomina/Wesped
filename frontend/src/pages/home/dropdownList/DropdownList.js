import React, { useState, useRef } from 'react';
import { SelectStyled, OptionStyled, ContainerStyled } from './DropdownListStyled';

function DropdownList({icon, picCity}){
    const [displayList, setDisplayList] = useState('none');
    const refCities = useRef();
    const [city, setCity] = useState("¿A dónde vamos?");

    const  dataCities = [
      {
         "city":"Buenos Aires",
         "country" :"Argentina"
      },
      {
          "city":"San Carlos de Bariloche",
          "country" :"Argentina"
      },
      {
          "city":"Mendoza",
          "country" :"Argentina"
      },
      {
          "city":"Córdoba",
          "country" :"Argentina"
      }
    ];


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

              <div className="cities-container" >
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