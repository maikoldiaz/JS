const express = require('express');
const router = express.Router();
const Schedule = require("../models/Schedule");

router.post("/schedule/add", async (req, res) => {
    let errors = [];
    const scheduleInfo = {
        ...req.body
    }
    if (!scheduleInfo.timeInit) {
        errors.push({ text: "Porfavor ingrese una hora de inicio" })
    }
    if (!scheduleInfo.timeEnd) {
        errors.push({ text: "Porfavor ingrese una hora de fin" })
    }
    if (!scheduleInfo.description) {
        errors.push({ text: "Porfavor ingrese una descripcion para este horario" })
    }
    if (scheduleInfo.timeEnd < scheduleInfo.timeInit) {
        errors.push({ text: "la hora de fin no puede ser menor a la hora de inicio" })
    }
    if (errors.length > 0) {
        res.render("schedule/add", {
            errors,
            schedule: scheduleInfo
        })
    } else {
        const newSchudule = new Schedule(scheduleInfo);
        await newSchudule.save();
        req.flash("success_msg","Horario agregado satisfactoriamente")
        res.redirect("/schedule")
    }
})


router.get("/schedule/add", async (req, res) => {
    res.render("schedule/add")
})

router.get("/schedule", async (req, res) => {
    const schedule = await Schedule.find();
    res.render("schedule/index", { schedule });
})

router.get("/schedule/edit/:id", async (req, res) => {
    const schedule = await Schedule.findById(req.params.id);
    res.render("schedule/edit", {
        schedule
    })
})

router.post("/schedule/edit/:id", async (req, res) => {
    let errors = [];
    const scheduleInfo = {
        ...req.body
    }
    if (!scheduleInfo.timeInit) {
        errors.push({ text: "Porfavor ingrese una hora de inicio" })
    }
    if (!scheduleInfo.timeEnd) {
        errors.push({ text: "Porfavor ingrese una hora de fin" })
    }
    if (!scheduleInfo.description) {
        errors.push({ text: "Porfavor ingrese una descripcion para este horario" })
    }
    if (scheduleInfo.timeEnd < scheduleInfo.timeInit) {
        errors.push({ text: "la hora de fin no puede ser menor a la hora de inicio" })
    }
    if (errors.length > 0) {
        res.render("schedule/add", {
            errors,
            schedule: scheduleInfo
        })
    } else {
        await Schedule.findByIdAndUpdate(req.params.id,scheduleInfo);
        req.flash("success_msg","Horario actualizado satisfactoriamente")
        res.redirect("/schedule")
    }
})

router.get("/schedule/delete/:id", async (req, res) => {
    await Schedule.findByIdAndDelete(req.params.id);
    req.flash("success_msg","Horario eliminado satisfactoriamente")
    res.redirect("/schedule")
})

module.exports = router;