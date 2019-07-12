const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
let options = { crossDomain: true };
let container = document.getElementById("container");

function onError(id) {
  container.innerHTML = `sucedio un error con el personaje ${id}`;
}

let getCharacter = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data)
    }).fail(() => reject(id));
  });
}
getCharacter(1)
  .then((data) => {
    let element = document.createElement("p");
    element.innerHTML = `hola, yo soy ${data.name}`;
    container.appendChild(element);
    return getCharacter(2)
  })
  .then((data) => {
    let element = document.createElement("p");
    element.innerHTML = `hola, yo soy ${data.name}`;
    container.appendChild(element);
    return getCharacter(3)
  })
  .then((data) => {
    let element = document.createElement("p");
    element.innerHTML = `hola, yo soy ${data.name}`;
    container.appendChild(element);
    return getCharacter(4)
  })
  .then((data) => {
    let element = document.createElement("p");
    element.innerHTML = `hola, yo soy ${data.name}`;
    container.appendChild(element);
    return getCharacter(5)
  })
  .then((data) => {
    let element = document.createElement("p");
    element.innerHTML = `hola, yo soy ${data.name}`;
    container.appendChild(element);
  })
  .catch(onError);