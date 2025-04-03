const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
  res.json({
    title: "Hi",
    content: "My first note ever!",
  });
});

app.listen(3001, () => {
  console.log("App is running on port 3001");
});
