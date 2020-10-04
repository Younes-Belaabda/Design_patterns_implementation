/* Concept : Create object but let's [FactoryClass] decide which [Class] to instantiate */

/* Animal Zoo */

function Dog() {
    this.type = 'Dog';
}

function Cat() {
    this.type = 'Cat';
}

function Cow() {
    this.type = 'Cow';
}

// Factory Design Pattern

function FactoryZoo(type) {

    if (type === 'dog') {
        return new Dog();
    }
    else if (type === 'cat') {
        return new Cat();
    }
    else if (type === 'cow') return new Cow();

    return null;
}

/* Choose Your Animal */

const dog_1 = new FactoryZoo('dog');
const cat_1 = new FactoryZoo('cat');
const cow_1 = new FactoryZoo('cow');

console.log(`dog_1 = ${dog_1.type}`);
console.log(`cat_1 = ${cat_1.type}`);
console.log(`cow_1 = ${cow_1.type}`);