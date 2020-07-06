const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const { mongoURI } = require("./keys");
const { json } = require("express");
const db = mongoose.connection;

require("./models/user");

app.use(json());
app.use(require("./routes/auth"));
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("connected", () => {
  console.log("DB Connected");
});
db.on("error", (err) => {
  console.log(`Error is ${err}`);
});
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
