const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

let _db;

const initDb = async () => {
  if (_db) {
    console.log("Database is already initialized");
    return _db;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI not set");
    }

    const client = new MongoClient(uri);
    await client.connect();
    _db = client.db();
    console.log("Database connected successfully");
    return _db;
  } catch (err) {
    console.error("Failed to connect to database: ", err);
    throw err;
  }
};

const getDb = () => {
  if (!_db) {
    throw new Error("Database not initialized");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
