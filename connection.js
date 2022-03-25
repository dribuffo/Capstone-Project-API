//IMPORT
const mongoose = require("mongoose");

//VARIABLE DECLARATION
// setting equal to empty string to fill in URL when Heroku gives it to us.
let mongoURL = "";

//DETERMINE IF ON PROD OR LOCAL
if (process.env.NODE_ENV === "production") {
  mongoURL = process.env.DB_URL;
} else {
  mongoURL = "mongodb://127.0.0.1/project-03-api";
}

//CONNECT
mongoose.connect(mongoURL);

module.exports = mongoose;