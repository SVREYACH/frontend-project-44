#!/usr/bin/env node
import greetUser from '../src/cli.js';
import gameNumbers from './brain-even.js';
const name = greetUser();
gameNumbers(name);
