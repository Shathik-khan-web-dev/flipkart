const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Database Not Connected: " + err.message);
});

db.once("open", () => {
  console.log("Database Connected Successfully");
});

module.exports = db;
