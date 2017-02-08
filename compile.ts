//import { User } from './test'

interface Car {
  readonly manufacturer: string
  model: string
  year: number
  color: string
  mileage: number
  engineVolume: number
  wasInAccidents: boolean
}

interface Truck extends Car {
  isWagon?: boolean
  capacityInTons?: number
}

var fearOfRoads: Car = {
  manufacturer: 'Mazda',
  model: '626',
  year: 1999,
  color: 'grey',
  mileage: 100000,
  engineVolume: 2.2,
  wasInAccidents: false
}

var taz: Car = {
  manufacturer: 'Vaz',
  model: '1119',
  year: 2008,
  color: 'red',
  mileage: 30000,
  engineVolume: 1.6,
  wasInAccidents: false
}


let bigTruck: Truck = {
  manufacturer: 'Renault',
  model: 'Cargo',
  year: 2008,
  color: 'white',
  mileage: 300000,
  engineVolume: 10,
  wasInAccidents: false,
  isWagon: true,
  capacityInTons: 50
}
//  console.log(`Your car is ${parkItem.color} ${parkItem.manufacturer} ${parkItem.model}, made in ${parkItem.year}. The litrage is ${parkItem.engineVolume}, mileage - ${parkItem.mileage}`);
class CarPark {
  private arrOfCars: any[] = [];
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  addCar(car: Car) {
      this.arrOfCars.push(car);
  }
  log() {
    for (let item of this.arrOfCars) {
       console.log(`${item.manufacturer} in ${this.name}`);
     }
  }
}

let GreatGarage: CarPark = new CarPark("GreatGarage");

GreatGarage.addCar(fearOfRoads);
GreatGarage.addCar(bigTruck);
GreatGarage.log();
