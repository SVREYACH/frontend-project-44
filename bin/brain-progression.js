#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const generateProgression = (start, step, length) => 
  Array.from({ length }, (_, index) => start + index * step);

const gameProgression = (name) => {
  console.log('What number is missing in the progression?');

  for (let count = 0; count < 3; count += 1) {
    const start = Math.floor(Math.random() * 10) + 1; 
    const step = Math.floor(Math.random() * 10) + 1; 
    const length = Math.floor(Math.random() * 6) + 5; 

    const progression = generateProgression(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * length); 
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const response = Number(readlineSync.question('Your answer: '));

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
gameProgression(name);

export default gameProgression;