// 6. Task: Leap Year Checker
function checkLeapYear(year: number): string {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year. Happy New Year`;
  } else {
    return `${year} is not a leap year.`;
  }
}

checkLeapYear(2024);
