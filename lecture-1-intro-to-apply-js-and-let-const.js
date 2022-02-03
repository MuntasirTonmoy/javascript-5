// recap

//* variable
var time = '8:56 PM';           // string
var price = 150;                 // numeric
var isWhiteColor = false;         // boolian

//* array
//! array index starts with 0 and if an element isn't inside the array then the index will be -1

var myFriends = ['Abir', 'Mithun', 'Rumman', 'Sagor', 'Rony'];

console.log('there are ', myFriends.length, 'element in the array');  // element count

console.log('the index of Rumman is', myFriends.indexOf('Rumman')); // knowing index

myFriends.pop(); // removing the last element from the array

console.log('checking after removing the last element of the arrow ', myFriends);

myFriends.push('Hasibul'); // add an element at the end of the array.

console.log('checking after adding the last element of the arrow ', myFriends);

//* conditional
var bookPrice = 100;
if (bookPrice < 150) {
    console.log('I will buy a book now.');
}
else {
    console.log('Please give me some discount.');
}
// if else if else and switch(){ case : break; default: }

// also can use ternary/ conditional operator 
// condition ? exprIfTrue : exprIfFalse;

//* loop
var i = 0;
while (i < 10) {
    console.log('Hello world!');
    i++;
}

for (i = 1; i < 7; i++) {
    console.log('This text will print ', i, 'times.');
}
// can use break; (which break the loop ) and continue; (skip statement one time ) statement in the loop
//there are also do while loop.

//* function

function isMoonUp() {
    var time = 9;
    if (time >= 19 && time <= 5) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isMoonUp());





