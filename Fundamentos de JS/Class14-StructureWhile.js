var people = {
    name: 'Camilo',
    lastName: 'Estrada',
    age: 27,
    weight:70
}

console.log(`Al inicio del año ${ people.name } pesa ${ people.weight}Kg`);

const INCREASE_WEIGHT = 0.3;
const DAYS_YEAR = 365;

const increaseWeight = (people) => {    
    people.weight += INCREASE_WEIGHT;
}

const slimDown = (people) => {
    people.weight -= INCREASE_WEIGHT;
}

const GOALS = people.weight - 3;
const eatMuch = () => Math.random() < 0.3;
const practiceSport = () => Math.random() < 0.4;
var days = 0;

while (people.weight > GOALS) {
    // debugger
    if (eatMuch()) {
        increaseWeight(people);
    }
    if (practiceSport()) {
        slimDown(people);
    }
    days += 1;
}
console.log(`Pasaron ${ days } hasta que ${ people.name } adelgazó 3Kg`);
// console.log(`Al final del año ${ people.name } pesa ${ people.weight.toFixed(2) }Kg`);