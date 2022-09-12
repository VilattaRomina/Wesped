import React, { useState, useRef, useEffect } from "react";
import {
    ContainerMPStyled,
    TitleMPStyled,
    FormMPStyled,
    DivMPStyled,
    Div2MPStyled,
    LabelMPStyled,
    InputMPStyled,
    Input2MPStyled,
    RequiredMPStyled,
    Label2MPStyled,
    Label3MPStyled,
    SelectMPStyled,
    Select2MPStyled,
    OptionMPStyled,
    MoreMPStyled,
    ContainerPoliciesStyled,
    CardMPStyled,
    ButtonMPStyled 
  } from "./FormMakeProductStyled";
import Button from "../../../components/button/Button";
import { AxiosInstance } from "../../../helpers/AxiosHelper";
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
    let add = document.querySelectorAll("#atributes");
    let atributesArray = [];
    add.forEach((element) => {
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
    let images = document.querySelectorAll(".image-product");
    let imagesArray = [];
    images.forEach((element) => {
      imagesArray.push(element.value);
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
    imagesArray.forEach((e) => {
      arrayObject.push(objectf(e));
    });
    //alerts and formats
    swal({
      title: "¿Estás seguro de cargar este producto?",
      text: "Cargar un producto en Wesped",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let format = {
          name: name,
          policies: [
            { title: "Normas de la casa", description: description1 },
            { title: "Salud y Seguridad", description: description2 },
            { title: "Politica de cancelación", description: description3 },
          ],
          location: direction,
          isActive: true,
          features: [],
          rating: 9,
          latitude: latitude,
          longitude: longitude,
          description: description,
          images: arrayObject,
          cityId: city,
          categoryId: category,
          featuresIds: newAtributesArray,
        };

        AxiosInstance.post(url, {
          body: format,
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(format);
          console.log(res);
          if (!res.err) {
            swal("Se ha creado un producto correctamente", {
              icon: "success",
            });
          } else {
            swal(
              "Lamentablemente el producto no ha podido crearse. Por favor intente más tarde"
            );
          }
        });
      } else {
        swal(
          "Lamentablemente el producto no ha podido crearse. Por favor intente más tarde"
        );
      }
    });
  };

  const handleClickAtributes = () => {
    atributes.current.innerHTML += `<div class="divImage">
    <input id="div-input" value=${atributeSelect} class="selectTake" type="text"/><div class="clear">
    x
    </div></div>`;
    clearproduct();
  };
  const handleClickImages = () => {
    images.current.style.width = "100%";

    images.current.innerHTML += `<div class="divImage">
    <input id="div-input" class="input-div" value=${urlImage} class="input-url" type="text"/><div class="clear">
    x
    </div></div>`;
    setUrlImage("https://");
    clearproduct();
  };

  return (
    <>
      <ContainerMPStyled>
        <TitleMPStyled>Crear Propiedad</TitleMPStyled>

        <FormMPStyled ref={form} onSubmit={validator}>
          <DivMPStyled>
            <div>
              <LabelMPStyled htmlFor="name">Nombre del producto</LabelMPStyled>
              <InputMPStyled
                required
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <RequiredMPStyled ref={validateName} style={{ display: "none" }}>
                Campo obligatorio
              </RequiredMPStyled>
            </div>
            <div>
              <Label2MPStyled htmlFor="category">Categoria</Label2MPStyled>

              <Select2MPStyled
                onChange={(e) => {
                  setCategorySelect(e.target.value);
                }}
              >
                <OptionMPStyled>Hotel</OptionMPStyled>
                <OptionMPStyled>Hostels</OptionMPStyled>
                <OptionMPStyled>Break & Breakfast</OptionMPStyled>
                <OptionMPStyled>Departamentos</OptionMPStyled>
              </Select2MPStyled>
            </div>
          </DivMPStyled>

          <DivMPStyled>
            <div className="margin-right-form-sing-up">
              <LabelMPStyled htmlFor="direction">Dirección</LabelMPStyled>
              <InputMPStyled
                required
                type="text"
                id="direction"
                name="direction"
                value={direction}
                onChange={(e) => {
                  setDirection(e.target.value);
                }}
              />
              <RequiredMPStyled ref={validateEmail} style={{ display: "none" }}>
                Campo obligatorio
              </RequiredMPStyled>
            </div>
            <div>
              <Label2MPStyled htmlFor="city">Ciudad</Label2MPStyled>

              <Select2MPStyled
                value={citySelect}
                onChange={(e) => {
                  setCitySelect(e.target.value);
                }}
              >
                <OptionMPStyled>Buenos Aires</OptionMPStyled>
                <OptionMPStyled>San Carlos de Bariloche</OptionMPStyled>
                <OptionMPStyled>Mendoza</OptionMPStyled>
                <OptionMPStyled>Córdoba</OptionMPStyled>
              </Select2MPStyled>
            </div>
          </DivMPStyled>

          <DivMPStyled>
            <div>
              <LabelMPStyled htmlFor="latitude">
                Latitud (Coordenada)
              </LabelMPStyled>

              <InputMPStyled
                type="text"
                id="latitude"
                name="latitude"
                value={latitude}
                onChange={(e) => {
                  setLatitude(e.target.value);
                }}
              />
              <RequiredMPStyled
                ref={validateLatitude}
                style={{ display: "none" }}
              >
                Campo obligatorio
              </RequiredMPStyled>
            </div>

            <div>
              <LabelMPStyled htmlFor="longitude">
                Longitud (Coordenada)
              </LabelMPStyled>

              <InputMPStyled
                type="text"
                id="longitude"
                name="longitude"
                value={longitude}
                onChange={(e) => {
                  setLongitude(e.target.value);
                }}
              />
              <RequiredMPStyled
                ref={validateLongitude}
                style={{ display: "none" }}
              >
                Campo obligatorio
              </RequiredMPStyled>
            </div>
          </DivMPStyled>

          <LabelMPStyled htmlFor="description">Descripción</LabelMPStyled>
          <textarea
            id="description"
            name="description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <RequiredMPStyled
            ref={validateDescription}
            style={{ display: "none" }}
          >
            Campo obligatorio
          </RequiredMPStyled>

          <TitleMPStyled>Agregar atributos</TitleMPStyled>

          <div ref={atributes}></div>
          <Div2MPStyled>
            <SelectMPStyled
              value={atributeSelect}
              onChange={(e) => {
                setAtributeSelect(e.target.value);
              }}
            >
              <OptionMPStyled>Wifi</OptionMPStyled>
              <OptionMPStyled>Piscina</OptionMPStyled>
              <OptionMPStyled>Accesible</OptionMPStyled>
              <OptionMPStyled>Acepta Animales</OptionMPStyled>
              <OptionMPStyled>Restaurante</OptionMPStyled>
              <OptionMPStyled>Climatizado</OptionMPStyled>
              <OptionMPStyled>Estacionamiento</OptionMPStyled>
            </SelectMPStyled>

            <MoreMPStyled onClick={handleClickAtributes}>+</MoreMPStyled>
          </Div2MPStyled>

          <TitleMPStyled>Políticas del producto</TitleMPStyled>

          <ContainerPoliciesStyled>
            <CardMPStyled>
              <Label3MPStyled>Normas de la casa</Label3MPStyled>
              <LabelMPStyled htmlFor="policy">Descripción</LabelMPStyled>
              <textarea
                id="description-policies"
                name="description"
                value={description1}
                onChange={(e) => {
                  setDescription1(e.target.value);
                }}
              />
            </CardMPStyled>

            <CardMPStyled>
              <Label3MPStyled>Salud y Seguridad</Label3MPStyled>
              <LabelMPStyled htmlFor="security">Descripción</LabelMPStyled>
              <textarea
                id="description-security"
                name="description"
                value={description2}
                onChange={(e) => {
                  setDescription2(e.target.value);
                }}
              />
            </CardMPStyled>

            <CardMPStyled>
              <Label3MPStyled>Política de cancelación</Label3MPStyled>
              <LabelMPStyled htmlFor="cancelation">Descripción</LabelMPStyled>
              <textarea
                id="description-cancelation"
                name="description"
                value={description3}
                onChange={(e) => {
                  setDescription3(e.target.value);
                }}
              />
            </CardMPStyled>
          </ContainerPoliciesStyled>

          <TitleMPStyled>Cargar imágenes</TitleMPStyled>

          <div ref={images}></div>
          <Div2MPStyled>
            <Input2MPStyled
              id="img-product-by-admin"
              placeholder="insertar https://"
              type="text"
              name="urlImage"
              value={urlImage}
              onChange={(e) => {
                setUrlImage(e.target.value);
              }}
            />

            <MoreMPStyled onClick={handleClickImages}>+</MoreMPStyled>
          </Div2MPStyled>
          <ButtonMPStyled>
            <Button type="submit" width="12.5rem">
              Crear
            </Button>
          </ButtonMPStyled>
        </FormMPStyled>
      </ContainerMPStyled>
    </>
  );
}
