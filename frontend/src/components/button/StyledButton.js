import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  color: #4cd4d1;
  padding: 10px;
  width: ${(props) => props.width};
  cursor: pointer;
  ${(props) =>
        props.theme === "primary"
            ? `background-color: #fff;
   height: 2.5rem;
   font-size: 1rem;
   font-family: 'Roboto', sans-serif;
   border: 1px solid #4cd4d1;
   &:hover {
   background-color: #4cd4d1;
   color: #fff;
   }
   &:active {
   background-color: #37d3c9;
   }`
            : `background-color: #4cd4d1;
   color: #fff;
   border: none;
   height: 2.5rem;
   font-size: 1rem;
   font-family: 'Roboto', sans-serif;
   box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
   &:hover {
    background-color: #00f1ec;
    color: #fff;
  }
  &:active {
    background-color: #4cd4d1;
  }
  `}
`;