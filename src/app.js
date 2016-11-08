class Drone{
    constructor(id, name){
        this .id = id;
        this.name = name;
    }

    static getCompany(){
        console.log('in getCompany');
    }
    fly(){
        console.log('Drone '+ this.id+ ' is Fying');
    }

    constructor(id){
        this._id = id;
    }

    get id(){
        console.log('in id getter');
        return this._id + ' TEMPORARY';
    }

    set id(value){
        this._id = value;
    }

}

Drone.maxHeight = 2000;
let drone = new Drone();
console.log(typeof drone);

console.log(drone instanceof Drone);

let drone1 = new Drone(42,'Mahendra');
let drone2 = new Drone(45,'mack');

console.log('drone: '+ drone1.id + ' '+ drone1.name);
console.log('drone: '+ drone1['id'] + ' '+ drone1['name']);
console.log(Drone.maxHeight);

drone1.fly()
drone2.fly()

Drone.getCompany();

let drone3 = new Drone(42);

drone.id = 'A42';
console.log('drone id: '+ drone.id);