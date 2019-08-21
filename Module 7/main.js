'use strict';
//Базовая функция-конструктор

function Vehicle(model, color, passengers) {
    this.model = model;
    this.color = color;
    this.passengers = passengers;
    this.engineStarts = false;
    this.hasWings = false;
    this.canSwim = false;

    this.getVehicleName = function () {
        console.log(this.model);
    };

    this.startTheEngine = function () {
        if (this.engineStarts) {
            console.log("Двигатель уже работает");
        } else {
            this.engineStarts = true;
            console.log("Двигатель заведён");
        }
    };

    this.stopTheEngine = function () {
        this.engineStarts = false;
        console.log('Двигатель выключен');
    };
}

//Дочерние функции-конструкторы
function Car(model, color, passengers) {
    Vehicle.apply(this, arguments);
}

function Airplane(model, color, passengers) {
    Vehicle.apply(this, arguments);
    this.hasWings = true;
}

function Ship(model, color, passengers) {
    Vehicle.apply(this, arguments);
    this.canSwim = true;
}

var car = new Car('Cadillac', 'red', 2);
var airplane = new Airplane('Airbus', 'white', 232);
var ship = new Ship('Isabella', 'Rose gold', 15);
