//elements
const welcomeMessage = document.getElementById("welcomeMessage");
const calc2Button = document.getElementById("calculateTwo");
const calcButton = document.getElementById("calculateMore");
const userDetails = document.getElementById("userDetails");

const resultBox = document.getElementById("result");

// welcome
alert("Welcome to my site");
const userName = prompt("What is your name?");
welcomeMessage.textContent = `Welcome ${userName}`;

//sum more than 2 function
const sumTwo = (num1, num2) => {
  const sum = Number(num1) + Number(num2);
  resultBox.innerHTML = sum;
};
//sum more than 2 function
const sumMore = (numbers) => {
  const numbersArray = numbers.split(",");
  const result = numbersArray.reduce((prev, current) => {
    return Number(prev) + Number(current);
  });
  resultBox.innerHTML = result;
};
// simple temp
const simpleTemp = (temp) => {
  const weather = temp !== NaN ? (temp <= 30 ? "COLD" : "HOT") : "Error";
  return weather;
};
console.log(simpleTemp(22));


//more complex
const checkTemp = (temp, actTemp) => {
  let weather;
  if (temp !== NaN && actTemp !== NaN) {
    if (temp < 25 && actTemp < 25) {
      weather = "COLD";
    } else if (25 <= temp <= 30 && 25 <= actTemp <= 30) {
      weather = "NORMAL";
    } else if (temp > 30 && actTemp > 30) {
      weather = "HOT";
    } else {
      weather = "Ambiguous";
    }
  }
  return weather;
};
console.log(checkTemp(26, 28));


//faculty
const facultyCheck = (faculty) => {
  let message;
  switch (faculty) {
    case "FCI":
      message = "You’re eligible to Programing tracks";
      break;
    case "Engineering":
      message = "You’re eligible to Network and Embedded tracks";
      break;
    case "Commerce":
      message = "You’re eligible to ERP and Social media tracks";
      break;
    default:
      message = "You’re eligible to SW fundamentals track";
  }
  return message;
};
console.log(facultyCheck("Enigneering"));


//odd number preint
const oddNum = (start, end) => {
  for (i = start; i <= end; i++) {
    i % 2 !== 0 && console.log(i);
  }
};
console.log(oddNum(0, 12));


//evalute
const userEvalute = (exp) => {
  const result = eval(exp);
  return result;
};


//contact
const contact = () => {
  let userName, birthYear;
  do {
    userName = prompt("Enter your name?");
  } while (userName === "" && userName !== null);
  if (userName !== null) {
    do {
      birthYear = prompt("Enter your birth year?");
    } while (Number(birthYear) === NaN && birthYear !== null);
    const age = 2023 - Number(birthYear);

    userDetails.innerHTML = `Name: ${userName}
  birth year: ${birthYear}
  age: ${age}`;
  }
};
