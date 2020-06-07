const express = require("express");
const app = express();
var cors = require("cors");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("DB not connected");
  });

app.use(cors());

const PORT = 3001;

app.get("/posts", (req, res) => {
  res.status(200).json({
    data: [
      {
        name: "A",
      },
      {
        name: "B",
      },
    ],
  });
});

app.listen(PORT, () => console.log("Server started"));
