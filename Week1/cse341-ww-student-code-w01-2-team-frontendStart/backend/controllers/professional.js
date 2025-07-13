const mongodb = require("../db/connect");

const getProfessionalData = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().collection("user").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfessionalData };
