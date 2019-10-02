const Router= require("express")
const router = Router();

router.get("/schedule/signup" ,(req,res) => {
    res.send("formulario")
})

module.exports = router;