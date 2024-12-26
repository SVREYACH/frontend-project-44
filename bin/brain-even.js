#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const gameNumbers = (name) =>{
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let count = 0; count<3; count+=1){
  const num = Math.floor(Math.random() * 10);
  const numEven = num % 2 === 0 ? 'is even' : 'is odd';
  console.log(num);
  const response = readlineSync.question('Your answer: ');
  if((response.toLowerCase() === 'yes' && numEven.toLowerCase()==='is even')|| (response.toLowerCase() === 'no' && numEven.toLowerCase()==='is odd')){
    console.log('Correct!');
  }
  else{
    let correct = numEven === 'is even' ? 'yes' : 'no';
    console.log(`${response} is wrong answer;( Correct answer was ${correct}`)
    console.log(`Let's try again, ${name}`);
    return;
  }

  }
  return console.log(`Congratulations, ${name}!`)
};

const name = greetUser();
gameNumbers(name);

export default gameNumbers;
