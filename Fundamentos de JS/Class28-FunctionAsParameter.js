const MAX_HEIGHT = 1.62;
class People{
    constructor(name, lastName,height){
        this.name = name;
        this.lastName = lastName;
        this.height = height;
    }
    greet (){
        console.log(`Hola, soy ${ this.name } ${ this.lastName }`);
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
    greet (){
        console.log(`Hola, soy ${ this.name } ${ this.lastName } y soy un desarrollador`);
    }
}