var express = require('express')
var router = express.Router()

router.get("/get-std",function(req,res,next){
    res.send("Helloo...this is s1 my marks are 500.")
})
router.get("/get-std",function(req,res,next){
   const n=req.query.name;
   const marks=req.query.marks;
   res.send(`Helloo...this is ${n} my marks are ${marks}.`)
})
router.get("/get-std-path/:name/:marks",function(req,res,next){
   const n=req.params.name;
   const marks=req.params.marks;
   res.send(`Helloo...this is ${n} my marks are ${marks}.`)
})
router.get("/get-std-headers",function(req,res,next){
   const n=req.headers.name;
   const marks=req.headers.marks;
  
   res.send(`Helloo...this is ${n} my marks are ${marks}.`)
})
router.post("/get-std-body",function(req,res,next){
   const n=req.body.name;
   const marks=req.body.marks;
  
   res.send(`Helloo...this is ${n} my marks are ${marks}.`)
})
//req method-get,url-get-std,function==send the req
//name=s&marks=900---query params


module.exports = router;