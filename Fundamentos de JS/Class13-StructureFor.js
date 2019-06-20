var people = {
    name: 'Camilo',
    lastName: 'Estrada',
    age: 27,
    weight:70
}

console.log(`Al inicio del año ${ people.name } pesa ${ people.weight}Kg`);

const INCREASE_WEIGHT = 0.2;
const DAYS_YEAR = 365;

const increaseWeight = (people) => {    
    people.weight += INCREASE_WEIGHT;
}

const slimDown = (people) => {
    people.weight -= INCREASE_WEIGHT;
}

for(var i = 1; i <= DAYS_YEAR; i++){
    var ramdon = Math.random();
    if(ramdon < 0.25){
        // Aumenta de peso
        increaseWeight(people);

    }else if (ramdon < 0.5){
        // Adelgazar
        slimDown(people);

    }
}

console.log(`Al final del año ${ people.name } pesa ${ people.weight.toFixed(2) }Kg`);