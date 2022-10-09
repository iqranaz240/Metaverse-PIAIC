#!/usr/bin/env node

const axios = require("axios");
const inquirer = require("inquirer");

async function run() {
  console.log("Launching Calculator...");

  const { num1, ops, num2 } = await askQuestions();

  const value = await calculateValue({ num1, ops, num2 });

  console.log(`${num1} ${ops} ${num2} = ${value}`);
}

function askQuestions() {
  const questions = [
    {
      name: "num1",
      type: "text",
      message: "Enter first number: ",

      validate: num1 => {
        const number = parseFloat(num1);

        return new Promise((resolve, reject) => {
          if (isNaN(number)) {
            reject("The value needs to be a number");
          }
          resolve(true);
        });
      }
    },
    {
      name: "ops",
      type: "text",
      message: "Enter Operator: ",

      validate: ops => {
        return new Promise((resolve, reject) => {

            //used switch because OR operator was not working
            switch(ops){
                case '+':
                    resolve(true);
                    break;
                
                case '-':
                    resolve(true);
                    break;
        
                case '*':
                    resolve(true);
                    break;
        
                case '/':
                    resolve(true);
                    break;
        
                default:
                    reject("The operator needs to be + - * /");
            }
        });
      }
    },
    {
      name: "num2",
      type: "text",
      message: "Enter second number: ",

      validate: num2 => {
        const number = parseFloat(num2);

        return new Promise((resolve, reject) => {
          if (isNaN(number)) {
            reject("The value needs to be a number");
          }
          resolve(true);
        });
      }
    }
  ];

  return inquirer.prompt(questions);
}

async function calculateValue({ num1, ops, num2 }) {
//   const { data } = await axios.get(
//     `https://api.exchangeratesapi.io/latest?base=${from}`
//   );

num1 = parseFloat(num1)
num2 = parseFloat(num2)
    let res = 0;
    switch(ops){
        case '+':
            res = num1+num2;
            break;
        
        case '-':
            res = num1-num2;
            break;

        case '*':
            res = num1*num2;
            break;

        case '/':
            res = num1/num2;
            break;

        default:
            res = res
    }

  const result = res;

  return result;
}

run();