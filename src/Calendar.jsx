import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./Calendar.css";

import { useEffect, useState } from "react";

import {
  getDaysInMonth,
  getFirstDayInMonth,
  getMonthDaysByWeeks,
  getYears,
} from "./Utility";

import Body from "./Body";
import Header from "./Header";

const Calendar = () => {
  const fixedDate = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const handleMonthChange = (value) => {
    setCurrentMonth(value);
  };
  const handleDateChange = (month, year) => {
    currentDate.setMonth(month);
    currentDate.setFullYear(year);
    const newDate = new Date(currentDate);
    setCurrentDate(newDate);
  };
  const handleYearChange = (value) => {
    setCurrentYear(value);
  };
  return (
    <Card sx={{ maxWidth: 600 }} className="calendar">
      <div className="calendar-header-wrapper">
        <h2>
          {currentDate.toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
        <Header
          fixedDate={fixedDate}
          currentDate={currentDate}
          handleDateChange={handleDateChange}
          handleMonthChange={handleMonthChange}
          handleYearChange={handleYearChange}
        />
      </div>
      <CardContent className="calendar-body-wrapper">
        <Body currentDate={currentDate} />
      </CardContent>
    </Card>
  );
};
export default Calendar;
