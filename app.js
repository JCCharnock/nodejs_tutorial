//
//console.log("Hello world! From Joe C");
//const tutorial = require('./tutorial')
//console.log('Hello ' + sum(4,5));
//console.log(tutorial);
//console.log(tutorial.sum(5,3));
//console.log(tutorial.PI);
//console.log(new tutorial.SomeMathObject);
const EventEmitter =require('events');
const eventEmitter = new(EventEmitter)
eventEmitter.on('tutorial',(number1,number2)=>{
    console.log('tutorial event has occurred ' + (number1+number2));
    console.log(number1+number2);
})
//eventEmitter.emit('tutorial',4,6);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let Joe=new Person('Joe');
//console.log('hello my name is ' + Joe._name);
Joe.on('name',()=>{
    console.log('in on hello my name is ' + Joe.name);
});
console.log('about to emit name');
Joe.emit('name');

let charlie=new Person('Charlie');
charlie.on('name',()=>{
    console.log('in on hello my name is ' + charlie.name);
});
charlie.emit('name');

