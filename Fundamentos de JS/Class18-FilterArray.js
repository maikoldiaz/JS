peopleOne = {
    name: 'Camilo',
    lastName: 'Perez',
    height: '1.81'
}

peopleTwo = {
    name: 'Karoll',
    lastName: 'Vargas',
    height: '1.50'
}

peopleThree = {
    name: 'Sandra',
    lastName: 'Estrada',
    height: '1.50'
}

peopleFour = {
    name: 'Pedro',
    lastName: 'Perez',
    height: '1.71'
}

const isTall = (people) => {
    return people.height > 1.7;
}
const isSmall = (people) => {
    return people.height <= 1.7;
}

peopleArray = [peopleOne, peopleTwo, peopleThree, peopleFour];

var peopleTall = peopleArray.filter(isTall);
var peopleSmall = peopleArray.filter(isSmall);

// var peopleTall = peopleArray.filter(function(people){
//     return people.height > 1.8; 
// });

console.log(peopleTall);
console.log(peopleSmall);
