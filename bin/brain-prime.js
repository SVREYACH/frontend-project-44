#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';


const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gamePrime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let count = 0; count < 3; count += 1) {
    const question = Math.floor(Math.random() * 100) + 1; 
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const response = readlineSync.question('Your answer: ');

    if (response === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const name = greetUser();
gamePrime(name);

export default gamePrime;