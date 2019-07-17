const dividend = document.getElementById("dividend");
const divider = document.getElementById("divider");
const btnCalculate = document.getElementById("btnCalculate");
const result = document.getElementById("result");
class Recursion {
    constructor() {
        this.wholeDivision = this.wholeDivision.bind(this);
        this.btnCalculate_OnClick = this.btnCalculate_OnClick.bind(this);
        this.initialize();
    }

    initialize() {
        const colombianGreet = this.generateGreet("parce");
        colombianGreet("maikol");
        let people = {
            name: "Camilo",
            lastName: "Pérez",
            age: 27
        }
        this.previousActionBirthday(people);
        this.nextActionBirthday(people);
        btnCalculate.onclick = this.btnCalculate_OnClick;
    }

    btnCalculate_OnClick() {
        let dividendNumber = parseInt(dividend.value);
        let diviserNumber = parseInt(divider.value);
        let divisionResult = this.wholeDivision(dividendNumber, diviserNumber)
        result.innerHTML = `el resultado es ${divisionResult}`;
    }

    wholeDivision(dividend, divider) {
        if (dividend < divider) {
            return 0
        }
        return 1 + this.wholeDivision(dividend - divider, divider);
    }

    factorial(n) {
        if (n < 0) {
            throw "Número no valido"
        }
        if (!this.cache) {
            this.cache = { 0: 1, 1: 1 }
        }
        if (this.cache[n]) {
            return this.cache[n]
        }

        this.cache[n] = n * factorial(n - 1)
        return this.cache[n]
    }

    generateGreet(finish) {
        return function (name) {
            console.log(`hola ${name}, ${finish}`);
        }
    }

    previousActionBirthday(persona) {
        return {
            ...persona,
            age: ++persona.age
        }
    }
    nextActionBirthday(persona) {
        return {
            ...persona,
            age: ++persona.age
        }
    }
}

