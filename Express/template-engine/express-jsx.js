const fs = require('fs');


function getKesyFromOptions(options){
    const {settings,_locals, ...objectKeys} = options;
    return Object.keys(objectKeys)
}
function getRederedContent(content,options){
    const keys = getKesyFromOptions(options);
    let contentString = content.toString();
    for(let key of keys){
        contentString = contentString.replace(
            new RegExp(`\{${key}}`, "gi"), 
            options[key]
            );
    }
    return contentString;
}

function expressJsx(filePath,options,callback){
    fs.readFile(filePath,(err,content) => {
        if(err){
            return callback(err);
        }
        const rendered = getRederedContent(content,options);
        return callback(null,rendered);
    })
}
module.exports = expressJsx;