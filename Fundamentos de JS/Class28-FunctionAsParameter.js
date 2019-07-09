const MAX_HEIGHT = 1.62;
class People{
    constructor(name, lastName,height){
        this.name = name;
        this.lastName = lastName;
        this.height = height;
    }
    greet (fnAnswer){
        let {name,lastName} = this;
        console.log(`Hola, soy ${ name } ${ lastName }`);
        if (fnAnswer) {
            fnAnswer(name,lastName);
        }
    }
    peopleTall(){
        if(this.height >= MAX_HEIGHT){
            console.log(`La altura de ${ this.name } es de ${ this.height }, por lo tanto es alto`);
        }else{
            console.log(`La altura de ${ this.name } es de ${ this.height }, por lo tanto es bajo`);
        } 
    }
}

class Developer extends People{
    constructor(name, lastName,height){
        super(name, lastName,height);
    }
    greet (fnAnswer){
        let {name,lastName} = this;
        console.log(`Hola, soy ${ name } ${ lastName } y soy un desarrollador`);
        if (fnAnswer) {
            fnAnswer(name,lastName,true);
        }
    }
}

function AnsweringGreeting(nombre,apellido,isDev){
    let profession = isDev ? "No sabia que eras desarrolador": "Mucho gusto";
    console.log(`buen dia ${nombre} ${apellido}, ${profession}`);
    
}

var people = new People("Leonardo","Alverar",1,69);
var developer = new Developer("Maikol","Diaz",1,69);
people.greet(AnsweringGreeting);
developer.greet(AnsweringGreeting);