import React, { useState, useContext } from "react";
import { usePathname } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { GlobalStyle, ScheduleMainStyled, ButtonScheduleStyled, ScheduleIngresarReservaDiv } from "./ScheduleStyle";
import { UserContext } from "../../hooks/UseContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import "./CalendarStyled.css";
import { SignedInOk } from '../signedInOk/SignedInOk'
import { useEffect } from "react";
import { subDays, addDays } from 'date-fns';

const Container = ({ children }) => {

  const { loggedUser } = useContext(UserContext)

  const pathName = usePathname();
  const isInBookingPage = pathName.includes("reservas");
  const isInProductPage = pathName.includes("producto") && !isInBookingPage;
  const isInHomePage = !isInProductPage && !isInBookingPage;
  const navigate = useNavigate();

  const startBooking = () => {
    if (!loggedUser) {
      SignedInOk.fire('Por favor inicia sesión primero', '', 'warning')
      navigate('/login', { state: pathName });
      return
    }

    navigate(`${pathName}/reservas`)
  }

  return (
    <GlobalStyle isInProductPage={isInProductPage} isInBookingPage={isInBookingPage}
    >
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
const Calendar = ({ picDate, inline, readOnly, monthsShown, excludeDateIntervals }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([])
  const [arrayOfDayDiff, setArrayOfDayDiff] = useState(0);

  useEffect(() => {
    if (excludeDateIntervals) {
      const exclude = excludeDateIntervals.map(el => {
        return {
          start: new Date(el.checkin),
          end: new Date(el.checkout)
        }
      })
      setExcludedDates(exclude);

      const dateDiff = excludeDateIntervals.map(el => {
        return new Date(el.checkout).getDate() - new Date(el.checkin).getDate()
      })
      setArrayOfDayDiff(dateDiff)
    }

  }, [excludeDateIntervals])

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    picDate(start, end);
  };

  const excludeDays = () => {
    let arr = [];

    for (let i = 0; i < arrayOfDayDiff.length; i++) {
      const dayDiff = arrayOfDayDiff[i];
      arr.push({ start: excludedDates[i].end, qDays: dayDiff })
    }

    return arr.map(el => { return { start: subDays(el.start, el.qDays), end: addDays(el.start, 0) } })
  }

  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      calendarContainer={Container}
      selectsRange
      isClearable
      highlightDates={[]}
      excludeDateIntervals={excludeDays()}
      showPreviousMonths={false}
      monthsShown={monthsShown}
      readOnly={readOnly}
      inline={inline}
      dateFormat="dd/MM/yyyy"
      enableTabLoop={false}
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
              "react-datepicker_navigation react-datepicker_navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker_navigation-icon react-datepicker_navigation-icon--previous"
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
              "react-datepicker_navigation react-datepicker_navigation--next"
            }
            style={customHeaderCount === 0 && monthsShown === 2? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker_navigation-icon react-datepicker_navigation-icon--next"
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


export default function Schedule({ placeHolderText, picDate, inline, readOnly, monthsShown, excludeDateIntervals }) {
  return <Calendar picDate={picDate} placeholderText={placeHolderText} inline={inline} readOnly={readOnly} monthsShown={monthsShown} excludeDateIntervals={excludeDateIntervals} />;
}