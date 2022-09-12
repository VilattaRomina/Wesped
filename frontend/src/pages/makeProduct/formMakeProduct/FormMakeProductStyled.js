import styled from "styled-components";

//Containers and forms
export const TitleMPStyled = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color:  ${props => props.theme.secondary};
  padding-top: 40px;
  height: auto;
  margin-bottom: 30px;
`;
export const ContainerMPStyled = styled.div`
  padding-left: 3.4vw;
  background-color: rgba(0, 0, 0, 0.07);
  @media all and (max-width: 900px) {
    padding-left: 4.5vw;
  }
  @media all and (max-width: 600px) {
    padding-left: 3.4vw;
  }
  overflow-y: auto !important;
  height: 100%;
  height: calc(100vh - 228px);
  padding-bottom: 100px;
`; 

export const FormMPStyled = styled.form`
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: white;
  width: 90%;
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media all and (max-width: 800px) {
    width: 85%;
  }
  @media all and (max-width: 600px) {
    width: 80%;
  }
  textarea {
    width: 90%;
    min-width: 90%;
    max-width: 90%;
    min-height: 70px;
    margin-bottom: 10px;
    padding: 20px;
    outline-color: ${props => props.theme.primary};
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
//divs
export const DivMPStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media all and (max-width: 900px) {
    flex-direction: column;
  }
  .margin-right-form-sing-up {
    margin-right: 18px;
  }
  div {
    width: 100%;
  }
`;
export const Div2MPStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  div {
    margin-left: 58px;
  }
`;

