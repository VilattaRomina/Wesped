import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScheduleMainStyled, ButtonScheduleStyled, ScheduleIngresarReservaDiv } from "./ScheduleStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import "./CalendarStyled.css";
import { usePathname } from '../../hooks/hooks'

const Container = ({ children }) => {
  const [closeCalendar, setCloseCalendar] = useState(false);
  const pathName = usePathname();
  const isInBookingPage = pathName.includes("reservas");
  const isInProductPage = pathName.includes("producto") && !isInBookingPage;
  const isInHomePage = !isInProductPage && !isInBookingPage;
  const navigate = useNavigate();

  const styles = {
    background: isInProductPage ? "rgb(236, 236, 236)" : "#fff",
    position: "relative",
    color: "#0073A3",
    display: isInProductPage ? "flex" : "",
    justifyContent: isInProductPage ? "space-evenly" : "",
    alignItems: isInProductPage ? "center" : "",
    padding: isInProductPage ? "2rem" : "0",
    visibility: closeCalendar ? "hidden" : "",
    width: '100%'
  };

  const startReservationBtnClick = () => {
    const isLoggedUser = true;
    if (!isLoggedUser)
      navigate('/login');

    navigate(`${pathName}/reservas`)
  }

  const applyDatesBtnClick = () => setCloseCalendar(true);

  return (
    <div
      style={styles}
    >
      <ScheduleMainStyled isInProductPage={isInProductPage}>
        <div>{children}</div>
      </ScheduleMainStyled>

      {isInProductPage &&
        <ScheduleIngresarReservaDiv>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <ButtonScheduleStyled>
            <Button width="28rem" theme="secondary" onClick={startReservationBtnClick}>
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
    </div >
  );
};


/* Calendar*/
const Calendar = ({ inline, readOnly, monthsShown }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      calendarContainer={Container}
      shouldCloseOnSelect={false}
      selectsRange
      isClearable
      readOnly={readOnly}
      inline={inline}
      monthsShown={monthsShown}
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
export default function Schedule({ inline, readOnly, monthsShown }) {
  return <Calendar inline={inline} readOnly={readOnly} monthsShown={monthsShown} />;
}
