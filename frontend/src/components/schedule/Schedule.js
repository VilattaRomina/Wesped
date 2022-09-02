import React, { useState } from "react";
import { ScheduleMainStyled, ButtonScheduleStyled } from "./ScheduleStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import "./CalendarStyled.css";
import {usePathname} from '../../hooks/hooks'

const Container = ({ children, buttonText }) => {
  
  return (
    <div
      style={{ background: "#000", position: "relative", color: "#0073A3" }}
    >
      <ScheduleMainStyled>
        <div>{children}</div>
      </ScheduleMainStyled>

      <ButtonScheduleStyled>
          <Button width="12.5rem" theme="secondary">
            {usePathname().includes("producto")? "Iniciar reserva" : "Aplicar"}
          </Button>

      </ButtonScheduleStyled>
    </div>
  );
};


/* Calendar*/
const Calendar = ({ picDate, inline }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    picDate(start, end);
  };

  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      calendarContainer={Container}
      selectsRange
      isClearable
      inline={inline}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      placeholderText="Chech in - Check out"
      formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("es-US", {
              month: "long",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
          <div className="react-datepicker__month"></div>
        </div>
      )}
      monthsShown={2}
    />
  );
};

/*Schedule component*/
export default function Schedule({ placeHolderText, picDate, inline }) {
  return <Calendar picDate={picDate} placeholderText={placeHolderText} inline={inline} />;
}
