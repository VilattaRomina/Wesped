import React from 'react'
import Section from '../../components/section/Section'
import Body from '../../components/body/Body'
import { BoxHeaderStyle,HeaderStyle, Title, Arrow, LinkStyle, FormBodyStyle, TitleContainer } from './MakeProductStyle'
import { FaChevronLeft } from "react-icons/fa";
import FormMakeProduct from './formMakeProduct/FormMakeProduct';


export default function MakeProduct() {
  return (
    <Section>
      <Body>
      <BoxHeaderStyle>
          <HeaderStyle>
            <Title>
              <h2>Administración de productos</h2>
            </Title>
            <Arrow>
              <LinkStyle to={""}>
                <FaChevronLeft />
              </LinkStyle>
            </Arrow>
          </HeaderStyle>
          </BoxHeaderStyle>
        <FormBodyStyle>
        <TitleContainer>Crear Propiedad</TitleContainer>
        <FormMakeProduct/>
        </FormBodyStyle>
      </Body>
    </Section>

  )
}
