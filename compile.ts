import { fearOfRoads, Taz, bigTruck, Lanoz, CarRole } from './cars'
export interface Car {
  readonly manufacturer: string
  model: string
  year: number
  color: string
  mileage: number
  engineVolume: number
  wasInAccidents: boolean
  category: CarRole
}
export interface Truck extends Car {
  isWagon?: boolean
  capacityInTons?: number
}
class CarPark {
  private arrOfCars: Array<Car> = [];
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  addCar(car: Car) {
      this.arrOfCars.push(car);
  }
  log() {
    for (let item of this.arrOfCars) {
       console.log(`${item.manufacturer} ${item.model} in ${this.name}`);
     }
  }
  findCarsByRole(category: CarRole) {
    var sortedCars: any[] = [];
    for (let item of this.arrOfCars) {
      if (item.category === category) {
        sortedCars.push(`${item.manufacturer} ${item.model}`);
      }
    }
    console.log(sortedCars);
  }
}

let GreatGarage: CarPark = new CarPark("GreatGarage");

GreatGarage.addCar(fearOfRoads);
GreatGarage.addCar(Taz);
GreatGarage.addCar(Lanoz);
GreatGarage.addCar(bigTruck);
GreatGarage.findCarsByRole(CarRole.Taxi);
GreatGarage.log();
