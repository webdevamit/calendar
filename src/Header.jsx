import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getYears, MONTHS } from "./Utility";
const Header = ({ fixedDate, currentDate, handleDateChange }) => {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonthString = MONTHS[currentMonth];
  const years = getYears(fixedDate);
  const handleArrowClick = (action) => {
    let month;
    let year;
    if (action === "increment") {
      if (currentMonth >= 11) {
        month = 0;
        year = currentYear + 1;
      } else {
        month = currentMonth + 1;
        year = currentYear;
      }
    } else {
      if (currentMonth <= 0) {
        month = 11;
        year = currentYear - 1;
      } else {
        month = currentMonth - 1;
        year = currentYear;
      }
    }
    handleDateChange(month, year);
  };
  return (
    <>
      <Button
        size="small"
        className="direction-btn"
        onClick={() => handleArrowClick("decrement")}
      >
        <ArrowBackIcon />
      </Button>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        className="calendar-filter"
        size="small"
      >
        <select
          className="calendar-month"
          value={currentMonth}
          onChange={(evt) => handleDateChange(evt.target.value, currentYear)}
        >
          <option value="">None</option>
          {MONTHS.map((m, key) => {
            return (
              <option key={m} value={key}>
                {m}
              </option>
            );
          })}
        </select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        className="calendar-filter"
        size="small"
      >
        <select
          className="calendar-year"
          value={currentYear}
          onChange={(evt) => handleDateChange(currentMonth, evt.target.value)}
        >
          <option value="">None</option>
          {years.map((y) => {
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </FormControl>
      <Button
        size="small"
        className="direction-btn"
        onClick={() => handleArrowClick("increment")}
      >
        <ArrowForwardIcon />
      </Button>
    </>
  );
};

export default Header;
