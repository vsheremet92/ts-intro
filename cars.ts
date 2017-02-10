import { Car, Truck } from "./compile"


export enum CarRole {
  Taxi = 1,
  Trucking = 2,
  Service = 3,
  Passenger = 4,
  Private = 5
}

export let fearOfRoads: Car = {
  manufacturer: 'Mazda',
  model: '626',
  year: 1999,
  color: 'grey',
  mileage: 100000,
  engineVolume: 2.2,
  wasInAccidents: false,
  category: CarRole.Private
}

export let Taz: Car = {
  manufacturer: 'Vaz',
  model: '1119',
  year: 2008,
  color: 'red',
  mileage: 30000,
  engineVolume: 1.6,
  wasInAccidents: false,
  category: CarRole.Taxi
}

export let Lanoz: Car = {
  manufacturer: 'Zaz',
  model: 'Lanos',
  year: 2006,
  color: 'blue',
  mileage: 300000,
  engineVolume: 1.5,
  wasInAccidents: true,
  category: CarRole.Taxi
}


export let bigTruck: Truck = {
  manufacturer: 'Renault',
  model: 'Cargo',
  year: 2008,
  color: 'white',
  mileage: 300000,
  engineVolume: 10,
  wasInAccidents: false,
  isWagon: true,
  capacityInTons: 50,
  category: CarRole.Trucking
}

//  console.log(`Your car is ${parkItem.color} ${parkItem.manufacturer} ${parkItem.model}, made in ${parkItem.year}. The litrage is ${parkItem.engineVolume}, mileage - ${parkItem.mileage}`);
