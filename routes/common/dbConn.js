const mongoDB = require('mongodb')
async function getDBConn(){
    const uri = "mongodb+srv://komalivelusuri:Shreenika%4023@react.iakptvi.mongodb.net/"
    const mongoClient = mongoDB.MongoClient;
    const server = await mongoClient.connect(uri)
    const db = server.db("Reactdb")
 return db;    
}
module.exports= getDBConn;