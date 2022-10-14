import React, { useEffect, useState, useRef } from 'react';
import { SelectStyled, OptionStyled, ContainerStyled } from './DropdownListStyled'; 

  const data =[
    {
       "name":"Buenos Aires",
       "country" :"Argentina"
    },
    {
        "name":"San Carlos de Bariloche",
        "country" :"Argentina"
    },
    {
        "name":"Mendoza",
        "country" :"Argentina"
    },
    {
        "name":"Córdoba",
        "country" :"Argentina"
    }
  ];

export default function DropdownList({ picCity, icon}) {
  const [displayList, setDisplayList] = useState("none");
  const selectRef = useRef();
  const [city, setCity] = useState("¿A dónde vamos?");


  useEffect(() => {
    /* Hidde component*/
    const closeDropdown = (e) => {
      if (e.path[0] !== selectRef.current) {
        setDisplayList("none");
      }
    };
    /* listener  */
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);


  /* Show and hidde List */
  const toggleList = () => {
    displayList === "none" ? setDisplayList("initial") : setDisplayList("none");
  };
  const handleSelect = (e) => {
    setCity(e.target.textContent);
    picCity(e.target.textContent);
  };

  

      return (
        <>
        <SelectStyled onClick={() => toggleList()}>
            <p ref={selectRef}>{city}</p>
          </SelectStyled>

          <ContainerStyled displayList={displayList}> 
          
          {data.map((city, i) => (
           <div key={i} className="important" onClick={handleSelect}>
           <OptionStyled>
              <div className="icon">{icon}</div>
              <div className="city-container">
                <h4>{city.name + ", "}</h4>
                <p>{city.country} </p>
              </div>
            </OptionStyled>
            </div>
                    ))
                }

          </ContainerStyled>
        </>
      );
    }