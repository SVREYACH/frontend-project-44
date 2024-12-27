#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const gameGCD = (name) =>{
  console.log('Find the greatest common divisor of given numbers.');

  for (let count = 0; count<3; count+=1){
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const correctAnswer = gcd(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const response = Number(readlineSync.question('Your answer: '));
  if(response === correctAnswer){
    console.log('Correct!');
  }
  else{
    console.log(`${response} is wrong answer;( Correct answer was ${correctAnswer}`)
    console.log(`Let's try again, ${name}`);
    return;
  }

  }
  return console.log(`Congratulations, ${name}!`)
};

const name = greetUser();
gameGCD(name);

export default gameGCD;
