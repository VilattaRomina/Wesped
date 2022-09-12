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
    ContainerPoliciesStyled,
    CardMPStyled,
    ButtonMPStyled 
  } from "./FormMakeProductStyled";
import Button from "../../../components/button/Button";

export default function FormMakeProduct({ product }) {


  return (
    <>
      <div>
        <h3>Crear Propiedad</h3>
        <form>
          <div>
            <div>
              <label htmlFor="name">Nombre del producto</label>
              <input
                required
                type="text"
                id="name"
                name="name"
              />
              <p >
                Campo obligatorio
              </p>
            </div>
            <div>
              <label htmlFor="category">Categoria</label>

              <select  
              >
                <option>Hotel</option>
              </select>
            </div>
          </div>

          <div>
            <div className="margin-right-form-sing-up">
              <label htmlFor="direction">Dirección</label>
              <input
                required
                type="text"
                id="direction"
                name="direction"
                
              />
              <p>
                Campo obligatorio
              </p>
            </div>
            <div>
              <label htmlFor="city">Ciudad</label>

              <select
              >
                <option>Buenos Aires</option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="latitude">
                Latitud (Coordenada)
              </label>

              <input
                type="text"
                id="latitude"
                name="latitude"
               
              />
              <p
              >
                Campo obligatorio
              </p>
            </div>

            <div>
              <label htmlFor="longitude">
                Longitud (Coordenada)
              </label>

              <input
                type="text"
                id="longitude"
                name="longitude"
                
              />
              <p
               
              >
                Campo obligatorio
              </p>
            </div>
          </div>

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            required
            
            
          />

          <p
            
          >
            Campo obligatorio
          </p>

          <h3>Agregar atributos</h3>

          <div ></div>
          <div>
            <select
              
            >
              <option>Wifi</option>
              
            </select>

            <button >+</button>
          </div>

          <h3>Políticas del producto</h3>

          <div>
            <div>
              <label>Normas de la casa</label>
              <label htmlFor="policy">Descripción</label>
              <textarea
                id="description-policies"
                name="description"
                
              />
            </div>

            <div>
              <label>Salud y Seguridad</label>
              <label htmlFor="security">Descripción</label>
              <textarea
                id="description-security"
                name="description"
               
              />
            </div>

            <div>
              <label>Política de cancelación</label>
              <label htmlFor="cancelation">Descripción</label>
              <textarea
                id="description-cancelation"
                name="description"
               
              />
            </div>
          </div>

          <h3>Cargar imágenes</h3>

          <div></div>
          <div>
            <input
              id="img-product-by-admin"
              placeholder="insertar https://"
              type="text"
              name="urlImage"
            
              
            />

            <button >+</button>
          </div>
          <ButtonMPStyled>
            <Button type="submit" width="12.5rem">
              Crear
            </Button>
          </ButtonMPStyled>
        </form>
      </div>
    </>
  );
 }
