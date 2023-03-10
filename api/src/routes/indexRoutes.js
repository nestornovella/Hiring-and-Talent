const { Router } = require('express')


const router = Router()

router.get("/", (req, res)=>{res.json({funciona:"funciona"})})


module.exports = router