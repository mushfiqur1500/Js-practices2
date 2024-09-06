// how to find out a year that is LEAP YEAR or not
function leapYear(year){
  if(year % 4 == 0){
    console.log(`${year} is LEAP YEAR `)
  }
  else{console.log(`${year} is not LEAP YEAR`)}
}
leapYear(2023);
leapYear(2024);