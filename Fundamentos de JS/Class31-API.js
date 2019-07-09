const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

let urlComplete = `${API_URL}${PEOPLE_URL.replace(":id",1)}`;
let options = {crossDomain:true};
let onResponse = function (data) {
    console.log(`hola soy ${data.name}`);
}
$.get(urlComplete,options,onResponse);