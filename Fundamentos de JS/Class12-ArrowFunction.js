const AGE_HIGHER = 18;

var people = {
    name: 'Camilo',
    lastName: 'Pérez',
    age: 18,
    engineer: true,
    chef: false,
    singer: false,
    dj: false,
    guitarist: true
}

var peopleTwo = {
    name: 'El brayan',
    lastName: 'Chuza',
    age: 15,
    engineer: true,
    chef: false,
    singer: false,
    dj: false,
    guitarist: true
}

function printProffessions(people){
    console.log(`${ people.name } es: `);
    if(people.engineer){
        console.log('Ingeniero');
    }    
    if(people.chef){
        console.log('Chef');
    }
    if(people.singer){
        console.log('Cantante');
    }
    if(people.dj){
        console.log('Dj');
    }
    if(people.guitarist){
        console.log('Guitarrista');
    }
}

// const isAgeHigher = function (people){    
//     return people.age >= AGE_HIGHER
// }
// const isAgeHigher = (people) => people.age >= AGE_HIGHER
const isAgeHigher = ({ age }) => age >= AGE_HIGHER
const isAgeLess = ({ age }) => age < AGE_HIGHER

function printIfAgeHigher(people){    
    if(isAgeHigher(people)){
        console.log(`${ people.name } ${ people.lastName } es mayor de edad`);
    }else{
        console.log(`${ people.name } ${ people.lastName } es menor de edad`);
    }
}

function printIfAgeLess(people){
    if(isAgeLess(people)){
        console.log(`${ people.name } ${ people.lastName } es menor de edad`);
    }else{
        console.log(`${ people.name } ${ people.lastName } no es menor de edad`);
    }
}

function allowAccess(people){
    if(!isAgeHigher(people)){
        console.log('Acceso denagado')
    }
}

printProffessions(people);
printIfAgeHigher(people);
printIfAgeLess(peopleTwo);
allowAccess(people);