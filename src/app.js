import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';

let c = new Car('M123');

console.log(c instanceof Object);
console.log(c instanceof Vehicle);
console.log(c instanceof Car);

console.log(c.licenseNum);

console.log(c.gpsEnabled);

c.start();

Car.getCompanyName();
