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

function printNameToUpperCase(people){
    // var name = people.name;
    var { name } = people;
    console.log(name.toUpperCase());
}

printNameToUpperCase(peopleOne);
printNameToUpperCase(peopleTwo);
printNameToUpperCase({ name: "pepito"});

function birthday(people){
    return {
        ...people,
        age: people.age + 1
    }
}
