'use strict';
//Базовая функция-конструктор

function Vehicle(model, year, color, passengers) {
    this.model = model;
    this.color = color;
    this.passengers = passengers;
    this.engineStarts = false;

    this.getVehicleName = function () {
        console.log(this.model);
    };

    this.startTheEngine = function () {
        this.engineStarts = true;
        console.log('Двигатель заведён');
    }

    this.stopTheEngine = function () {
        this.engineStarts = false;
        console.log('Двигатель выключен');
    }
}

//Дочерние функции-конструкторы
function Car(model, color, passengers) {
    Vehicle.apply(this, arguments);



}

function Airplane(model, color, passengers) {
    Vehicle.apply(this, arguments);


}

function Ship(model, color, passengers) {
    Vehicle.apply(this, arguments);

}

var vehicle = new Vehicle('Cadillac', 1923, 'red', 2);
