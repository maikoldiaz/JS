const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
let options = {crossDomain:true};

let getCharacter = (id,callback) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id",id)}`;
    $.get(url,options,function (data) {
        console.log(`hola, yo soy ${data.name}`);
        if(callback){
            callback();
        }
    });
}

getCharacter(1, function() {
    getCharacter(2, function() {
      getCharacter(3, function() {
        getCharacter(4, function() {
          getCharacter(5)
        })
  
      })
  
    })
  
  })