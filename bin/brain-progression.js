#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, generateQuestionAndAnswer } from '../src/games/progression.js';

startGame(description, generateQuestionAndAnswer);
