import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle, ScheduleMainStyled, ButtonScheduleStyled, ScheduleIngresarReservaDiv } from "./ScheduleStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import "./CalendarStyled.css";
import { usePathname } from '../../hooks/hooks'




const Container = ({ children }) => {
  const pathName = usePathname();
  const isInBookingPage = pathName.includes("reservas");
  const isInProductPage = pathName.includes("producto") && !isInBookingPage;
  const isInHomePage = !isInProductPage && !isInBookingPage;
  const navigate = useNavigate();



  const startBooking = () => {
    const isLoggedUser = true;
    if (!isLoggedUser)
      navigate('/login');

    navigate(`${pathName}/reservas`)
  }

  return (
    <GlobalStyle isInProductPage={isInProductPage} isInBookingPage={isInBookingPage}>
      <ScheduleMainStyled isInProductPage={isInProductPage} isInBookingPage={isInBookingPage}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>{children}</div>
      </ScheduleMainStyled>

      {isInProductPage &&
        <ScheduleIngresarReservaDiv>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <ButtonScheduleStyled>
            <Button width="28rem" theme="secondary" onClick={startBooking}>
              Iniciar reserva
            </Button>
          </ButtonScheduleStyled>
        </ScheduleIngresarReservaDiv>
      }
      {
        isInHomePage &&
        <ButtonScheduleStyled>
          <Button width="12.5rem" theme="secondary">
            Aplicar
          </Button>
        </ButtonScheduleStyled>
      }
    </GlobalStyle>
  );
};


/* Calendar*/
const Calendar = ({ picDate, inline, readOnly, monthsShown }) => {
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
      monthsShown={monthsShown}
      readOnly={readOnly}
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
    />
  );
};

/*Schedule component*/
export default function Schedule({ placeHolderText, picDate, inline, readOnly, monthsShown }) {
  return <Calendar picDate={picDate} placeholderText={placeHolderText} inline={inline} readOnly={readOnly} monthsShown={monthsShown} />;
}
