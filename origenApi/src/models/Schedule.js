const mongoose = require("mongoose");
const {Schema} = mongoose;

const schedule = new Schema({
    timeInit : {type: String,required:true},
    timeEnd : {type: String,required:true},
    description : {type: String,required:true}
})

module.exports = mongoose.model("schedule",schedule);