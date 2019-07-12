const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
let options = {crossDomain:true};
let container  = document.getElementsByClassName("container")[0];

function onSuccess(data) {
  container.innerHTML =`hola, yo soy ${data.name}`;
}
function onError(id){
  container.innerHTML =`sucedio un error con el personaje ${id}`;
}

let getCharacter = (id) => {
  return new Promise((resolve,reject) =>{
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`;
    $.get(url,options,function(data){
      resolve(data);
    }).fail(() => reject(id));
  });
}
getCharacter(1)
  .then(onSuccess)
  .catch(onError);