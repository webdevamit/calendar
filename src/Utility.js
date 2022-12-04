export const getYears = (currentDate) => {
  let years = [];
  let year = currentDate.getFullYear();
  for (let index = year - 100; index < year + 10; index++) {
    years.push(index);
  }
  return years;
};

export const getDaysInMonth = (currentDate) => {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
};

export const getFirstDayInMonth = (currentDate) => {
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  return date.getDay() + 1;
};

export const getMonthDaysByWeeks = (days, firstDay) => {
  let newArray = [];
  let count = 1;
  for (let i = 1; i < days + firstDay; i++) {
    if (i < firstDay) {
      newArray.push(0);
    } else {
      newArray.push(count);
      count++;
    }
  }
  let index = 0;
  let finalArray = [];
  for (let j = 0; j < newArray.length; j++) {
    if (j > 6 && j % 7 == 0) {
      index = Math.floor(j / 7);
    }
    if (!finalArray[index]) finalArray[index] = [];
    finalArray[index].push(newArray[j]);
  }
  return finalArray;
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
