const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  const { MONGO_URI } = config.get("MONGO_CONFIG");
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((_) => console.log(`connected to ${MONGO_URI}  database.`))
    .catch((err) => console.log("error while connecting to db", err));
};
