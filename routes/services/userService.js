var userDAO = require('../dao/userDAO')
var jwt=require('jsonwebtoken')
async function saveUserService(data){
const result = await userDAO.saveUserDAO(data);
return result;
}
async function getUserService(){
 const result = await userDAO.getUserDAO();
 result.forEach((obj)=>{
delete obj.password
 })
 return result;   
}
async function authService(data){
    const result = await userDAO.authDAO(data);
   if (result.length){
   const token= jwt.sign(data,"my-token")
   result[0].token=token
   }
    return result;
}
       // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLb21hbGlAZ21haWwuY29tIiwicHdkIjoia29tYWxpIiwiaWF0IjoxNzAyNDAyNzUzfQ.4MHjWEF12chiC8pmG-eHO8R3TTXslPMNUXvsiWUaW2k
        
async function updateUserService(id,data){
const result =  await userDAO.updateUserDAO(id,data);
  return result;
}
async function deleteUserService(id){
  const result =  await userDAO.deleteUserDAO(id);
  return result;
}
module.exports = {
    saveUserService,
    getUserService,
    authService,
    updateUserService,
    deleteUserService
}
