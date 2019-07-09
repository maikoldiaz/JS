const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
let options = {crossDomain:true};

let onResponse = function (data) {
    console.log(`hola, yo soy ${data.name}`);
}

let getCharacter = (id) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`;
    $.get(url,options,onResponse);
}

for (let i = 0; i < 3; i++) {
    getCharacter(i)
}