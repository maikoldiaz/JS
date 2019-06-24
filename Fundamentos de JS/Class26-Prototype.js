const MAX_HEIGHT = 1.62;
function Inherit(sonPrototype,fatherPrototyoe){
    var fn = function(){}
    fn.prototype = fatherPrototyoe.prototype
    sonPrototype.prototype = new fn
    sonPrototype.prototype.constructor = sonPrototype
}
function people(name, lastName, height){
    this.name = name;
    this.lastName = lastName;
    this.age = 20;
    this.height = height;
}

people.prototype.greet = function () {
    console.log(`Hola, soy ${ this.name } ${ this.lastName }`);
}

people.prototype.peopleTall = function () {    
    if(this.height >= MAX_HEIGHT){
        console.log(`La altura de ${ this.name } es de ${ this.height }, por lo tanto es alto`);
    }else{
        console.log(`La altura de ${ this.name } es de ${ this.height }, por lo tanto es bajo`);
    }    
}

Inherit(people,Developer);

function Developer(nombre,apellido){
    this.nombre =  nombre;
    this.apellido = apellido;
}

Developer.prototype.greet = function(){
    return `hola soy ${this.nombre} ${this.apellido} como estas?`
}