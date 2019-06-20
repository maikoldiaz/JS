peopleOne = {
    name: 'Camilo',
    lastName: 'Perez',
    height: '1.70'
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
    height: '1.60'
}

peopleArray = [peopleOne, peopleTwo, peopleThree, peopleFour];

for (let i = 0; i < peopleArray.length; i++) {
    let people = peopleArray[i];
    console.log(`${ people.name } mide ${ people.height } metros`);
}