import styled from "styled-components";
import { theme } from '../../ui/theme'
import "react-datepicker/dist/react-datepicker.css";

export const ScheduleMainStyled = styled.div`
  background: white;
  font-size: 0.8rem;
  display: inline-flex;
  width: max-content;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
  padding: 1rem;
  border-radius: 5px;
`;

export const ButtonScheduleStyled = styled.div`
  width: auto;
  height: auto;
  padding: 0.5em;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ScheduleIngresarReservaDiv = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
  height: auto;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  p{
    color: ${theme.text_primary};
    padding: 1rem;
    font-weight: bold;
  }
`;
