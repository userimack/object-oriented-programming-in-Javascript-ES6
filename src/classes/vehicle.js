export class Vehicle{
    constructor(){
        console.log('constructing Vehicle');
        this.gpsEnabled = true;
    }
    constructor(licenseNum)(){
        this.licenseNum = licenseNum;
    }

    start(){
        console.log('starting Vehicle');
    }

    static getCompanyName(){
        console.log('My Company');
    }
}