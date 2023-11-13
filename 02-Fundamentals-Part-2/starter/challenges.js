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


// PART 2 ====


// coding challenge #1

// 1
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2
let dolphinsAvgScore = calcAverage(44, 23, 71);
let koalasAvgScore = calcAverage(65, 54, 49);

// 3
let checkWinner = (score1, score2) => {
    if (score1 >= score2 * 2) {
        return `Team with score: ${score1} wins`;
    }
    if (score2 >= score1 * 2) {
        return `Team with score: ${score2} wins`;
    }
    return "No winner";
}

// 4
winner = checkWinner(dolphinsAvgScore, koalasAvgScore);
console.log(winner);

// 5
dolphinsAvgScore = calcAverage(85, 54, 41);
koalasAvgScore = calcAverage(23, 34, 27);

console.log(checkWinner(dolphinsAvgScore, koalasAvgScore));

// coding challenge #2

// 1
function calcTip(bill) {
    let tipRate = (bill > 50 && bill < 300) ? .15 : .20;
    return bill * tipRate;
}
console.log(calcTip(100));

// 2
let bills = [125, 555, 44];

// 3
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 4
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// coding challenge #3

//1 & 2
let mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

let john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// 3
console.log((mark.calcBMI() > john.calcBMI()) ? `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`
    : `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})`);


// coding challenge #4

// 1
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2
tips = [];
let totals = [];

// 3
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

// 4
function calcAverageArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverageArr(totals));