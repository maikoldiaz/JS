var signal = prompt('¿Cual es tu signo?');

switch (signal) {
    case 'tauro':
        console.log(`Tu signo es ${ signal }`);
        break;
    case 'cancer':
        console.log(`Tu signo es ${ signal }`);
        break;
    case 'aries':
        console.log(`Tu signo es ${ signal }`);
        break;

    default:
        console.log(`No hemos encontrado en signo ${ signal } zodiacal`);
        break;
}