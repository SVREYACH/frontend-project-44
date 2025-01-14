const description = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const correctAnswer = String(gcd(num1, num2));

  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

export { description, generateQuestionAndAnswer };