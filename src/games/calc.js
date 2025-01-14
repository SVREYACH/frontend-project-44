const description = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * 3)];

  let correctAnswer = '';
  if (operation === '+') {
    correctAnswer = String(num1 + num2);
  } else if (operation === '-') {
    correctAnswer = String(num1 - num2);
  } else if (operation === '*') {
    correctAnswer = String(num1 * num2);
  }

  const question = `${num1} ${operation} ${num2}`;
  return [question, correctAnswer];
};

export { description, generateQuestionAndAnswer };