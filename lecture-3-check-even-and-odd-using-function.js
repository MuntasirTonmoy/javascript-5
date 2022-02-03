//logic
//if any number divided by 2 and the reminder is 0 then the number is even else the number is odd


function isEvenOrOdd(number) {
    if (number == 0) {
        console.log('This is zero 0');
    }
    else if (number % 2 == 0) {
        console.log(number, ' is an even number');
    }
    else {
        console.log(number, ' is an odd number');
    }
}

isEvenOrOdd(45);