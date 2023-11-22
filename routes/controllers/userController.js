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
router.post("/login",async function(req,res,next){
    const data = req.body.data
    const result = await userService.authService()
    res.send(result)
})
router.put("/update-user",async function(req,res,next){
    const id = req.query.id;
    const data = req.body.data;
    const result = await userService.updateUserService(id,data)
     res.send(result)
})
router.delete("/delete-user/:id",async function(req,res,next){
    const id = req.params.id;
    const result = await userService.deleteUserService(id)
     res.send(result)
})


module.exports = router;