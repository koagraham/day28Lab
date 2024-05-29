const animalData = require('./animal-data.json');
class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet(greeting = 'Hi') {
        console.log(`${greeting}, I'm ${this.name} the ${this.species}`)
    }

    feed(food = 'food') {
        this.hunger -= 20
        console.log(`Yum, I love ${food}`)
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    greet() {
        super.greet('Meow')
    }

    feed() {
        super.feed(this.food)
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger)
        this.food = 'kibbles'
    }

    greet() {
        super.greet('Woof')
    }

    feed() {
        super.feed(this.food)
    }
}

class AnimalShelter {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        this.animals.pop(animal)
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter((el) => el.species = species)
    }
}

const shelter = new AnimalShelter()

for (const animal of animalData) {
    let newAnimal = null

    if (animal.species === 'cat') {
        newAnimal = new Cat(animal.name, animal.color, animal.hunger)
    }
    else if (animal.species === 'dog') {
        newAnimal = new Dog(animal.name, animal.color, animal.hunger)
    }
    else {
        newAnimal = new Animal(animal.name, animal.species, animal.color, animal.hunger)
    }

    shelter.addAnimal(newAnimal)
}

for (const animal of shelter.animals) {
    animal.greet()
    animal.feed()
}