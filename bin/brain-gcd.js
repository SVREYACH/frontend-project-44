#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, generateQuestionAndAnswer } from '../src/games/gcd.js';

startGame(description, generateQuestionAndAnswer);