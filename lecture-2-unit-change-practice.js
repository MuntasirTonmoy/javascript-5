/* logic:
* 12inch = 1ft.
* 1 kilometer = 0.621371 miles
*/

function inchToFt(inch) {
    var ft = inch / 12;
    return ft;
}

function milesToKilo(miles) {
    var kilometer = miles / 0.621371;
    return kilometer;
}


console.log(inchToFt(1674));

console.log(milesToKilo(3));

