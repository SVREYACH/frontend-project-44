#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, generateQuestionAndAnswer } from '../src/games/calc.js';

startGame(description, generateQuestionAndAnswer);
