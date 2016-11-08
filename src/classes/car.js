import {Vehicle} from './vehicle.js';

export class Car extends Vehicle{
    constructor(licenseNum){
        super(licenseNum);
    }
    constructor(){
        super();
        this.gpsEnabled=False;
    }

    start(){
        console.log('starting Car');
        super.start();
    }

    static getCompanyName(){
        super.getCompanyName();
        console.log('My other Company');
    }
}