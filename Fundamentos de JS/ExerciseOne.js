var peopleOne = {
    name: 'Santiago',
    lastName: 'Flores',
    age: 39
}

var peopleTwo = {
    name: 'Sandra',
    lastName: 'Estrada',
    age: 50
}

function printNameAndAge(people){
    console.log(`Hola soy ${ people.name } tengo la edad de ${ people.age }`)
}

printNameAndAge(peopleOne);
printNameAndAge(peopleTwo);