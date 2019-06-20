var peopleOne = {
    name: "Camilo",
    lastName: "Pérez",
    age: 27
}

var peopleTwo = {
    name: "Jhon",
    lastName: "Aguiar",
    age: 26
}

function printNameToUpperCase({ name }){
    console.log(name.toUpperCase());
}

printNameToUpperCase(peopleOne);
printNameToUpperCase(peopleTwo);
printNameToUpperCase({ name: "pepito"});
printNameToUpperCase({ lastName: 'Pérez'});