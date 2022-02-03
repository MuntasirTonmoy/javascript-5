function factorial(num) {
    factorialValue = 1;
    for (var i = 1; i <= num; i++) {
        factorialValue = factorialValue * i;
    }
    return factorialValue;
}


console.log(factorial(3));
