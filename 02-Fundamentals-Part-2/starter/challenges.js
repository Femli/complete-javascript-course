"use strict";

// coding challenge 3 ====


// 1
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;

// 2
let winner = 'draw';
if (dolphinsScore > koalasScore) {
    winner = "Dolphins";
} else if (dolphinsScore < koalasScore) {
    winner = "Koala";
}
console.log(winner);

// 3
dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 123) / 3;
if (dolphinsScore > koalasScore && dolphinsScore > 100) {
    winner = "Dolphins";
} else if (dolphinsScore < koalasScore && koalasScore > 100) {
    winner = "Koala";
}
console.log(winner);

// 4
dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 106) / 3;
if (dolphinsScore === koalasScore && dolphinsScore + koalasScore >= 200)
    winner = 'draw';
if (dolphinsScore > koalasScore && dolphinsScore > 100) {
    winner = "Dolphins";
} else if (dolphinsScore < koalasScore && koalasScore > 100) {
    winner = "Koala";
}
console.log(winner);


// coding challenge 4

//1
let bill = Number(prompt("How much is the bill?"));
let tip = (bill > 50 && bill < 300) ? .15 : .20;

//2
let msg = `The bill is \$${bill}, and the tip percentage is %${tip * 100}. Therefore, the total is \$${bill + (bill * tip)}`;
console.log(msg);