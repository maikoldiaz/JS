const lightBlue = document.getElementById('lightBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btn-start');
const FINISH_LEVEL = 10;
class Game {
    constructor() {
        this.nextLevel = this.nextLevel.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
        this.btnStart_OnClick = this.btnStart_OnClick.bind(this);
        this.initialize = this.initialize.bind(this);
        this.ToggleButtonStart = this.toggleButtonStart.bind(this);
        this.turnOnColor = this.turnOnColor.bind(this);
        this.initialize();
        this.generateSequence();
        this.colors = {
            lightBlue,
            violet,
            orange,
            green
        }
    }
    initialize() {
        this.level = 1;
        btnStart.innerHTML = "Iniciar Juego!";
        btnStart.onclick = this.btnStart_OnClick;
    }

    toggleButtonStart(){
        let classLsit = btnStart.classList;
        if(classLsit.contains("hide")){
            classLsit.remove("hide");
        }else{
            classLsit.add("hide");
        }
    }
    btnStart_OnClick() {
        this.toggleButtonStart();
        this.nextLevel();
    }

    nextLevel() {
        this.subLevel = 0;
        // setTimeout(() => {
            this.turnOnSequence();
            this.addColorEvents(); 
        // }, 1000);
    }

    addColorEvents(){
        const colorElements = document.getElementsByClassName("color");
        for (let i = 0; i < colorElements.length; i++) {
            const element = colorElements[i];
            element.addEventListener("click",this.chooseColor);
        }
    }
    removeColorEvents(){
        const colorElements = document.getElementsByClassName("color");
        for (let i = 0; i < colorElements.length; i++) {
            const element = colorElements[i];
            element.removeEventListener("click",this.chooseColor);
        }
    }

    chooseColor(e){
        const colorName = e.target.dataset.color;
        const colorNumber = this.colorToNumber(colorName);
        this.turnOnColor(colorName,100);
        if (colorNumber === this.sequence[this.subLevel]){
            this.subLevel++;
            if (this.subLevel === this.level) {
                this.level++;
                this.removeColorEvents();
                if (this.level === (FINISH_LEVEL + 1)) {
                    this.wonGame();
                }else{
                    setTimeout(this.nextLevel, 1500);
                }
            }
        }else{
            this.lostGame();
        }
    }

    wonGame(){
        this.ToggleButtonStart();
        swal("Simon´s","¡Felicidades Ganaste!","success").then(this.initialize());
    }
    lostGame(){
        this.ToggleButtonStart();
        swal("Simon´s","Perdiste, Intenta Nuevamente","error").then(this.initialize());
    }
    generateSequence() {
        this.sequence = new Array(FINISH_LEVEL).fill(0).map(() => Math.floor(Math.random() * 4));
    }

    turnOnSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.numberToColor(this.sequence[i]);
            setTimeout(() => {
                this.turnOnColor(color);
            }, (1000 * i))
        }
    }
    turnOnColor(color,timeOut) {
        this.colors[color].classList.add("light");
        setTimeout(() => {
            this.turnOffColor(color);
        }, (timeOut ? timeOut:350));

    }
    turnOffColor(color) {
        this.colors[color].classList.remove("light");
    }

    numberToColor(num) {
        switch (num) {
            case 0:
                return "lightBlue";
            case 1:
                return "violet";
            case 2:
                return "orange";
            case 3:
                return "green";
        }
    }
    colorToNumber(color){
        switch (color) {
            case "lightBlue":
                return 0;
            case "violet":
                return 1;
            case "orange":
                return 2;
            case "green":
                return 3;
        }
    }
}
