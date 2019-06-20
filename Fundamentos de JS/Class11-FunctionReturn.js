const AGE_HIGHER = 18;

var people = {
    name: 'Camilo',
    lastName: 'Pérez',
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

function isAgeHigher(people){    
    return people.age >= AGE_HIGHER
}

function printIfAgeHigher(people){    
    if(isAgeHigher(people)){
        console.log(`${ people.name } es mayor de edad`);
    }else{
        console.log(`${ people.name } es menor de edad`);
    }
}

printProffessions(people);
printIfAgeHigher(people);