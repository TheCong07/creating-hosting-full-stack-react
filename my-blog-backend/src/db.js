import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
  // This is how to get avriable from .env file
  // ${process.env.MONGO_USERNAME}
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  db = client.db("react-blog-db");
  cb();
}

export { db, connectToDb };
