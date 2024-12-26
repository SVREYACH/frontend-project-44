#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const gameCalc = (name) =>{
  console.log('What is the result of the expression?');
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  console.log(`Question: ${num1} + ${num2}`);
  const response1 = Number(readlineSync.question('Your answer: '));
  if(response1!==(num1+num2)){
    console.log(`'${response1}' is wrong answer ;(. Correct answer was '${num1 + num2}'.
Let's try again, ${name}!`);
return;
  }
  console.log('Correct!');


  const num3 = Math.floor(Math.random() * 100);
  const num4 = Math.floor(Math.random() * 100);
  const max = Math.max(num3, num4);
  const min = Math.min(num3, num4);
  console.log(`Question: ${max} - ${min}`);
  const response2 = Number(readlineSync.question('Your answer: '));
  if(response2!==(max-min)){
    console.log(`'${response2}' is wrong answer ;(. Correct answer was '${max - min}'.
Let's try again, ${name}!`);
return;
  }
  console.log('Correct!');


  const num5 = Math.floor(Math.random() * 100);
  const num6 = Math.floor(Math.random() * 100);
  console.log(`Question: ${num5} * ${num6}`);
  const response3 = Number(readlineSync.question('Your answer: '));
  if(response3!==(num5*num6)){
    console.log(`'${response3}' is wrong answer ;(. Correct answer was '${num5 * num6}'.
Let's try again, ${name}!`);
return;
  }
  console.log('Correct!');

  return console.log(`Congratulations, ${name}!`)
};

const name = greetUser();
gameCalc(name);

export default gameCalc;
