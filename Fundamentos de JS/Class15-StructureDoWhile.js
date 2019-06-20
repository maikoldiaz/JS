var count = 0;

const rain = () => Math.random() < 0.25;

do{
    count++;
}while (!rain()) {
    if (count > 1) {
        console.log(`Fui a ver si llovia ${ count } veces`);
    }else{
        console.log(`Fui a ver si llovia ${ count } vez`);
    }    
}


