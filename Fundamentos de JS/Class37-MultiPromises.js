const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
let options = { crossDomain: true };
let container = document.getElementById("container");

function onError(id) {
  container.innerHTML = `sucedio un error con el personaje ${id}`;
}
function onSuccess(characters) {
  for (let i = 0; i < characters.length; i++) {
    let element = document.createElement("p");
    element.className = "character";
    element.id = i;
    element.innerHTML = `hola, yo soy ${characters[i].name}`;
    container.appendChild(element);
  }
}

let getCharacter = (id) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function (data) {
      resolve(data)
    }).fail(() => reject(id));
  });
}

var ids = [1, 2, 3, 4, 5, 6];
var promises = ids.map(id => getCharacter(id))
Promise.all(promises)
  .then(onSuccess)
  .catch(onError);