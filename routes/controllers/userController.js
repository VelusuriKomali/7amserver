var express = require('express')
var router = express.Router();
var userService = require('../services/userService')
router.post("/save-user",async function (req,res,next){
    const data = req.body.data
    const result= await userService.saveUserService(data);
    res.send(result)
})
router.get("/get-users", async function(req,res,next){
   const result = await userService.getUserService(); 
   res.send(result);
})

module.exports = router;