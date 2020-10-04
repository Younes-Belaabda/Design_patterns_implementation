import {Dog,Cat,Cow} from './app_1.mjs'
export default class Animal {
    constructor(type) {
        this.type = type;
        /* This part of code like Factory Design Pattern */
        /* We can decide which class instantiate this object [dog,cat,cow] */
        if(type === 'dog') {
            this.getType = function() {
                return Dog();
            }
        }
        else if (type === 'cat') {
            this.getType = function() {
                return Cat();
            }
        }
        else if(type === 'cow') {
            this.getType = function() {
                return Cow();
            }
        }
        else{
            this.getType = function() {
                console.log('Animal Not Found !! 💣 We Have [dog,cat,cow]');
            }
        }
    }
}

// Whatever Function Should i export it */
export function getTimeNow() {
    const timeNow = new Date().toLocaleTimeString('ar');
    console.log(timeNow);
}

