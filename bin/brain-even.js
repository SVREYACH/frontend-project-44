#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, generateQuestionAndAnswer } from '../src/games/even.js';

startGame(description, generateQuestionAndAnswer);
