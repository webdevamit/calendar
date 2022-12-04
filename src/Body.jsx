import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getDaysInMonth,
  getFirstDayInMonth,
  getMonthDaysByWeeks,
  WEEK_DAYS,
} from "./Utility";

const Body = ({ currentDate }) => {
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayInMonth = getFirstDayInMonth(currentDate);
  const monthDaysByWeeks = getMonthDaysByWeeks(daysInMonth, firstDayInMonth);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 400 }}
        size="medium"
        className="calendar-table"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {WEEK_DAYS.map((wday, key) => {
              return (
                <TableCell key={`${wday}${key}`} align="center">
                  {wday}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {monthDaysByWeeks.map((row) => {
            return (
              <TableRow
                key={row}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((day, key) => {
                  const cellClass = currentDate.getDate() == day ? "today" : "";
                  if (day)
                    return (
                      <TableCell
                        key={`${day}${key}`}
                        className={cellClass}
                        align="center"
                      >
                        {day}
                      </TableCell>
                    );
                  return (
                    <TableCell key={`${day}${key}`} align="center"></TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Body;
