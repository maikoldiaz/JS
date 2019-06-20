peopleOne = {
    name: 'Camilo',
    lastName: 'Perez',
    height: '1.81',
    countBooks: 120
}

peopleTwo = {
    name: 'Karoll',
    lastName: 'Vargas',
    height: '1.50',
    countBooks: 101
}

peopleThree = {
    name: 'Sandra',
    lastName: 'Estrada',
    height: '1.50',
    countBooks: 190
}

peopleFour = {
    name: 'Pedro',
    lastName: 'Perez',
    height: '1.71',
    countBooks: 106
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



const passTallToCm = (people) => ({
    ...people,
        height: people.height * 100
});

var peopleCm = peopleArray.map(passTallToCm);

// var acomulate = 0;
// for (let i = 0; i < peopleArray.length; i++) {
//     acomulate = acomulate + peopleArray[i].countBooks    
// }
const reducer = (acomulate, people) => {
    return acomulate + people.countBooks;
}

var countBooks = peopleArray.reduce(reducer, 0);

console.log(`El total de libros de las personas es de ${ countBooks }`)