'use strict';
//Базовый класс-конструктор

class Vehicle {
    constructor(model, color, passengers) {
        this.model = model;
        this.color = color;
        this.passengers = passengers;
        this.engineStarts = false;
        this.hasWings = false;
        this.canSwim = false;
    }
    getVehicleName = function () {
        console.log(`Это прекрасный ${this.model}`);
    }

    startTheEngine = function () {
        if (this.engineStarts) {
            console.log("Двигатель уже работает");
        } else {
            this.engineStarts = true;
            console.log("Двигатель заведён");
        }
    }

    stopTheEngine = function () {
        this.engineStarts = false;
        console.log('Двигатель выключен');
    }
}

//Дочерние классы
class Car extends Vehicle {}
class Airplane extends Vehicle {
    hasWings = true;
}
class Ship extends Vehicle {
    canSwim = true;
}

let car = new Car('Cadillac', 'red', 2);
let airplane = new Airplane('Airbus', 'white', 232);
let ship = new Ship('Isabella', 'Rose gold', 15);
