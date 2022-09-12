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

//labels
export const LabelMPStyled = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.secondary};
  margin-bottom: 10px;
`;
export const Label2MPStyled = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.secondary};
`;
export const Label3MPStyled = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.secondary};
  margin-bottom: 10px;
`;


//Inputs 
export const InputMPStyled = styled.input`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  display: block;
  padding-left: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.secondary};
  background-color: rgba(0, 0, 0, 0.07);
  outline-color:${props => props.theme.primary};

  width: 90%;
  height: ${({ height }) => height || "40px"};
  margin-bottom: 15px;
  @media all and (max-width: 900px) {
    width: 100%;
    height: 40px;
  }
  @media all and (max-width: 600px) {
    width: 100%;
    height: 40px;
  }
`;
export const Input2MPStyled= styled.input`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  display: block;
  padding-left: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.secondary};
  background-color: rgba(0, 0, 0, 0.07);
  outline-color: ${props => props.theme.primary};
  width: 70%;
  height: 40px;
  @media all and (max-width: 900px) {
    width: 100%;
    height: 40px;
  }
  @media all and (max-width: 600px) {
    width: 100%;
    height: 40px;
  }
`;

//required options and selects
export const RequiredMPStyled = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: red;
  text-align: right;
  margin-top: -5px;
  margin-bottom: 10px;
`;

export const SelectMPStyled = styled.select`
  width: 500px;
  padding-left: 20px;
  height: 40px;
  font-size: 16px;
  color: ${props => props.theme.secondary};
  border-color: rgba(0, 0, 0, 0.2);
  outline: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
    outline: rgba(0, 0, 0, 0.1);
  }
  @media all and (max-width: 600px) {
    padding-left: 5px;
    width: 155px;
  }
`;
export const Select2MPStyled = styled.select`
  width: 90%;
  padding-left: 20px;
  height: 40px;
  font-size: 16px;
  color: ${props => props.theme.secondary};
  background-color: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  outline: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
    outline: rgba(0, 0, 0, 0.1);
  }
  @media all and (max-width: 900px) {
    margin-bottom: 15px;
    margin-top: 10px;
  }
  @media all and (max-width: 600px) {
    padding-left: 5px;
    width: 155px;
  }
`;
export const OptionMPStyled = styled.option`
  width: 500px;
  padding-left: 20px;
  margin-bottom: 15px;
  font-size: 16px;
  color:${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};
  outline:${props => props.theme.secondary};
  &:focus {
    border-color:${props => props.theme.secondary};
    outline: ${props => props.theme.secondary};
  }
  @media all and (max-width: 600px) {
    padding-left: 5px;
    width: 155px;
  }
`;
//more +
// export const MoreMPStyled  = styled.div`
//   background: ${props => props.theme.primary}
//   color: white;
//   width: 35px;
//   height: 35px;
//   font-size: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// `;
export const ButtonMPStyled = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// cards for descriptions and policy
export const CardMPStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  width: 30%;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin-bottom: 10px;
  @media all and (max-width: 700px) {
    width: 90%;
  }
`;
export const ContainerPoliciesStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media all and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;