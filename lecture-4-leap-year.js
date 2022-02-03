// logic
// as leap year repeat after 4 years then if it is divisible by 4 then it should be a leap year but there are exception thats why we also have to check that it isn't divisible by 100 also
// or simply it is divisible by 400 then its a leap year :D 

function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

var thisYear = isLeapYear(2024);
console.log(thisYear);