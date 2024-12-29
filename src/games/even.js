const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

export { description, generateQuestionAndAnswer };