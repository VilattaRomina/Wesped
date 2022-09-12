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



};