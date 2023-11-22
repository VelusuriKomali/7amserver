var userDAO = require('../dao/userDAO')
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
    return result;
}
async function updateUserService(id){
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
