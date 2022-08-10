import styled from "styled-components";

export const ScheduleMainStyled = styled.div`
  & * {
    background: white;
  }
  font-family: 'roboto';
  font-size: 0.8rem;
  display: flex;
  width: max-content;

  .react-datepicker__day--outside-month {
    background: none;
  }
`;

export const ButtonScheduleStyled = styled.div`
  widht: auto;
  height: auto;
  padding: 0.3em;
  display: flex;
  justify-content: end;
  padding: 0.5em;
`;
