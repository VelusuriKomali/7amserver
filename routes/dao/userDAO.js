const mongoDB = require('mongodb')
async function saveUserDAO(data) {
 try{
     const url = "mongodb+srv://komalivelusuri:Shreenika@23@react.iakptvi.mongodb.net/";
     const mongoClient = mongoDB.MongoClient;
     const server = await mongoClient.connect(url);
     const db = server.db("Reactdb")
     const collection = db.collection("users")
     const result = await collection.insertOne(data)
     return result;    
    }   catch(e){
        console.error("saveUserDAO",e);
    }
}
 function getUserDAO(){
}
module.exports = {
   saveUserDAO,
   getUserDAO
}