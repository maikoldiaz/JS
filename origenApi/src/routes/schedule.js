const express = require('express');
const router = express.Router();
const Schedule = require("../models/Schedule");

router.post("/schedule" ,async (req,res) => {
    console.log(req.body);
    let errors = [];
    const scheduleInfo = {
        ...req.body
    }
    if(!scheduleInfo.timeInit)
    {
        errors.push({text: "Porfavor ingrese una hora de inicio"})
    }
    if(!scheduleInfo.timeEnd)
    {
        errors.push({text: "Porfavor ingrese una hora de fin"})
    }
    if(!scheduleInfo.description)
    {
        errors.push({text: "Porfavor ingrese una descripcion para este horario"})
    }

    if(errors.length > 0){
        res.render("schedule/scheduleAdd",{
            errors,
            schedule: scheduleInfo
        })
    }else{
        const newSchudule = new Schedule(scheduleInfo);
        await newSchudule.save();
        res.redirect("/schedule/all")
    }
})

router.get("/schedule/all" ,async (req,res) => {
    const result = await Schedule.find();
    res.render("schedule/index")
})
module.exports = router;