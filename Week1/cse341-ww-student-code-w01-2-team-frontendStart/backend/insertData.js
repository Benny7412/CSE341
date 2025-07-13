// TO INSERT DATA RUN: node insertData.js

const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

//BUILDING INSERT DATA
const professionalData = {
  professionalName: professionalName,
  base64Image: base64Image,
  nameLink: {
    firstName: nameLink.firstName,
    url: nameLink.url,
  },
  primaryDescription: primaryDescription,
  workDescription1: "Experienced in testing",
  workDescription2: "Specialized in testing",
  linkTitleText: "Links",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://linkedin.com/in/TESTMAN",
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com/TESTMAN",
  },
};

//INSERT DATA
async function run() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();

    await db.collection("user").deleteMany({});

    const result = await db.collection("user").insertOne(professionalData);
    console.log("Professional data inserted with ID:", result.insertedId);
  } catch (e) {
    console.error("Error inserting data:", e);
  } finally {
    await client.close();
  }
}

run();
