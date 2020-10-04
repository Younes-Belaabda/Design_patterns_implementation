/*
    Module Design Pattern Concept
    * Kepping particular pieces of codes independent from each other
    * Provide encapsulation which can protect props & func from beigng accessed from other
*/
/* Import Function From app_1 Aka Module */
import {Dog,Cat,Cow} from './app_1.mjs'
import Animal from './app_2.mjs'
import {getTimeNow} from './app_2.mjs'

/* Using these Functions */
// Dog();
// Cat();
// Cow();

/* Another Way Of Thinking */

const animal_1 = new Animal('dog');
const animal_2 = new Animal('cat');
const animal_3 = new Animal('cow');
const animal_4 = new Animal('bird');

animal_1.getType();
animal_2.getType();
animal_3.getType();
animal_4.getType();


// Deal With Time
getTimeNow();

// Thanks To Module Design Pattern
console.log('Belaabda Younes Like Module Design Pattern 💘💘💘');