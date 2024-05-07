#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number: ", type: "number", name: "firstNumber" },
    { message: "Enter your second number: ", type: "number", name: "secondNumber" },
    {
        message: "Select One of the operator from the list to perform the action:  ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//  CONDITIONAL STATEMENT
if (answer.operator === "Addition") {
    console.log("Your Value is : ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Value is : ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Value is : ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your Value is : ", answer.firstNumber / answer.secondNumber);
}
else {
    ("Please enter correct operator:");
}
