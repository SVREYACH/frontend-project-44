#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, generateQuestionAndAnswer } from '../src/games/prime.js';

startGame(description, generateQuestionAndAnswer);