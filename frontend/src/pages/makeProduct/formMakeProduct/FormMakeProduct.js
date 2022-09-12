import React, { useState, useRef, useEffect } from "react";
import Button from "../button/Button";
import { AxiosInstance } from "../../helpers/AxiosHelper";
import swal from "sweetalert2";

export default function FormMakeProduct({ product }) {
    // inputs state
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [direction, setDirection] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [urlImage, setUrlImage] = useState("https://");
    const [atributeSelect, setAtributeSelect] = useState("Wifi");
    const [categorySelect, setCategorySelect] = useState("Hoteles");
    const [citySelect, setCitySelect] = useState("Buenos Aires");
    //description policies
    const [description1, setDescription1] = useState("");
    const [description2, setDescription2] = useState("");
    const [description3, setDescription3] = useState("");
    //validations
    let validateName = useRef();
    //let validateLastName = useRef();
    let validateEmail = useRef();
    //let validateCity = useRef();
    let validateDescription = useRef();
    let atributes = useRef();
    let images = useRef();
    let validateLatitude = useRef();
    let validateLongitude = useRef();
    let form = useRef();
  
    useEffect(() => {
      clearproduct();
    });
  
    const clearproduct = () => {
      let clear = document.querySelectorAll(".clear");
  
      clear.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.target.parentNode.style.marginBottom = "0px";
          e.target.parentNode.innerHTML = "";
        });
      });
    };

    let url = AxiosInstance.post(`/products/save`);

  //cities values
  useEffect(() => {
    if (citySelect.includes("Buenos Aires")) {
      setCity("1");
    } else if (citySelect.includes("San Carlos de Bariloche")) {
      setCity("2");
    } else if (citySelect.includes("Mendoza")) {
      setCity("3");
    } else if (citySelect.includes("Córdoba")) {
      setCity("4");
    }
  }, [citySelect]);

  //Categories values
  useEffect(() => {
    if (categorySelect.includes("Hoteles")) {
      setCategory("1");
    } else if (categorySelect.includes("Hostels")) {
      setCategory("2");
    } else if (categorySelect.includes("Departamentos")) {
      setCategory("3");
    } else if (categorySelect.includes("Bed&Breakfast")) {
      setCategory("4");
    }
  }, [categorySelect]);

  const validator = (e) => {
    e.preventDefault();
    let agregar = document.querySelectorAll("#atributes");
    let atributesArray = [];
    agregar.forEach((element) => {
      atributesArray.push(element.value);
    });

    // Attributes
    let newAtributesArray = [];
    atributesArray.forEach((element) => {
      console.log(element);
      if (element.includes("Wifi")) {
        newAtributesArray.push(1);
      } else if (element.includes("Piscina")) {
        newAtributesArray.push(2);
      } else if (element.includes("Accesible")) {
        newAtributesArray.push(3);
      } else if (element.includes("Acepta Animales")) {
        newAtributesArray.push(4);
      } else if (element.includes("Restaurante")) {
        newAtributesArray.push(5);
      } else if (element.includes("Climatizado")) {
        newAtributesArray.push(6);
      } else if (element.includes("Estacionamiento")) {
        newAtributesArray.push(7);
      }
    });

    //images
    let imagenes = document.querySelectorAll(".image-product");
    let imagenesArray = [];
    imagenes.forEach((element) => {
      imagenesArray.push(element.value);
    });

    let objectf = (urlImage) => {
      let object = {
        titleImage: "habitación1",
        descriptionImage:
          "Lorem ipsum dolor sit amet. Eum quibusdam galisum eum autem",
        urlImage: urlImage,
      };
      return object;
    };
    let arrayObject = [];
    imagenesArray.forEach((element) => {
      arrayObject.push(objectf(element));
    });




};