const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/origen",{
    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology: true
})
.then(db => console.log("Db is connect"))
.catch(err => console.log(err));