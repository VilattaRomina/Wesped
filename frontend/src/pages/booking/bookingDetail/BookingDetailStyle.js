import styled from "styled-components";

export const ConfirmationBlock = styled.div`
border-radius:10px;
padding:16px;
margin:10px;
display: flex;
gap:10px;
flex-direction: column;
background-color: ${props => props.theme.background};
box-shadow: 0px 10px 6px 5px rgba(0,0,0,0.1);

`

export const Title = styled.h2`
    color: ${(props) => props.theme.text_primary};
    font-weight: 700;
`

export const InfoDetailProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ContainerDate = styled.div`
display:flex;
justify-content:space-between;

`

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
`



