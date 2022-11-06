
const { MongoClient, ServerApiVersion } = require('mongodb');
 const uri = "mongodb+srv://swati04:swati123456@cluster0.7vcjcp7.mongodb.net/?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const assert =require('assert');
//const url ='mongodb://localhost:27017';
const dbName= 'fruitsDB';
//const client=new MongoClient(url);
client.connect((err)=> {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  assert.equal(null,err);
  console.log("connected successfully to server");
  const db=client.db(dbName); 
  client.close();
}); 
  