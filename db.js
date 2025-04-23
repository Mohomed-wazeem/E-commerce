const mongoose = require("mongoose");

const mongoDBUrl = "mongodb+srv://mohomedwazeem729:Mongo789@cluster0.rzsls.mongodb.net/E-commerce"; // note the encoded @

// mongoose.connect(mongoDBUrl, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });
mongoose.connect(mongoDBUrl);

const dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("MongoDB connection failed");
});

dbconnect.on("connected", () => {
  console.log("MongoDB connection successful");
});

module.exports = mongoose;
