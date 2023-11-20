var userDAO = require('../dao/userDAO')
async function saveUserService(data) {
 const result = await userDAO.saveUserDAO(data);
  return result;
}
 function getUserService() {

}
module.exports = {
    saveUserService,
    getUserService
}