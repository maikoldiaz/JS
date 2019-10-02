const Router= require("express")
const router = Router();

router.get("/users/singin" ,(req,res) => {
    res.send("ingresando a la app")
})
router.get("/users/signup" ,(req,res) => {
    res.send("formulario")
})
module.exports = router;