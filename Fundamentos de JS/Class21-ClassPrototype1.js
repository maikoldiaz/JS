const MAX_HEIGHT = 1.62;

function people(name, lastName, height){
    this.name = name;
    this.lastName = lastName;
    this.age = 20;
    this.height = height;
}

people.prototype.greet = function (){
    console.log(`Hola, soy ${ this.name } ${ this.lastName }`);
}

people.prototype.peopleTall = function (){
    if(this.height >= MAX_HEIGHT){
        console.log(`La altura de ${ this.name } es de ${ this.height }, por lo tanto es alto`);
    }else{
        console.log(`La altura de ${ this.name } es de ${ this.height }, por lo tanto es bajo`);
    }    
}

var peopleOne = new people('Maikol', 'Diaz', 1.71);
var peopleTwo = new people('Daniela', 'Riaño', 1.52);
var peopleThree = new people('Juan', 'Alvares', 1.80);

peopleOne.greet();
peopleTwo.greet();
peopleThree.greet();

peopleOne.peopleTall();
peopleTwo.peopleTall();
peopleThree.peopleTall();